---
title: Scan an MCP server before your agent trusts it (x402)
description: Static tool-poisoning / prompt-injection scan for MCP servers (OWASP LLM01/LLM08), usable as a CI gate, plus Base token honeypot/rug checks. Keyless x402 pay-per-call on Base, free previews.
---
# Vet an MCP server before your agent trusts it

Every tool an MCP server advertises is read by your model the moment it connects — a poisoned description, a hidden-unicode instruction, or a conceal-from-user directive can steer the agent before a single tool runs. Scan any server for prompt-injection / tool-poisoning patterns in one command — no install, no key:

```bash
npx -y github:rezearcher/greyridge-x402-tools#v0.3.1 mcpscan https://mcp.deepwiki.com/mcp
```

Prints tools scanned, severity counts, risk score, and a verdict — `clear` / `review` / `block`. **Exit code 2 on `block`**, so it drops straight into CI as an admission gate. Static analysis of advertised metadata only; it never invokes a tool.

- [Why was my Claude connector rejected?](claude-connector-directory-readiness.html) — check your MCP server against the Claude Connector Directory review criteria before you submit
- [Scan an MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html) — method, CI gate, private/offline scanning
- [The MCP exposure census (2026)](mcp-registry-census-2026-10-20.html) — ~half of public MCP servers in the official registry (174/364) answer `tools/list` with no authentication; confirmed tool-poisoning 0%
- [MCP server security scorecards](mcp-server-scorecards.html) — independent injection + Claude Directory readiness scans of well-known public MCP servers (DeepWiki, Wolfram, Hugging Face, Cloudflare, Astro, and more)

