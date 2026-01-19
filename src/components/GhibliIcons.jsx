// Totoro-inspired cute SVG icons

// Soot sprite (Susuwatari) - the cute little dust bunnies
export function SootSprite({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 32 32" className={className}>
      {/* Fuzzy body */}
      <circle cx="16" cy="16" r="12" fill="#3d3d3d" />
      {/* Fuzzy edges */}
      <circle cx="6" cy="14" r="3" fill="#3d3d3d" />
      <circle cx="26" cy="14" r="3" fill="#3d3d3d" />
      <circle cx="8" cy="22" r="2.5" fill="#3d3d3d" />
      <circle cx="24" cy="22" r="2.5" fill="#3d3d3d" />
      <circle cx="12" cy="6" r="2" fill="#3d3d3d" />
      <circle cx="20" cy="6" r="2" fill="#3d3d3d" />
      {/* Eyes */}
      <circle cx="12" cy="14" r="3.5" fill="white" />
      <circle cx="20" cy="14" r="3.5" fill="white" />
      <circle cx="12" cy="14" r="2" fill="#3d3d3d" />
      <circle cx="20" cy="14" r="2" fill="#3d3d3d" />
      {/* Eye shine */}
      <circle cx="13" cy="13" r="1" fill="white" />
      <circle cx="21" cy="13" r="1" fill="white" />
    </svg>
  )
}

// Little Totoro-like forest spirit for the header
export function ForestSpirit({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      {/* Ears */}
      <ellipse cx="14" cy="10" rx="4" ry="7" fill="#7a8b8b" />
      <ellipse cx="34" cy="10" rx="4" ry="7" fill="#7a8b8b" />
      <ellipse cx="14" cy="10" rx="2" ry="5" fill="#94a3a3" />
      <ellipse cx="34" cy="10" rx="2" ry="5" fill="#94a3a3" />
      {/* Body */}
      <ellipse cx="24" cy="28" rx="16" ry="14" fill="#7a8b8b" />
      {/* Belly */}
      <ellipse cx="24" cy="30" rx="10" ry="9" fill="#c4cfc4" />
      {/* Belly markings */}
      <path d="M18 28 Q24 32 30 28" stroke="#7a8b8b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M19 32 Q24 35 29 32" stroke="#7a8b8b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Eyes */}
      <circle cx="18" cy="22" r="4" fill="white" />
      <circle cx="30" cy="22" r="4" fill="white" />
      <circle cx="18" cy="23" r="2.5" fill="#3d3d3d" />
      <circle cx="30" cy="23" r="2.5" fill="#3d3d3d" />
      <circle cx="17" cy="22" r="1" fill="white" />
      <circle cx="29" cy="22" r="1" fill="white" />
      {/* Nose */}
      <ellipse cx="24" cy="26" rx="2" ry="1.5" fill="#5a5a5a" />
      {/* Whiskers */}
      <path d="M12 25 L6 24" stroke="#5a5a5a" strokeWidth="1" strokeLinecap="round" />
      <path d="M12 27 L6 28" stroke="#5a5a5a" strokeWidth="1" strokeLinecap="round" />
      <path d="M36 25 L42 24" stroke="#5a5a5a" strokeWidth="1" strokeLinecap="round" />
      <path d="M36 27 L42 28" stroke="#5a5a5a" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}

// Cute cloud with a face
export function CloudPuff({ className = "w-20 h-12" }) {
  return (
    <svg viewBox="0 0 80 48" className={className}>
      {/* Cloud shape */}
      <path
        d="M15 36c-6 0-11-4-11-10 0-5 4-9 9-9 1-7 7-12 15-12 6 0 12 4 14 9 2-1 4-2 7-2 7 0 13 5 13 12 0 1 0 2-.5 3 4 1 7 5 7 10 0 0-54 0-54-1z"
        fill="white"
        fillOpacity="0.9"
      />
      {/* Cute face */}
      <circle cx="32" cy="28" r="2" fill="#8b9b8b" />
      <circle cx="48" cy="28" r="2" fill="#8b9b8b" />
      <path d="M36 33 Q40 36 44 33" stroke="#8b9b8b" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Rosy cheeks */}
      <circle cx="26" cy="32" r="3" fill="#e8c4c4" fillOpacity="0.5" />
      <circle cx="54" cy="32" r="3" fill="#e8c4c4" fillOpacity="0.5" />
    </svg>
  )
}

// Acorn icon
export function Acorn({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      {/* Cap */}
      <path
        d="M6 10c0-3 3-6 6-6s6 3 6 6c0 1-1 2-2 2H8c-1 0-2-1-2-2z"
        fill="#8b7355"
      />
      {/* Cap texture */}
      <path d="M8 8h8" stroke="#6b5a45" strokeWidth="1" strokeLinecap="round" />
      <path d="M9 6h6" stroke="#6b5a45" strokeWidth="1" strokeLinecap="round" />
      {/* Stem */}
      <rect x="11" y="2" width="2" height="3" rx="1" fill="#6b5a45" />
      {/* Body */}
      <ellipse cx="12" cy="16" rx="5" ry="6" fill="#c4956a" />
      {/* Shine */}
      <ellipse cx="10" cy="14" rx="1.5" ry="2" fill="#d4a87a" />
    </svg>
  )
}

