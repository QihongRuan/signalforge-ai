# FinFix

- **Rank:** #5 — Finalist
- **Status:** Finalist
- **Team:** FinFix
- **Members:** Ayush Ojha (submitter)
- **Tagline:** Self-healing middleware that autonomously detects, fixes, and settles failed agentic transactions in under 15 seconds.

## About This Project

68% of AI agent purchases fail due to broken merchant pages, anti-bot protections, and payment rejections. FinFix is autonomous middleware that sits between AI shopping agents and broken merchant infrastructure.

When a transaction fails, FinFix's 5-stage pipeline kicks in:

- **DETECT** — Probes the merchant endpoint and identifies the failure
- **CLASSIFY** — Claude Sonnet AI classifies the failure type (DATA_FIX, CHECKOUT_FIX, or PAYMENT_FIX)
- **FIX** — Applies the right fix autonomously (scrapes broken pages, bypasses anti-bot via Crossmint World Store, or reroutes payments through USDC rails)
- **SETTLE** — Settles payment in USDC on Solana via Crossmint Wallets API with escrow and 2% fee collection
- **AUDIT** — Logs a complete, immutable audit trail of every decision and transaction

No human in the loop. The agent's user gets their product, the merchant gets paid, and FinFix earns a 2% fee on every fix.

Built with n8n for workflow orchestration, Claude Sonnet for AI classification, Crossmint for USDC wallets and World Store checkout, and a React dashboard for real-time monitoring.

## Built With

- TypeScript, React, Tailwind CSS, Node.js
- Claude API
- Supabase
- Vercel
- n8n (workflow orchestration)
- Crossmint (USDC wallets, World Store)
- Solana (USDC settlement)

## Links

- **Project Page:** https://www.aivalley.io/hackathons/vibe-coding-hacathon-building-ai-for-finance/projects/e1130f27-a866-4fba-9ac3-4d76acb52568
- **Source Code:** https://github.com/Kush614/agentfix
- **Demo URL:** N/A
- **Video URL:** N/A

## GitHub README

### FinFix — Self-Healing Middleware for Agentic Commerce

When AI agents try to shop online, **68% of transactions fail** — broken product pages, anti-bot checkouts, rejected payments. FinFix is the middleware that catches those failures, fixes them autonomously, and settles via USDC stablecoins.

#### What It Does

FinFix sits between AI shopping agents and broken merchant infrastructure. When a transaction fails, it:

1. **Detects** the failure at the merchant endpoint
2. **Classifies** the failure type using MiniMax + Claude AI in real-time
3. **Fixes** it autonomously (scrape data, bypass checkout, reroute payment)
4. **Settles** via USDC on Solana through Crossmint wallets — instant, borderless
5. **Logs** a full audit trail with on-chain transaction hashes

All of this happens in under 3 seconds, orchestrated by n8n workflows.

#### Architecture

```
AI Agent → n8n Webhook → MiniMax + Claude AI Classifier → Fix Router
  ├── DATA FIX (scrape & extract)
  ├── CHECKOUT FIX (Crossmint World Store)
  ├── PAYMENT FIX (USDC rails)
  └── ESCALATE (human review)
→ Crossmint Wallets API (Treasury → Fixer → Escrow → Fee Pool, USDC on Solana)
→ Settlement + Audit Trail
```

#### Three Failure Types, Three Autonomous Fixes

| Failure | What Happens | How FinFix Fixes It |
|---|---|---|
| Broken Product Data | Merchant page has no structured data | Scrapes HTML, MiniMax + Claude extract product info, finds Amazon equivalent |
| Blocked Checkout | Anti-bot walls block the agent | Reroutes through Crossmint World Store API |
| Payment Rejected | Card processor rejects programmatic payment | Settles via USDC on Solana — no chargebacks, instant finality |

#### Wallet Architecture

| Wallet | Role |
|---|---|
| Treasury | Master fund pool — auto-tops up fixer when low |
| Fixer Agent | Executes purchases on behalf of users |
| Escrow | Holds funds during order fulfillment |
| Fee Collector | Collects 2% FinFix service fee per transaction |

#### Tech Stack

| Layer | Technology |
|---|---|
| Orchestration | n8n |
| AI Classification | MiniMax + Anthropic Claude Sonnet 4.6 |
| Payments & Wallets | Crossmint — Wallets API, World Store Checkout, USDC settlement |
| Blockchain | Solana (devnet) — USDC stablecoin transfers |
| Frontend | React + Three.js + Tailwind + Cyberpunk HUD Command Center |

Built for HAC Vibe Coding Hackathon 2026 — Powered by Crossmint, n8n & MiniMax. License: MIT.
