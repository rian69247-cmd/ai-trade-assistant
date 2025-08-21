import AiPanel from "../components/AiPanel"
import RiskCalc from "../components/RiskCalc"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <aside className="w-64 bg-gray-800 p-4">Sidebar / Watchlist</aside>
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AiPanel />
          <RiskCalc />
        </div>
      </main>
    </div>
  )
}
