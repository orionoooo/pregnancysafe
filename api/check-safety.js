// Vercel serverless function for Gemini API integration (image analysis)
// Falls back to Claude API if available
// Caches results in Supabase for faster repeat queries

import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client for caching
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null

const SYSTEM_PROMPT = `You are a pregnancy safety expert following the "Expecting Better" evidence-based approach.

You answer questions about FOODS, ACTIVITIES, MEDICATIONS, and PRODUCTS during pregnancy.

CRITICAL DISTINCTION - Focus on DIRECT RISKS TO BABY:
- DIRECT RISKS: Things that affect fetal development (mercury, alcohol, medications, high body temperature, radiation, certain chemicals)
- GENERAL RISKS: Food poisoning risks that affect anyone (mention briefly but don't emphasize)

CATEGORY GUIDELINES:

FOOD/FISH: Focus on MERCURY LEVELS for fish. Low-mercury fish (salmon, shrimp, eel) are SAFE. High-mercury fish need limits.

ACTIVITIES (hot springs, hot tubs, saunas, baths, exercise):
- The concern is RAISING CORE BODY TEMPERATURE above 101°F/38.3°C, especially in first trimester
- Hot tubs (104°F+): CAUTION - limit to 10 min or lower temp
- Hot springs/mineral baths: Check temperature. Under 100°F is generally safe. Over 102°F needs caution.
- Warm baths (under 100°F): SAFE
- Saunas: CAUTION - limit exposure time
- Exercise: SAFE with modifications

MEDICATIONS: Always recommend consulting doctor. Note common guidance (e.g., Tylenol generally OK, avoid ibuprofen).

SKINCARE/BEAUTY PRODUCTS - Ingredients to flag:
- AVOID: Retinoids (retinol, tretinoin, adapalene, tazarotene), hydroquinone, high-dose salicylic acid (>2%), phthalates, formaldehyde, chemical sunscreens (oxybenzone, avobenzone), parabens in high amounts
- CAUTION: Benzoyl peroxide (limit use), essential oils (some unsafe), vitamin A derivatives
- SAFE: Glycolic acid, hyaluronic acid, vitamin C, niacinamide, azelaic acid, mineral sunscreens (zinc oxide, titanium dioxide), ceramides

When analyzing product labels/ingredients, identify ANY concerning ingredients and explain why.

RESPONSE FORMAT - ONLY valid JSON, no markdown:

For SINGLE items (one food, activity, or medication):
{"item":"Name of food/activity/medication","safetyLevel":"safe|caution|avoid","summary":"Brief explanation under 20 words","sources":["https://example.com/source1"]}

For MENUS, INGREDIENT LISTS, or IMAGES with multiple items - ALWAYS use this format to show a breakdown of each item:
{"menuAnalysis":true,"analysisType":"menu|ingredients|product","items":[{"item":"Name","safetyLevel":"safe|caution|avoid","summary":"Brief explanation"}],"overallAdvice":"Brief tip","sources":["https://..."]}

Use analysisType: "menu" for restaurant menus, "ingredients" for food/drink ingredient lists, "product" for skincare/beauty products.

IMPORTANT FOR INGREDIENT LISTS (juice bottles, food packages, skincare products):
- List EVERY ingredient you can read from the image
- Even common safe ingredients should be listed (e.g., "Water - safe", "Sugar - safe in moderation")
- Flag any concerning ingredients with caution/avoid
- This helps the user verify you read the full ingredient list
- Group similar safe ingredients if there are many (e.g., "Vitamins B1, B2, B6, B12 - safe and beneficial")

IMPORTANT: Always include a "sources" array with 1-3 relevant URLs (full URLs starting with https://) from reputable sources like:
- acog.org (American College of OB-GYN)
- cdc.gov
- fda.gov
- mayoclinic.org
- marchofdimes.org
- mothertobaby.org
- ncbi.nlm.nih.gov

Keep summaries concise. Start response with { character.`

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const geminiKey = process.env.GOOGLE_AI_API_KEY
  const claudeKey = process.env.ANTHROPIC_API_KEY

  if (!geminiKey && !claudeKey) {
    console.error('No API keys configured')
    return res.status(500).json({ error: 'API not configured' })
  }

  const { query, image, trimester, databaseHint } = req.body

  console.log('Request received:', {
    hasQuery: !!query,
    hasImage: !!image,
    imageType: typeof image,
    imageLength: image ? image.length : 0,
    imageStart: image ? image.substring(0, 100) : 'none'
  })

  if (!query && !image) {
    return res.status(400).json({ error: 'Query or image required' })
  }

  // Build the prompt
  let textPrompt = query || 'What is in this image? Analyze it for pregnancy safety.'
  if (trimester) {
    textPrompt += `\n\nPlease focus on trimester ${trimester} specific information.`
  }
  if (databaseHint) {
    textPrompt += `\n\nThis may be related to: ${databaseHint}`
  }

  try {
    let result
    let lastError

    // For text queries (no image), check cache first
    if (query && !image) {
      const cached = await checkSafetyCache(query, geminiKey)
      if (cached) {
        console.log('Cache hit for:', query)
        return res.status(200).json({ ...cached, fromCache: true })
      }
    }

    // Try Gemini first (preferred for images, free tier)
    if (geminiKey) {
      try {
        result = await callGemini(geminiKey, textPrompt, image)
      } catch (geminiError) {
        console.error('Gemini failed:', geminiError.message)
        lastError = geminiError
      }
    }

    // Fall back to Claude if Gemini fails or isn't configured
    if (!result && claudeKey) {
      try {
        console.log('Falling back to Claude API')
        result = await callClaude(claudeKey, textPrompt, image, trimester)
      } catch (claudeError) {
        console.error('Claude failed:', claudeError.message)
        lastError = claudeError
      }
    }

    if (result) {
      // Cache the result for text queries (async, don't wait)
      if (query && !image) {
        storeSafetyCache(query, result, geminiKey).catch(e => console.error('Cache store error:', e))
      }
      return res.status(200).json(result)
    }

    throw lastError || new Error('No API response')
  } catch (error) {
    console.error('API error:', error)
    return res.status(500).json({
      error: 'Failed to analyze',
      message: error.message,
      details: error.toString()
    })
  }
}

