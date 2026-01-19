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
        className="w-full px-5 py-4 pr-14 text-lg ghibli-input
                   disabled:opacity-50 disabled:cursor-not-allowed
                   placeholder:text-[#8b7355]/50"
      />
      <button
        onClick={() => onSearch(value)}
        disabled={disabled || !value.trim()}
        className="absolute right-2 top-1/2 -translate-y-1/2
                   w-11 h-11 flex items-center justify-center
                   ghibli-button rounded-xl
                   disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  )
}
