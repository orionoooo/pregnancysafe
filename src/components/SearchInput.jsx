import { useState } from 'react'

export function SearchInput({ value, onChange, onSearch, disabled, placeholder }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && value.trim()) {
      onSearch(value)
    }
  }

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder={placeholder}
        className="w-full px-5 py-4 pr-14 text-lg rounded-xl border-2 border-gray-200
                   focus:border-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-100
                   disabled:bg-gray-100 disabled:cursor-not-allowed
                   transition-all"
      />
      <button
        onClick={() => onSearch(value)}
        disabled={disabled || !value.trim()}
        className="absolute right-2 top-1/2 -translate-y-1/2
                   w-10 h-10 flex items-center justify-center
                   bg-pink-500 text-white rounded-lg
                   hover:bg-pink-600 disabled:bg-gray-300 disabled:cursor-not-allowed
                   transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  )
}
