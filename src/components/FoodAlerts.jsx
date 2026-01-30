import { useState, useEffect } from 'react'
import { fetchPregnancyRelevantRecalls } from '../lib/foodAlerts'

export function FoodAlerts() {
  const [alerts, setAlerts] = useState([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    async function loadAlerts() {
      try {
        const recalls = await fetchPregnancyRelevantRecalls()
        setAlerts(recalls)
      } catch (error) {
        console.error('Failed to load food alerts:', error)
      } finally {
        setLoading(false)
      }
    }
    loadAlerts()
  }, [])

  if (loading) {
    return (
      <div className="ghibli-card p-4">
        <div className="flex items-center gap-2 text-[#6b7b6b]">
          <AlertIcon className="w-5 h-5 animate-pulse" />
          <span className="text-sm">Checking food safety alerts...</span>
        </div>
      </div>
    )
  }

  if (alerts.length === 0) {
    return (
      <div className="ghibli-card p-4">
        <div className="flex items-center gap-2 text-[#6b9b7a]">
          <CheckIcon className="w-5 h-5" />
          <span className="text-sm font-medium">No active high-risk food recalls</span>
        </div>
      </div>
    )
  }

  const highRiskAlerts = alerts.filter(a => a.pregnancyRisk === 'high')
  const otherAlerts = alerts.filter(a => a.pregnancyRisk !== 'high')
  const displayAlerts = expanded ? alerts : alerts.slice(0, 3)

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertIcon className="w-5 h-5 text-[#c47d6d]" />
          <h3 className="font-bold text-[#4a5a4a]">Food Safety Alerts</h3>
          {highRiskAlerts.length > 0 && (
            <span className="px-2 py-0.5 bg-[#f5d4d4] text-[#7a4a42] text-xs font-bold rounded-full">
              {highRiskAlerts.length} High Risk
            </span>
          )}
        </div>
      </div>

      {/* Live FDA Link */}
      <a
        href="https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3 py-2 bg-[#e8f4ea] rounded-xl text-sm text-[#3d5c47] hover:bg-[#d4e8d8] transition-colors"
      >
        <ExternalLinkIcon className="w-4 h-4" />
        <span>View latest recalls on FDA.gov</span>
        <span className="text-xs text-[#6b9b7a]">(most up-to-date)</span>
      </a>

      {/* Alert Cards */}
      <div className="space-y-2">
        {displayAlerts.map((alert) => (
          <AlertCard key={alert.id} alert={alert} />
        ))}
      </div>

      {/* Show more/less */}
      {alerts.length > 3 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-[#4a7c59] font-medium"
        >
          {expanded ? 'Show less' : `Show ${alerts.length - 3} more alerts`}
        </button>
      )}
    </div>
  )
}

function AlertCard({ alert }) {
  const [showDetails, setShowDetails] = useState(false)

  const isHighRisk = alert.pregnancyRisk === 'high'

  return (
    <div
      className={`rounded-xl p-3 border-2 ${
        isHighRisk
          ? 'bg-[#fdf2f2] border-[#e8b4b4]'
          : 'bg-[#fdf8f2] border-[#e8d4b4]'
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span
              className={`px-2 py-0.5 text-xs font-bold rounded ${
                isHighRisk
                  ? 'bg-[#c47d6d] text-white'
                  : 'bg-[#d4a86a] text-white'
              }`}
            >
              {alert.contaminant}
            </span>
            <span className="text-xs text-[#6b7b6b]">{alert.date}</span>
            {alert.status && (
              <span className={`px-2 py-0.5 text-xs rounded ${
                alert.status === 'Ongoing' || alert.status === 'Updated'
                  ? 'bg-[#fef3c7] text-[#92400e]'
                  : alert.status === 'Terminated' || alert.status === 'Completed' || alert.status === 'Closed'
                  ? 'bg-[#d1fae5] text-[#065f46]'
                  : alert.status === 'Announced'
                  ? 'bg-[#dbeafe] text-[#1e40af]'
                  : 'bg-[#e5e7eb] text-[#4b5563]'
              }`}>
                {alert.status}
              </span>
            )}
          </div>
          <p className="text-sm font-medium text-[#4a4a4a]">
            {alert.brand}
          </p>
          <p className={`text-xs text-[#6b6b6b] mt-0.5 ${showDetails ? '' : 'line-clamp-2'}`}>
            {alert.product}
          </p>
        </div>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-[#4a7c59] p-1 shrink-0"
        >
          <ChevronIcon className={`w-5 h-5 transition-transform ${showDetails ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {showDetails && (
        <div className="mt-3 pt-3 border-t border-[#e8d4b4]/50 text-xs space-y-2">
          {isHighRisk && (
            <p className="text-[#7a4a42] font-medium">
              Listeria is especially dangerous during pregnancy - can cause miscarriage, stillbirth, or serious illness in newborns.
            </p>
          )}
          <p className="text-[#5a5a5a]">
            <span className="font-medium">Distribution:</span> {alert.distribution}
          </p>
          {alert.reason && (
            <p className="text-[#5a5a5a]">{alert.reason}</p>
          )}
          {alert.description && (
            <p className="text-[#5a5a5a] italic">{alert.description}</p>
          )}
          <a
            href={alert.link || alert.fdaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#4a7c59] font-medium underline"
          >
            View full details on FDA.gov
            <ExternalLinkIcon className="w-3 h-3" />
          </a>
        </div>
      )}
    </div>
  )
}

function AlertIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  )
}

function CheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function ChevronIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function ExternalLinkIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}
