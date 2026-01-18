import { useState } from 'react'
import './index.css'
import { SearchInput } from './components/SearchInput'
import { ImageUpload } from './components/ImageUpload'
import { ResultCard } from './components/ResultCard'
import { checkSafety } from './lib/api'

function App() {
  const [query, setQuery] = useState('')
  const [image, setImage] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [trimester, setTrimester] = useState(null) // 1, 2, 3, or null for general

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
    // Auto-search when image is uploaded
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
    <div className="min-h-screen pb-8">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl shadow-sm sticky top-0 z-10 border-b border-pink-100">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🤰</span>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Pregnancy Safe</h1>
                <p className="text-sm text-gray-500">Quick safety checker</p>
              </div>
            </div>

            {/* Trimester selector */}
            <div className="flex gap-1">
              {[1, 2, 3].map((t) => (
                <button
                  key={t}
                  onClick={() => setTrimester(trimester === t ? null : t)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                    trimester === t
                      ? 'bg-pink-500 text-white'
                      : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
                  }`}
                >
                  T{t}
                </button>
              ))}
            </div>
          </div>
          {trimester && (
            <p className="text-sm text-pink-600 mt-2 text-center">
              Showing results for Trimester {trimester}
            </p>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-2xl mx-auto px-4 pt-6 space-y-6">
        {/* Search section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <SearchInput
            value={query}
            onChange={setQuery}
            onSearch={handleSearch}
            disabled={loading}
            placeholder="Type a food, ingredient, activity..."
          />

          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <ImageUpload
            onImageSelect={handleImageSelect}
            disabled={loading}
            currentImage={image}
          />
        </div>

        {/* Loading state */}
        {loading && (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center animate-slide-up">
            <div className="flex justify-center gap-2 mb-4">
              <div className="w-3 h-3 bg-pink-400 rounded-full thinking-dot" />
              <div className="w-3 h-3 bg-pink-400 rounded-full thinking-dot" />
              <div className="w-3 h-3 bg-pink-400 rounded-full thinking-dot" />
            </div>
            <p className="text-gray-600">Analyzing safety information...</p>
            <p className="text-sm text-gray-400 mt-1">Checking scientific data & research</p>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center animate-slide-up">
            <p className="text-red-600 font-medium">{error}</p>
            <button
              onClick={clearResults}
              className="mt-4 px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
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
              className="w-full py-3 bg-white rounded-xl text-gray-600 hover:bg-gray-50 transition-colors border border-gray-200"
            >
              Check Something Else
            </button>
          </div>
        )}

        {/* Empty state */}
        {!result && !loading && !error && (
          <div className="text-center py-8 animate-slide-up">
            <div className="text-5xl mb-4">🔍</div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              What would you like to check?
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
              Type a food, medication, skincare ingredient, or activity.
              Or take a photo of a menu or ingredient list.
            </p>

            {/* Quick examples */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {['sushi', 'hot springs', 'retinol', 'caffeine', 'deli meat'].map((example) => (
                <button
                  key={example}
                  onClick={() => {
                    setQuery(example)
                    handleSearch(example)
                  }}
                  className="px-4 py-2 bg-white rounded-full text-gray-600 hover:bg-pink-50 hover:text-pink-600 transition-colors border border-gray-200 text-sm"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer disclaimer */}
      <footer className="max-w-2xl mx-auto px-4 mt-12 text-center">
        <p className="text-xs text-gray-400">
          This tool provides general information based on scientific research.
          Always consult your healthcare provider for personalized medical advice.
        </p>
      </footer>
    </div>
  )
}

export default App
