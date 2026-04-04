# ⚡ SignalForge AI

**AI agents that turn your trading intuition into 24/7 automated market intelligence.**

🏆 **Finalist (Top 10 / 40)** — [HAC HACathon 2026](https://www.aivalley.io/hackathons/vibe-coding-hacathon-building-ai-for-finance) "Building AI for Finance"

> **The twist:** This entire project — code, GitHub repo, and hackathon submission — was built and submitted autonomously by an AI agent in under 30 minutes. [Read the full story →](#-the-story)

---

## 📸 Screenshots

### Dashboard — Signal Feed + Market Overview
![Dashboard](docs/screenshots/dashboard.jpg)

### Agent Builder — Create Trading Agents in Natural Language
![Agent Builder](docs/screenshots/agent-builder.png)

### Signal Detail — Full Analysis with Chart + AI Narrative
![Signal Detail](docs/screenshots/signal-detail.png)

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
Every analysis outputs precise, machine-readable signals:
- **Entry / Target / Stop-Loss** prices
- **Confidence score** (65-95%)
- **Risk/Reward ratio** visualization
- **AI-generated narrative** explaining the reasoning
- **Key indicators** panel with current values

### 🔔 Multi-Channel Alerts
- Web push notifications
- Email digests
- Telegram bridge

### 🌐 Community Layer
Publish high-conviction analyses as public ideas with signal cards, strategy labels, and engagement metrics.

---

## 📖 The Story

### An AI Agent Built This Project in 30 Minutes — and Made Finalist

On April 3, 2026, at the HAC HACathon (Hanwha AI Center × AI Valley × Lovable × n8n × MiniMax) in San Francisco, I was on a 4-person team building an expense auditing tool.

**About one hour before the deadline**, I messaged my AI agent on Telegram:

> "Can we use our trading platform spec to enter this hackathon?"

What followed:

| Time | What the AI Agent Did |
|------|----------------------|
| T+0 min | Read the product spec documents |
| T+2 min | Spawned a coding sub-agent to build the Next.js app |
| T+15 min | Logged into the submission portal (4 email verification attempts 😅) |
| T+23 min | **First submission — placeholder to secure the deadline** |
| T+31 min | Created GitHub repo, pushed code |
| T+33 min | **Updated submission with real GitHub link** |
| T+38 min | Code complete: 3 pages, 1,984 lines TypeScript, build passing ✅ |

**Result:**
- ✅ SignalForge AI → **Finalist, Top 10 out of 40 teams**
- ❌ My 4-person team (full day, in-person) → Did not make Finalist

The agent handled everything end-to-end: reading specs, writing code, creating the GitHub repo, logging into the submission portal, filling out forms, and clicking Submit. I provided credentials and verification codes.

**The irony:** During the final presentation, I didn't know the agent had built 3 complete UI pages — I only showed the GitHub README. If I'd shown the actual UI screenshots above, the ranking could have been higher.

### Lessons Learned

1. **Spec-first pays off** — Having a product spec ready meant the agent could execute immediately
2. **AI can handle end-to-end submission** — Not just code, but browser automation, form filling, repo management
3. **Always have a live demo** — Our biggest gap vs the winners
4. **Communication matters** — The agent should have proactively sent screenshots

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────┐
│                 Frontend                     │
│  Next.js 14 + TypeScript + Tailwind + shadcn │
├─────────────────────────────────────────────┤
│              Agent Engine                    │
│  Strategy Templates → Prompt Compiler →      │
│  Multi-Provider Inference (Claude/Gemini)    │
├─────────────────────────────────────────────┤
│            Signal Pipeline                   │
│  Structured Output → Signal Cards →          │
│  Feed Manager → Alert Dispatcher             │
├─────────────────────────────────────────────┤
│           Data Layer                         │
│  Market Data APIs → Chart Context Assembly   │
│  → Asset Catalog (13,000+ instruments)       │
└─────────────────────────────────────────────┘
```

---

## 🚀 Quick Start

```bash
git clone https://github.com/QihongRuan/signalforge-ai.git
cd signalforge-ai
npm install
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
│   │   ├── agents/
│   │   │   └── create/page.tsx   # Agent Builder + My Agents
│   │   └── signals/
│   │       └── [id]/page.tsx     # Signal detail with chart + analysis
│   ├── components/
│   │   ├── Header.tsx            # Navigation + branding
│   │   ├── Footer.tsx            # HAC HACathon credit
│   │   ├── MarketOverview.tsx    # Market stats + sparklines
│   │   ├── SignalCard.tsx        # Individual signal card
│   │   ├── SummaryStats.tsx      # Aggregate statistics
│   │   └── ui/button.tsx         # shadcn/ui button
│   └── lib/
│       ├── data.ts               # Mock data (18 signals, 10+ assets)
│       └── utils.ts              # Utility functions
└── docs/
    └── screenshots/              # UI screenshots
```

---

## 🎯 Why SignalForge?

| Feature | Generic Bots | Enterprise Tools | **SignalForge** |
|---------|-------------|-----------------|----------------|
| Personalization | ❌ One-size-fits-all | ✅ Custom | ✅ Natural language agents |
| Structured Output | ❌ Prose only | ✅ Structured | ✅ Signal cards with E/T/S |
| Multi-Asset | ⚠️ Limited | ✅ Full | ✅ 13,000+ instruments |
| Cost | 💰 Free-ish | 💰💰💰 $$$$ | 💰 Accessible |
| Code Required | ✅ Yes | ✅ Yes | ❌ **No code needed** |

---

## 👤 Author

**[Qihong Ruan](https://www.linkedin.com/in/qihong-ruan)** — Cornell PhD, Quantitative Finance Researcher

Deep expertise in market microstructure, cross-asset analysis, and high-frequency data.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Qihong_Ruan-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/qihong-ruan)

---

## 📄 License

MIT

---

<p align="center">
  <strong>⚡ SignalForge AI</strong><br>
  Finalist — HAC HACathon 2026 "Building AI for Finance"<br>
  <em>Built by an AI agent. In 30 minutes. And it made the finals.</em>
</p>
