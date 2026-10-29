---
title: Pay-per-call ATS jobs API for AI agents (x402)
description: One normalized jobs feed across 10 applicant-tracking systems — Greenhouse, Lever, Ashby, Workday, SmartRecruiters and more — as a keyless x402 pay-per-call API on Base. Job search $0.004, per-company hiring-intent signal $0.003, with a free preview. No account, no API key.
---
# Pull jobs from 10 ATS platforms with one keyless call

Scraping careers pages yourself means writing and maintaining a separate adapter for every applicant-tracking system — Greenhouse, Lever, Ashby, SmartRecruiters, Workday, Recruitee, Workable, BambooHR, Breezy, Personio — and each one quietly changes its JSON shape or moves a company to a different vendor. This API keeps those ten adapters alive for you and hands back one normalized schema. Pay per call in USDC on Base via [x402](https://x402.org); no account, no API key.

Try it first, for free — real sample rows, no payment:

```bash
curl "https://assetfactory-jobs-x402.sigrunner.workers.dev/jobs/preview?companies=stripe.com"
```

## Two endpoints

**`GET /jobs/search`** — $0.004 USDC per call. Pass up to 25 companies by domain, ATS slug, or `platform:token`, and get unified postings back: title, company, location, remote flag, employment type, post date, and the full description when you ask for it.

```bash
curl "https://assetfactory-jobs-x402.sigrunner.workers.dev/jobs/search?companies=stripe.com,lever:palantir&maxPerCompany=25"
```

**`GET /hiring/signal`** — $0.003 USDC per call. One aggregate record per company instead of raw listings: open-requisition count, a hiring-intensity grade, department and location histograms, and how recent the newest post is. This is the buying-intent read, not the job board.

```bash
curl "https://assetfactory-jobs-x402.sigrunner.workers.dev/hiring/signal?companies=stripe.com,bunq.com"
```

## Why rent this instead of building it

The value is upkeep. The ten adapters are drift-monitored against live canary boards, so when an ATS changes its response shape the feed is fixed before it reaches your run — that is the reason to rent one maintained layer rather than carry ten integrations that rot. Underlying sources are keyless public endpoints, so there is no paid upstream key you have to hold.

## Discover it programmatically

- Payment manifest: [`/.well-known/x402`](https://assetfactory-jobs-x402.sigrunner.workers.dev/.well-known/x402)
- OpenAPI 3.1 spec: [`/openapi.json`](https://assetfactory-jobs-x402.sigrunner.workers.dev/openapi.json)
- Supported platforms: [`/jobs/platforms`](https://assetfactory-jobs-x402.sigrunner.workers.dev/jobs/platforms)

Built by Grey Ridge Signals. Same pay-per-call-on-Base pattern as our [MCP server security scanner](index.html) and [Base token safety checks](honeypot-check-api-base.html).
