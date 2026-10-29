---
title: Hiring-intent signal API — which companies are hiring, and how hard (x402)
description: One call returns a company's hiring signal — open-requisition count, an intensity grade, department and location breakdown, and how fresh the newest posting is — read live off its real ATS board. Keyless x402 pay-per-call in USDC on Base, free preview, no account.
---
# Know which companies are hiring before you pitch them

A jobs API hands you listings. A sales or GTM team does not want listings — it wants the read behind them: is this account expanding, in which function, and did it just post something this week. Getting that from a raw feed means pulling every posting for a company, deduping it, bucketing by department, and counting, on every call, for every account on your list. That is the part nobody wants to maintain.

This endpoint does the counting and hands back the answer. Point it at a company and you get one record: how many roles are open, a grade for how aggressively it is hiring, where those roles sit by department and location, and how recent the newest post is. The listings are read live off the company's own applicant-tracking board at the moment you call, so a signal that a company went quiet is real, not an artifact of a stale database.

Try it first for free — real rows off a live board, no payment, no account:

```bash
curl "https://assetfactory-jobs-x402.sigrunner.workers.dev/jobs/preview?companies=stripe.com"
```

## The signal call

**`GET /hiring/signal`** — $0.003 USDC per call via [x402](https://x402.org) on Base, no account or API key. One aggregate record per company, not a list of jobs.

```bash
curl "https://assetfactory-jobs-x402.sigrunner.workers.dev/hiring/signal?companies=stripe.com,bunq.com"
```

Each record carries the open-requisition count, an intensity grade, department and location histograms, and the recency of the newest post. One call takes up to 25 companies, so a whole account list scores in a single request. `maxScan` controls how many postings are read per company (default 500, up to 1000).

## Why this beats scoring a jobs feed yourself

The company reads come off the real board, across ten applicant-tracking systems — Greenhouse, Lever, Ashby, SmartRecruiters, Workday, Recruitee, Workable, BambooHR, Breezy, and Personio — with the ATS and board token detected from the company domain. You do not keep a key for any of them, and you do not write ten integrations that each break on their own schedule. The adapters are checked against live canary boards on a cron, so a board that changes shape is caught before it returns empty numbers into your pipeline instead of after.

A cached "jobs database" product cannot give you this honestly. If the underlying data is hours or days old, an open-req count is a count of what *was* posted, and a company that froze hiring last week still looks hot. The signal here is only as old as your call.

## What you build on it

- **Account scoring.** Rank a target list by open-req count and intensity so reps work the accounts that are actually staffing up.
- **Trigger-based outreach.** A company that jumps from a few open roles to many, or opens its first role in a new department, is a timing signal — reach out while the budget is live.
- **Territory and competitive reads.** Department and location histograms show *where* a company is growing: a sudden cluster of sales roles in a region, or an engineering build-out, without reading a single press release.

## Discover it programmatically

- OpenAPI 3.1 spec: [`/openapi.json`](https://assetfactory-jobs-x402.sigrunner.workers.dev/openapi.json)
- Payment manifest: [`/.well-known/x402`](https://assetfactory-jobs-x402.sigrunner.workers.dev/.well-known/x402)
- Free preview, any company: [`/jobs/preview`](https://assetfactory-jobs-x402.sigrunner.workers.dev/jobs/preview?companies=stripe.com)

Built by Grey Ridge Signals. If you want the postings themselves rather than the aggregate, see the [live jobs read](live-greenhouse-jobs-api.html) and the [10-ATS jobs feed](ats-jobs-api-x402.html) — same keyless pay-per-call-on-Base pattern.