async function callGemini(apiKey, prompt, image) {
  const parts = []

  // Add image if provided
  if (image) {
    try {
      console.log('Parsing image, length:', image.length, 'starts with:', image.substring(0, 50))

      // Simple approach: just find base64, and extract from there
      if (image.startsWith('data:') && image.includes(';base64,')) {
        const mimeEnd = image.indexOf(';')
        const mimeType = image.substring(5, mimeEnd) // skip "data:"
        const base64Start = image.indexOf(';base64,') + 8
        const base64Data = image.substring(base64Start)

        console.log('Parsed - mimeType:', mimeType, 'base64 length:', base64Data.length)

        parts.push({
          inline_data: {
            mime_type: mimeType,
            data: base64Data
          }
        })
      } else {
        console.error('Image does not match expected format')
        throw new Error('Invalid image format - expected data URL with base64')
      }
    } catch (parseError) {
      console.error('Image parsing error:', parseError.message)
      throw new Error('Failed to parse image: ' + parseError.message)
    }
  }

  // Add text prompt with system instructions
  parts.push({
    text: SYSTEM_PROMPT + '\n\nUser query: ' + prompt
  })

  console.log('Calling Gemini API with', parts.length, 'parts')

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: parts
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 4000,
        }
      })
    }
  )

  if (!response.ok) {
    const errorText = await response.text()
    console.error('Gemini API error:', response.status, errorText)
    throw new Error(`Gemini API error ${response.status}: ${errorText.substring(0, 200)}`)
  }

  const data = await response.json()
  console.log('Gemini response received')

  // Check for blocked content or other issues
  if (data.promptFeedback?.blockReason) {
    throw new Error(`Content blocked: ${data.promptFeedback.blockReason}`)
  }

  // Extract text from Gemini response
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text
  if (!text) {
    console.error('Unexpected Gemini response structure:', JSON.stringify(data).substring(0, 500))
    throw new Error('No response from Gemini - check API key and quota')
  }

  console.log('Gemini response length:', text.length, 'starts with:', text.substring(0, 100))

  // Parse JSON from response
  const result = parseJsonResponse(text, prompt)
  console.log('Parsed result type:', result.menuAnalysis ? 'menu' : 'single', 'items:', result.items?.length || 1)
  return result
}

async function callClaude(apiKey, prompt, image, trimester) {
  const userContent = []

  if (image) {
    const matches = image.match(/^data:(.+);base64,(.+)$/)
    if (matches) {
      userContent.push({
        type: 'image',
        source: {
          type: 'base64',
          media_type: matches[1],
          data: matches[2],
        },
      })
    }
  }

  userContent.push({
    type: 'text',
    text: prompt + '\n\nRespond with a JSON object as specified.'
  })

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1500,
      system: SYSTEM_PROMPT,
      messages: [{
        role: 'user',
        content: userContent
      }]
    })
  })

  if (!response.ok) {
    const errorData = await response.text()
    console.error('Claude API error:', response.status, errorData)
    throw new Error(`Claude API error ${response.status}: ${errorData.substring(0, 200)}`)
  }

  const data = await response.json()
  const text = data.content?.find(c => c.type === 'text')?.text

  if (!text) {
    throw new Error('No response from Claude')
  }

  return parseJsonResponse(text, prompt)
}

