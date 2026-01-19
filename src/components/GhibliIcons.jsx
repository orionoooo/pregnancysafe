// Custom hand-drawn style SVG icons inspired by Studio Ghibli

export function CherryBlossom({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      {/* Petals - soft, organic shapes */}
      <path
        d="M24 8c-2 6-6 10-6 10s4-1 6 2c2-3 6-2 6-2s-4-4-6-10z"
        fill="#f5d5d8"
        stroke="#e8b4b8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36 16c-6 1-11 4-11 4s2 3 0 6c4 0 5-3 5-3s2 5 6-7z"
        fill="#f5d5d8"
        stroke="#e8b4b8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 30c-5-3-10-3-10-3s0 4-3 5c3 3 6 1 6 1s0 5 7-3z"
        fill="#f5d5d8"
        stroke="#e8b4b8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 40c-2-6-6-9-6-9s-4 3-6 9c2-1 4-1 6 1 2-2 4-2 6-1z"
        fill="#f5d5d8"
        stroke="#e8b4b8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 30c5-3 10-3 10-3s0 4 3 5c-3 3-6 1-6 1s0 5-7-3z"
        fill="#f5d5d8"
        stroke="#e8b4b8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16c6 1 11 4 11 4s-2 3 0 6c-4 0-5-3-5-3s-2 5-6-7z"
        fill="#f5d5d8"
        stroke="#e8b4b8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Center */}
      <circle cx="24" cy="24" r="5" fill="#fef0d5" stroke="#e5b567" strokeWidth="1.5" />
      <circle cx="22" cy="23" r="1" fill="#e5b567" />
      <circle cx="26" cy="23" r="1" fill="#e5b567" />
      <circle cx="24" cy="26" r="1" fill="#e5b567" />
    </svg>
  )
}

export function LeafSprig({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      {/* Stem */}
      <path
        d="M16 28c0-8 2-14 2-14"
        stroke="#7fb685"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Leaves - organic, slightly different shapes */}
      <path
        d="M18 14c4-2 8-1 8-1s-2 5-6 6c-2 0-3-1-2-5z"
        fill="#d4e6cf"
        stroke="#7fb685"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 18c-4-1-7 1-7 1s3 4 7 4c2-1 2-3 0-5z"
        fill="#d4e6cf"
        stroke="#7fb685"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 22c3 0 5 2 5 2s-2 3-5 3c-2-1-2-3 0-5z"
        fill="#d4e6cf"
        stroke="#7fb685"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function FallingLeaf({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      {/* Single autumn leaf with curl */}
      <path
        d="M8 6c8 2 14 10 16 18-4-2-10-2-14-6-2-4-4-8-2-12z"
        fill="#fef0d5"
        stroke="#e5b567"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Leaf vein */}
      <path
        d="M10 10c4 4 8 8 12 12"
        stroke="#e5b567"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M12 8c2 3 3 5 4 6"
        stroke="#e5b567"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Curl at bottom */}
      <path
        d="M24 24c2 2 3 4 2 6"
        stroke="#e5b567"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function WiltedFlower({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      {/* Drooping stem */}
      <path
        d="M10 28c2-4 4-8 8-10"
        stroke="#d4847a"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Drooping petals */}
      <path
        d="M18 18c2-4 1-7 1-7s-4 1-5 4c0 2 1 4 4 3z"
        fill="#fae0dc"
        stroke="#d4847a"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 14c4 0 6-2 6-2s-3-3-6-2c-2 1-2 3 0 4z"
        fill="#fae0dc"
        stroke="#d4847a"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 18c3 2 6 1 6 1s-1-4-4-5c-2 0-3 2-2 4z"
        fill="#fae0dc"
        stroke="#d4847a"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Center */}
      <circle cx="20" cy="14" r="3" fill="#fef0d5" stroke="#d4847a" strokeWidth="1" />
    </svg>
  )
}

export function Seedling({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      {/* Stem */}
      <path
        d="M16 28c0-6 0-10 0-12"
        stroke="#7fb685"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Two small leaves unfurling */}
      <path
        d="M16 16c-6-2-8 2-8 2s4 4 8 2c1-1 1-3 0-4z"
        fill="#d4e6cf"
        stroke="#7fb685"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 16c6-2 8 2 8 2s-4 4-8 2c-1-1-1-3 0-4z"
        fill="#d4e6cf"
        stroke="#7fb685"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Small tip */}
      <path
        d="M16 16c0-4 0-6 0-8"
        stroke="#7fb685"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="16" cy="7" r="2" fill="#d4e6cf" stroke="#7fb685" strokeWidth="1" />
    </svg>
  )
}

export function CloudPuff({ className = "w-20 h-12" }) {
  return (
    <svg viewBox="0 0 80 48" className={className} fill="none">
      <path
        d="M12 36c-4 0-8-4-6-10 1-4 6-6 10-4 2-8 10-12 18-8 4-6 12-6 16 0 6-2 14 2 14 10 0 6-4 10-10 12H12z"
        fill="white"
        fillOpacity="0.6"
      />
    </svg>
  )
}

export function TinyLeaf({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none">
      <path
        d="M8 14c0-4 1-8 1-8s3 2 4 6c-1 1-3 2-5 2z"
        fill="#d4e6cf"
        stroke="#a8c5a0"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 14c0-4-1-8-1-8s-3 2-4 6c1 1 3 2 5 2z"
        fill="#d4e6cf"
        stroke="#a8c5a0"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SearchIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <circle
        cx="10" cy="10" r="6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M14.5 14.5L20 20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Small sparkle */}
      <circle cx="8" cy="8" r="1" fill="currentColor" opacity="0.4" />
    </svg>
  )
}
