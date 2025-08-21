export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">AI Day-Trading Assistant</h1>
      <p className="text-lg mb-6">Generate trade plans, manage risk, and backtest with ease.</p>
      <div className="flex gap-4">
        <a href="/dashboard" className="px-6 py-3 bg-indigo-600 rounded">Try Demo</a>
        <a href="/plan" className="px-6 py-3 bg-gray-700 rounded">Generate Plan</a>
      </div>
    </main>
  )
}
