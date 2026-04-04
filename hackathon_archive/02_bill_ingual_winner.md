# Bill-ingual

- **Rank:** #2 — 🏆 Winner
- **Status:** Winner
- **Team:** Wombat Labs
- **Members:** Dan Harrison (submitter), Kevin Ho (member), Jackie Say (member)
- **Tagline:** Your AI financial document translator — upload any confusing bill, get a plain-language explanation of what it says, why you should care, and what to do about it.

## About This Project

Bill-ingual is an AI-powered financial document translator that turns confusing financial paperwork into clear, actionable explanations. Upload a mortgage statement, medical bill, insurance EOB, or tax notice, and Bill-ingual delivers a three-layer breakdown: (1) What does this say — a plain-language explanation of every line item, (2) Why should I care — what changed, what's unusual, and what it means for your wallet, and (3) What should I do — concrete next steps including pre-written dispute letters and call scripts when applicable.

The problem is massive: 79 million Americans are confused by their medical bills, 53% of homeowners are blindsided by escrow payment increases, and 80% of medical bills contain errors. Yet no consumer tool exists that looks at your specific document and tells you what it means. Bill-ingual fills that gap.

Built with React/Next.js and multimodal AI for document parsing and financial reasoning. The AI doesn't just summarize — it understands financial context, detects discrepancies (like a medical bill that doesn't match your insurance EOB), and generates actionable output.

Built by Dan Harrison, Jackie Say, and Kevin Ho at the HACathon: Building AI for Finance.

## Built With

- React / Next.js
- Tailwind CSS
- MiniMax (multimodal document parsing) or Claude/GPT-4o vision

## Links

- **Project Page:** https://www.aivalley.io/hackathons/vibe-coding-hacathon-building-ai-for-finance/projects/fa51e8d8-e242-4bc7-93fa-ac1987301ee3
- **Source Code:** https://github.com/wombatlabs-dan/bill-ingual
- **Demo URL:** https://bill-ingual.dan-22b.workers.dev/
- **Video URL:** N/A

## GitHub README

### Bill-ingual

See it live at https://bill-ingual.dan-22b.workers.dev/

**Your AI Financial Document Translator**

Upload any confusing financial document — a mortgage statement, medical bill, insurance EOB, or tax notice — and get a plain-language explanation of what it says, why you should care, and exactly what to do about it.

#### The Problem

79 million Americans are confused by their medical bills. 53% of homeowners don't understand why their mortgage payment just went up. 80% of medical bills contain errors. Yet there is no consumer tool that looks at your specific bill and tells you what it means, why it matters, and what to do about it.

#### How It Works

1. **Upload** any confusing financial document (PDF or photo)
2. **Understand** — get a plain-language breakdown of every line item
3. **Know why it matters** — see what changed, what's unusual, and what it means for your wallet
4. **Take action** — get specific next steps: dispute letters, call scripts, or reassurance that everything is normal

#### Project Structure

```
bill-ingual/
├── README.md
├── docs/
│   ├── one-pager.md
│   └── Bill-ingual-PRD.docx
└── src/
```

#### Tech Stack

- **Frontend:** React / Next.js + Tailwind CSS
- **Backend:** Next.js API routes
- **AI:** MiniMax (multimodal document parsing) or Claude/GPT-4o vision
- **Hosting:** Replit

#### Team

Built at the HACathon: Building AI for Finance (April 3, 2026) by Dan, Jackie, and Kevin.

#### Hackathon Judging Criteria

| Criteria | Their Angle |
|----------|-------------|
| Problem Relevance & Clarity | 79M with medical bill problems, 53% blindsided by escrow — universal, specific, data-backed |
| Real-World Impact | Catches errors on 80% of medical bills, saves hours per document, prevents overpayment |
| Product Execution & Demo | Confusing document in → clear 3-layer explanation out. High visual contrast. |
| Use of AI / Technical Creativity | Multimodal parsing + financial reasoning + actionable output (dispute letters) |
| Viability & Scalability | Freemium B2C, scales to any doc type, B2B2C with servicers/insurers |
