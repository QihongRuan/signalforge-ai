# ⚡ SignalForge AI

**AI agents that turn your trading intuition into 24/7 automated market intelligence.**

Built at the [HAC HACathon 2026](https://www.aivalley.io/hackathons/vibe-coding-hacathon-building-ai-for-finance) — Building AI for Finance with Lovable × n8n × MiniMax.

---

## 🎯 Problem

Retail traders manually monitor charts across 13,000+ assets, missing critical opportunities while sleeping, eating, or living. Existing tools are either generic bots with no personalization or enterprise-only solutions that cost thousands per month.

**90% of retail traders can't code — they can't automate their own strategies.**

## 💡 Solution

SignalForge lets anyone create personalized AI trading agents in natural language:

1. **Describe your strategy** in plain English
2. **Pick your assets**, timeframe, and indicators  
3. **AI generates structured signal cards** with entry/target/stop
4. **Get alerts** via push, email, or Telegram
5. **Share winning ideas** with the community

---

## 🖥️ Features

### 📊 Real-Time Signal Dashboard
A unified feed showing all active AI agent outputs — across crypto, equities, forex, commodities, and ETFs. Each signal card includes direction, confidence score, entry/target/stop prices, and strategy context.

### 🤖 Agent Builder
Create trading agents with natural language instructions. Configure:
- Asset & timeframe selection
- Strategy templates (Trend Following, Mean Reversion, Breakout, Momentum, Volatility Squeeze)
- Technical indicators (RSI, MACD, Bollinger Bands, EMA, VWAP, OBV, ATR)
- Custom trigger conditions
- Alert preferences

### 📈 Structured Signal Cards
Every analysis outputs precise, machine-readable signals — not just "buy" or "sell":
- **Entry / Target / Stop-Loss** prices
- **Confidence score** (65-95%)
- **Risk/Reward ratio** visualization
- **AI-generated narrative** explaining the reasoning
- **Key indicators** panel with current values

### 🔔 Multi-Channel Alerts
Get notified when signals fire:
- Web push notifications
- Email digests
- Telegram bridge

### 🌐 Community Layer
Publish high-conviction analyses as public ideas:
- Signal cards with screenshots
- Strategy labels and direction indicators
- Engagement metrics (likes, comments)

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────┐
│                 Frontend                     │
│  Next.js + TypeScript + Tailwind + shadcn/ui │
├─────────────────────────────────────────────┤
│              Agent Engine                    │
│  Strategy Templates → Prompt Compiler →      │
│  Multi-Provider Inference (Claude/Gemini)    │
├─────────────────────────────────────────────┤
│            Signal Pipeline                   │
│  Structured Output Validator → Signal Cards  │
│  → Feed Manager → Alert Dispatcher           │
├─────────────────────────────────────────────┤
│           Data Layer                         │
│  Market Data APIs → Chart Context Assembly   │
│  → Asset Catalog (13,000+ instruments)       │
└─────────────────────────────────────────────┘
```

---

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/QihongRuan/signalforge-ai.git
cd signalforge-ai

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 14+ (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + shadcn/ui |
| **Charts** | Recharts |
| **Icons** | Lucide React |
| **AI Providers** | Claude API, Gemini |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```
signalforge/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Dashboard — signal feed + market overview
│   │   ├── layout.tsx            # Root layout with dark theme
│   │   ├── globals.css           # Global styles
│   │   ├── agents/
│   │   │   └── create/page.tsx   # Agent Builder + My Agents
│   │   └── signals/
│   │       └── [id]/page.tsx     # Signal detail with chart + analysis
│   ├── components/
│   │   ├── Header.tsx            # Navigation + branding
│   │   ├── Footer.tsx            # HAC HACathon credit
│   │   ├── MarketOverview.tsx    # Market stats + sparklines
│   │   ├── SignalCard.tsx        # Individual signal card component
│   │   ├── SummaryStats.tsx      # Aggregate signal statistics
│   │   └── ui/
│   │       └── button.tsx        # shadcn/ui button
│   └── lib/
│       ├── data.ts               # Mock data (18 signals, 10+ assets)
│       └── utils.ts              # Utility functions
├── components.json               # shadcn/ui config
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## 🎯 Why SignalForge?

| Feature | Generic Bots | Enterprise Tools | **SignalForge** |
|---------|-------------|-----------------|----------------|
| Personalization | ❌ One-size-fits-all | ✅ Custom | ✅ Natural language agents |
| Structured Output | ❌ Prose only | ✅ Structured | ✅ Signal cards with E/T/S |
| Multi-Asset | ⚠️ Limited | ✅ Full | ✅ 13,000+ instruments |
| Cost | 💰 Free-ish | 💰💰💰 $$$$ | 💰 Accessible |
| AI Provider | ⚠️ Single | ⚠️ Locked-in | ✅ Multi-provider |
| Code Required | ✅ Yes | ✅ Yes | ❌ **No code needed** |

---

## 👤 Team

**Qihong Ruan** — Cornell PhD, Quantitative Finance Researcher  
Deep expertise in market microstructure, cross-asset analysis, and high-frequency data.  
Infrastructure: TAQ, WRDS, Kaiko, Interactive Brokers.

---

## 📄 License

MIT

---

<p align="center">
  <strong>⚡ SignalForge AI</strong><br>
  Built at HAC HACathon 2026 — Building AI for Finance
</p>
