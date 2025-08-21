export default function handler(req, res) {
  res.status(200).json({
    context: "ETHUSDT sideways on 1H, bounce potential",
    setup: "range",
    levels: { entry: 1800, sl: 1780, tp1: 1820, tp2: 1835 },
    rr: 1.5,
    invalidation: "Break below 1775 on 15m",
    confidence: 68,
    checklist: ["Range intact", "ATR stable", "Confirm with RSI"]
  })
}
