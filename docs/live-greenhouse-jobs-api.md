---
title: Live Greenhouse jobs API — is this role still open right now? (x402)
description: Read a company's Greenhouse careers board live on every call, not from a cached database. Know which roles are open right now, spot new postings, and catch ghost jobs that vanished from the board. Keyless x402 pay-per-call in USDC on Base, with a free preview.
---
# Read a Greenhouse board live, not from a cache

Most "Greenhouse jobs" APIs hand back a database someone scraped earlier and kept around for months. That answers *was this role seen recently*, which is not the same question as *is this role on the board right now*. If you are building recruiting-intel, a sourcing tool, or an agent that acts on a company's current openings, the gap between those two questions is where you get stale roles, dead apply links, and ghost listings.

This API reads the company's Greenhouse board at the moment you call it. Try it first, for free — real rows, no payment, no account:

```bash
curl "https://assetfactory-jobs-x402.sigrunner.workers.dev/jobs/preview?companies=stripe.com"
```

That returns the first three live roles off Stripe's Greenhouse board with title, company, location, apply URL, and post date, plus a count of how many more are available. The paid call returns the full set.

## The paid call

**`GET /jobs/search`** — $0.004 USDC per call via [x402](https://x402.org) on Base, no account or API key. Pass a company by domain or Greenhouse token and get back every current posting in one normalized shape: title, location, remote flag, employment type, post date, and the full description when you ask for it.

```bash
curl "https://assetfactory-jobs-x402.sigrunner.workers.dev/jobs/search?companies=stripe.com&includeDescription=true"
```

One call takes up to 25 companies, so you can read a whole watchlist of Greenhouse boards at once.

## Catching ghost jobs

A ghost job is a listing that still shows up on aggregators and cached job sites after the company has actually pulled it from its board. Because every call here reads the live board, two reads a day apart tell you exactly what changed: a role present yesterday and gone today has been closed, and if it is still floating around elsewhere, it is a ghost. A role that appears for the first time is a genuinely new opening — the earliest hiring signal a company gives off.

A stateless call hands you the current board; you diff successive reads to get new-versus-closed. If you would rather not hold that state yourself, the managed [Greenhouse Jobs Live actor](https://github.com/rezearcher) keeps the per-board snapshot between runs and tags each row `new`, `changed`, `open`, or `closed`, with closed roles flagged as ghost candidates.

## Why rent the live read instead of building it

The work is upkeep, not the first fetch. Greenhouse board shapes drift and companies move boards; the adapter here is checked against a live canary board on a schedule, so a break is caught before it reaches your run rather than silently returning empty results. The source is a keyless public endpoint, so there is no paid upstream key for you to carry, and the per-call price stays low because the cost does.

## Hiring-intent signal

If you want the read on *how hard a company is hiring* rather than the listings themselves, **`GET /hiring/signal`** ($0.003 USDC) returns one aggregate per company: open-requisition count, an intensity grade, department and location histograms, and how fresh the newest post is.

```bash
curl "https://assetfactory-jobs-x402.sigrunner.workers.dev/hiring/signal?companies=stripe.com"
```

## Discover it programmatically

- Payment manifest: [`/.well-known/x402`](https://assetfactory-jobs-x402.sigrunner.workers.dev/.well-known/x402)
- OpenAPI 3.1 spec: [`/openapi.json`](https://assetfactory-jobs-x402.sigrunner.workers.dev/openapi.json)
- Free preview, any company: [`/jobs/preview`](https://assetfactory-jobs-x402.sigrunner.workers.dev/jobs/preview?companies=stripe.com)

Built by Grey Ridge Signals. Same keyless pay-per-call-on-Base pattern as our [10-ATS jobs feed](ats-jobs-api-x402.html) and [MCP server security scanner](index.html).
