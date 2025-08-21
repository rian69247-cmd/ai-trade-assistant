export default function AiPanel() {
  const dummyPlan = {
    context: "BTCUSDT bullish on H1, retracement on M15",
    setup: "trend-following",
    levels: { entry: 25000, sl: 24750, tp1: 25300, tp2: 25500 },
    rr: 2.0,
    invalidation: "Close below 24700 on 15m",
    confidence: 75,
    checklist: ["Trend aligns", "ATR within range", "No high impact news"]
  }

  return (
    <div className="bg-gray-800 p-4 rounded">
      <h3 className="text-xl font-semibold mb-2">AI Trade Plan (Demo)</h3>
      <pre className="text-sm">{JSON.stringify(dummyPlan, null, 2)}</pre>
    </div>
  )
}
