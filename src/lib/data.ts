export type SignalDirection = "bullish" | "bearish" | "neutral";

export interface Signal {
  id: string;
  asset: string;
  assetName: string;
  direction: SignalDirection;
  confidence: number;
  entryPrice: number;
  targetPrice: number;
  stopLoss: number;
  strategy: string;
  timestamp: string;
  timeframe: string;
  indicators: string[];
  model: string;
  narrative: string;
}

export interface MarketStat {
  asset: string;
  price: number;
  change24h: number;
  sparkline: number[];
}

export interface Agent {
  id: string;
  name: string;
  asset: string;
  strategy: string;
  timeframe: string;
  status: "active" | "paused" | "error";
  signalsToday: number;
  winRate: number;
  lastSignal: string;
}

function hoursAgo(h: number): string {
  const d = new Date();
  d.setHours(d.getHours() - h);
  return d.toISOString();
}

export const marketStats: MarketStat[] = [
  {
    asset: "BTC",
    price: 84521.30,
    change24h: 2.14,
    sparkline: [82100, 82400, 83100, 82800, 83500, 84100, 83900, 84200, 84521],
  },
  {
    asset: "ETH",
    price: 3842.15,
    change24h: -0.87,
    sparkline: [3900, 3880, 3860, 3870, 3845, 3830, 3850, 3840, 3842],
  },
  {
    asset: "SPY",
    price: 562.78,
    change24h: 0.34,
    sparkline: [559, 560, 561, 560, 561, 562, 561, 562, 563],
  },
  {
    asset: "XAUUSD",
    price: 3108.40,
    change24h: 1.52,
    sparkline: [3060, 3070, 3080, 3075, 3090, 3095, 3100, 3105, 3108],
  },
];

