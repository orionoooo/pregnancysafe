// Vercel serverless function to fetch FDA RSS feed (bypasses CORS)
// Returns the latest food recalls from FDA's real-time RSS feed

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Try multiple FDA + USDA RSS feeds to get comprehensive coverage
    const rssUrls = [
      // FDA feeds
      'https://www.fda.gov/about-fda/contact-fda/stay-informed/rss-feeds/food-safety-recalls/rss.xml',
      'https://www.fda.gov/about-fda/contact-fda/stay-informed/rss-feeds/recalls/rss.xml',
      'https://www.fda.gov/about-fda/contact-fda/stay-informed/rss-feeds/food-allergies/rss.xml',
      'https://www.fda.gov/about-fda/contact-fda/stay-informed/rss-feeds/press-releases/rss.xml',
      'https://www.fda.gov/about-fda/contact-fda/stay-informed/rss-feeds/biologics/rss.xml',
      'https://www.fda.gov/about-fda/contact-fda/stay-informed/rss-feeds/drugs/rss.xml',
      // recalls.gov consolidated feed
      'https://www.recalls.gov/rss/fda.rss',
      'https://www.recalls.gov/rss/usda.rss',
      // USDA FSIS meat/poultry recalls
      'https://www.fsis.usda.gov/fsis-rss-feeds/recalls-rss-feed.xml',
      'https://www.fsis.usda.gov/recalls/rss.xml'
    ]

    const allRecalls = []
    const fetchPromises = rssUrls.map(async (url) => {
      try {
        const controller = new AbortController()
        const timeout = setTimeout(() => controller.abort(), 5000) // 5 second timeout

        const response = await fetch(url, {
          headers: {
            'User-Agent': 'PregnancySafe-App/1.0 (Food Safety Monitor)',
            'Accept': 'application/rss+xml, application/xml, text/xml'
          },
          signal: controller.signal
        })
        clearTimeout(timeout)

        if (response.ok) {
          const xmlText = await response.text()
          return parseRssFeed(xmlText)
        }
        return []
      } catch (e) {
        // Silently fail on timeout or error - other feeds will still work
        return []
      }
    })

    const results = await Promise.all(fetchPromises)
    results.forEach(recalls => allRecalls.push(...recalls))

    // Deduplicate by title
    const unique = allRecalls.filter((recall, index, self) =>
      index === self.findIndex(r => r.title === recall.title)
    )

    // Also try to scrape the main FDA recalls page for the very latest
    try {
      const scrapedRecalls = await scrapefdaRecallsPage()
      scrapedRecalls.forEach(r => unique.push(r))
    } catch (e) {
      console.error('Scraping failed:', e.message)
    }

    // Deduplicate again after adding scraped results
    const finalUnique = unique.filter((recall, index, self) =>
      index === self.findIndex(r => {
        const t1 = (r.title || r.product || '').toLowerCase()
        const t2 = (recall.title || recall.product || '').toLowerCase()
        return t1 === t2 || (t1.length > 30 && t2.length > 30 && t1.substring(0, 30) === t2.substring(0, 30))
      })
    )

    // Sort by date (newest first)
    finalUnique.sort((a, b) => {
      if (a.rawDate && b.rawDate) {
        return new Date(b.rawDate) - new Date(a.rawDate)
      }
      return 0
    })

    return res.status(200).json({ recalls: finalUnique.slice(0, 30), source: 'rss-multi' })
  } catch (error) {
    console.error('FDA RSS error:', error)
    return res.status(500).json({
      error: 'Failed to fetch FDA RSS',
      message: error.message,
      recalls: []
    })
  }
}

