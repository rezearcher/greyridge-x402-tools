---
title: Ghost job detection API — flag stale evergreen postings and closed roles at the source (x402)
description: Detect ghost jobs two ways on a company's live board — roles quietly pulled from the board (closed), and roles left posted for months with no sign of being filled (a tunable age + stale-update signal). Keyless x402 pay-per-call in USDC on Base, with a free preview. An honest comparison with URL-list freshness validators.
---
# Catch ghost jobs at the source, not from a stale URL list

A ghost job is a posting that still shows up on aggregators and cached job boards after the company has already pulled it, or one that a company leaves up with no intention of filling it. For anyone building recruiting-intel, a sourcing tool, or an agent that acts on a company's current openings, ghost jobs are the noise that makes the data untrustworthy: you surface a role, someone acts on it, and it was never really open.

There are two kinds of ghost job, and they need different tests. The first kind **disappears**: the company pulls the req but the posting lingers on aggregators and cached boards. The second **stays in plain sight**: a req left posted for months with no one hiring against it. The sections below catch the first kind two ways, then the second kind with an age signal a freshness check can't see.

## Way one: validate a list of postings you already hold

If you already have a set of posting URLs — from an Indeed scrape, your own database, a previous crawl — you can check each one for signs of death. A couple of maintained actors do exactly this:

- [`muazah/job-freshness-validator`](https://apify.com/muazah/job-freshness-validator) takes a URL list and marks each row dead (HTTP 404/410), expired (marker phrases on the page), a dead redirect, or blocked, then reports a stale percentage. It covers Greenhouse, Lever, and generic expiry markers, and runs at $0.75 per 1,000 postings checked. As its author puts it, it validates the data you own; it is not a scraper.
- [`kodabloomllc/ghost-job-detector`](https://apify.com/kodabloomllc/ghost-job-detector) scores Indeed postings from 0 to 100 for ghost risk, with its strongest signal being to open each job's application link and check whether the posting is closed, at $3.00 per 1,000 checks.

These are good tools when you already have the postings in hand and want a verdict per row.

## Way two: read the source of truth and diff it

The trouble with checking a URL after the fact is that a company can remove a role from its board without the old link ever returning a 404 or showing an "expired" marker — the page can redirect, return a soft 200, or sit behind bot protection that defeats a link check. The one place a closure is unambiguous is the company's own board: if a role was on it yesterday and is gone today, it is closed, full stop.

That is what this API does. It reads the company's **live Greenhouse board at the moment you call it** — not a database someone scraped earlier and kept around for months. Try it first, for free, no account or key:

```bash
curl "https://assetfactory-jobs-x402.sigrunner.workers.dev/jobs/preview?companies=stripe.com"
```

That returns the first three live roles off Stripe's board with title, location, apply URL and post date, plus a count of how many more are available.

The paid call returns the full current set:

**`GET /jobs/search`** — $0.004 USDC per call via [x402](https://x402.org) on Base, no account or API key. One call takes up to 25 companies, by domain or Greenhouse token.

```bash
curl "https://assetfactory-jobs-x402.sigrunner.workers.dev/jobs/search?companies=stripe.com"
```

Two reads a day apart tell you exactly what moved: a role present in the first read and absent from the second has been pulled from the board — a true closed signal, and if it is still floating around an aggregator, a ghost. A role appearing for the first time is a genuinely new opening, the earliest hiring signal a company gives off.

## Let the managed feed keep the state for you

The live read is stateless: it hands you the current board and you diff successive reads yourself. If you would rather not hold that state, the managed [Live Greenhouse Jobs actor](https://apify.com/greyridge-signals/greenhouse-jobs-live) keeps a per-board snapshot between runs and tags each row `new`, `changed`, `open` or `closed` automatically, with closed roles flagged as ghost candidates — the change-feed computed for you instead of in your own code.

## Way three: flag the roles that never close

Not every ghost job disappears. The other kind sits in plain sight — a req a company leaves posted for months while it builds a pipeline, an evergreen "always hiring" listing, or a role nobody remembered to take down. A freshness check never catches these: the posting is live, the apply link resolves, the board still carries the row. What gives it away is age — how long the role has sat open with nothing moving.

Every row this API returns carries three fields for exactly that read, on the free preview and the paid call alike:

- `age_days` — how long the role has been posted, from the board's own post date.
- `ghost_candidate` — `true` once that age crosses a threshold you set (60 days by default).
- `ghost_signals` — which rules fired: `posted_60d` (posted longer than the threshold) and `stale_update_60d` (the board itself hasn't touched the row since).

You can see it live, for free, right now — and the oldest still-open roles are not close calls. Reading real Greenhouse boards on 2026-10-30:

| Company | Oldest still-open role | Signals that fired |
|---|---|---|
| Databricks | 1,053 days | `posted_60d` |
| Anthropic | 679 days | `posted_60d`, `stale_update_60d` |
| Cloudflare | 235 days | `posted_60d` |
| GitLab | 100 days | `posted_60d` |

A role open for nearly three years is not one anyone is racing to fill. Re-run the curl and you will get each board's current ages:

```bash
curl "https://assetfactory-jobs-x402.sigrunner.workers.dev/jobs/preview?companies=databricks.com"
```

The ghost-risk scorers in Way one lean on whether the application link still resolves — which is exactly the test a still-open evergreen passes. Age is the orthogonal signal they miss.

On the paid `GET /jobs/search` you tune and filter it: `ghostDays=90` moves the line, `ghostOnly=true` returns only the stale roles (ghost-job intel), and `excludeGhost=true` drops them for a clean feed of roles that are actually moving.

```bash
curl "https://assetfactory-jobs-x402.sigrunner.workers.dev/jobs/search?companies=databricks.com&ghostOnly=true&ghostDays=90"
```

The stateless call grades staleness from the board's post and update dates. For the stronger read — a role observed continuously open across every snapshot, not just an old post date — the managed [Live Greenhouse Jobs actor](https://apify.com/greyridge-signals/greenhouse-jobs-live) keeps that per-board history between runs and reports days-open from real continuity, which a resold snapshot database structurally can't.


## Which one should you use

Pick by what you already have. If you hold a list of posting URLs across many sources and want each one graded, a freshness validator is the right shape. If you want the authoritative current-open set for a company — and the closures that a URL check silently misses — read the board. And if the ghost you care about is the evergreen that never comes down, filter on age: `ghostOnly=true` returns only the roles sitting open past your threshold. This endpoint is Greenhouse-specific by design, because depth on the single most-requested ATS is where the signal is cleanest; the same live-board diff extends across Lever, Ashby, Workday and more through our [10-ATS jobs feed](ats-jobs-api-x402.html) when you need the breadth.

## Discover it programmatically

- Payment manifest: [`/.well-known/x402`](https://assetfactory-jobs-x402.sigrunner.workers.dev/.well-known/x402)
- OpenAPI 3.1 spec: [`/openapi.json`](https://assetfactory-jobs-x402.sigrunner.workers.dev/openapi.json)
- Free preview, any company: [`/jobs/preview`](https://assetfactory-jobs-x402.sigrunner.workers.dev/jobs/preview?companies=stripe.com)

Built by Grey Ridge Signals. See also the [live Greenhouse jobs API](live-greenhouse-jobs-api.html), the [alternative to fantastic-jobs' Greenhouse API](fantastic-jobs-alternative.html), and our [ATS scraper coverage comparison](ats-jobs-scraper-comparison.html).
