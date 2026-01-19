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
      icon: '🌿',
      headerColor: 'text-[#4a6b47]'
    },
    caution: {
      badge: 'Use Caution',
      badgeClass: 'badge-caution',
      cardClass: 'result-card-caution',
      icon: '🍂',
      headerColor: 'text-[#7a6030]'
    },
    avoid: {
      badge: 'Best to Avoid',
      badgeClass: 'badge-avoid',
      cardClass: 'result-card-avoid',
      icon: '🥀',
      headerColor: 'text-[#8a4a42]'
    }
  }

  const config = safetyConfig[safetyLevel] || safetyConfig.caution

  return (
    <div className={`rounded-3xl p-6 ${config.cardClass} space-y-5`}>
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className={`text-2xl font-bold ${config.headerColor}`}>{item}</h2>
          <p className="text-[#5a4a3a] mt-2 leading-relaxed">{summary}</p>
        </div>
        <span className={`px-4 py-2 rounded-2xl font-semibold text-sm whitespace-nowrap flex items-center gap-2 ${config.badgeClass}`}>
          <span>{config.icon}</span>
          <span>{config.badge}</span>
        </span>
      </div>

      {/* Direct risks to baby */}
      {directRisks && directRisks.length > 0 && (
        <div className="bg-white/50 rounded-2xl p-5 border border-[#d4847a]/20">
          <h3 className="font-bold text-[#8a4a42] flex items-center gap-2 mb-3">
            <span className="text-xl">👶</span>
            Direct Risks to Baby
          </h3>
          <ul className="space-y-2">
            {directRisks.map((risk, i) => (
              <li key={i} className="flex items-start gap-3 text-[#5a4a3a]">
                <span className="text-[#d4847a] mt-0.5">●</span>
                <span>{risk}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* General risks */}
      {generalRisks && generalRisks.length > 0 && (
        <div className="bg-white/40 rounded-2xl p-5 border border-[#8b7355]/10">
          <h3 className="font-bold text-[#8b7355] flex items-center gap-2 mb-3">
            <span className="text-xl">ℹ️</span>
            General Risks (applies to everyone)
          </h3>
          <ul className="space-y-2">
            {generalRisks.map((risk, i) => (
              <li key={i} className="flex items-start gap-3 text-[#5a4a3a]/80">
                <span className="text-[#8b7355]/60 mt-0.5">●</span>
                <span>{risk}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Trimester notes */}
      {trimesterNotes && (
        <div className="bg-white/40 rounded-2xl p-5 border border-[#b5d4e8]/30">
          <h3 className="font-bold text-[#5a7a9a] flex items-center gap-2 mb-3">
            <span className="text-xl">📅</span>
            {trimester ? `Trimester ${trimester} Notes` : 'By Trimester'}
          </h3>
          {typeof trimesterNotes === 'string' ? (
            <p className="text-[#5a4a3a]">{trimesterNotes}</p>
          ) : (
            <div className="space-y-2">
              {trimesterNotes.t1 && (
                <p className="text-[#5a4a3a]">
                  <span className="font-semibold text-[#e8b4b8]">1st:</span> {trimesterNotes.t1}
                </p>
              )}
              {trimesterNotes.t2 && (
                <p className="text-[#5a4a3a]">
                  <span className="font-semibold text-[#a8c5a0]">2nd:</span> {trimesterNotes.t2}
                </p>
              )}
              {trimesterNotes.t3 && (
                <p className="text-[#5a4a3a]">
                  <span className="font-semibold text-[#b5d4e8]">3rd:</span> {trimesterNotes.t3}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Recommendations */}
      {recommendations && recommendations.length > 0 && (
        <div className="bg-white/50 rounded-2xl p-5 border border-[#a8c5a0]/30">
          <h3 className="font-bold text-[#4a6b47] flex items-center gap-2 mb-3">
            <span className="text-xl">💡</span>
            Recommendations
          </h3>
          <ul className="space-y-2">
            {recommendations.map((rec, i) => (
              <li key={i} className="flex items-start gap-3 text-[#5a4a3a]">
                <span className="text-[#7fb685] mt-0.5">→</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Sources */}
      {sources && sources.length > 0 && (
        <div className="pt-4 border-t border-[#8b7355]/10">
          <p className="text-xs text-[#8b7355]/70">
            <span className="font-semibold">Sources:</span> {sources.join(', ')}
          </p>
        </div>
      )}
    </div>
  )
}