export const signals: Signal[] = [
  {
    id: "sig-001",
    asset: "BTC",
    assetName: "Bitcoin",
    direction: "bullish",
    confidence: 92,
    entryPrice: 84200,
    targetPrice: 88500,
    stopLoss: 82100,
    strategy: "Trend Following",
    timestamp: hoursAgo(0.5),
    timeframe: "4h",
    indicators: ["EMA", "MACD", "RSI"],
    model: "Claude Opus 4",
    narrative: "Bitcoin is exhibiting a strong continuation pattern on the 4-hour timeframe. The 21 EMA has crossed above the 55 EMA with accelerating momentum, while the MACD histogram is expanding in positive territory. Volume profile shows accumulation at the $83,500-$84,000 support zone, suggesting institutional buying pressure.\n\nThe RSI at 67 indicates bullish momentum without being overbought, leaving room for upside continuation. On-chain metrics confirm growing exchange outflows and declining supply on exchanges, a historically bullish signal.\n\nKey resistance at $86,200 (previous swing high) should be tested within the next 12-24 hours. A breakout above this level with volume confirmation would target the $88,500 zone. Risk is defined below the EMA cluster at $82,100.",
  },
  {
    id: "sig-002",
    asset: "ETH",
    assetName: "Ethereum",
    direction: "bearish",
    confidence: 78,
    entryPrice: 3850,
    targetPrice: 3620,
    stopLoss: 3950,
    strategy: "Mean Reversion",
    timestamp: hoursAgo(1.2),
    timeframe: "1h",
    indicators: ["Bollinger Bands", "RSI", "VWAP"],
    model: "Gemini Ultra",
    narrative: "Ethereum has reached the upper Bollinger Band on the 1-hour chart following a sharp rally, indicating potential mean reversion. The asset is trading significantly above VWAP ($3,780), suggesting overextension from fair value.\n\nRSI divergence is forming — price made a higher high while RSI printed a lower high at 72, a classic bearish divergence pattern. The ETH/BTC ratio is also showing weakness, underperforming Bitcoin by 1.4% over the last 6 hours.\n\nExpect a pullback toward the middle Bollinger Band at $3,720 and potentially the VWAP level. The trade targets a full mean reversion to the $3,620 zone with a tight stop above the recent high.",
  },
  {
    id: "sig-003",
    asset: "AAPL",
    assetName: "Apple Inc.",
    direction: "bullish",
    confidence: 85,
    entryPrice: 223.50,
    targetPrice: 232.00,
    stopLoss: 219.80,
    strategy: "Breakout",
    timestamp: hoursAgo(2.1),
    timeframe: "1D",
    indicators: ["VWAP", "OBV", "ATR"],
    model: "Claude Opus 4",
    narrative: "Apple is consolidating just below its March high of $224.80 in a tight ascending triangle pattern. On-Balance Volume (OBV) has been making new highs ahead of price, indicating strong accumulation by institutional players.\n\nThe ATR has compressed to 14-day lows at $2.80, suggesting a volatility squeeze that typically precedes explosive moves. VWAP anchored to the consolidation start at $218 shows price consistently trading above fair value.\n\nA daily close above $224.80 would trigger the breakout with a measured move target of $232. The risk/reward ratio of 2.3:1 makes this an attractive setup. Stop placed below the rising trendline support.",
  },
  {
    id: "sig-004",
    asset: "NVDA",
    assetName: "NVIDIA Corp.",
    direction: "bullish",
    confidence: 91,
    entryPrice: 142.30,
    targetPrice: 155.00,
    stopLoss: 136.50,
    strategy: "Momentum",
    timestamp: hoursAgo(3.0),
    timeframe: "4h",
    indicators: ["RSI", "EMA", "MACD"],
    model: "Claude Opus 4",
    narrative: "NVIDIA is showing exceptional relative strength, outperforming the QQQ by 3.2% over the past week. The stock has reclaimed its 21-day EMA after a brief dip and is now accelerating higher with expanding volume.\n\nThe MACD signal line crossover on the 4-hour chart confirms momentum shift. RSI at 64 on the daily is far from overbought territory, suggesting plenty of room for continuation. The AI infrastructure spending cycle remains the dominant fundamental tailwind.\n\nTargeting the previous resistance zone at $155, which aligns with the 1.618 Fibonacci extension from the recent swing low. This trade offers a 2.2:1 reward-to-risk ratio with a clear invalidation below $136.50.",
  },
  {
    id: "sig-005",
    asset: "XAUUSD",
    assetName: "Gold Spot",
    direction: "bullish",
    confidence: 88,
    entryPrice: 3105.00,
    targetPrice: 3180.00,
    stopLoss: 3060.00,
    strategy: "Trend Following",
    timestamp: hoursAgo(3.5),
    timeframe: "4h",
    indicators: ["EMA", "ATR", "MACD"],
    model: "Gemini Ultra",
    narrative: "Gold continues its structural uptrend, trading above all major moving averages. Central bank buying remains at elevated levels with Q1 2026 data showing record purchases from China and India.\n\nThe 4-hour chart shows a bull flag forming after the breakout above $3,100. ATR expansion confirms trend acceleration. The MACD is positioned above the zero line with a fresh bullish crossover.\n\nTarget $3,180 which aligns with the 1.272 extension of the previous swing. Macro backdrop of persistent geopolitical tensions and real rate expectations supports continued gold accumulation.",
  },
  {
    id: "sig-006",
    asset: "EUR/USD",
    assetName: "Euro / US Dollar",
    direction: "bearish",
    confidence: 72,
    entryPrice: 1.0835,
    targetPrice: 1.0720,
    stopLoss: 1.0905,
    strategy: "Mean Reversion",
    timestamp: hoursAgo(4.0),
    timeframe: "1h",
    indicators: ["Bollinger Bands", "RSI", "EMA"],
    model: "Claude Opus 4",
    narrative: "EUR/USD has rallied to the top of its 2-week range near 1.0850, hitting the upper Bollinger Band. This level coincides with the 200-hour EMA, which has acted as resistance three times in the past month.\n\nRSI on the 1-hour is reading 71, approaching overbought conditions. The US Dollar Index is finding support at its 50-day MA, suggesting the dollar weakness may be overextended.\n\nLooking for mean reversion toward the mid-range at 1.0720. ECB rate expectations are stable, reducing the fundamental catalyst for further EUR upside.",
  },
  {
    id: "sig-007",
    asset: "SPY",
    assetName: "S&P 500 ETF",
    direction: "neutral",
    confidence: 65,
    entryPrice: 562.50,
    targetPrice: 568.00,
    stopLoss: 556.00,
    strategy: "Volatility Squeeze",
    timestamp: hoursAgo(5.0),
    timeframe: "1D",
    indicators: ["Bollinger Bands", "ATR", "VWAP"],
    model: "Gemini Ultra",
    narrative: "The S&P 500 is in a tight consolidation range with Bollinger Bandwidth at its lowest level in 30 days. This volatility squeeze typically resolves with a sharp directional move.\n\nVWAP from the weekly open at $561 is acting as a magnet, with price oscillating in a $4 range. The ATR has compressed to 8-day lows. While the setup suggests a big move is coming, directional bias is unclear.\n\nRecommending a neutral stance with a slight bullish lean given the broader uptrend context. Wait for a confirmed breakout above $565 or breakdown below $558 before committing directional capital.",
  },
  {
    id: "sig-008",
    asset: "QQQ",
    assetName: "Nasdaq-100 ETF",
    direction: "bullish",
    confidence: 83,
    entryPrice: 487.20,
    targetPrice: 502.00,
    stopLoss: 479.50,
    strategy: "Momentum",
    timestamp: hoursAgo(5.5),
    timeframe: "4h",
    indicators: ["RSI", "MACD", "EMA"],
    model: "Claude Opus 4",
    narrative: "QQQ is leading the recovery with mega-cap tech names driving the index higher. The 4-hour MACD has confirmed a bullish crossover above the zero line, and RSI is trending higher at 62.\n\nThe EMA ribbon (8, 13, 21, 55) is fanning out in bullish order, a strong momentum confirmation. Breadth within the Nasdaq-100 is improving with 68% of components above their 20-day MA.\n\nTargeting the psychological $500 level and prior resistance at $502. The risk/reward of 1.9:1 supports the trade.",
  },
  {
    id: "sig-009",
    asset: "SOL",
    assetName: "Solana",
    direction: "bullish",
    confidence: 87,
    entryPrice: 178.50,
    targetPrice: 198.00,
    stopLoss: 168.00,
    strategy: "Breakout",
    timestamp: hoursAgo(6.2),
    timeframe: "4h",
    indicators: ["VWAP", "OBV", "RSI"],
    model: "Gemini Ultra",
    narrative: "Solana is breaking out of a 2-week descending wedge pattern with significant volume expansion. OBV has been diverging bullishly from price throughout the wedge formation, signaling hidden accumulation.\n\nNetwork activity metrics are surging — daily active addresses hit a 30-day high, and DEX volume on Solana is up 45% week-over-week. These fundamental catalysts support the technical breakout.\n\nThe measured move from the wedge projects a target of $198. VWAP from the wedge start confirms the breakout is trading at a premium to fair value. Stop placed below the wedge support.",
  },
  {
    id: "sig-010",
    asset: "TSLA",
    assetName: "Tesla Inc.",
    direction: "bearish",
    confidence: 76,
    entryPrice: 268.40,
    targetPrice: 248.00,
    stopLoss: 279.00,
    strategy: "Mean Reversion",
    timestamp: hoursAgo(7.0),
    timeframe: "1D",
    indicators: ["Bollinger Bands", "RSI", "VWAP"],
    model: "Claude Opus 4",
    narrative: "Tesla has rallied 18% from its March low and is now testing the upper Bollinger Band on the daily chart. RSI at 74 is entering overbought territory, historically a zone where TSLA has mean-reverted.\n\nThe rally has been driven by short covering rather than fundamental buying — short interest declined from 4.2% to 3.1% during the move. Put/call ratio has dropped to 0.62, indicating excessive bullish positioning.\n\nExpecting a mean reversion toward the 20-day SMA at $252 and potentially the VWAP at $248. The risk/reward favors the short side at current levels.",
  },
  {
    id: "sig-011",
    asset: "BTC",
    assetName: "Bitcoin",
    direction: "bullish",
    confidence: 79,
    entryPrice: 83800,
    targetPrice: 87000,
    stopLoss: 81500,
    strategy: "Momentum",
    timestamp: hoursAgo(8.5),
    timeframe: "1h",
    indicators: ["RSI", "MACD", "OBV"],
    model: "Gemini Ultra",
    narrative: "Bitcoin shows continued momentum with OBV making new highs and MACD expanding. The 1-hour timeframe confirms the bullish bias with higher highs and higher lows. Funding rates remain neutral, suggesting the rally isn't overleveraged.\n\nInstitutional flow data shows net positive ETF inflows for 8 consecutive days. The $85,000 psychological level is the next key resistance.\n\nTargeting $87,000 with a 1.4:1 reward-to-risk ratio. The trade is primarily momentum-driven with fundamental support from ETF flows.",
  },
  {
    id: "sig-012",
    asset: "ETH",
    assetName: "Ethereum",
    direction: "neutral",
    confidence: 68,
    entryPrice: 3830,
    targetPrice: 3900,
    stopLoss: 3750,
    strategy: "Volatility Squeeze",
    timestamp: hoursAgo(10.0),
    timeframe: "4h",
    indicators: ["Bollinger Bands", "ATR", "EMA"],
    model: "Claude Opus 4",
    narrative: "Ethereum is consolidating in a tightening range between $3,800 and $3,870. Bollinger Bandwidth is at a 2-week low, suggesting an imminent expansion move.\n\nThe EMA cluster at $3,825 is acting as support, but the lack of volume expansion keeps the directional bias unclear. ETH staking yields have stabilized at 3.8%, reducing the incentive for selling.\n\nRecommending a neutral stance with defined levels. A breakout above $3,870 targets $3,900+. A breakdown below $3,800 could see $3,750.",
  },
  {
    id: "sig-013",
    asset: "AAPL",
    assetName: "Apple Inc.",
    direction: "neutral",
    confidence: 70,
    entryPrice: 222.80,
    targetPrice: 228.00,
    stopLoss: 218.50,
    strategy: "Volatility Squeeze",
    timestamp: hoursAgo(11.0),
    timeframe: "1D",
    indicators: ["Bollinger Bands", "ATR", "RSI"],
    model: "Gemini Ultra",
    narrative: "Apple is in a tight consolidation ahead of next week's product event. ATR compression to its lowest point in 45 days suggests a major move is brewing. The Bollinger Band width is narrowing dramatically.\n\nRSI sits right at 50, the exact midpoint, offering no directional bias. Options market is pricing in a 4.2% move for the event, higher than typical.\n\nThe setup favors a straddle or waiting for directional confirmation. If bullish momentum resumes, $228-232 is achievable. On the downside, $218.50 is key support.",
  },
  {
    id: "sig-014",
    asset: "NVDA",
    assetName: "NVIDIA Corp.",
    direction: "bullish",
    confidence: 89,
    entryPrice: 140.50,
    targetPrice: 152.00,
    stopLoss: 135.00,
    strategy: "Trend Following",
    timestamp: hoursAgo(12.0),
    timeframe: "1D",
    indicators: ["EMA", "MACD", "ATR"],
    model: "Claude Opus 4",
    narrative: "NVIDIA's daily trend structure remains firmly bullish. The stock has held above its 21 EMA for 14 consecutive sessions, a strong trend persistence signal. MACD is positive and expanding.\n\nATR is rising, confirming trend acceleration rather than exhaustion. Institutional ownership data shows continued accumulation by top-10 holders. The AI capex cycle narrative remains the dominant fundamental driver.\n\nThe daily trend following system targets $152 based on ATR projection. The trade aligns with the broader tech momentum regime.",
  },
  {
    id: "sig-015",
    asset: "SOL",
    assetName: "Solana",
    direction: "bearish",
    confidence: 71,
    entryPrice: 180.20,
    targetPrice: 165.00,
    stopLoss: 188.00,
    strategy: "Mean Reversion",
    timestamp: hoursAgo(14.0),
    timeframe: "1h",
    indicators: ["Bollinger Bands", "RSI", "VWAP"],
    model: "Gemini Ultra",
    narrative: "Solana has surged to overbought levels on the 1-hour RSI at 78 following the breakout. Historical analysis shows SOL tends to pull back 8-12% after RSI exceeds 75 on this timeframe.\n\nVWAP deviation is at +2.1 standard deviations, an extreme reading. The rally has created a volume gap between $168-$175 that typically gets revisited.\n\nTargeting a mean reversion to the VWAP level around $165. This is a counter-trend trade with tighter risk management required.",
  },
  {
    id: "sig-016",
    asset: "XAUUSD",
    assetName: "Gold Spot",
    direction: "neutral",
    confidence: 66,
    entryPrice: 3095.00,
    targetPrice: 3140.00,
    stopLoss: 3050.00,
    strategy: "Volatility Squeeze",
    timestamp: hoursAgo(16.0),
    timeframe: "1h",
    indicators: ["Bollinger Bands", "ATR", "VWAP"],
    model: "Claude Opus 4",
    narrative: "Gold is consolidating near $3,100 with declining intraday volatility. The 1-hour ATR has fallen to session lows while Bollinger Bands are tightening.\n\nThe upcoming FOMC minutes release could be the catalyst for the next directional move. VWAP at $3,092 is providing support.\n\nMaintaining neutral bias ahead of the event risk. The squeeze setup favors a breakout in either direction with the broader trend suggesting upside continuation.",
  },
  {
    id: "sig-017",
    asset: "EUR/USD",
    assetName: "Euro / US Dollar",
    direction: "bullish",
    confidence: 74,
    entryPrice: 1.0790,
    targetPrice: 1.0880,
    stopLoss: 1.0740,
    strategy: "Breakout",
    timestamp: hoursAgo(18.0),
    timeframe: "4h",
    indicators: ["VWAP", "OBV", "EMA"],
    model: "Gemini Ultra",
    narrative: "EUR/USD has broken above the descending trendline resistance from the March high. OBV confirms the breakout with volume expansion above the trendline.\n\nThe 4-hour EMA ribbon has flipped bullish with the 8 EMA crossing above the 21 EMA. European economic data has been surprising to the upside, supporting EUR fundamentals.\n\nThe breakout measured move targets 1.0880. The invalidation is a close back below the trendline at 1.0740.",
  },
  {
    id: "sig-018",
    asset: "TSLA",
    assetName: "Tesla Inc.",
    direction: "bullish",
    confidence: 81,
    entryPrice: 262.00,
    targetPrice: 280.00,
    stopLoss: 252.00,
    strategy: "Momentum",
    timestamp: hoursAgo(20.0),
    timeframe: "4h",
    indicators: ["RSI", "MACD", "EMA"],
    model: "Claude Opus 4",
    narrative: "Tesla's momentum has turned decisively bullish on the 4-hour chart. The MACD histogram is at its highest level in 3 weeks, confirming strong buying pressure. RSI at 63 shows momentum without overextension.\n\nThe robotaxi catalyst continues to drive sentiment, with recent regulatory approvals in two additional states. Delivery numbers for Q1 are expected to beat consensus.\n\nTargeting the $280 resistance zone with a 1.8:1 reward-to-risk ratio. The EMA ribbon is in bullish alignment supporting the trend.",
  },
];

