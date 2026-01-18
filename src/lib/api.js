// API integration for pregnancy safety checking
// Uses Claude API via a serverless function (to keep API key secure)

import { pregnancyDatabase, findInDatabase } from '../data/pregnancyDatabase'

const API_URL = '/api/check-safety'

export async function checkSafety({ query, image, trimester }) {
  // First, check the local database for quick results
  const dbResult = findInDatabase(query)

  if (dbResult && !image) {
    // Return database result immediately (no API call needed)
    return formatDatabaseResult(dbResult, trimester)
  }

  // For images or items not in database, call the Claude API
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        image,
        trimester,
        // Include database info if partial match found
        databaseHint: dbResult ? dbResult.item : null
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to check safety')
    }

    return await response.json()
  } catch (error) {
    console.log('API call failed, using local database:', error.message)
    // If API fails but we have database result, return that
    if (dbResult) {
      return formatDatabaseResult(dbResult, trimester)
    }
    // Fall back to demo mode for unknown items
    return checkSafetyDemo({ query, image, trimester })
  }
}

function formatDatabaseResult(dbResult, trimester) {
  const result = { ...dbResult }

  // If trimester specified, highlight relevant notes
  if (trimester && dbResult.trimesterNotes) {
    const key = `t${trimester}`
    if (typeof dbResult.trimesterNotes === 'object' && dbResult.trimesterNotes[key]) {
      result.trimesterNotes = dbResult.trimesterNotes[key]
    }
  }

  return result
}

// For development/demo mode when API is not configured
export async function checkSafetyDemo({ query, image, trimester }) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500))

  // Check database first
  const dbResult = findInDatabase(query)
  if (dbResult) {
    return formatDatabaseResult(dbResult, trimester)
  }

  // Return a generic "consult your doctor" response for unknown items
  return {
    item: query,
    safetyLevel: 'caution',
    summary: `Information about "${query}" during pregnancy should be discussed with your healthcare provider.`,
    directRisks: [],
    generalRisks: ['Limited research available for this specific item'],
    recommendations: [
      'Consult your OB-GYN or midwife for personalized advice',
      'When in doubt, it\'s best to avoid until you can confirm safety'
    ],
    trimesterNotes: 'Consult your healthcare provider for trimester-specific guidance.',
    sources: ['General pregnancy safety guidelines']
  }
}
