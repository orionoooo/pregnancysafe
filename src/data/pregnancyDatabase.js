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
  },

  // ===== MORE FOODS & DRINKS =====
  'kombucha': {
    item: 'Kombucha',
    safetyLevel: 'caution',
    summary: 'Unpasteurized kombucha has small amounts of alcohol and bacteria. Commercial pasteurized versions are safer.',
    directRisks: [
      'Unpasteurized versions contain live bacteria and trace alcohol (0.5-3%)',
      'Homemade kombucha has higher contamination risk'
    ],
    generalRisks: [
      'Caffeine content (from tea base)',
      'Digestive upset from probiotics'
    ],
    recommendations: [
      'Choose pasteurized commercial brands',
      'Check alcohol content - should be under 0.5%',
      'Limit to one small bottle occasionally',
      'Avoid homemade or unpasteurized varieties'
    ],
    trimesterNotes: {
      t1: 'Best to avoid unpasteurized - stick to pasteurized if you want it',
      t2: 'Occasional pasteurized kombucha is low risk',
      t3: 'Same precautions apply'
    },
    sources: ['FDA', 'MotherToBaby']
  },

  'eggs': {
    item: 'Eggs',
    safetyLevel: 'caution',
    summary: 'Fully cooked eggs are safe and nutritious. The concern is salmonella from raw or runny eggs.',
    directRisks: [
      'Salmonella doesn\'t typically cross placenta, but severe illness could cause complications'
    ],
    generalRisks: [
      'Salmonella food poisoning risk from undercooked eggs'
    ],
    recommendations: [
      'Cook eggs until both white and yolk are firm',
      'Avoid raw eggs in homemade mayo, Caesar dressing, cookie dough, eggnog',
      'Pasteurized eggs are safe even raw (look for pasteurized label)',
      'Most commercial products use pasteurized eggs'
    ],
    trimesterNotes: 'Same precautions throughout pregnancy.',
    sources: ['FDA', 'CDC', 'ACOG']
  },

  'honey': {
    item: 'Honey',
    safetyLevel: 'safe',
    summary: 'Honey is safe during pregnancy! The botulism concern is only for infants under 1 year.',
    directRisks: [],
    generalRisks: [
      'High in sugar/calories'
    ],
    recommendations: [
      'Safe to eat during pregnancy',
      'Botulism spores cannot harm adults or fetuses - only infants',
      'Don\'t give honey to your baby after birth (wait until 1 year)'
    ],
    trimesterNotes: 'Safe throughout pregnancy.',
    sources: ['CDC', 'ACOG']
  },

  'peanuts': {
    item: 'Peanuts / Tree Nuts',
    safetyLevel: 'safe',
    summary: 'Eating peanuts during pregnancy does NOT increase baby\'s allergy risk. May actually be protective!',
    directRisks: [],
    generalRisks: [
      'Only avoid if YOU have a nut allergy'
    ],
    recommendations: [
      'Safe and nutritious source of protein and healthy fats',
      'Old advice to avoid nuts has been reversed',
      'Studies suggest eating nuts may reduce baby\'s allergy risk',
      'Avoid only if you personally are allergic'
    ],
    trimesterNotes: 'Safe throughout pregnancy.',
    sources: ['ACOG', 'AAP', 'LEAP Study']
  },

  'blue pea flower': {
    item: 'Blue Pea Flower / Butterfly Pea Flower',
    safetyLevel: 'caution',
    summary: 'Limited research on butterfly pea flower during pregnancy. Best to avoid or use sparingly.',
    directRisks: [
      'May have uterine stimulant properties - not well studied',
      'Some traditional medicine sources advise avoiding during pregnancy'
    ],
    generalRisks: [
      'Limited scientific research available'
    ],
    recommendations: [
      'Avoid during first trimester to be safe',
      'If consuming, limit to occasional small amounts',
      'Skip butterfly pea tea/drinks during pregnancy',
      'Consult your healthcare provider if you want to use it'
    ],
    trimesterNotes: {
      t1: 'Best to avoid - uterine stimulant concerns',
      t2: 'Use with caution if at all',
      t3: 'May stimulate uterus - best to avoid'
    },
    sources: ['Traditional medicine guidelines', 'MotherToBaby - consult provider for herbs']
  },

  'shellfish': {
    item: 'Shellfish / Shrimp / Crab / Lobster',
    safetyLevel: 'safe',
    summary: 'Cooked shellfish is safe and nutritious! Shellfish are low in mercury and high in protein.',
    directRisks: [],
    generalRisks: [
      'Raw shellfish carries bacteria/virus risk (applies to everyone)'
    ],
    recommendations: [
      'Cook shellfish thoroughly (shells should open; flesh opaque)',
      'Shrimp, crab, lobster, scallops are all low-mercury choices',
      'Avoid raw oysters, raw clams',
      'Great source of protein, iron, omega-3s'
    ],
    trimesterNotes: 'Safe throughout pregnancy when cooked.',
    sources: ['FDA', 'ACOG', 'EPA']
  },

  'hot dogs': {
    item: 'Hot Dogs',
    safetyLevel: 'caution',
    summary: 'Like deli meat, hot dogs can harbor listeria. Heat until steaming to make them safe.',
    directRisks: [
      'Listeria can cause miscarriage, stillbirth, or newborn infection'
    ],
    generalRisks: [
      'High sodium and nitrates',
      'Listeria risk applies to everyone'
    ],
    recommendations: [
      'Heat until steaming hot (165°F)',
      'Microwave for 30 seconds or grill thoroughly',
      'Don\'t eat cold straight from package'
    ],
    trimesterNotes: 'Same precautions throughout pregnancy.',
    sources: ['CDC', 'FDA', 'ACOG']
  },

  'mayonnaise': {
    item: 'Mayonnaise',
    safetyLevel: 'safe',
    summary: 'Commercial mayonnaise is safe - it\'s made with pasteurized eggs and acidic enough to prevent bacteria.',
    directRisks: [],
    generalRisks: [],
    recommendations: [
      'Commercial mayo is safe (pasteurized eggs)',
      'Avoid homemade mayo made with raw eggs',
      'Restaurant mayo is typically commercial'
    ],
    trimesterNotes: 'Safe throughout pregnancy.',
    sources: ['FDA', 'USDA']
  },

  'sprouts': {
    item: 'Sprouts (Alfalfa, Bean, etc.)',
    safetyLevel: 'avoid',
    summary: 'Raw sprouts are high-risk for bacteria. Even "clean" sprouts can harbor salmonella or E. coli in the seeds.',
    directRisks: [
      'Bacteria can cause severe illness leading to pregnancy complications'
    ],
    generalRisks: [
      'Sprouts are a common source of food poisoning outbreaks'
    ],
    recommendations: [
      'Avoid raw sprouts entirely during pregnancy',
      'Cooking thoroughly kills bacteria (add to stir-fry)',
      'This includes alfalfa, clover, mung bean, radish sprouts'
    ],
    trimesterNotes: 'Avoid raw sprouts throughout pregnancy.',
    sources: ['FDA', 'CDC']
  },

  'soda': {
    item: 'Soda / Soft Drinks',
    safetyLevel: 'safe',
    summary: 'Occasional soda is fine. Main concerns are caffeine, sugar, and empty calories.',
    directRisks: [
      'Caffeinated sodas count toward 200mg daily caffeine limit'
    ],
    generalRisks: [
      'High sugar content',
      'May worsen heartburn and nausea'
    ],
    recommendations: [
      'Track caffeine (Coke has ~34mg, Mountain Dew ~54mg per 12oz)',
      'Consider caffeine-free versions',
      'Limit sugary drinks for healthy weight gain',
      'Diet soda with artificial sweeteners is considered safe in moderation'
    ],
    trimesterNotes: 'Same considerations throughout pregnancy.',
    sources: ['ACOG', 'FDA']
  },

  'artificial sweeteners': {
    item: 'Artificial Sweeteners',
    safetyLevel: 'safe',
    summary: 'Most artificial sweeteners are considered safe during pregnancy in moderate amounts.',
    directRisks: [
      'Saccharin crosses placenta - some advise limiting (though risk is theoretical)'
    ],
    generalRisks: [],
    recommendations: [
      'Safe: Aspartame (Equal), Sucralose (Splenda), Stevia, Acesulfame-K',
      'Use in moderation as part of balanced diet',
      'Saccharin (Sweet\'N Low) - some doctors suggest limiting',
      'Avoid if you have PKU (aspartame contraindicated)'
    ],
    trimesterNotes: 'Safe in moderation throughout pregnancy.',
    sources: ['FDA', 'ACOG', 'ADA']
  },

  'herbal tea': {
    item: 'Herbal Tea',
    safetyLevel: 'caution',
    summary: 'Some herbal teas are safe, others should be avoided. Caffeine-free doesn\'t mean risk-free.',
    directRisks: [
      'Some herbs can stimulate uterus or affect hormones'
    ],
    generalRisks: [],
    recommendations: [
      'Generally safe: ginger, peppermint, lemon balm, rooibos',
      'Avoid: licorice root, dong quai, blue/black cohosh, pennyroyal',
      'Limit raspberry leaf tea to third trimester (may stimulate uterus)',
      'Stick to 1-2 cups daily of approved teas',
      'Avoid "detox" or "weight loss" teas'
    ],
    trimesterNotes: {
      t1: 'Stick to safe teas - ginger tea can help with nausea',
      t2: 'Continue with safe herbal teas',
      t3: 'Raspberry leaf tea is traditionally used to prepare for labor'
    },
    sources: ['ACOG', 'American Pregnancy Association']
  },

  'green tea': {
    item: 'Green Tea',
    safetyLevel: 'caution',
    summary: 'Green tea contains caffeine and may affect folic acid absorption. Limit to 1-2 cups daily.',
    directRisks: [
      'May interfere with folic acid absorption (important for neural tube development)',
      'Contains caffeine (25-50mg per cup)'
    ],
    generalRisks: [],
    recommendations: [
      'Limit to 1-2 cups daily',
      'Count toward 200mg caffeine limit',
      'Don\'t drink with prenatal vitamins (interferes with iron/folic acid)',
      'Black tea is similar - moderate consumption'
    ],
    trimesterNotes: {
      t1: 'Be especially mindful of folic acid absorption in first trimester',
      t2: 'Moderate consumption okay',
      t3: 'Same precautions'
    },
    sources: ['NIH', 'ACOG']
  },

  'energy drinks': {
    item: 'Energy Drinks',
    safetyLevel: 'avoid',
    summary: 'Energy drinks have very high caffeine plus other stimulants. Best to avoid during pregnancy.',
    directRisks: [
      'High caffeine content (80-300mg per can) exceeds safe limits',
      'Additional stimulants (guarana, taurine) not studied in pregnancy'
    ],
    generalRisks: [
      'Can cause rapid heartbeat, high blood pressure',
      'High sugar content'
    ],
    recommendations: [
      'Avoid energy drinks during pregnancy',
      'If you need a boost, try coffee or tea (easier to track caffeine)',
      'Address fatigue with rest, hydration, and balanced meals'
    ],
    trimesterNotes: 'Avoid throughout pregnancy.',
    sources: ['ACOG', 'American Beverage Association']
  },

  'apple': {
    item: 'Apple',
    safetyLevel: 'safe',
    summary: 'Apples are safe and nutritious during pregnancy! They provide fiber, vitamins, and antioxidants.',
    directRisks: [],
    generalRisks: [],
    recommendations: [
      'Wash thoroughly before eating to remove pesticides',
      'Great source of fiber which helps with pregnancy constipation',
      'Contains vitamin C and potassium',
      'Organic is preferable but conventional is also safe when washed'
    ],
    trimesterNotes: 'Safe throughout pregnancy - a great healthy snack!',
    sources: ['ACOG', 'American Pregnancy Association']
  },

  'pineapple': {
    item: 'Pineapple',
    safetyLevel: 'safe',
    summary: 'Pineapple is safe during pregnancy! The myth that it causes miscarriage is not supported by evidence.',
    directRisks: [],
    generalRisks: [
      'Acidic - may worsen heartburn'
    ],
    recommendations: [
      'Safe to eat in normal food amounts',
      'Bromelain enzyme is only a concern in supplement form, not fresh fruit',
      'You would need to eat 7-10 whole pineapples to get concerning amounts',
      'Nutritious - contains vitamin C, B6, folate'
    ],
    trimesterNotes: 'Safe throughout pregnancy in normal amounts.',
    sources: ['ACOG', 'Expecting Better']
  },

  'papaya': {
    item: 'Papaya',
    safetyLevel: 'caution',
    summary: 'Ripe papaya is safe. Unripe (green) papaya contains latex that may cause contractions.',
    directRisks: [
      'Unripe papaya latex may stimulate uterine contractions'
    ],
    generalRisks: [],
    recommendations: [
      'Ripe papaya (yellow/orange) is safe and nutritious',
      'Avoid unripe/green papaya and papaya seeds',
      'Avoid papaya enzyme supplements',
      'Ripe papaya is high in vitamins A, C, and folate'
    ],
    trimesterNotes: {
      t1: 'Stick to fully ripe papaya',
      t2: 'Ripe papaya is safe',
      t3: 'Continue avoiding unripe papaya'
    },
    sources: ['British Journal of Nutrition', 'MotherToBaby']
  },

  'spicy food': {
    item: 'Spicy Food',
    safetyLevel: 'safe',
    summary: 'Spicy food is safe during pregnancy. It does not harm the baby or induce labor.',
    directRisks: [],
    generalRisks: [
      'May worsen heartburn (very common in pregnancy)',
      'May cause digestive discomfort'
    ],
    recommendations: [
      'Safe to eat if you enjoy it',
      'Will not harm baby or induce labor (this is a myth)',
      'If experiencing heartburn, you may want to reduce spicy foods',
      'Baby can taste flavors in amniotic fluid - exposure may reduce picky eating later!'
    ],
    trimesterNotes: {
      t1: 'May worsen nausea for some',
      t2: 'Generally fine',
      t3: 'May worsen heartburn which is common in third trimester'
    },
    sources: ['ACOG', 'Expecting Better']
  },

  // ===== MORE SKINCARE & BEAUTY =====
  'hair dye': {
    item: 'Hair Dye',
    safetyLevel: 'safe',
    summary: 'Hair dye is generally considered safe during pregnancy. Very little is absorbed through the scalp.',
    directRisks: [
      'Minimal absorption through scalp - no proven harm'
    ],
    generalRisks: [
      'Strong fumes may cause nausea',
      'Hormones may affect how color takes'
    ],
    recommendations: [
      'Wait until after first trimester if you want to be extra cautious',
      'Use in well-ventilated area',
      'Consider highlights/balayage (doesn\'t touch scalp)',
      'Vegetable-based dyes are an alternative',
      'Wear gloves to minimize skin contact'
    ],
    trimesterNotes: {
      t1: 'Some choose to wait, but no proven risk',
      t2: 'Generally considered safe',
      t3: 'Same precautions'
    },
    sources: ['ACOG', 'AAD', 'MotherToBaby']
  },

  'nail polish': {
    item: 'Nail Polish / Manicures',
    safetyLevel: 'safe',
    summary: 'Occasional nail polish use is safe. The main concern is ventilation and fumes.',
    directRisks: [
      'No proven risk from occasional use'
    ],
    generalRisks: [
      'Fumes may cause nausea or headaches',
      'Some contain chemicals like formaldehyde, toluene'
    ],
    recommendations: [
      'Use in well-ventilated area',
      'Look for "3-free" or "5-free" polishes (fewer harsh chemicals)',
      'Gel/acrylic nails are also considered safe occasionally',
      'Nail salon workers with daily exposure should take precautions'
    ],
    trimesterNotes: 'Safe throughout pregnancy with good ventilation.',
    sources: ['ACOG', 'MotherToBaby']
  },

  'botox': {
    item: 'Botox / Fillers',
    safetyLevel: 'avoid',
    summary: 'Botox and fillers haven\'t been studied in pregnancy. Best to avoid until after pregnancy.',
    directRisks: [
      'No safety data - effects on fetus unknown'
    ],
    generalRisks: [],
    recommendations: [
      'Avoid during pregnancy and breastfeeding',
      'If you had Botox before knowing you were pregnant, don\'t panic',
      'Resume after pregnancy/breastfeeding if desired'
    ],
    trimesterNotes: 'Avoid throughout pregnancy.',
    sources: ['ACOG', 'AAD']
  },

  'self tanner': {
    item: 'Self Tanner / Spray Tan',
    safetyLevel: 'safe',
    summary: 'Self-tanners are considered safe as the active ingredient (DHA) doesn\'t penetrate beyond the outer skin layer.',
    directRisks: [
      'DHA doesn\'t absorb past outer skin layer'
    ],
    generalRisks: [
      'Spray tan booths - avoid inhaling fumes'
    ],
    recommendations: [
      'Lotions and creams are safest',
      'For spray tans, protect eyes, nose, mouth from fumes',
      'Avoid tanning beds (UV radiation risk)',
      'Preferable to sun tanning or tanning beds'
    ],
    trimesterNotes: 'Safe throughout pregnancy.',
    sources: ['AAD', 'MotherToBaby']
  },

  'teeth whitening': {
    item: 'Teeth Whitening',
    safetyLevel: 'caution',
    summary: 'Limited research on teeth whitening during pregnancy. Most dentists recommend waiting.',
    directRisks: [
      'Peroxide absorption unknown during pregnancy'
    ],
    generalRisks: [
      'Gum sensitivity may be increased during pregnancy'
    ],
    recommendations: [
      'Most dentists suggest waiting until after pregnancy',
      'Whitening toothpaste is considered safe',
      'Focus on dental hygiene - cleanings are important during pregnancy',
      'If you whitened before knowing, no need to worry'
    ],
    trimesterNotes: 'Best to wait until after pregnancy.',
    sources: ['ADA', 'ACOG']
  },

  'niacinamide': {
    item: 'Niacinamide (Vitamin B3)',
    safetyLevel: 'safe',
    summary: 'Niacinamide is one of the safest skincare actives during pregnancy. Great retinol alternative!',
    directRisks: [],
    generalRisks: [],
    recommendations: [
      'Safe pregnancy skincare ingredient',
      'Helps with acne, pigmentation, fine lines',
      'Good retinol alternative during pregnancy',
      'Can combine with hyaluronic acid and vitamin C'
    ],
    trimesterNotes: 'Safe throughout pregnancy.',
    sources: ['AAD', 'MotherToBaby']
  },

  'vitamin c serum': {
    item: 'Vitamin C Serum',
    safetyLevel: 'safe',
    summary: 'Vitamin C serums are safe and beneficial during pregnancy. Helps with pigmentation.',
    directRisks: [],
    generalRisks: [
      'May cause irritation for sensitive skin'
    ],
    recommendations: [
      'Safe and recommended during pregnancy',
      'Helps prevent/treat melasma (pregnancy mask)',
      'Look for L-ascorbic acid or vitamin C derivatives',
      'Can combine with sunscreen for best results'
    ],
    trimesterNotes: 'Safe throughout pregnancy.',
    sources: ['AAD', 'ACOG']
  },

  'hyaluronic acid': {
    item: 'Hyaluronic Acid',
    safetyLevel: 'safe',
    summary: 'Hyaluronic acid is completely safe during pregnancy. It\'s naturally found in your body.',
    directRisks: [],
    generalRisks: [],
    recommendations: [
      'Completely safe - naturally occurs in your body',
      'Great for hydration during pregnancy',
      'Safe in serums, moisturizers, and lip products',
      'Injectable HA fillers should wait until after pregnancy'
    ],
    trimesterNotes: 'Safe throughout pregnancy.',
    sources: ['AAD', 'MotherToBaby']
  },

  'glycolic acid': {
    item: 'Glycolic Acid (AHA)',
    safetyLevel: 'safe',
    summary: 'Low-concentration glycolic acid is considered safer than salicylic acid during pregnancy.',
    directRisks: [
      'Very high concentration peels should be avoided'
    ],
    generalRisks: [
      'May increase sun sensitivity'
    ],
    recommendations: [
      'Low concentrations (under 10%) in cleansers/toners are safe',
      'Avoid professional high-concentration peels',
      'Use sunscreen as AHAs increase sun sensitivity',
      'Good alternative to salicylic acid for exfoliation'
    ],
    trimesterNotes: 'Safe in low concentrations throughout pregnancy.',
    sources: ['AAD', 'ACOG']
  },

  'azelaic acid': {
    item: 'Azelaic Acid',
    safetyLevel: 'safe',
    summary: 'Azelaic acid is pregnancy-safe and can be prescribed by dermatologists for acne or melasma.',
    directRisks: [],
    generalRisks: [
      'May cause mild irritation'
    ],
    recommendations: [
      'Considered safe during pregnancy',
      'Prescription strength available for acne',
      'Good for treating melasma (pregnancy mask)',
      'Can combine with niacinamide'
    ],
    trimesterNotes: 'Safe throughout pregnancy.',
    sources: ['AAD', 'FDA Category B']
  },

  // ===== MORE ACTIVITIES =====
  'massage': {
    item: 'Massage / Prenatal Massage',
    safetyLevel: 'safe',
    summary: 'Massage is safe and beneficial during pregnancy. Just avoid deep pressure on abdomen.',
    directRisks: [],
    generalRisks: [
      'Some pressure points traditionally avoided (no proven risk)'
    ],
    recommendations: [
      'Prenatal massage is safe after first trimester',
      'Find a therapist trained in prenatal massage',
      'Avoid lying flat on back after 20 weeks - side-lying is best',
      'Avoid deep tissue work on legs (increased clot risk in pregnancy)',
      'Can help with back pain, swelling, stress'
    ],
    trimesterNotes: {
      t1: 'Some therapists prefer to wait until after first trimester',
      t2: 'Great time for prenatal massage',
      t3: 'Very beneficial for aches and pains; helps prepare for labor'
    },
    sources: ['ACOG', 'American Massage Therapy Association']
  },

  'sex': {
    item: 'Sex / Sexual Activity',
    safetyLevel: 'safe',
    summary: 'Sex is safe during a healthy pregnancy. The baby is protected by amniotic fluid and mucus plug.',
    directRisks: [],
    generalRisks: [],
    recommendations: [
      'Safe in healthy pregnancies',
      'Baby is well-protected by amniotic fluid and mucus plug',
      'Find comfortable positions as belly grows',
      'Avoid if: placenta previa, cervical issues, preterm labor risk, broken water',
      'Orgasms may cause mild contractions (normal, not harmful)'
    ],
    trimesterNotes: {
      t1: 'Safe; may want to avoid if spotting or threatened miscarriage',
      t2: 'Often most comfortable time - energy returns',
      t3: 'Safe until water breaks; may trigger Braxton Hicks'
    },
    sources: ['ACOG', 'Mayo Clinic']
  },

  'tattoo': {
    item: 'Tattoo',
    safetyLevel: 'avoid',
    summary: 'Getting tattoos during pregnancy is not recommended due to infection risk and unknown ink effects.',
    directRisks: [
      'Infection risk could affect pregnancy',
      'Tattoo ink ingredients not studied during pregnancy'
    ],
    generalRisks: [
      'Hepatitis B/C risk if unsterile equipment'
    ],
    recommendations: [
      'Wait until after pregnancy to get new tattoos',
      'Existing tattoos are not a concern',
      'If you got a tattoo before knowing you were pregnant, risk is low',
      'Henna (natural) is considered safer for temporary designs'
    ],
    trimesterNotes: 'Avoid throughout pregnancy.',
    sources: ['ACOG', 'American Pregnancy Association']
  },

  'swimming': {
    item: 'Swimming',
    safetyLevel: 'safe',
    summary: 'Swimming is one of the best exercises during pregnancy! Low-impact and keeps you cool.',
    directRisks: [],
    generalRisks: [
      'Slip hazard on wet surfaces'
    ],
    recommendations: [
      'Excellent pregnancy exercise - supports joints and keeps cool',
      'Pool chlorine is safe in normal concentrations',
      'Natural bodies of water are fine if clean',
      'Avoid very hot water (hot tubs)',
      'Great for reducing swelling and back pain'
    ],
    trimesterNotes: {
      t1: 'Great for nausea and fatigue',
      t2: 'Often most enjoyable time - belly isn\'t too big yet',
      t3: 'Very beneficial - reduces pressure on joints and back'
    },
    sources: ['ACOG', 'CDC']
  },

  'sleeping position': {
    item: 'Sleep Position',
    safetyLevel: 'caution',
    summary: 'Side sleeping is recommended after 20 weeks. Back sleeping can reduce blood flow to baby.',
    directRisks: [
      'Prolonged back sleeping after 20 weeks may reduce blood flow to uterus',
      'Associated with slightly higher stillbirth risk in studies'
    ],
    generalRisks: [
      'Back sleeping may cause low blood pressure, dizziness'
    ],
    recommendations: [
      'Left side is traditionally recommended (best blood flow)',
      'Either side is fine - left is not strictly necessary',
      'Don\'t panic if you wake up on your back - just roll over',
      'Use pillows between knees and under belly for comfort',
      'Slightly elevated back (wedge pillow) is also okay'
    ],
    trimesterNotes: {
      t1: 'Any position is fine - uterus is still small',
      t2: 'Start transitioning to side sleeping around 20 weeks',
      t3: 'Side sleeping most important; most women can\'t comfortably back-sleep anyway'
    },
    sources: ['ACOG', 'Lancet Study 2019']
  },

  'x-ray': {
    item: 'X-Ray / Radiation',
    safetyLevel: 'caution',
    summary: 'Diagnostic X-rays (dental, chest, limbs) are generally safe. The radiation dose is very low.',
    directRisks: [
      'High radiation doses can cause birth defects (not from diagnostic X-rays)',
      'Developing organs most sensitive in first trimester'
    ],
    generalRisks: [],
    recommendations: [
      'Dental X-rays are safe with lead apron',
      'Chest/limb X-rays are safe - don\'t delay needed care',
      'CT scans of abdomen should be avoided unless emergency',
      'MRI (no radiation) is preferred when possible',
      'Always tell technician you\'re pregnant - they\'ll shield abdomen'
    ],
    trimesterNotes: {
      t1: 'More caution advised - organs forming',
      t2: 'Low-dose X-rays safe',
      t3: 'Same precautions'
    },
    sources: ['ACOG', 'ACR (American College of Radiology)']
  },

  // ===== MORE MEDICATIONS & SUPPLEMENTS =====
  'melatonin': {
    item: 'Melatonin',
    safetyLevel: 'caution',
    summary: 'Limited research on melatonin in pregnancy. Consult your doctor before using.',
    directRisks: [
      'Not enough research to confirm safety',
      'Melatonin is a hormone that crosses the placenta'
    ],
    generalRisks: [],
    recommendations: [
      'Consult your doctor before taking',
      'Try sleep hygiene first: dark room, no screens, consistent schedule',
      'Magnesium may help with sleep and is generally safe',
      'Pregnancy insomnia is common, especially in third trimester'
    ],
    trimesterNotes: 'Consult doctor before use in any trimester.',
    sources: ['MotherToBaby', 'ACOG']
  },

  'benadryl': {
    item: 'Benadryl / Diphenhydramine',
    safetyLevel: 'safe',
    summary: 'Benadryl is generally considered safe during pregnancy for allergies or sleep.',
    directRisks: [
      'No known fetal risks at normal doses'
    ],
    generalRisks: [
      'Can cause drowsiness'
    ],
    recommendations: [
      'Considered safe for allergies and sleep',
      'One of the recommended antihistamines during pregnancy',
      'Also ingredient in some sleep aids (Unisom, ZzzQuil)',
      'Unisom (doxylamine) + B6 is approved for morning sickness'
    ],
    trimesterNotes: 'Safe throughout pregnancy.',
    sources: ['ACOG', 'MotherToBaby', 'FDA']
  },

  'zofran': {
    item: 'Zofran / Ondansetron',
    safetyLevel: 'caution',
    summary: 'Zofran is commonly prescribed for severe nausea. Some studies show slight risks; discuss with doctor.',
    directRisks: [
      'Some studies suggest small increased risk of cleft palate in first trimester',
      'Other studies show no increased risk - data is mixed'
    ],
    generalRisks: [],
    recommendations: [
      'Often prescribed when other treatments fail',
      'Discuss risks and benefits with your doctor',
      'Usually reserved for severe nausea/vomiting (hyperemesis)',
      'Try B6, Unisom, ginger, and dietary changes first'
    ],
    trimesterNotes: {
      t1: 'Most concern about first trimester use - discuss with doctor',
      t2: 'Less concern after first trimester',
      t3: 'Generally not needed; nausea usually resolved'
    },
    sources: ['FDA', 'ACOG', 'MotherToBaby']
  },

  'antidepressants': {
    item: 'Antidepressants / SSRIs',
    safetyLevel: 'caution',
    summary: 'Many antidepressants can be taken during pregnancy. Untreated depression also carries risks.',
    directRisks: [
      'Some SSRIs associated with small risks (heart defects, pulmonary hypertension)',
      'Risks are generally small and must be weighed against untreated depression'
    ],
    generalRisks: [],
    recommendations: [
      'Do NOT stop medication without talking to your doctor',
      'Untreated depression/anxiety also affects pregnancy',
      'Sertraline (Zoloft) is often first choice during pregnancy',
      'Work with psychiatrist and OB together',
      'Benefits of treatment often outweigh small risks'
    ],
    trimesterNotes: {
      t1: 'Some medications may need adjustment',
      t2: 'Continue medication as directed',
      t3: 'Some babies may have temporary adjustment symptoms after birth'
    },
    sources: ['ACOG', 'APA', 'MotherToBaby']
  },

  'cbd': {
    item: 'CBD / Cannabis',
    safetyLevel: 'avoid',
    summary: 'CBD and marijuana are not recommended during pregnancy. Limited research, potential risks.',
    directRisks: [
      'THC crosses placenta and affects fetal brain development',
      'Associated with low birth weight and preterm birth',
      'CBD products often contain THC and are unregulated'
    ],
    generalRisks: [],
    recommendations: [
      'Avoid all cannabis products during pregnancy',
      'CBD products are not regulated - may contain THC',
      'For nausea, talk to doctor about safe alternatives',
      'For anxiety, discuss safe treatments with your provider'
    ],
    trimesterNotes: 'Avoid throughout pregnancy and breastfeeding.',
    sources: ['ACOG', 'FDA', 'AAP']
  },

  'essential oils': {
    item: 'Essential Oils / Aromatherapy',
    safetyLevel: 'caution',
    summary: 'Some essential oils are safe when diluted and used aromatically. Avoid ingesting.',
    directRisks: [
      'Some oils can stimulate uterus (clary sage, rosemary)',
      'Never ingest essential oils during pregnancy'
    ],
    generalRisks: [
      'Undiluted oils can cause skin reactions'
    ],
    recommendations: [
      'Generally safe for aromatherapy: lavender, lemon, ginger, peppermint',
      'Always dilute before skin contact',
      'Never ingest essential oils',
      'Avoid: clary sage, rosemary, cinnamon bark, juniper in first trimester',
      'Diffusing is safest method'
    ],
    trimesterNotes: {
      t1: 'Be more cautious - avoid stimulating oils',
      t2: 'Safe oils okay for aromatherapy',
      t3: 'Clary sage sometimes used to encourage labor at term'
    },
    sources: ['NAHA (National Association for Holistic Aromatherapy)', 'MotherToBaby']
  },

  'prenatal vitamins': {
    item: 'Prenatal Vitamins',
    safetyLevel: 'safe',
    summary: 'Prenatal vitamins are recommended before, during, and after pregnancy!',
    directRisks: [],
    generalRisks: [
      'May cause nausea if taken on empty stomach',
      'Iron can cause constipation'
    ],
    recommendations: [
      'Start taking before conception if possible',
      'Most important: folic acid (at least 400mcg) to prevent neural tube defects',
      'Take with food if nauseous',
      'If constipated, try gummy vitamins (less iron) and increase fiber',
      'Continue through breastfeeding'
    ],
    trimesterNotes: {
      t1: 'Folic acid most critical now - neural tube forming',
      t2: 'Iron becomes more important as blood volume increases',
      t3: 'Continue taking; omega-3 (DHA) important for brain development'
    },
    sources: ['ACOG', 'CDC', 'March of Dimes']
  },

  'vitamin d': {
    item: 'Vitamin D',
    safetyLevel: 'safe',
    summary: 'Vitamin D supplementation is often recommended during pregnancy, especially if deficient.',
    directRisks: [],
    generalRisks: [
      'Very high doses (>4000 IU daily) should be doctor-supervised'
    ],
    recommendations: [
      'Most prenatals contain 400-600 IU',
      'Many women need additional supplementation (1000-2000 IU)',
      'Get levels checked if concerned about deficiency',
      'Important for bone health and immune function',
      'Safe sun exposure also helps'
    ],
    trimesterNotes: 'Safe and often recommended throughout pregnancy.',
    sources: ['ACOG', 'Endocrine Society']
  },

  'fish oil': {
    item: 'Fish Oil / Omega-3 / DHA',
    safetyLevel: 'safe',
    summary: 'Fish oil/DHA supplements are beneficial during pregnancy for baby\'s brain development.',
    directRisks: [],
    generalRisks: [
      'Fish burps/taste - try refrigerating or taking with meals',
      'Check for mercury-tested/purified products'
    ],
    recommendations: [
      'DHA is important for fetal brain and eye development',
      'Look for products tested for mercury and PCBs',
      'Aim for 200-300mg DHA daily',
      'Can also get from low-mercury fish (salmon, sardines)',
      'Some prenatals include DHA'
    ],
    trimesterNotes: {
      t1: 'Start taking - brain development begins early',
      t2: 'Continue supplementation',
      t3: 'Most brain growth occurs now - DHA especially important'
    },
    sources: ['ACOG', 'American Academy of Pediatrics']
  },

  // ===== HOUSEHOLD =====
  'cleaning products': {
    item: 'Cleaning Products',
    safetyLevel: 'safe',
    summary: 'Most household cleaners are safe with good ventilation. Avoid mixing products.',
    directRisks: [
      'No evidence that occasional cleaning harms pregnancy'
    ],
    generalRisks: [
      'Strong fumes can cause nausea or headaches',
      'Never mix bleach with ammonia'
    ],
    recommendations: [
      'Use in well-ventilated areas',
      'Wear gloves to protect skin',
      'Avoid oven cleaners and drain cleaners in enclosed spaces',
      'Green/natural products are fine but not necessary',
      'Good excuse to have someone else clean!'
    ],
    trimesterNotes: 'Same precautions throughout pregnancy.',
    sources: ['ACOG', 'MotherToBaby']
  },

  'bug spray': {
    item: 'Bug Spray / Insect Repellent',
    safetyLevel: 'safe',
    summary: 'EPA-registered bug sprays are safe during pregnancy and important for preventing Zika and other diseases.',
    directRisks: [],
    generalRisks: [],
    recommendations: [
      'DEET, picaridin, IR3535, and oil of lemon eucalyptus are all safe',
      'Important to use in areas with Zika, West Nile, or Lyme disease',
      'Follow label directions',
      'Apply to clothing when possible',
      'Wash off when you go indoors'
    ],
    trimesterNotes: 'Safe throughout pregnancy - disease prevention is important.',
    sources: ['CDC', 'EPA', 'ACOG']
  },

  'cat litter': {
    item: 'Cat Litter / Toxoplasmosis',
    safetyLevel: 'avoid',
    summary: 'Avoid changing cat litter due to toxoplasmosis risk. Keep your cat - just delegate litter duty!',
    directRisks: [
      'Toxoplasmosis can cause serious birth defects',
      'Parasite found in cat feces'
    ],
    generalRisks: [],
    recommendations: [
      'Have someone else change the litter box',
      'If you must do it, wear gloves and wash hands thoroughly',
      'Indoor cats are lower risk',
      'You do NOT need to get rid of your cat!',
      'Wear gloves when gardening (cats use gardens as litter boxes)'
    ],
    trimesterNotes: 'Same precautions throughout pregnancy.',
    sources: ['CDC', 'ACOG']
  },

  'paint': {
    item: 'Paint / Painting',
    safetyLevel: 'caution',
    summary: 'Painting is generally safe with good ventilation. Avoid oil-based paints and lead paint.',
    directRisks: [
      'Lead paint (pre-1978 homes) is dangerous - do not sand or remove',
      'Oil-based paints have stronger fumes'
    ],
    generalRisks: [
      'Fumes can cause headaches and nausea'
    ],
    recommendations: [
      'Water-based (latex) paints are safest',
      'Ensure good ventilation - open windows, use fans',
      'Take frequent breaks for fresh air',
      'Avoid scraping/sanding old paint (may contain lead)',
      'Consider having someone else paint, or hire professionals'
    ],
    trimesterNotes: 'Same precautions throughout pregnancy.',
    sources: ['ACOG', 'EPA', 'MotherToBaby']
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

  // Check for exact word matches in keys (avoid "apple" matching "pineapple")
  for (const key of Object.keys(pregnancyDatabase)) {
    // Only match if query equals key, or query contains key as a whole word
    if (key === normalizedQuery) {
      return pregnancyDatabase[key]
    }
    // Check if the query contains the key as a complete word (with word boundaries)
    const keyWords = key.split(' ')
    const queryWords = normalizedQuery.split(' ')
    // Only match if words are exact or differ by just 1-2 chars (for plurals like "peanut" vs "peanuts")
    const isCloseMatch = (a, b) => {
      if (a === b) return true
      // Allow plural forms (differ by 1-2 chars at end)
      if (a.startsWith(b) && a.length - b.length <= 2) return true
      if (b.startsWith(a) && b.length - a.length <= 2) return true
      return false
    }
    if (keyWords.every(kw => queryWords.some(qw => isCloseMatch(kw, qw)))) {
      return pregnancyDatabase[key]
    }
  }

  // Check for matches in item names - be more strict
  for (const entry of Object.values(pregnancyDatabase)) {
    const itemLower = entry.item.toLowerCase()
    const itemFirstPart = itemLower.split('/')[0].trim()
    // Exact match on first part of item name
    if (itemFirstPart === normalizedQuery || normalizedQuery === itemLower) {
      return entry
    }
  }

  // Common aliases
  const aliases = {
    // Caffeine
    'coffee': 'caffeine',
    'tea': 'caffeine',
    'espresso': 'caffeine',
    'latte': 'caffeine',
    'cappuccino': 'caffeine',
    'matcha': 'caffeine',

    // Sushi/Fish
    'raw fish': 'sushi',
    'sashimi': 'sushi',
    'salmon': 'sushi',
    'tuna': 'sushi',
    'poke': 'sushi',
    'ceviche': 'sushi',

    // Hot water
    'hot tub': 'hot springs',
    'sauna': 'hot springs',
    'jacuzzi': 'hot springs',
    'onsen': 'hot springs',
    'mineral springs': 'hot springs',
    'spa': 'hot springs',
    'steam room': 'hot springs',
    'hot bath': 'hot springs',

    // Deli meat
    'ham': 'deli meat',
    'turkey': 'deli meat',
    'salami': 'deli meat',
    'prosciutto': 'deli meat',
    'cold cuts': 'deli meat',
    'lunch meat': 'deli meat',
    'bologna': 'deli meat',
    'pastrami': 'deli meat',
    'pepperoni': 'deli meat',

    // Soft cheese
    'brie': 'soft cheese',
    'camembert': 'soft cheese',
    'feta': 'soft cheese',
    'goat cheese': 'soft cheese',
    'blue cheese': 'soft cheese',
    'queso fresco': 'soft cheese',

    // Alcohol
    'wine': 'alcohol',
    'beer': 'alcohol',
    'cocktail': 'alcohol',
    'liquor': 'alcohol',
    'champagne': 'alcohol',
    'sake': 'alcohol',
    'margarita': 'alcohol',
    'mimosa': 'alcohol',

    // Retinol
    'retin-a': 'retinol',
    'tretinoin': 'retinol',
    'vitamin a': 'retinol',
    'accutane': 'retinol',
    'isotretinoin': 'retinol',
    'adapalene': 'retinol',
    'differin': 'retinol',
    'retinoid': 'retinol',

    // Salicylic acid
    'bha': 'salicylic acid',
    'beta hydroxy': 'salicylic acid',

    // Ibuprofen
    'advil': 'ibuprofen',
    'motrin': 'ibuprofen',
    'naproxen': 'ibuprofen',
    'aleve': 'ibuprofen',
    'aspirin': 'ibuprofen',
    'nsaid': 'ibuprofen',

    // Tylenol
    'acetaminophen': 'tylenol',
    'paracetamol': 'tylenol',

    // Exercise
    'workout': 'exercise',
    'gym': 'exercise',
    'running': 'exercise',
    'yoga': 'exercise',
    'pilates': 'exercise',
    'jogging': 'exercise',
    'lifting': 'exercise',
    'weights': 'exercise',

    // Flying
    'flight': 'flying',
    'airplane': 'flying',
    'travel': 'flying',
    'plane': 'flying',
    'air travel': 'flying',

    // Sunscreen
    'spf': 'sunscreen',
    'sun protection': 'sunscreen',

    // Kombucha
    'booch': 'kombucha',

    // Eggs
    'runny eggs': 'eggs',
    'raw eggs': 'eggs',
    'sunny side up': 'eggs',
    'poached eggs': 'eggs',
    'soft boiled': 'eggs',
    'over easy': 'eggs',

    // Shellfish
    'shrimp': 'shellfish',
    'crab': 'shellfish',
    'lobster': 'shellfish',
    'scallops': 'shellfish',
    'oysters': 'shellfish',
    'clams': 'shellfish',
    'mussels': 'shellfish',
    'prawns': 'shellfish',
    'crawfish': 'shellfish',

    // Hot dogs
    'frankfurter': 'hot dogs',
    'wiener': 'hot dogs',
    'sausage': 'hot dogs',

    // Peanuts
    'nuts': 'peanuts',
    'almonds': 'peanuts',
    'cashews': 'peanuts',
    'walnuts': 'peanuts',
    'pistachios': 'peanuts',
    'peanut butter': 'peanuts',

    // Green tea
    'black tea': 'green tea',
    'oolong': 'green tea',
    'chai': 'green tea',

    // Energy drinks
    'red bull': 'energy drinks',
    'monster': 'energy drinks',
    'celsius': 'energy drinks',
    'bang': 'energy drinks',

    // Hair dye
    'hair color': 'hair dye',
    'highlights': 'hair dye',
    'balayage': 'hair dye',
    'bleach hair': 'hair dye',

    // Nail polish
    'manicure': 'nail polish',
    'pedicure': 'nail polish',
    'gel nails': 'nail polish',
    'acrylic nails': 'nail polish',

    // Botox
    'filler': 'botox',
    'lip filler': 'botox',
    'juvederm': 'botox',
    'restylane': 'botox',

    // Self tanner
    'spray tan': 'self tanner',
    'fake tan': 'self tanner',
    'tanning bed': 'self tanner',
    'tanning': 'self tanner',

    // Massage
    'prenatal massage': 'massage',
    'back rub': 'massage',
    'deep tissue': 'massage',

    // Swimming
    'pool': 'swimming',
    'chlorine': 'swimming',
    'ocean': 'swimming',
    'beach': 'swimming',

    // Sleep
    'sleep': 'sleeping position',
    'sleeping': 'sleeping position',
    'back sleeping': 'sleeping position',
    'side sleeping': 'sleeping position',

    // X-ray
    'radiation': 'x-ray',
    'ct scan': 'x-ray',
    'dental x-ray': 'x-ray',
    'mri': 'x-ray',

    // Benadryl
    'diphenhydramine': 'benadryl',
    'antihistamine': 'benadryl',
    'allergy medicine': 'benadryl',
    'zyrtec': 'benadryl',
    'claritin': 'benadryl',
    'allegra': 'benadryl',

    // Antidepressants
    'ssri': 'antidepressants',
    'zoloft': 'antidepressants',
    'lexapro': 'antidepressants',
    'prozac': 'antidepressants',
    'wellbutrin': 'antidepressants',
    'sertraline': 'antidepressants',
    'anxiety medication': 'antidepressants',

    // CBD
    'marijuana': 'cbd',
    'weed': 'cbd',
    'cannabis': 'cbd',
    'thc': 'cbd',
    'edibles': 'cbd',
    'pot': 'cbd',

    // Essential oils
    'aromatherapy': 'essential oils',
    'lavender oil': 'essential oils',
    'diffuser': 'essential oils',

    // Prenatal vitamins
    'prenatal': 'prenatal vitamins',
    'folic acid': 'prenatal vitamins',
    'folate': 'prenatal vitamins',

    // Fish oil
    'omega 3': 'fish oil',
    'omega-3': 'fish oil',
    'dha': 'fish oil',
    'epa': 'fish oil',

    // Cat litter
    'toxoplasmosis': 'cat litter',
    'litter box': 'cat litter',
    'kitty litter': 'cat litter',

    // Paint
    'painting': 'paint',
    'nursery painting': 'paint',
    'fumes': 'paint',

    // Cleaning
    'bleach': 'cleaning products',
    'windex': 'cleaning products',
    'lysol': 'cleaning products',
    'cleaning': 'cleaning products',

    // Bug spray
    'deet': 'bug spray',
    'mosquito repellent': 'bug spray',
    'insect repellent': 'bug spray',
    'off spray': 'bug spray',

    // Herbal tea
    'chamomile': 'herbal tea',
    'peppermint tea': 'herbal tea',
    'ginger tea': 'herbal tea',
    'raspberry leaf': 'herbal tea',

    // Glycolic acid
    'aha': 'glycolic acid',
    'alpha hydroxy': 'glycolic acid',
    'lactic acid': 'glycolic acid',

    // Vitamin C
    'vitamin c': 'vitamin c serum',
    'ascorbic acid': 'vitamin c serum',

    // Spicy food
    'spicy': 'spicy food',
    'hot sauce': 'spicy food',
    'jalapeno': 'spicy food',
    'sriracha': 'spicy food',

    // Blue pea flower
    'butterfly pea': 'blue pea flower',
    'butterfly pea flower': 'blue pea flower',
    'clitoria ternatea': 'blue pea flower',
    'asian pigeonwings': 'blue pea flower',
    'blue tea': 'blue pea flower'
  }

  if (aliases[normalizedQuery]) {
    return pregnancyDatabase[aliases[normalizedQuery]]
  }

  // Check aliases for partial matches - but only if the match is a complete word
  for (const [alias, key] of Object.entries(aliases)) {
    // Check if query contains alias as a complete word (not just substring)
    const queryWords = normalizedQuery.split(/\s+/)
    const aliasWords = alias.split(/\s+/)
    // Match if all alias words appear as complete words in query
    if (aliasWords.every(aw => queryWords.some(qw => qw === aw || qw === aw + 's' || qw + 's' === aw))) {
      return pregnancyDatabase[key]
    }
  }

  return null
}
