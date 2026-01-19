// Vercel serverless function for Claude API integration

const SYSTEM_PROMPT = `You are a pregnancy safety expert assistant. When asked about foods, activities, medications, or skincare ingredients, provide evidence-based information about their safety during pregnancy.

IMPORTANT: Always distinguish between:
1. DIRECT RISKS TO THE BABY - things that actually cross the placenta or directly affect fetal development (e.g., mercury in fish, alcohol, certain medications)
2. GENERAL RISKS - things that could affect anyone, pregnant or not (e.g., food poisoning from improperly handled food, which is a risk regardless of pregnancy)

Be nuanced and evidence-based like the book "Expecting Better" by Emily Oster. Don't just say "avoid" - explain the actual risks and let the user make informed decisions.

For each query, respond with a JSON object containing:
{
  "item": "Name of the item",
  "safetyLevel": "safe" | "caution" | "avoid",
  "summary": "Brief 1-2 sentence summary",
  "directRisks": ["List of risks that directly affect the baby/pregnancy"],
  "generalRisks": ["List of risks that apply to everyone, not just pregnant women"],
  "recommendations": ["Practical recommendations"],
  "trimesterNotes": {
    "t1": "First trimester specific notes",
    "t2": "Second trimester specific notes",
    "t3": "Third trimester specific notes"
  },
  "sources": ["List of sources like ACOG, FDA, CDC, or specific studies"]
}

If analyzing an image of a menu or ingredient list, identify items and provide safety information for each notable item.

Always be helpful and non-judgmental. Many "rules" about pregnancy are overly cautious - provide the actual evidence.`

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

  const apiKey = process.env.ANTHROPIC_API_KEY

  if (!apiKey) {
    console.error('ANTHROPIC_API_KEY not configured')
    return res.status(500).json({ error: 'API key not configured' })
  }

  const { query, image, trimester, databaseHint } = req.body

  if (!query && !image) {
    return res.status(400).json({ error: 'Query or image required' })
  }

  try {
    // Build the user message content
    let userContent = []

    if (image) {
      // Extract base64 data and media type
      const matches = image.match(/^data:(.+);base64,(.+)$/)
      if (matches) {
        const mediaType = matches[1]
        const base64Data = matches[2]

        userContent.push({
          type: 'image',
          source: {
            type: 'base64',
            media_type: mediaType,
            data: base64Data,
          },
        })
      }
    }

    let textPrompt = query || 'What is in this image?'
    if (trimester) {
      textPrompt += `\n\nPlease focus on trimester ${trimester} specific information.`
    }
    if (databaseHint) {
      textPrompt += `\n\nThis may be related to: ${databaseHint}`
    }

    userContent.push({
      type: 'text',
      text: textPrompt + '\n\nRespond with a JSON object as specified in your instructions.'
    })

    // Call Claude API directly with fetch
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
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
      throw new Error(`Claude API error: ${response.status}`)
    }

    const data = await response.json()

    // Extract the text response
    const textContent = data.content?.find(c => c.type === 'text')
    if (!textContent) {
      throw new Error('No text response from Claude')
    }

    // Parse JSON from response
    let result
    try {
      // Try to extract JSON from the response
      const jsonMatch = textContent.text.match(/\{[\s\S]*\}/)
      if (jsonMatch) {
        result = JSON.parse(jsonMatch[0])
      } else {
        throw new Error('No JSON found in response')
      }
    } catch (parseError) {
      // If JSON parsing fails, create a structured response from the text
      result = {
        item: query,
        safetyLevel: 'caution',
        summary: textContent.text.substring(0, 200),
        directRisks: [],
        generalRisks: [],
        recommendations: ['Consult your healthcare provider for more information'],
        trimesterNotes: 'Please discuss with your doctor.',
        sources: ['AI-generated response']
      }
    }

    return res.status(200).json(result)
  } catch (error) {
    console.error('Error calling Claude API:', error)
    return res.status(500).json({
      error: 'Failed to analyze',
      message: error.message
    })
  }
}
