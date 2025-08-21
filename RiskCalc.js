import { useState } from "react"

export default function RiskCalc() {
  const [balance, setBalance] = useState(1000)
  const [riskPct, setRiskPct] = useState(1)
  const [slDist, setSlDist] = useState(50)

  const riskAmount = (balance * riskPct) / 100
  const positionSize = (riskAmount / slDist).toFixed(3)

  return (
    <div className="bg-gray-800 p-4 rounded">
      <h3 className="text-xl font-semibold mb-2">Risk Calculator</h3>
      <div className="flex flex-col gap-2">
        <label>Balance: <input type="number" value={balance} onChange={e=>setBalance(e.target.value)} className="text-black px-2"/></label>
        <label>Risk %: <input type="number" value={riskPct} onChange={e=>setRiskPct(e.target.value)} className="text-black px-2"/></label>
        <label>SL distance: <input type="number" value={slDist} onChange={e=>setSlDist(e.target.value)} className="text-black px-2"/></label>
      </div>
      <p className="mt-3">Position Size: <b>{positionSize}</b> lots</p>
    </div>
  )
}