function parseRssFeed(xmlText) {
  const recalls = []

  // Simple XML parsing for RSS items
  const itemRegex = /<item>([\s\S]*?)<\/item>/gi
  const titleRegex = /<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>|<title>([\s\S]*?)<\/title>/i
  const linkRegex = /<link>([\s\S]*?)<\/link>/i
  const descRegex = /<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>|<description>([\s\S]*?)<\/description>/i
  const pubDateRegex = /<pubDate>([\s\S]*?)<\/pubDate>/i

  let match
  while ((match = itemRegex.exec(xmlText)) !== null) {
    const itemXml = match[1]

    const titleMatch = titleRegex.exec(itemXml)
    const linkMatch = linkRegex.exec(itemXml)
    const descMatch = descRegex.exec(itemXml)
    const dateMatch = pubDateRegex.exec(itemXml)

    const title = titleMatch ? (titleMatch[1] || titleMatch[2] || '').trim() : ''
    const link = linkMatch ? linkMatch[1].trim() : ''
    const description = descMatch ? (descMatch[1] || descMatch[2] || '').trim() : ''
    const pubDate = dateMatch ? dateMatch[1].trim() : ''

    // Include food-related recalls (bacteria, contamination, allergens in food products)
    const fullText = (title + ' ' + description).toLowerCase()
    const isRelevant =
      // Bacteria/pathogens
      fullText.includes('listeria') ||
      fullText.includes('salmonella') ||
      fullText.includes('e. coli') ||
      fullText.includes('ecoli') ||
      fullText.includes('campylobacter') ||
      fullText.includes('botulism') ||
      fullText.includes('cronobacter') ||
      fullText.includes('hepatitis') ||
      fullText.includes('norovirus') ||
      fullText.includes('clostridium') ||
      fullText.includes('vibrio') ||
      fullText.includes('shigella') ||
      fullText.includes('cyclospora') ||
      // General food safety terms
      fullText.includes('contamination') ||
      fullText.includes('contaminated') ||
      fullText.includes('food recall') ||
      fullText.includes('voluntary recall') ||
      fullText.includes('health risk') ||
      fullText.includes('food safety') ||
      // Food products (to catch food-specific recalls)
      fullText.includes('cheese') ||
      fullText.includes('dairy') ||
      fullText.includes('milk') ||
      fullText.includes('meat') ||
      fullText.includes('poultry') ||
      fullText.includes('seafood') ||
      fullText.includes('fish') ||
      fullText.includes('produce') ||
      fullText.includes('vegetable') ||
      fullText.includes('fruit') ||
      fullText.includes('lettuce') ||
      fullText.includes('spinach')

    if (title && isRelevant) {
      // Determine contaminant from text
      let contaminant = 'Unknown'
      if (fullText.includes('listeria')) contaminant = 'Listeria'
      else if (fullText.includes('salmonella')) contaminant = 'Salmonella'
      else if (fullText.includes('e. coli') || fullText.includes('ecoli')) contaminant = 'E. coli'
      else if (fullText.includes('campylobacter')) contaminant = 'Campylobacter'
      else if (fullText.includes('cronobacter')) contaminant = 'Cronobacter'
      else if (fullText.includes('botulism')) contaminant = 'Botulism'
      else if (fullText.includes('hepatitis')) contaminant = 'Hepatitis A'
      else if (fullText.includes('norovirus')) contaminant = 'Norovirus'

      // Determine pregnancy risk
      let pregnancyRisk = 'moderate'
      if (contaminant === 'Listeria' || contaminant === 'Cronobacter') {
        pregnancyRisk = 'high'
      }

      // Determine status from text
      const status = detectStatus(fullText)

      recalls.push({
        id: 'rss-' + Buffer.from(title).toString('base64').substring(0, 20),
        title,
        product: title,
        brand: extractBrand(title),
        description: stripHtml(description),
        link,
        date: formatRssDate(pubDate),
        rawDate: pubDate,
        contaminant,
        pregnancyRisk,
        status,
        source: 'FDA RSS'
      })
    }
  }

  return recalls.slice(0, 20) // Limit to 20 most recent
}

function extractBrand(title) {
  // Try to extract brand/company name from title
  // Titles often start with company name or contain "brand" mentions
  const parts = title.split(/recalls?|issues|announces/i)
  if (parts[0] && parts[0].length > 3 && parts[0].length < 100) {
    return parts[0].trim()
  }
  return title.split(' ').slice(0, 3).join(' ')
}

function detectStatus(text) {
  const lowerText = text.toLowerCase()

  // Check for investigation/ongoing indicators
  if (lowerText.includes('investigation') ||
      lowerText.includes('investigating') ||
      lowerText.includes('ongoing') ||
      lowerText.includes('under investigation')) {
    return 'Ongoing'
  }

  // Check for update indicators
  if (lowerText.includes('update') ||
      lowerText.includes('updated') ||
      lowerText.includes('additional') ||
      lowerText.includes('expanded')) {
    return 'Updated'
  }

  // Check for resolved/closed indicators
  if (lowerText.includes('terminated') ||
      lowerText.includes('completed') ||
      lowerText.includes('closed') ||
      lowerText.includes('resolved') ||
      lowerText.includes('no longer')) {
    return 'Closed'
  }

  // Default to Announced for new recalls
  return 'Announced'
}

function extractProductFromUrl(urlPath) {
  // Parse URL slug to extract product type
  // Example: "ambriola-company-issues-recall-cheese-products-because-listeria-health-risk"
  // Should extract: "cheese products"

  const slug = urlPath.toLowerCase()

  // Common food product patterns to look for
  const productPatterns = [
    /recall[s]?[-_]?([\w-]+(?:cheese|milk|cream|butter|yogurt|dairy)[\w-]*)/i,
    /recall[s]?[-_]?([\w-]+(?:meat|beef|pork|chicken|turkey|poultry)[\w-]*)/i,
    /recall[s]?[-_]?([\w-]+(?:fish|seafood|shrimp|salmon|tuna)[\w-]*)/i,
    /recall[s]?[-_]?([\w-]+(?:produce|lettuce|spinach|salad|vegetable|fruit)[\w-]*)/i,
    /recall[s]?[-_]?([\w-]+(?:eggs?|bread|flour|cereal|nuts?)[\w-]*)/i,
    /(cheese|dairy|milk|meat|seafood|produce|eggs?)[-_]?products?/i,
  ]

  for (const pattern of productPatterns) {
    const match = slug.match(pattern)
    if (match && match[1]) {
      // Convert slug to readable text
      return match[1].replace(/-/g, ' ').trim()
    }
  }

  // Try to find product keyword directly in URL
  const foodKeywords = ['cheese', 'milk', 'meat', 'fish', 'eggs', 'produce', 'bread', 'nuts', 'seafood', 'dairy', 'chicken', 'beef', 'pork', 'shrimp', 'salmon', 'tuna', 'lettuce', 'spinach']
  for (const keyword of foodKeywords) {
    if (slug.includes(keyword)) {
      // Find the word and surrounding context
      const idx = slug.indexOf(keyword)
      const start = Math.max(0, slug.lastIndexOf('-', idx - 1) + 1)
      const end = slug.indexOf('-', idx + keyword.length)
      const product = slug.substring(start, end > 0 ? end : undefined).replace(/-/g, ' ')
      if (product.length > 3 && product.length < 50) {
        return product
      }
      return keyword
    }
  }

  return null
}

