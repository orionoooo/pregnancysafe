// Curated pregnancy safety database
// Based on scientific research and evidence-based sources like "Expecting Better"

export const pregnancyDatabase = {
  // ===== FOODS =====
  'sushi': {
    item: 'Sushi / Raw Fish',
    safetyLevel: 'caution',
    summary: 'The main concern is foodborne illness, not inherent harm to the baby. High-quality sushi from reputable restaurants is lower risk.',
    directRisks: [
      'High-mercury fish (tuna, swordfish, shark) can affect fetal brain development - limit to 6oz/week',
      'Raw fish doesn\'t cross the placenta, but severe food poisoning could cause complications'
    ],
    generalRisks: [
      'Listeria, salmonella, or parasites from improperly handled raw fish',
      'These risks exist for everyone, not just pregnant women'
    ],
    recommendations: [
      'Choose low-mercury fish: salmon, shrimp, crab, scallops',
      'Eat at reputable restaurants with high turnover (fresher fish)',
      'Avoid high-mercury fish: bigeye tuna, swordfish, shark, king mackerel',
      'Consider cooked rolls (California roll, shrimp tempura) if nervous',
      'Flash-frozen fish (required for sushi in US) kills parasites'
    ],
    trimesterNotes: {
      t1: 'If you have morning sickness, raw fish may be harder to tolerate',
      t2: 'Generally the lowest-risk trimester if you want to indulge',
      t3: 'Continue avoiding high-mercury fish; immune system slightly weaker'
    },
    sources: ['FDA fish advisory', 'Expecting Better by Emily Oster', 'ACOG guidelines']
  },

  'caffeine': {
    item: 'Caffeine / Coffee',
    safetyLevel: 'safe',
    summary: 'Moderate caffeine (under 200mg/day) is considered safe. That\'s about one 12oz cup of coffee.',
    directRisks: [
      'Very high intake (>300mg/day) may slightly increase miscarriage risk in first trimester',
      'Caffeine crosses the placenta, but moderate amounts don\'t harm development'
    ],
    generalRisks: [
      'Can worsen heartburn and insomnia',
      'May increase anxiety'
    ],
    recommendations: [
      'Limit to 200mg/day (one 12oz coffee or two cups of tea)',
      'Remember caffeine is also in tea, chocolate, and some sodas',
      'Decaf is fine - it still has small amounts (2-15mg)',
      'If you\'re sensitive, cut back gradually to avoid headaches'
    ],
    trimesterNotes: {
      t1: 'Some studies suggest being more cautious in first trimester - consider limiting to one cup',
      t2: 'Standard 200mg limit is well-supported',
      t3: 'May want to cut back if having trouble sleeping'
    },
    sources: ['ACOG', 'American College of Obstetricians and Gynecologists', 'Expecting Better']
  },

  'deli meat': {
    item: 'Deli Meat / Cold Cuts',
    safetyLevel: 'caution',
    summary: 'The concern is listeria bacteria, which can cause serious complications. Heating until steaming eliminates this risk.',
    directRisks: [
      'Listeria can cross the placenta and cause miscarriage, stillbirth, or severe illness in newborn',
      'Pregnant women are 10x more likely to get listeriosis than general population'
    ],
    generalRisks: [
      'Listeria risk exists for everyone, especially those with weakened immune systems'
    ],
    recommendations: [
      'Heat deli meat until steaming (165°F) to kill listeria',
      'Hot sandwiches where meat is heated are fine',
      'Freshly cooked meat that you slice yourself is safe',
      'Pre-packaged deli meat is slightly safer than deli counter (less handling)'
    ],
    trimesterNotes: {
      t1: 'Listeria risk is highest concern in first trimester due to miscarriage risk',
      t2: 'Continue heating deli meat',
      t3: 'Listeria can cause preterm labor, continue precautions'
    },
    sources: ['CDC', 'FDA', 'ACOG']
  },

  'alcohol': {
    item: 'Alcohol',
    safetyLevel: 'avoid',
    summary: 'No amount of alcohol has been proven safe during pregnancy. Alcohol crosses the placenta freely.',
    directRisks: [
      'Fetal Alcohol Spectrum Disorders (FASDs) - can cause lifelong physical and behavioral problems',
      'Increased risk of miscarriage and stillbirth',
      'Alcohol directly affects fetal brain development'
    ],
    generalRisks: [],
    recommendations: [
      'Avoid alcohol entirely during pregnancy',
      'If you drank before knowing you were pregnant, don\'t panic - stop now',
      'Non-alcoholic beer/wine is fine (trace amounts are negligible)',
      'If you\'re struggling to stop, talk to your doctor confidentially'
    ],
    trimesterNotes: {
      t1: 'Highest risk period - major organ development occurring',
      t2: 'Brain development continues - no safe amount',
      t3: 'Brain still developing rapidly - continue avoiding'
    },
    sources: ['CDC', 'ACOG', 'AAP (American Academy of Pediatrics)']
  },

  'soft cheese': {
    item: 'Soft Cheese',
    safetyLevel: 'caution',
    summary: 'The concern is listeria in unpasteurized cheese. Most US cheese is pasteurized and safe.',
    directRisks: [
      'Listeria from unpasteurized cheese can cause miscarriage or stillbirth'
    ],
    generalRisks: [
      'Listeria risk applies to everyone'
    ],
    recommendations: [
      'Check that cheese is made from pasteurized milk (most US cheese is)',
      'Pasteurized brie, camembert, feta, goat cheese are all safe',
      'Be cautious with imported artisanal cheeses',
      'When in doubt, heat cheese until bubbly (kills listeria)'
    ],
    trimesterNotes: 'Same precautions apply throughout pregnancy.',
    sources: ['FDA', 'ACOG']
  },

  // ===== ACTIVITIES =====
  'hot springs': {
    item: 'Hot Springs / Hot Tubs',
    safetyLevel: 'caution',
    summary: 'The concern is raising core body temperature above 101°F, especially in first trimester.',
    directRisks: [
      'Hyperthermia (overheating) in first trimester linked to neural tube defects',
      'Core temperature above 101°F for extended periods is the concern'
    ],
    generalRisks: [
      'Dehydration',
      'Dizziness or fainting from heat'
    ],
    recommendations: [
      'Limit time to 10 minutes or less',
      'Keep water temperature under 100°F if possible',
      'Get out immediately if you feel too warm, dizzy, or uncomfortable',
      'Warm baths (not hot) are perfectly safe',
      'Swimming in hot springs may be safer than sitting (more body exposed to cool air)'
    ],
    trimesterNotes: {
      t1: 'Most critical time to avoid overheating - neural tube forming',
      t2: 'Lower risk but still avoid prolonged exposure',
      t3: 'Overheating can cause dizziness; may be uncomfortable anyway'
    },
    sources: ['ACOG', 'Expecting Better', 'March of Dimes']
  },

  'exercise': {
    item: 'Exercise',
    safetyLevel: 'safe',
    summary: 'Exercise is highly recommended during pregnancy! It reduces complications and improves outcomes.',
    directRisks: [
      'Contact sports or activities with fall risk should be avoided',
      'Don\'t start intense new regimens - maintain pre-pregnancy fitness level'
    ],
    generalRisks: [
      'Dehydration',
      'Overheating'
    ],
    recommendations: [
      '150 minutes of moderate exercise per week is recommended',
      'Safe activities: walking, swimming, prenatal yoga, stationary cycling',
      'Avoid: contact sports, hot yoga, scuba diving, activities with fall risk',
      'Stay hydrated and don\'t overheat',
      'You should be able to talk while exercising (not too intense)'
    ],
    trimesterNotes: {
      t1: 'Continue normal exercise routine; modify if experiencing fatigue/nausea',
      t2: 'Often the best time for exercise - energy returns',
      t3: 'May need to reduce intensity; avoid lying flat on back for long periods'
    },
    sources: ['ACOG', 'American College of Sports Medicine']
  },

  'flying': {
    item: 'Flying / Air Travel',
    safetyLevel: 'safe',
    summary: 'Flying is safe for most pregnant women through 36 weeks. Some airlines restrict travel after 36 weeks.',
    directRisks: [
      'Slightly increased blood clot risk on long flights (pregnancy already increases clot risk)'
    ],
    generalRisks: [
      'Dehydration from cabin air',
      'Swelling from sitting'
    ],
    recommendations: [
      'Walk around every 1-2 hours on long flights',
      'Stay hydrated - drink plenty of water',
      'Wear compression socks for long flights',
      'Choose an aisle seat for easier bathroom access',
      'Check airline policies - most restrict after 36 weeks'
    ],
    trimesterNotes: {
      t1: 'Safe, but consider morning sickness and fatigue',
      t2: 'Best time to travel - lowest risk period',
      t3: 'Airlines may require doctor\'s note after 28-36 weeks; avoid after 36 weeks'
    },
    sources: ['ACOG', 'Royal College of Obstetricians']
  },

  // ===== SKINCARE =====
  'retinol': {
    item: 'Retinol / Retinoids / Vitamin A derivatives',
    safetyLevel: 'avoid',
    summary: 'Oral retinoids (Accutane) are proven to cause birth defects. Topical retinoids are avoided as a precaution.',
    directRisks: [
      'Oral retinoids (isotretinoin/Accutane) cause severe birth defects',
      'Topical retinoids: no proven harm, but avoided out of caution'
    ],
    generalRisks: [],
    recommendations: [
      'Stop oral retinoids before trying to conceive',
      'Switch topical retinol to pregnancy-safe alternatives',
      'Safe alternatives: vitamin C, azelaic acid, niacinamide, hyaluronic acid',
      'If you used topical retinol before knowing you were pregnant, don\'t panic - absorption is minimal'
    ],
    trimesterNotes: {
      t1: 'Most critical time - avoid all retinoids',
      t2: 'Continue avoiding',
      t3: 'Continue avoiding'
    },
    sources: ['FDA', 'AAD (American Academy of Dermatology)', 'ACOG']
  },

  'salicylic acid': {
    item: 'Salicylic Acid (BHA)',
    safetyLevel: 'caution',
    summary: 'Low concentrations in face washes are generally considered safe. High concentrations or peels should be avoided.',
    directRisks: [
      'High doses of oral salicylates can cause problems, but topical absorption is minimal'
    ],
    generalRisks: [],
    recommendations: [
      'Face washes with low concentration (under 2%) are generally safe',
      'Avoid high-concentration peels',
      'Alternative: glycolic acid (AHA) is considered safer',
      'Spot treatments are low risk due to small area'
    ],
    trimesterNotes: 'Same precautions throughout pregnancy.',
    sources: ['AAD', 'ACOG']
  },

  'benzoyl peroxide': {
    item: 'Benzoyl Peroxide',
    safetyLevel: 'safe',
    summary: 'Considered safe for pregnancy. Only about 5% is absorbed through skin, and it\'s quickly cleared from the body.',
    directRisks: [],
    generalRisks: [
      'Can cause skin dryness and irritation'
    ],
    recommendations: [
      'Use lower concentrations (2.5-5%) to minimize irritation',
      'Good option for pregnancy-safe acne treatment',
      'Can combine with azelaic acid for better results'
    ],
    trimesterNotes: 'Safe throughout pregnancy.',
    sources: ['AAD', 'MotherToBaby']
  },

  'sunscreen': {
    item: 'Sunscreen',
    safetyLevel: 'safe',
    summary: 'Sunscreen is safe and important during pregnancy! Pregnancy can cause skin darkening (melasma).',
    directRisks: [],
    generalRisks: [],
    recommendations: [
      'Mineral sunscreens (zinc oxide, titanium dioxide) sit on top of skin',
      'Chemical sunscreens are also considered safe',
      'SPF 30+ recommended',
      'Especially important due to pregnancy melasma risk'
    ],
    trimesterNotes: 'Safe and recommended throughout pregnancy.',
    sources: ['AAD', 'ACOG']
  },

  // ===== MEDICATIONS =====
  'tylenol': {
    item: 'Tylenol / Acetaminophen',
    safetyLevel: 'safe',
    summary: 'Acetaminophen is the recommended pain reliever during pregnancy. Use the lowest effective dose.',
    directRisks: [
      'Some recent studies suggest possible links to ADHD with heavy use, but evidence is weak'
    ],
    generalRisks: [
      'Liver damage with overdose (applies to everyone)'
    ],
    recommendations: [
      'Use lowest effective dose for shortest time needed',
      'Follow package directions (max 3000mg/day)',
      'Preferred over NSAIDs (ibuprofen, naproxen)'
    ],
    trimesterNotes: 'Considered safe throughout pregnancy when used as directed.',
    sources: ['ACOG', 'FDA']
  },

  'ibuprofen': {
    item: 'Ibuprofen / Advil / NSAIDs',
    safetyLevel: 'avoid',
    summary: 'NSAIDs should be avoided, especially in third trimester when they can affect fetal heart development.',
    directRisks: [
      'First trimester: possible slightly increased miscarriage risk',
      'Third trimester: can cause premature closure of ductus arteriosus (heart vessel)',
      'Can reduce amniotic fluid'
    ],
    generalRisks: [
      'GI upset, kidney effects (applies to everyone)'
    ],
    recommendations: [
      'Use acetaminophen (Tylenol) instead',
      'If you took ibuprofen before knowing you were pregnant, don\'t panic',
      'For severe pain, talk to your doctor about alternatives'
    ],
    trimesterNotes: {
      t1: 'Best to avoid, but occasional use likely low risk',
      t2: 'Avoid if possible',
      t3: 'Definitely avoid - can cause fetal heart problems'
    },
    sources: ['FDA', 'ACOG']
  }
}