export const agents: Agent[] = [
  {
    id: "agent-001",
    name: "BTC Trend Alpha",
    asset: "BTC/USDT",
    strategy: "Trend Following",
    timeframe: "4h",
    status: "active",
    signalsToday: 4,
    winRate: 68.5,
    lastSignal: hoursAgo(0.5),
  },
  {
    id: "agent-002",
    name: "ETH Mean Rev",
    asset: "ETH/USDT",
    strategy: "Mean Reversion",
    timeframe: "1h",
    status: "active",
    signalsToday: 7,
    winRate: 72.1,
    lastSignal: hoursAgo(1.2),
  },
  {
    id: "agent-003",
    name: "Tech Momentum",
    asset: "NVDA, AAPL, TSLA",
    strategy: "Momentum",
    timeframe: "1D",
    status: "paused",
    signalsToday: 2,
    winRate: 61.3,
    lastSignal: hoursAgo(3.0),
  },
  {
    id: "agent-004",
    name: "Gold Macro Tracker",
    asset: "XAUUSD",
    strategy: "Trend Following",
    timeframe: "4h",
    status: "active",
    signalsToday: 3,
    winRate: 74.8,
    lastSignal: hoursAgo(3.5),
  },
];

export const assets = [
  { label: "Bitcoin (BTC)", value: "BTC" },
  { label: "Ethereum (ETH)", value: "ETH" },
  { label: "Solana (SOL)", value: "SOL" },
  { label: "Apple (AAPL)", value: "AAPL" },
  { label: "NVIDIA (NVDA)", value: "NVDA" },
  { label: "Tesla (TSLA)", value: "TSLA" },
  { label: "S&P 500 ETF (SPY)", value: "SPY" },
  { label: "Nasdaq-100 ETF (QQQ)", value: "QQQ" },
  { label: "Gold (XAUUSD)", value: "XAUUSD" },
  { label: "EUR/USD", value: "EUR/USD" },
  { label: "GBP/USD", value: "GBP/USD" },
  { label: "Crude Oil (WTI)", value: "WTI" },
];

export const timeframes = ["1m", "5m", "15m", "1h", "4h", "1D"];

export const strategies = [
  "Trend Following",
  "Mean Reversion",
  "Breakout",
  "Momentum",
  "Volatility Squeeze",
];

export const indicators = [
  "RSI",
  "MACD",
  "Bollinger Bands",
  "EMA",
  "VWAP",
  "OBV",
  "ATR",
];

// Chart data for signal detail
export function generateChartData(basePrice: number, direction: SignalDirection) {
  const points = 48;
  const data = [];
  let price = basePrice * (direction === "bullish" ? 0.97 : direction === "bearish" ? 1.03 : 0.99);
  
  for (let i = 0; i < points; i++) {
    const trend = direction === "bullish" ? 0.0008 : direction === "bearish" ? -0.0006 : 0;
    const noise = (Math.random() - 0.5) * basePrice * 0.004;
    price = price * (1 + trend) + noise;
    
    const hour = new Date();
    hour.setHours(hour.getHours() - (points - i));
    
    data.push({
      time: hour.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      price: Math.round(price * 100) / 100,
    });
  }
  return data;
}