function stripHtml(html) {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim()
}

function formatRssDate(dateStr) {
  if (!dateStr) return 'Recent'
  try {
    const date = new Date(dateStr)
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  } catch {
    return 'Recent'
  }
}

// Scrape the FDA recalls webpage directly for the latest recalls
async function scrapefdaRecallsPage() {
  try {
    // The FDA uses a Drupal-based site with views. Try to get the recalls listing view
    const response = await fetch('https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts?items_per_page=50', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    })

    if (!response.ok) return []

    const html = await response.text()
    const recalls = []

    // Look for recall entries in the view results
    // These typically have a pattern with date and title in structured elements
    // FDA uses class names like "views-row" for list items

    // Match recall links that have actual recall-specific URLs (not navigation)
    // Real recalls have URLs like: /safety/recalls-market-withdrawals-safety-alerts/[company-name]-recalls-[product]
    const recallLinkRegex = /<a[^>]*href="(\/safety\/recalls-market-withdrawals-safety-alerts\/[a-z0-9-]+-(?:recalls?|issues|announces|voluntary)[^"]*)"[^>]*>([^<]+)<\/a>/gi

    let match
    const seenTitles = new Set()

    // Skip common navigation link titles
    const skipTitles = ['recall resources', 'industry guidance', 'major product recalls',
                        'additional information', 'more recalls', 'view all', 'search recalls']

    while ((match = recallLinkRegex.exec(html)) !== null) {
      const link = 'https://www.fda.gov' + match[1]
      const title = match[2].trim()
      const lowerTitle = title.toLowerCase()

      // Skip navigation links, short titles, and duplicates
      if (title.length < 20) continue
      if (skipTitles.some(skip => lowerTitle.includes(skip))) continue
      if (seenTitles.has(lowerTitle)) continue
      seenTitles.add(lowerTitle)

      // Look for dates in the surrounding context
      const contextStart = Math.max(0, match.index - 300)
      const context = html.substring(contextStart, match.index + match[0].length + 100)
      const dateMatch = context.match(/(\d{1,2}\/\d{1,2}\/\d{4})/)

      // Determine contaminant - check both title and URL
      const fullContext = (lowerTitle + ' ' + link).toLowerCase()
      let contaminant = 'Unknown'
      if (fullContext.includes('listeria')) contaminant = 'Listeria'
      else if (fullContext.includes('salmonella')) contaminant = 'Salmonella'
      else if (fullContext.includes('e-coli') || fullContext.includes('e. coli') || fullContext.includes('ecoli')) contaminant = 'E. coli'
      else if (fullContext.includes('botulism') || fullContext.includes('clostridium')) contaminant = 'Botulism'
      else if (fullContext.includes('campylobacter')) contaminant = 'Campylobacter'
      else if (fullContext.includes('hepatitis')) contaminant = 'Hepatitis A'
      else if (fullContext.includes('norovirus')) contaminant = 'Norovirus'

      let pregnancyRisk = 'moderate'
      if (contaminant === 'Listeria') pregnancyRisk = 'high'

      // Extract product type from URL for better description
      const urlPath = link.split('/').pop() || ''
      const productFromUrl = extractProductFromUrl(urlPath)
      const betterTitle = productFromUrl ? `${title} - ${productFromUrl}` : title

      // Detect status from title and URL
      const status = detectStatus(lowerTitle + ' ' + urlPath)

      recalls.push({
        id: 'web-' + Buffer.from(link).toString('base64').substring(0, 20),
        title: betterTitle,
        product: betterTitle,
        brand: title,
        description: productFromUrl ? `Recall of ${productFromUrl}` : '',
        link,
        date: dateMatch ? dateMatch[1] : 'Recent',
        rawDate: dateMatch ? new Date(dateMatch[1]).toISOString() : new Date().toISOString(),
        contaminant,
        pregnancyRisk,
        status,
        source: 'FDA Website'
      })
    }

    console.log(`Scraped ${recalls.length} recalls from FDA website`)
    return recalls.slice(0, 20)
  } catch (error) {
    console.error('Scraping error:', error)
    return []
  }
}
