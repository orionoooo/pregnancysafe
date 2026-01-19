import { useState } from 'react'
import './index.css'
import { SearchInput } from './components/SearchInput'
import { ImageUpload } from './components/ImageUpload'
import { ResultCard } from './components/ResultCard'
import { checkSafety } from './lib/api'
import { Seedling, CloudPuff, TinyLeaf, SootSprite, Acorn, MiniSoot, Mushroom } from './components/GhibliIcons'

function App() {
  const [query, setQuery] = useState('')
  const [image, setImage] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [trimester, setTrimester] = useState(null)

  const handleSearch = async (searchQuery) => {
    if (!searchQuery.trim() && !image) return

    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await checkSafety({
        query: searchQuery || query,
        image,
        trimester
      })
      setResult(response)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleImageSelect = async (imageData) => {
    setImage(imageData)
    if (imageData) {
      setLoading(true)
      setError(null)
      setResult(null)
      try {
        const response = await checkSafety({
          query: query || 'Analyze this image for pregnancy safety',
          image: imageData,
          trimester
        })
        setResult(response)
      } catch (err) {
        setError(err.message || 'Something went wrong. Please try again.')
      } finally {
        setLoading(false)
      }
    }
  }

  const clearResults = () => {
    setResult(null)
    setQuery('')
    setImage(null)
    setError(null)
  }

  return (
    <div className="min-h-screen pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="fixed top-16 left-6 animate-float-slow opacity-60 pointer-events-none" style={{ animationDelay: '0s' }}>
        <CloudPuff className="w-28 h-16" />
      </div>
      <div className="fixed top-24 right-8 animate-float opacity-50 pointer-events-none" style={{ animationDelay: '2s' }}>
        <CloudPuff className="w-24 h-14" />
      </div>
      <div className="fixed bottom-40 left-12 animate-float-slow opacity-40 pointer-events-none" style={{ animationDelay: '4s' }}>
        <CloudPuff className="w-20 h-12" />
      </div>

      {/* Soot sprites */}
      <div className="fixed bottom-20 right-8 animate-wiggle opacity-30 pointer-events-none">
        <SootSprite className="w-8 h-8" />
      </div>
      <div className="fixed bottom-32 right-20 animate-wiggle opacity-20 pointer-events-none" style={{ animationDelay: '0.5s' }}>
        <SootSprite className="w-6 h-6" />
      </div>
      <div className="fixed top-40 left-4 animate-wiggle opacity-25 pointer-events-none" style={{ animationDelay: '1s' }}>
        <MiniSoot className="w-5 h-5" />
      </div>

      {/* Header */}
      <header className="relative z-10 pt-6 pb-4">
        <div className="max-w-2xl mx-auto px-4">
          <div className="ghibli-card p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Soot sprite mascot */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#d4e2d4] to-[#94b49f] flex items-center justify-center shadow-lg border-2 border-[#6b9b7a]/20">
                  <SootSprite className="w-10 h-10" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-[#4a5a4a]">Pregnancy Safe</h1>
                  <p className="text-sm text-[#6b7b6b]">Your forest guide to safety</p>
                </div>
              </div>

              {/* Trimester selector */}
              <div className="flex gap-2">
                {[1, 2, 3].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTrimester(trimester === t ? null : t)}
                    className={`w-10 h-10 rounded-full text-sm font-bold transition-all duration-300 ${
                      trimester === t
                        ? 'bg-gradient-to-br from-[#7eb08a] to-[#4a7c59] text-white shadow-md scale-110'
                        : 'bg-white/80 text-[#6b7b6b] hover:bg-[#d4e2d4]/50 border-2 border-[#94b49f]/30'
                    }`}
                  >
                    T{t}
                  </button>
                ))}
              </div>
            </div>
            {trimester && (
              <p className="text-sm text-[#4a7c59] mt-3 text-center bg-[#d4e2d4]/40 py-2 rounded-xl">
                Showing results for Trimester {trimester}
              </p>
            )}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-2xl mx-auto px-4 pt-4 space-y-6 relative z-10">
        {/* Search section */}
        <div className="ghibli-card p-6 space-y-5">
          <SearchInput
            value={query}
            onChange={setQuery}
            onSearch={handleSearch}
            disabled={loading}
            placeholder="Type a food, ingredient, activity..."
          />

          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#94b49f]/40 to-transparent" />
            <span className="text-[#6b7b6b]/60 text-sm font-medium">or</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#94b49f]/40 to-transparent" />
          </div>

          <ImageUpload
            onImageSelect={handleImageSelect}
            disabled={loading}
            currentImage={image}
          />
        </div>

        {/* Loading state */}
        {loading && (
          <div className="ghibli-card p-8 text-center animate-slide-up">
            <div className="flex justify-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full thinking-dot" />
              <div className="w-3 h-3 rounded-full thinking-dot" />
              <div className="w-3 h-3 rounded-full thinking-dot" />
            </div>
            <p className="text-[#4a5a4a] font-medium">Looking up safety information...</p>
            <p className="text-sm text-[#6b7b6b] mt-1">Checking trusted sources</p>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="ghibli-card p-6 text-center animate-slide-up border-2 border-[#c47d6d]/30">
            <div className="flex justify-center mb-3">
              <SootSprite className="w-12 h-12 opacity-60" />
            </div>
            <p className="text-[#7a4a42] font-medium">{error}</p>
            <button
              onClick={clearResults}
              className="mt-4 px-6 py-2 ghibli-button-secondary"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Results */}
        {result && !loading && (
          <div className="space-y-4 animate-slide-up">
            <ResultCard result={result} trimester={trimester} />

            <button
              onClick={clearResults}
              className="w-full py-4 ghibli-button-secondary rounded-2xl"
            >
              Check Something Else
            </button>
          </div>
        )}

        {/* Empty state */}
        {!result && !loading && !error && (
          <div className="text-center py-8 animate-slide-up">
            <div className="flex justify-center mb-4 animate-float">
              <Seedling className="w-20 h-20" />
            </div>
            <h2 className="text-xl font-bold text-[#4a5a4a] mb-2">
              What would you like to check?
            </h2>
            <p className="text-[#6b7b6b] max-w-md mx-auto">
              Type a food, medication, skincare ingredient, or activity.
              Or take a photo of a menu or ingredient list.
            </p>

            {/* Quick examples */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {['sushi', 'coffee', 'retinol', 'hot tub', 'tylenol'].map((example) => (
                <button
                  key={example}
                  onClick={() => {
                    setQuery(example)
                    handleSearch(example)
                  }}
                  className="px-5 py-2.5 ghibli-button-secondary rounded-full text-sm"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-2xl mx-auto px-4 mt-12 text-center relative z-10">
        <div className="flex justify-center items-center gap-4 mb-3 opacity-50">
          <TinyLeaf className="w-4 h-4" />
          <Acorn className="w-5 h-5" />
          <Mushroom className="w-5 h-5" />
          <Acorn className="w-5 h-5" />
          <TinyLeaf className="w-4 h-4" />
        </div>
        <p className="text-xs text-[#6b7b6b]/70">
          This tool provides general information based on scientific research.
          Always consult your healthcare provider for personalized advice.
        </p>
      </footer>
    </div>
  )
}

export default App
