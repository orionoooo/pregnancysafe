import { SearchIcon } from './GhibliIcons'

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
        <SearchIcon className="w-5 h-5" />
      </button>
    </div>
  )
}
