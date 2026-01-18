export function ResultCard({ result, trimester }) {
  const {
    item,
    safetyLevel,
    summary,
    directRisks,
    generalRisks,
    recommendations,
    trimesterNotes,
    sources
  } = result

  const safetyConfig = {
    safe: {
      badge: 'Generally Safe',
      badgeClass: 'badge-safe',
      cardClass: 'result-card-safe',
      icon: '✓',
      color: 'text-emerald-700'
    },
    caution: {
      badge: 'Use Caution',
      badgeClass: 'badge-caution',
      cardClass: 'result-card-caution',
      icon: '⚠',
      color: 'text-amber-700'
    },
    avoid: {
      badge: 'Best to Avoid',
      badgeClass: 'badge-avoid',
      cardClass: 'result-card-avoid',
      icon: '✗',
      color: 'text-red-700'
    }
  }

  const config = safetyConfig[safetyLevel] || safetyConfig.caution

  return (
    <div className={`rounded-2xl p-6 ${config.cardClass} space-y-5`}>
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{item}</h2>
          <p className="text-gray-600 mt-1">{summary}</p>
        </div>
        <span className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap ${config.badgeClass}`}>
          {config.icon} {config.badge}
        </span>
      </div>

      {/* Direct risks to baby */}
      {directRisks && directRisks.length > 0 && (
        <div className="bg-white/60 rounded-xl p-4">
          <h3 className="font-semibold text-red-700 flex items-center gap-2 mb-2">
            <span className="text-lg">👶</span>
            Direct Risks to Baby
          </h3>
          <ul className="space-y-2">
            {directRisks.map((risk, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <span className="text-red-500 mt-1">•</span>
                <span>{risk}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* General risks (not pregnancy-specific) */}
      {generalRisks && generalRisks.length > 0 && (
        <div className="bg-white/40 rounded-xl p-4">
          <h3 className="font-semibold text-gray-600 flex items-center gap-2 mb-2">
            <span className="text-lg">ℹ️</span>
            General Risks (applies to everyone)
          </h3>
          <ul className="space-y-2">
            {generalRisks.map((risk, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-600">
                <span className="text-gray-400 mt-1">•</span>
                <span>{risk}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Trimester-specific notes */}
      {trimesterNotes && (
        <div className="bg-white/50 rounded-xl p-4">
          <h3 className="font-semibold text-purple-700 flex items-center gap-2 mb-2">
            <span className="text-lg">📅</span>
            {trimester ? `Trimester ${trimester} Specific` : 'By Trimester'}
          </h3>
          {typeof trimesterNotes === 'string' ? (
            <p className="text-gray-700">{trimesterNotes}</p>
          ) : (
            <div className="space-y-2">
              {trimesterNotes.t1 && (
                <p className="text-gray-700"><strong>1st:</strong> {trimesterNotes.t1}</p>
              )}
              {trimesterNotes.t2 && (
                <p className="text-gray-700"><strong>2nd:</strong> {trimesterNotes.t2}</p>
              )}
              {trimesterNotes.t3 && (
                <p className="text-gray-700"><strong>3rd:</strong> {trimesterNotes.t3}</p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Recommendations */}
      {recommendations && recommendations.length > 0 && (
        <div className="bg-white/50 rounded-xl p-4">
          <h3 className="font-semibold text-emerald-700 flex items-center gap-2 mb-2">
            <span className="text-lg">💡</span>
            Recommendations
          </h3>
          <ul className="space-y-2">
            {recommendations.map((rec, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-500 mt-1">→</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Sources */}
      {sources && sources.length > 0 && (
        <div className="pt-4 border-t border-gray-200/50">
          <p className="text-xs text-gray-500">
            <strong>Sources:</strong> {sources.join(', ')}
          </p>
        </div>
      )}
    </div>
  )
}
