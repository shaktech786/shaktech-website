export default function Loading() {
  return (
    <div className="min-h-screen bg-primary-950 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-primary-600 via-accent-500 to-creative-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading ShakTech</h2>
        <p className="text-gray-400">Preparing your AI-first experience...</p>
      </div>
    </div>
  )
}