// Little leaf
export function LeafSprig({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      {/* Stem */}
      <path
        d="M12 20 Q12 14 12 10"
        stroke="#6b9b7a"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Leaves */}
      <path
        d="M12 10 Q6 8 4 12 Q6 14 12 12"
        fill="#94b49f"
        stroke="#6b9b7a"
        strokeWidth="1"
      />
      <path
        d="M12 10 Q18 8 20 12 Q18 14 12 12"
        fill="#94b49f"
        stroke="#6b9b7a"
        strokeWidth="1"
      />
      <path
        d="M12 14 Q7 13 6 16 Q8 18 12 16"
        fill="#a8c5a0"
        stroke="#6b9b7a"
        strokeWidth="1"
      />
      <path
        d="M12 14 Q17 13 18 16 Q16 18 12 16"
        fill="#a8c5a0"
        stroke="#6b9b7a"
        strokeWidth="1"
      />
    </svg>
  )
}

// Autumn leaf (for caution)
export function FallingLeaf({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        d="M4 6 Q12 4 18 10 Q20 16 16 20 Q10 18 6 14 Q2 10 4 6z"
        fill="#f0d9a8"
        stroke="#d4a853"
        strokeWidth="1.5"
      />
      {/* Leaf vein */}
      <path
        d="M6 8 Q12 12 14 18"
        stroke="#d4a853"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M8 9 Q10 11 10 13" stroke="#d4a853" strokeWidth="0.75" fill="none" strokeLinecap="round" />
      <path d="M11 12 Q13 14 12 16" stroke="#d4a853" strokeWidth="0.75" fill="none" strokeLinecap="round" />
    </svg>
  )
}

// Wilted flower (for avoid)
export function WiltedFlower({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      {/* Droopy stem */}
      <path
        d="M8 22 Q10 18 14 14"
        stroke="#c47d6d"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Droopy petals */}
      <ellipse cx="16" cy="10" rx="3" ry="5" fill="#efd0c8" stroke="#c47d6d" strokeWidth="1" transform="rotate(20, 16, 10)" />
      <ellipse cx="20" cy="12" rx="3" ry="4" fill="#efd0c8" stroke="#c47d6d" strokeWidth="1" transform="rotate(45, 20, 12)" />
      <ellipse cx="18" cy="16" rx="2.5" ry="4" fill="#efd0c8" stroke="#c47d6d" strokeWidth="1" transform="rotate(70, 18, 16)" />
      {/* Center */}
      <circle cx="16" cy="12" r="2.5" fill="#f5e6c8" stroke="#c47d6d" strokeWidth="1" />
    </svg>
  )
}

// Sprout/seedling
export function Seedling({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 32 32" className={className}>
      {/* Stem */}
      <path
        d="M16 28 Q16 20 16 16"
        stroke="#6b9b7a"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left leaf */}
      <path
        d="M16 16 Q8 14 6 18 Q8 22 16 18"
        fill="#94b49f"
        stroke="#6b9b7a"
        strokeWidth="1.5"
      />
      {/* Right leaf */}
      <path
        d="M16 16 Q24 14 26 18 Q24 22 16 18"
        fill="#94b49f"
        stroke="#6b9b7a"
        strokeWidth="1.5"
      />
      {/* Small top bud */}
      <ellipse cx="16" cy="10" rx="3" ry="4" fill="#a8c5a0" stroke="#6b9b7a" strokeWidth="1.5" />
      {/* Cute face on the bud */}
      <circle cx="14.5" cy="9" r="0.8" fill="#5a7a5a" />
      <circle cx="17.5" cy="9" r="0.8" fill="#5a7a5a" />
      <path d="M15 11.5 Q16 12.5 17 11.5" stroke="#5a7a5a" strokeWidth="0.8" fill="none" strokeLinecap="round" />
    </svg>
  )
}

// Tiny leaf for decorations
export function TinyLeaf({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 16 16" className={className}>
      <path
        d="M8 14 Q8 10 8 8 Q4 6 2 10 Q4 12 8 10"
        fill="#94b49f"
        stroke="#6b9b7a"
        strokeWidth="1"
      />
      <path
        d="M8 8 Q12 6 14 10 Q12 12 8 10"
        fill="#a8c5a0"
        stroke="#6b9b7a"
        strokeWidth="1"
      />
    </svg>
  )
}

// Mushroom decoration
export function Mushroom({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      {/* Cap */}
      <path
        d="M4 14 Q4 6 12 6 Q20 6 20 14 Z"
        fill="#c47d6d"
      />
      {/* Spots */}
      <circle cx="9" cy="10" r="2" fill="#f5f1e8" />
      <circle cx="15" cy="11" r="1.5" fill="#f5f1e8" />
      <circle cx="12" cy="8" r="1" fill="#f5f1e8" />
      {/* Stem */}
      <path
        d="M9 14 L9 20 Q12 22 15 20 L15 14"
        fill="#f5e6c8"
        stroke="#c4a77d"
        strokeWidth="1"
      />
    </svg>
  )
}

// Search icon (cute magnifying glass)
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
      {/* Sparkle */}
      <circle cx="8" cy="8" r="1.5" fill="currentColor" opacity="0.3" />
    </svg>
  )
}

// Mini soot sprites for decoration
export function MiniSoot({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 16 16" className={className}>
      <circle cx="8" cy="8" r="6" fill="#4a4a4a" />
      <circle cx="4" cy="7" r="1.5" fill="#4a4a4a" />
      <circle cx="12" cy="7" r="1.5" fill="#4a4a4a" />
      <circle cx="6" cy="7" r="1.5" fill="white" />
      <circle cx="10" cy="7" r="1.5" fill="white" />
      <circle cx="6" cy="7" r="0.8" fill="#4a4a4a" />
      <circle cx="10" cy="7" r="0.8" fill="#4a4a4a" />
    </svg>
  )
}
