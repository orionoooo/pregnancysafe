import { useRef, useState } from 'react'

export function ImageUpload({ onImageSelect, disabled, currentImage }) {
  const fileInputRef = useRef(null)
  const cameraInputRef = useRef(null)
  const [preview, setPreview] = useState(null)

  const processImage = (file) => {
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const base64 = e.target.result
      setPreview(base64)
      onImageSelect(base64)
    }
    reader.readAsDataURL(file)
  }

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      processImage(file)
    }
  }

  const clearImage = () => {
    setPreview(null)
    onImageSelect(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
    if (cameraInputRef.current) cameraInputRef.current.value = ''
  }

  if (preview || currentImage) {
    return (
      <div className="relative rounded-2xl overflow-hidden border-2 border-[#e8b4b8]/30">
        <img
          src={preview || currentImage}
          alt="Selected"
          className="w-full h-48 object-cover"
        />
        <button
          onClick={clearImage}
          className="absolute top-3 right-3 w-9 h-9 bg-white/90 text-[#8b7355] rounded-full
                     flex items-center justify-center hover:bg-white transition-all
                     shadow-md border border-[#e8b4b8]/30"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    )
  }

  return (
    <div className="flex gap-3">
      {/* Camera button */}
      <button
        onClick={() => cameraInputRef.current?.click()}
        disabled={disabled}
        className="flex-1 flex items-center justify-center gap-2 py-4 px-4
                   ghibli-button rounded-xl
                   disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="font-semibold">Take Photo</span>
      </button>
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Upload button */}
      <button
        onClick={() => fileInputRef.current?.click()}
        disabled={disabled}
        className="flex-1 flex items-center justify-center gap-2 py-4 px-4
                   ghibli-button-secondary rounded-xl
                   disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="font-semibold">Upload</span>
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  )
}
