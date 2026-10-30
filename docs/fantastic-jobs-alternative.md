---
title: A fantastic-jobs greenhouse-jobs-api alternative — live board reads, change tracking and salary
description: An honest comparison with fantastic-jobs' Greenhouse Jobs API. Where a resold, enriched Greenhouse database is the right call, and where you need a live board read with new / changed / closed change tracking, ghost-job detection and a normalized salary range instead. Managed Apify actor or keyless x402 pay-per-call in USDC on Base. Public stats, 2026-10.
---
# Looking for an alternative to fantastic-jobs' Greenhouse Jobs API?

[fantastic-jobs' Greenhouse Jobs API](https://apify.com/fantastic-jobs/greenhouse-jobs-api) is one of the most-used Greenhouse feeds on the Apify Store — live since October 2025, with 1,047 users and over 41,000 runs. It is a mature, enriched database: direct postings from thousands of company career sites, enriched with LinkedIn company data, up to 60 fields per job. If what you need is a **bulk backfill across thousands of companies in one pull**, with heavy enrichment on each row, it is a strong tool and you should use it.

People come looking for an alternative when they hit the thing a resold database structurally can't do: tell you **what is true right now**, and **what changed since you last looked**.

## The gap a cached database leaves

An enriched jobs database is built by scraping boards on a schedule and keeping the postings around. That is what makes the bulk backfill possible. It also means two questions stay unanswered:

- **"Is *this* company's role still open right now?"** A scheduled snapshot answers *was this role seen recently*, not *is it on the board this minute*. The gap between those is where you get stale roles and dead apply links.
- **"What changed since my last check?"** A shared database has no memory of *your* previous pull, so it can't hand you new, changed and closed deltas scoped to your runs.

Neither gap is a flaw in that product — they are the trade-off of the database shape. They are just the reason a sourcing tool, a recruiting-intel feed, or an agent acting on current openings often needs a different shape.

## The alternative: a live board read with a change-feed

**[Greenhouse Jobs — Live Feed](https://apify.com/greyridge-signals/greenhouse-jobs-live)** reads the company's Greenhouse board at the moment you call it, and keeps a per-board snapshot between runs so it can diff them. Every role comes back tagged:

| Tag | Meaning |
|---|---|
| `new` | opened since your last run |
| `changed` | still open, but a tracked field moved (title, location, salary…) |
| `open` | unchanged since last run |
| `closed` | was open last run, gone now — flagged `is_ghost` |

A `closed` row is a **ghost job**: a listing that quietly vanished from the board while it may still float around on aggregators. That delta is the earliest, cleanest hiring signal a company gives off, and a cached database cannot produce it because it has no record of *your* last look.

It also returns a **normalized salary range** per role — `{min, max, currency, period, annualized}` — read from the employer's own live posting and annualized to a comparable yearly figure. Salary is a first-class tracked field: when an employer moves a posted range, that row comes back tagged `changed` with `salary` in `changed_fields`. Greenhouse publishes no structured salary field, so this is parsed at run time; `salary_disclosed` tells you which roles carried a range.

## When to pick each

| You need… | Best fit |
|---|---|
| A one-shot backfill of many companies at once, maximally enriched fields | **fantastic-jobs** (resold enriched database) |
| "Is this specific role open right now?" answered authoritatively | **Greenhouse Jobs — Live Feed** (live board read) |
| New / changed / closed deltas and ghost-job detection scoped to your runs | **Greenhouse Jobs — Live Feed** (per-run change-feed) |
| A live salary range that flags when an employer moves the pay band | **Greenhouse Jobs — Live Feed** (tracked `salary` field) |

This is an honest split, not a takedown: breadth-of-backfill versus live-truth-plus-change-tracking are different jobs.

## Two ways to run it

- **Managed Apify actor** — [Greenhouse Jobs — Live Feed](https://apify.com/greyridge-signals/greenhouse-jobs-live). Point it at a list of companies (domain, board slug, or `greenhouse:token`), get back one tagged row per role with the change-feed and salary field. No key to hold; the adapter is kept against a live canary board so a Greenhouse shape change is caught before it reaches your run.
- **Keyless pay-per-call API** — if you'd rather not run an actor, the same live read is a single HTTP call over [x402](https://x402.org) on Base, no account or API key. Try it first for free:

```bash
curl "https://assetfactory-jobs-x402.sigrunner.workers.dev/jobs/preview?companies=stripe.com"
```

The paid endpoints are flat per call — **`/jobs/search`** (live postings) at $0.004 USDC, **`/jobs/comp`** (normalized salary layer) at $0.005, **`/hiring/signal`** (aggregate hiring intensity) at $0.003 — and one call reads up to 25 companies' boards at once, so the price is per watchlist-read, not per row.

```bash
curl "https://assetfactory-jobs-x402.sigrunner.workers.dev/jobs/search?companies=stripe.com&includeDescription=true"
```

## Pricing, honestly

fantastic-jobs bills **per job returned** on the Apify Store — $0.002 per job at the entry tier, dropping to $0.0012 per job at higher volume tiers. That model fits a big one-time backfill well. The keyless API here bills **per call** ($0.004, up to 25 boards), which fits a recurring watchlist read where you care about the change-feed more than the raw row count. Pick the billing shape that matches how you actually pull.

Built by Grey Ridge Signals. Same keyless pay-per-call-on-Base pattern as our [multi-ATS jobs feed](ats-jobs-api-x402.html) and [salary-data API](salary-data-api-x402.html).