**Private, local or stdio-only servers** scan with nothing leaving your machine (paste the `tools/list`, or score an `mcp-egress` recording fully offline). Itemized findings with OWASP LLM01/LLM08 mapping: paid `GET /scan/mcp` ($0.05 USDC via [x402](https://x402.org) on Base, no account). Interactive scan: [/scan/mcp-scanner](https://x402-data-api.sigrunner.workers.dev/scan/mcp-scanner).

## Base token safety — pre-trade checks for trading agents

Check a Base token **before** your agent buys it: honeypot sell-simulation, proxy/mint/pause/blacklist flags, measured transfer tax, liquidity depth. One HTTP call returns SAFE / CAUTION / AVOID.

```bash
curl "https://x402-data-api.sigrunner.workers.dev/chain/token-report/preview?token=0xYourBaseToken"
```

Paid route is the same depth: `GET /chain/token-report?token=0x...` at $0.01 USDC via x402 on Base. Swap guard `/gate/swap` returns GO / HOLD / BLOCK at $0.008.

- [Live Base token rug & honeypot checks](token-rug-checks.html) — measured GO / HOLD / BLOCK verdicts for trending Base tokens, re-runnable with no account
- [Honeypot check API for Base tokens](honeypot-check-api-base.html)
- [Pre-trade safety gate for AI trading agents](pre-trade-safety-gate-ai-agents.html)


## Jobs & hiring data for agents

Read a company's hiring board live on every call — current open roles, what's new vs. closed since your last read, ghost-job detection, salary and hiring-intent — through one keyless x402 call. Deepest on Greenhouse; the same call spans 10 ATS when you need breadth. No account, no per-ATS scraping to maintain.

Try it free first — one call returns real sample rows for a company plus the exact paid-upgrade pointer, no account and no key:

```bash
curl "https://assetfactory-jobs-x402.sigrunner.workers.dev/jobs/preview?companies=stripe.com"
```

Paid routes are the same depth over [x402](https://x402.org) on Base: job search `GET /jobs/search` ($0.004), per-company hiring-intent signal `GET /hiring/signal` ($0.003), and normalized compensation `GET /jobs/comp` ($0.005) — pay per call in USDC, no account.

- [Live Greenhouse jobs API: is this role still open?](live-greenhouse-jobs-api.html) — reads the board live on every call (not a cached database), with ghost-job / closed-role detection; $0.004 per call, free preview
- [Alternative to fantastic-jobs' Greenhouse Jobs API](fantastic-jobs-alternative.html) — an honest head-to-head: where a resold enriched Greenhouse database fits, and where you need a live board read with new/changed/closed change tracking, ghost-job detection and a tracked salary range instead
- [Ghost job detection API: closed roles and stale evergreen postings](ghost-job-detection-api.html) — reads the live board and diffs successive reads so a role that quietly vanished shows up as closed, plus a tunable age signal (ghost_candidate) that flags roles left posted for months with no sign of being filled; an honest comparison with URL-list freshness validators; $0.004 per call, free preview
- [Salary data API from live job postings](salary-data-api-x402.html) — the disclosed comp a company actually posts on its own open roles (min/max, currency, period, annualized, source), plus a per-company disclosure rate and median band, read live across 10 ATS; $0.005 per call, free preview
- [Hiring-intent signal API: which companies are hiring, and how hard](hiring-intent-signal-api.html) — one record per company (open-req count, intensity grade, department/location breakdown, recency) for account scoring and trigger-based outreach; $0.003 per call, free preview
- [Pay-per-call ATS jobs API for AI agents](ats-jobs-api-x402.html) — Greenhouse, Lever, Ashby, Workday and more in one normalized feed; job search $0.004, per-company hiring-intent signal $0.003, free preview
- [Which ATS jobs scraper covers Workday, BambooHR and Breezy?](ats-jobs-scraper-comparison.html) — an honest coverage comparison (10 vs 6 vs 1 ATS) against the established Greenhouse/Lever/Ashby scrapers, with guidance on when to pick each

**Prefer a managed, no-code run?** The same maintained scrapers are published as Apify Store actors, so scheduled runs, dataset storage and per-result billing are handled by the marketplace and the Store's own run-counts and ratings carry the trust:

- [Live Greenhouse Jobs](https://apify.com/greyridge-signals/greenhouse-jobs-live) — reads each board live with change tracking and ghost-job / closed-role detection
- [Multi-ATS Jobs Scraper](https://apify.com/greyridge-signals/multi-ats-jobs-scraper) — one normalized feed across 10 ATS platforms (Greenhouse, Lever, Ashby, Workday and more)
- [Unified Jobs Aggregator](https://apify.com/greyridge-signals/unified-jobs-aggregator) — one deduplicated feed merged across ATS and LinkedIn sources
- [LinkedIn Jobs Scraper](https://apify.com/greyridge-signals/linkedin-jobs-scraper) — public job postings with full descriptions and normalized pay, no login
- [Company Enrichment](https://apify.com/greyridge-signals/company-enrichment-scraper) — firmographics, contacts, tech stack and a live hiring signal in one record

## Company & domain enrichment for agents

Enrich a company domain with one live-from-source record: the SaaS stack hiding in its DNS, who runs its mail, domain age from the registry, graded contact emails — and a live hiring signal read from the company's own ATS. No resold database; you enrich the domains you supply.

- [Company enrichment by domain: the live tech stack and hiring signal a database misses](company-enrichment-api.html) — an honest head-to-head with the firmographics-database and live-crawl enrichment actors, and where DNS technographics plus a live 8-ATS hiring signal fit instead
- [Detect a company's SaaS stack from its domain](detect-saas-tech-stack-from-domain.html) — a technographics tool that reads live DNS (domain-verification tokens + the SPF chain), not just the homepage, so it surfaces the back-office SaaS a crawl-based detector (BuiltWith, Wappalyzer) can't see; pay-per-record, no subscription
- [Flag risky leads and sign-ups by domain age](flag-risky-domains-lead-quality-api.html) — score a lead or sign-up domain by its real registration age, registrar and mail setup, read live from RDAP/DNS; one record that screens for throwaway domains and enriches at the same time
- [Company Enrichment on the Apify Store](https://apify.com/greyridge-signals/company-enrichment-scraper) — managed, no-code, per-result billing

## Email deliverability & verification for agents

Grade an email address on one keyless call — MX routing, disposable / role / free-provider flags, SPF/DMARC sender-posture (spoofability), a typo "did-you-mean", and an A–F deliverability grade. Pay $0.002 per email in USDC over [x402](https://x402.org) on Base; no account, no API key, no prepaid credits. The 402 response ships the full schema and a worked example, so an agent sees the output before it pays.

- [Email verification API for AI agents](email-verification-deliverability-api.html) — an honest head-to-head with the SMTP list-cleaners (the top Apify verifier, ZeroBounce, NeverBounce, Kickbox): where a mailbox-level SMTP probe is the right tool, and where you instead need a deliverability + domain-risk + sender-posture grade an agent can call with nothing but a wallet
- [Company Enrichment on the Apify Store](https://apify.com/greyridge-signals/company-enrichment-scraper) — the same MX-graded deliverability on every contact, managed and per-result billed

<!-- line-a-framework-pages:start -->

**Framework install guides** — drop the gate into your trading agent in one line:

- [ElizaOS pre-trade swap-gate plugin](elizaos-token-safety-plugin.html) — `npm i github:rezearcher/plugin-swap-gate`
  - stop a specific failure: [honeypot](elizaos-token-safety-plugin-honeypot.html) · [can't-sell](elizaos-token-safety-plugin-cant-sell-exit-trap.html) · [trade-too-big](elizaos-token-safety-plugin-trade-too-big-price-impact.html) · [rug controls](elizaos-token-safety-plugin-rug-admin-controls.html)
- [Vercel AI SDK one-tool swap guard](vercel-ai-sdk-swap-guard.html) — `npm i github:rezearcher/vercel-ai-swap-gate ai zod`
  - stop a specific failure: [honeypot](vercel-ai-sdk-swap-guard-honeypot.html) · [can't-sell](vercel-ai-sdk-swap-guard-cant-sell-exit-trap.html) · [trade-too-big](vercel-ai-sdk-swap-guard-trade-too-big-price-impact.html) · [rug controls](vercel-ai-sdk-swap-guard-rug-admin-controls.html)
- [LangChain.js honeypot-check tool](langchain-honeypot-check-tool.html) — `npm i github:rezearcher/langchain-swap-gate @langchain/core zod`
  - stop a specific failure: [honeypot](langchain-honeypot-check-tool-honeypot.html) · [can't-sell](langchain-honeypot-check-tool-cant-sell-exit-trap.html) · [trade-too-big](langchain-honeypot-check-tool-trade-too-big-price-impact.html) · [rug controls](langchain-honeypot-check-tool-rug-admin-controls.html)

<!-- line-a-framework-pages:end -->
- [Pay-per-call, no API key: x402 token risk API](x402-token-risk-api.html)
- [Base token-safety x402 price comparison (2026-10)](base-token-safety-price-comparison.html) — measured per-call cost across providers

### Reselling these verdicts

Shipping a wallet, trading bot, agent or marketplace of your own? Embed the gate and keep the margin: you pay the wholesale call price (`/gate/swap` at $0.008), set whatever retail fits your product, and every referred call is tagged with `?ref=<your-tag>` and reconciled to you on-chain — provable against Base txHashes, no contract or minimum. See the [partner program](https://x402-data-api.sigrunner.workers.dev/partners) and pull your own [live reconcile report](https://x402-data-api.sigrunner.workers.dev/partners/report) any time.

Code: [greyridge-x402-tools](https://github.com/rezearcher/greyridge-x402-tools) (CLI, GitHub Action, LangChain, CrewAI, ElizaOS). API discovery: [/.well-known/x402](https://x402-data-api.sigrunner.workers.dev/.well-known/x402). Contact: contact@greyridgesignals.ai
