# Captrace

- **Rank:** #6 — Finalist
- **Status:** Finalist
- **Team:** Captrace
- **Members:** Nikita Desale (submitter)
- **Tagline:** Governed diligence. Every claim traced.

## About This Project

Captrace is governed deal intelligence for investment teams. Founders upload a PDF deck (and optionally a financial model); n8n ingests the file, extracts text, calls MiniMax with a strict JSON-only diligence prompt, and returns summary, confidence (0–100), key risks, open questions, claims, and memo to a Lovable app. Ask Captrace explains results in plain language; the stack is built for demo clarity and human oversight, not black-box scores.

## Built With

- JavaScript
- LLM: MiniMax
- Lovable / Lovable.dev
- React
- TypeScript
- n8n

## Links

- **Project Page:** https://www.aivalley.io/hackathons/vibe-coding-hacathon-building-ai-for-finance/projects/2f069328-7854-419f-915f-56bfdf190db9
- **Source Code:** https://github.com/nikitadesale/captrace-deal-diligence-ai
- **Demo URL:** N/A
- **Video URL:** N/A

## GitHub README

### Captrace — System Architecture

**Problem:** Teams that decide on deals, programs, or risk exposure routinely reconcile **narrative** (decks, memos, emails) with **structured numbers** (models, GL extracts, cap tables). That work is slow, error-prone, and hard to audit — especially when AI is used without **traceability** or **human gates**.

**What Captrace does:** It is a **governed ingestion and analysis pipeline**: documents and spreadsheets enter through a controlled API; **n8n** orchestrates deterministic steps and **MiniMax** calls; outputs are **structured**, **cited where possible**, and optionally **held for human approval** before a memo or export is released.

#### Impact

| Area | Outcome |
|------|---------|
| Time | Less manual copy-paste between deck, model, and memo |
| Quality | Systematic cross-check of claims vs tabular data |
| Trust | Every model call sits behind visible workflow steps (n8n executions) |
| Control | HITL and policy hooks are first-class |

#### Architecture

- **Lovable** owns UX, auth, and calling the single entry webhook
- **n8n** owns secrets, branching, retries, logging, and response shaping
- **MiniMax** is a stateless inference dependency

#### Pipeline Flow

Webhook → Extract (PDF/XLSX) → MiniMax extract → Merge → Rules + Scores → MiniMax Critic → HITL (optional) → MiniMax Memo → Respond → Save run

#### Phased Delivery

1. **Phase A:** Single file type, synchronous webhook, extract + critic + JSON UI
2. **Phase B:** PDF + XLSX merge path, citation stubs → real page/slide refs
3. **Phase C:** HITL, run history (Supabase), role-based UI, idempotency
