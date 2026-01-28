import { LeafSprig, FallingLeaf, WiltedFlower } from './GhibliIcons'

export function ResultCard({ result, trimester }) {
  // Handle case where result might be a string (JSON)
  let parsedResult = result
  if (typeof result === 'string') {
    try {
      parsedResult = JSON.parse(result)
    } catch (e) {
      // If it's not valid JSON, show as-is
      return (
        <div className="ghibli-card p-5">
          <p className="text-[#5a5a5a]">{result}</p>
        </div>
      )
    }
  }

  // Handle menu analysis with multiple items
  if (parsedResult.menuAnalysis && parsedResult.items) {
    return <MenuResultCard result={parsedResult} />
  }

  // Also check if items array exists without menuAnalysis flag
  if (parsedResult.items && Array.isArray(parsedResult.items)) {
    return <MenuResultCard result={{ ...parsedResult, menuAnalysis: true }} />
  }

  const {
    item,
    safetyLevel,
    summary,
    directRisks,
    generalRisks,
    recommendations,
    trimesterNotes,
    sources
  } = parsedResult

  const safetyConfig = {
    safe: {
      badge: 'Generally Safe',
      badgeClass: 'badge-safe',
      cardClass: 'result-card-safe',
      Icon: LeafSprig,
      headerColor: 'text-[#3d5c47]'
    },
    caution: {
      badge: 'Use Caution',
      badgeClass: 'badge-caution',
      cardClass: 'result-card-caution',
      Icon: FallingLeaf,
      headerColor: 'text-[#6b5a30]'
    },
    avoid: {
      badge: 'Best to Avoid',
      badgeClass: 'badge-avoid',
      cardClass: 'result-card-avoid',
      Icon: WiltedFlower,
      headerColor: 'text-[#7a4a42]'
    }
  }

  const config = safetyConfig[safetyLevel] || safetyConfig.caution
  const StatusIcon = config.Icon

  return (
    <div className={`rounded-3xl p-6 ${config.cardClass} space-y-5`}>
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className={`text-2xl font-bold ${config.headerColor}`}>{item}</h2>
          <p className="text-[#5a4a3a] mt-2 leading-relaxed">{summary}</p>
        </div>
        <span className={`px-4 py-2 rounded-2xl font-semibold text-sm whitespace-nowrap flex items-center gap-2 ${config.badgeClass}`}>
          <StatusIcon className="w-5 h-5" />
          <span>{config.badge}</span>
        </span>
      </div>

      {/* Direct risks to baby */}
      {directRisks && directRisks.length > 0 && (
        <div className="bg-white/50 rounded-2xl p-5 border border-[#c47d6d]/20">
          <h3 className="font-bold text-[#7a4a42] flex items-center gap-2 mb-3">
            <BabyIcon className="w-5 h-5" />
            Direct Risks to Baby
          </h3>
          <ul className="space-y-2">
            {directRisks.map((risk, i) => (
              <li key={i} className="flex items-start gap-3 text-[#4a4a4a]">
                <span className="text-[#c47d6d] mt-0.5">●</span>
                <span>{risk}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* General risks */}
      {generalRisks && generalRisks.length > 0 && (
        <div className="bg-white/40 rounded-2xl p-5 border border-[#8b7355]/15">
          <h3 className="font-bold text-[#6b5a45] flex items-center gap-2 mb-3">
            <InfoIcon className="w-5 h-5" />
            General Risks (applies to everyone)
          </h3>
          <ul className="space-y-2">
            {generalRisks.map((risk, i) => (
              <li key={i} className="flex items-start gap-3 text-[#4a4a4a]/80">
                <span className="text-[#8b7355]/60 mt-0.5">●</span>
                <span>{risk}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Trimester notes */}
      {trimesterNotes && (
        <div className="bg-white/40 rounded-2xl p-5 border border-[#a8c5d9]/30">
          <h3 className="font-bold text-[#4a6a7a] flex items-center gap-2 mb-3">
            <CalendarIcon className="w-5 h-5" />
            {trimester ? `Trimester ${trimester} Notes` : 'By Trimester'}
          </h3>
          {typeof trimesterNotes === 'string' ? (
            <p className="text-[#4a4a4a]">{trimesterNotes}</p>
          ) : (
            <div className="space-y-2">
              {trimesterNotes.t1 && (
                <p className="text-[#4a4a4a]">
                  <span className="font-semibold text-[#c47d6d]">1st:</span> {trimesterNotes.t1}
                </p>
              )}
              {trimesterNotes.t2 && (
                <p className="text-[#4a4a4a]">
                  <span className="font-semibold text-[#6b9b7a]">2nd:</span> {trimesterNotes.t2}
                </p>
              )}
              {trimesterNotes.t3 && (
                <p className="text-[#4a4a4a]">
                  <span className="font-semibold text-[#5a8aaa]">3rd:</span> {trimesterNotes.t3}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Recommendations */}
      {recommendations && recommendations.length > 0 && (
        <div className="bg-white/50 rounded-2xl p-5 border border-[#94b49f]/30">
          <h3 className="font-bold text-[#3d5c47] flex items-center gap-2 mb-3">
            <LightbulbIcon className="w-5 h-5" />
            Recommendations
          </h3>
          <ul className="space-y-2">
            {recommendations.map((rec, i) => (
              <li key={i} className="flex items-start gap-3 text-[#4a4a4a]">
                <span className="text-[#6b9b7a] mt-0.5">→</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Sources */}
      {sources && sources.length > 0 && (
        <div className="pt-4 border-t border-[#94b49f]/20">
          <p className="text-xs text-[#6b7b6b]/70">
            <span className="font-semibold">Sources:</span>{' '}
            {sources.map((source, i) => (
              <span key={i}>
                {i > 0 && ', '}
                {source.startsWith('http') ? (
                  <a
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a7c59] underline hover:text-[#3d5c47]"
                  >
                    {new URL(source).hostname.replace('www.', '')}
                  </a>
                ) : (
                  <span>{source}</span>
                )}
              </span>
            ))}
          </p>
        </div>
      )}

    </div>
  )
}

// Custom mini icons for sections
function BabyIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="2" />
      <path d="M12 13c-4 0-7 3-7 6v2h14v-2c0-3-3-6-7-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="10" cy="7" r="1" fill="currentColor" />
      <circle cx="14" cy="7" r="1" fill="currentColor" />
      <path d="M10 9.5c.5.5 1.5 1 2 1s1.5-.5 2-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function InfoIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 16v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="8" r="1" fill="currentColor" />
    </svg>
  )
}

function CalendarIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect x="3" y="5" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
      <path d="M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="8" cy="15" r="1.5" fill="currentColor" />
      <circle cx="12" cy="15" r="1.5" fill="currentColor" />
      <circle cx="16" cy="15" r="1.5" fill="currentColor" />
    </svg>
  )
}

function LightbulbIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path d="M9 21h6M12 3a6 6 0 016 6c0 2.5-1.5 4-3 5.5V17a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2.5C7.5 13 6 11.5 6 9a6 6 0 016-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 14h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

// Menu/Ingredient analysis card for multiple items
function MenuResultCard({ result }) {
  const { items, overallAdvice, analysisType } = result

  // Determine header based on analysis type
  const getHeader = () => {
    switch (analysisType) {
      case 'ingredients':
        return { title: 'Ingredient Analysis', subtitle: 'ingredients identified' }
      case 'product':
        return { title: 'Product Analysis', subtitle: 'ingredients checked' }
      case 'menu':
      default:
        return { title: 'Menu Analysis', subtitle: 'items analyzed' }
    }
  }

  const header = getHeader()

  const getSafetyStyle = (level) => {
    switch (level) {
      case 'safe':
        return { bg: 'bg-[#d4e8d4]', text: 'text-[#3d5c47]', border: 'border-[#94b49f]', icon: '✓' }
      case 'caution':
        return { bg: 'bg-[#f5e6d3]', text: 'text-[#6b5a30]', border: 'border-[#d4b896]', icon: '⚠' }
      case 'avoid':
        return { bg: 'bg-[#f5d4d4]', text: 'text-[#7a4a42]', border: 'border-[#d4a5a5]', icon: '✗' }
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-300', icon: '?' }
    }
  }

  // Group items by safety level
  const safeItems = items?.filter(i => i.safetyLevel === 'safe') || []
  const cautionItems = items?.filter(i => i.safetyLevel === 'caution') || []
  const avoidItems = items?.filter(i => i.safetyLevel === 'avoid') || []

  return (
    <div className="space-y-4">
      <div className="ghibli-card p-5">
        <h2 className="text-xl font-bold text-[#4a5a4a] mb-2">{header.title}</h2>
        <p className="text-[#6b7b6b] text-sm">{items?.length || 0} {header.subtitle}</p>
      </div>

      {/* Avoid items first (most important) */}
      {avoidItems.length > 0 && (
        <div className="rounded-2xl p-5 bg-[#fdf2f2] border-2 border-[#e8b4b4]">
          <h3 className="font-bold text-[#7a4a42] mb-3 flex items-center gap-2">
            <WiltedFlower className="w-5 h-5" />
            Best to Avoid ({avoidItems.length})
          </h3>
          <div className="space-y-3">
            {avoidItems.map((item, i) => (
              <div key={i} className="bg-white/60 rounded-xl p-3">
                <div className="font-semibold text-[#7a4a42]">{item.item}</div>
                <p className="text-sm text-[#5a4a4a] mt-1">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Caution items */}
      {cautionItems.length > 0 && (
        <div className="rounded-2xl p-5 bg-[#fdf8f2] border-2 border-[#e8d4b4]">
          <h3 className="font-bold text-[#6b5a30] mb-3 flex items-center gap-2">
            <FallingLeaf className="w-5 h-5" />
            Use Caution ({cautionItems.length})
          </h3>
          <div className="space-y-3">
            {cautionItems.map((item, i) => (
              <div key={i} className="bg-white/60 rounded-xl p-3">
                <div className="font-semibold text-[#6b5a30]">{item.item}</div>
                <p className="text-sm text-[#5a4a4a] mt-1">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Safe items */}
      {safeItems.length > 0 && (
        <div className="rounded-2xl p-5 bg-[#f2fdf4] border-2 border-[#b4e8be]">
          <h3 className="font-bold text-[#3d5c47] mb-3 flex items-center gap-2">
            <LeafSprig className="w-5 h-5" />
            Generally Safe ({safeItems.length})
          </h3>
          <div className="space-y-3">
            {safeItems.map((item, i) => (
              <div key={i} className="bg-white/60 rounded-xl p-3">
                <div className="font-semibold text-[#3d5c47]">{item.item}</div>
                <p className="text-sm text-[#5a4a4a] mt-1">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Overall advice */}
      {overallAdvice && (
        <div className="ghibli-card p-5">
          <h3 className="font-bold text-[#4a5a4a] mb-2">Overall Advice</h3>
          <p className="text-[#5a5a5a]">{overallAdvice}</p>
        </div>
      )}
    </div>
  )
}