function parseJsonResponse(text, query) {
  try {
    // Remove markdown code blocks - be very thorough
    let cleanText = text
      .replace(/```json\n?/gi, '')
      .replace(/```\n?/g, '')
      .replace(/^\s+/, '')
      .replace(/\s+$/, '')

    console.log('Cleaned text starts with:', cleanText.substring(0, 50))

    // Try to parse the entire cleaned text first
    try {
      const parsed = JSON.parse(cleanText)
      console.log('Direct parse successful')
      return parsed
    } catch (e) {
      console.log('Direct parse failed:', e.message)
    }

    // Try to extract JSON object from the response
    // Match from first { to last } to get complete object
    const firstBrace = cleanText.indexOf('{')
    const lastBrace = cleanText.lastIndexOf('}')

    if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
      const jsonStr = cleanText.substring(firstBrace, lastBrace + 1)
      console.log('Extracted JSON length:', jsonStr.length)
      try {
        const parsed = JSON.parse(jsonStr)
        console.log('Extracted JSON parse successful')
        return parsed
      } catch (e) {
        console.log('Extracted JSON parse failed:', e.message)
      }
    }

    throw new Error('No valid JSON found')
  } catch (parseError) {
    console.error('JSON parse error:', parseError.message)
    console.error('Raw text length:', text.length)
    console.error('Raw text (first 200 chars):', text.substring(0, 200))
    console.error('Raw text (last 200 chars):', text.substring(text.length - 200))

    // Try one more time - maybe there's a truncation issue
    // Look for complete item objects we can extract
    const itemMatches = text.match(/"item"\s*:\s*"[^"]+"/g)
    if (itemMatches && itemMatches.length > 0) {
      console.log('Found', itemMatches.length, 'item references')
    }

    // If JSON parsing fails completely, create a structured response with debug info
    return {
      item: query.length > 50 ? 'Image Analysis' : query,
      safetyLevel: 'caution',
      summary: 'The analysis could not be fully processed. Please try with a clearer image or ask about specific items by typing them.',
      directRisks: [],
      generalRisks: [],
      recommendations: ['Try typing the food items instead of uploading an image', 'Ask about one item at a time'],
      trimesterNotes: null,
      sources: ['Analysis incomplete - try text search']
    }
  }
}

// ============ Semantic Cache Functions ============

function normalizeQuery(query) {
  return query.toLowerCase().trim().replace(/\s+/g, ' ')
}

async function generateEmbedding(text, geminiKey) {
  if (!geminiKey) return null

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/text-embedding-004:embedContent?key=${geminiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'models/text-embedding-004',
          content: { parts: [{ text }] }
        })
      }
    )

    if (!response.ok) {
      console.error('Embedding API error:', response.status)
      return null
    }

    const data = await response.json()
    return data.embedding?.values || null
  } catch (e) {
    console.error('Embedding generation error:', e)
    return null
  }
}

async function checkSafetyCache(query, geminiKey) {
  if (!supabase) return null

  const normalized = normalizeQuery(query)

  // First try exact match (fast)
  try {
    const { data: exactMatch } = await supabase
      .from('safety_check_cache')
      .select('result')
      .eq('query_normalized', normalized)
      .limit(1)
      .single()

    if (exactMatch) {
      // Update hit count async
      supabase
        .from('safety_check_cache')
        .update({ hit_count: supabase.sql`hit_count + 1` })
        .eq('query_normalized', normalized)
        .then(() => {})
        .catch(() => {})

      return exactMatch.result
    }
  } catch (e) {
    // No exact match, continue to semantic search
  }

  // Try semantic search
  const embedding = await generateEmbedding(query, geminiKey)
  if (!embedding) return null

  try {
    const { data: similarMatches, error } = await supabase
      .rpc('search_safety_cache', {
        query_embedding: embedding,
        similarity_threshold: 0.88,
        max_results: 1
      })

    if (error) {
      console.error('Semantic search error:', error)
      return null
    }

    if (similarMatches && similarMatches.length > 0) {
      console.log(`Semantic match: "${similarMatches[0].query}" (${(similarMatches[0].similarity * 100).toFixed(1)}% similar)`)
      return similarMatches[0].result
    }
  } catch (e) {
    console.error('Cache search error:', e)
  }

  return null
}

async function storeSafetyCache(query, result, geminiKey) {
  if (!supabase) return

  const normalized = normalizeQuery(query)
  const embedding = await generateEmbedding(query, geminiKey)

  try {
    await supabase.from('safety_check_cache').upsert({
      query: query,
      query_normalized: normalized,
      embedding: embedding,
      result: result
    }, {
      onConflict: 'query_normalized'
    })
    console.log('Cached result for:', query)
  } catch (e) {
    console.error('Cache store error:', e)
  }
}
