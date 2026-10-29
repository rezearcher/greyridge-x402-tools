---
title: Salary data API from live job postings — disclosed comp per company (x402)
description: Pull the compensation a company actually publishes on its own open roles — min, max, currency, pay period and an annualized figure per posting, plus a per-company disclosure rate and median band — read live across 10 applicant-tracking systems. Keyless x402 pay-per-call in USDC on Base, free preview, no account.
---
# Get the pay a company actually posts, not an estimate of it

Most salary data is a guess about a market. Survey products age by a year, crowd-sourced sites report what people say they earn, and benchmarking suites sit behind an enterprise account and model a percentile for a job title in a region. All of that answers "what does this role pay somewhere, on average." None of it tells you what a specific company put on the requisition it opened this week.

This endpoint answers that narrower question. Point it at a company and it reads that company's own applicant-tracking board live, finds the roles where pay is stated, and hands back the numbers the employer published — a low and high bound, the currency, the pay period, and an annualized figure so a monthly or hourly range lines up next to a yearly one. It reports only comp that the employer actually disclosed. Where a role says nothing about pay, it says nothing — no modeled fill-in standing in for a fact.

Try it first for free — real rows off a live board, no payment, no account:

```bash
curl "https://assetfactory-jobs-x402.sigrunner.workers.dev/jobs/preview?companies=gitlab.com"
```

## The compensation call

**`GET /jobs/comp`** — $0.005 USDC per call via [x402](https://x402.org) on Base, no account or API key.

```bash
curl "https://assetfactory-jobs-x402.sigrunner.workers.dev/jobs/comp?companies=stripe.com,lever:palantir&disclosedOnly=true"
```

For each posting that discloses pay you get a normalized record — `min`, `max`, `currency`, `period`, an `annualized` value, and whether the figure came from the structured salary field or from pay-transparency text in the description. On top of the postings you get a per-company summary: the share of scanned roles that disclosed anything, and a median annual band for the ones that did. One call takes up to 25 companies. `maxPerCompany` sets how many postings are scanned per company (default 50, up to 200); `disclosedOnly=true` drops the roles with no stated pay.

## Why read it live instead of buying a benchmark

The numbers come off the real board, across ten applicant-tracking systems — Greenhouse, Lever, Ashby, SmartRecruiters, Workday, Recruitee, Workable, BambooHR, Breezy, and Personio — with the ATS and board token detected from the company domain. You hold no keys and write no per-ATS integrations. The adapters are checked against live canary boards on a cron, so a board that changes the shape of its pay widget is caught before it feeds empty ranges into your pipeline.

The parsing is the part that rots and the part you would not want to own. Greenhouse, for instance, wraps each bound of a disclosed range in its own markup with an em-dash divider; read it naively and a "$150k–$190k" range collapses to a single number. Keeping that parser correct as each ATS reworks its pay-transparency rendering is the maintenance the call absorbs for you.

A cached salary dataset cannot answer this honestly. If its data is weeks old, a company that just changed what it pays, or just started disclosing, still reads the old way. Here the figure is only as old as your call.

## Where it fits, and where it does not

- **Offer and leveling research.** See what a specific set of companies is putting on comparable roles right now, with the source of each number attached, rather than a blended market percentile.
- **Pay-transparency compliance checks.** The per-company disclosure rate is a direct read of how often a company states pay on its own reqs — useful where disclosure is mandated.
- **Enriching a jobs feed.** If you already pull postings, add the disclosed comp as a normalized field instead of writing ten pay-range parsers.

It is not a market-wide percentile service and does not model pay for roles that stay silent — for a blended benchmark across a whole market, a posting-aggregate product like JobsPipe or a survey source like the BLS answers a different question. This call's value is the opposite: the exact comp a named company disclosed on its live reqs, with no account and nothing cached in between.

## Discover it programmatically

- OpenAPI 3.1 spec: [`/openapi.json`](https://assetfactory-jobs-x402.sigrunner.workers.dev/openapi.json)
- Payment manifest: [`/.well-known/x402`](https://assetfactory-jobs-x402.sigrunner.workers.dev/.well-known/x402)
- Free preview, any company: [`/jobs/preview`](https://assetfactory-jobs-x402.sigrunner.workers.dev/jobs/preview?companies=stripe.com)

Built by Grey Ridge Signals. For the postings themselves or an aggregate hiring read, see the [10-ATS jobs feed](ats-jobs-api-x402.html), the [live Greenhouse jobs read](live-greenhouse-jobs-api.html), and the [hiring-intent signal](hiring-intent-signal-api.html) — same keyless pay-per-call-on-Base pattern.
