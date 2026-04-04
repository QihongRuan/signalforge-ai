# XBRL Pilot

- **Rank:** #8 — Finalist
- **Status:** Finalist
- **Team:** Team Moonshot
- **Members:** Vipul Bajaj (submitter), wolfie Schoenberger (member), William Stark (member)
- **Tagline:** Your Autonomous Co-Pilot for SEC Compliance

## About This Project

The "last mile" of financial reporting is broken. Public companies currently pay legacy service bureaus thousands of dollars for humans to manually map financial data to the 16,000+ tags in the US-GAAP taxonomy. XBRL Pilot replaces this manual bottleneck with a reasoning-capable AI engine. By leveraging historical SEC data and contextual LLMs, we turn raw financial statements into SEC-ready iXBRL documents in seconds—reducing filing costs by 90% while maintaining 100% compliance accuracy.

## Built With

- Python
- Next.js 16 (App Router + Tailwind CSS)
- TypeScript
- Modal (GPU training)
- Qwen3-4B (QLoRA fine-tuned)

## Links

- **Project Page:** https://www.aivalley.io/hackathons/vibe-coding-hacathon-building-ai-for-finance/projects/0888daa2-32cf-44e4-bc75-486760ebe81b
- **Source Code:** https://github.com/wolfiesch/fintag
- **Demo URL:** N/A
- **Video URL:** N/A

## GitHub README

### FinTag - AI-Powered Financial Analysis Tools

Two AI-powered financial analysis tools built on SEC EDGAR data.

#### FinTag - XBRL Tag Classifier
Predicts the most likely US-GAAP XBRL tag for any financial line item.

- **Training data**: 1.75M label-tag pairs extracted from 68 SEC quarterly datasets (44M raw rows)
- **Model**: QLoRA fine-tuned Qwen3-4B (r=16, alpha=32, 3 epochs on A100-40GB)
- **Baseline**: Bigram similarity matching against 1,000-tag vocabulary (86.4% coverage)
- **Input**: Financial line item text + statement type (IS/BS/CF/EQ/CI) + optional SIC code

#### FinAnomaly - Financial Ratio Anomaly Detector
Flags companies whose financial ratios deviate significantly from industry peers.

- **Data**: 74,993 company-period records across 7,553 companies, 71 industries (2022-2024)
- **Ratios**: 10 financial ratios (margins, ROA/ROE, leverage, liquidity, R&D intensity, AR turnover)
- **Method**: IQR-based scoring by 2-digit SIC code (robust against fat-tailed financial data)
- **Source**: SEC EDGAR Financial Statement Data Sets (num.txt + sub.txt)

#### Data Pipeline

```
68 SEC quarterly zips -> extract_fintag_data.py -> 1.75M SFT training pairs
                      -> build_finanomaly_db.py -> DuckDB (74K company-period ratios)
                      -> modal_fintag_train.py  -> QLoRA adapter (Modal A100-40GB)
```

#### Architecture

- **Next.js 16** App Router with Tailwind CSS
- **API routes** read pre-exported JSON data server-side (no database dependency)
- **FinTag baseline** uses bigram Dice coefficient for fuzzy matching
- **FinAnomaly** uses IQR-based z-scores (more robust than standard deviation for financial data)

Tech Stack: Python (data pipeline) + TypeScript/Next.js (demo UI) + Modal (GPU training)