// Search function that handles partial matches and common variations
export function findInDatabase(query) {
  if (!query) return null

  const normalizedQuery = query.toLowerCase().trim()

  // Direct match
  if (pregnancyDatabase[normalizedQuery]) {
    return pregnancyDatabase[normalizedQuery]
  }

  // Check for partial matches in keys
  for (const key of Object.keys(pregnancyDatabase)) {
    if (key.includes(normalizedQuery) || normalizedQuery.includes(key)) {
      return pregnancyDatabase[key]
    }
  }

  // Check for matches in item names
  for (const entry of Object.values(pregnancyDatabase)) {
    const itemLower = entry.item.toLowerCase()
    if (itemLower.includes(normalizedQuery) || normalizedQuery.includes(itemLower.split('/')[0].trim())) {
      return entry
    }
  }

  // Common aliases
  const aliases = {
    'coffee': 'caffeine',
    'tea': 'caffeine',
    'espresso': 'caffeine',
    'latte': 'caffeine',
    'raw fish': 'sushi',
    'sashimi': 'sushi',
    'salmon': 'sushi',
    'tuna': 'sushi',
    'hot tub': 'hot springs',
    'sauna': 'hot springs',
    'jacuzzi': 'hot springs',
    'onsen': 'hot springs',
    'mineral springs': 'hot springs',
    'spa': 'hot springs',
    'ham': 'deli meat',
    'turkey': 'deli meat',
    'salami': 'deli meat',
    'prosciutto': 'deli meat',
    'cold cuts': 'deli meat',
    'lunch meat': 'deli meat',
    'brie': 'soft cheese',
    'camembert': 'soft cheese',
    'feta': 'soft cheese',
    'goat cheese': 'soft cheese',
    'wine': 'alcohol',
    'beer': 'alcohol',
    'cocktail': 'alcohol',
    'liquor': 'alcohol',
    'retin-a': 'retinol',
    'tretinoin': 'retinol',
    'vitamin a': 'retinol',
    'accutane': 'retinol',
    'isotretinoin': 'retinol',
    'adapalene': 'retinol',
    'differin': 'retinol',
    'bha': 'salicylic acid',
    'advil': 'ibuprofen',
    'motrin': 'ibuprofen',
    'naproxen': 'ibuprofen',
    'aleve': 'ibuprofen',
    'aspirin': 'ibuprofen',
    'acetaminophen': 'tylenol',
    'paracetamol': 'tylenol',
    'workout': 'exercise',
    'gym': 'exercise',
    'running': 'exercise',
    'yoga': 'exercise',
    'flight': 'flying',
    'airplane': 'flying',
    'travel': 'flying',
    'plane': 'flying',
    'spf': 'sunscreen'
  }

  if (aliases[normalizedQuery]) {
    return pregnancyDatabase[aliases[normalizedQuery]]
  }

  // Check aliases for partial matches
  for (const [alias, key] of Object.entries(aliases)) {
    if (normalizedQuery.includes(alias) || alias.includes(normalizedQuery)) {
      return pregnancyDatabase[key]
    }
  }

  return null
}
