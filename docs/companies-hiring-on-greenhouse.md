---
title: Which companies are hiring on Greenhouse right now? Live roster API (x402)
description: A live, self-pruned list of the companies posting the most open roles on their Greenhouse boards right now, with per-company role counts. Not a stale tech-detection database — a feed that drops dead boards and reads real openings. Free discovery call, keyless x402 pay-per-call in USDC on Base.
---
# The companies actually hiring on Greenhouse, with live role counts

If you want a list of companies that "use Greenhouse," plenty of tech-detection databases already have one — TheirStack, Enlyft, Datanyze and similar list several thousand each. They answer one question: *does this company have Greenhouse embedded somewhere.* They do not answer the question a sourcing tool or hiring-intel agent actually has: *which of these companies is hiring right now, and how hard.*

That gap matters because a tech-detection list goes stale quietly. A company can keep its Greenhouse tag for a year after it stopped posting, moved its board behind a login, or renamed its token. When we first probed a hand-built list of well-known companies, more than half pointed at a board that had gone dark, moved, or been taken private. A static list hands you that cleanup as homework.

This route hands you the opposite: a feed that has already done the pruning.

## The free discovery call

**`GET /jobs/roster`** — free, no account, no key. It returns the Greenhouse boards we keep under watch, ranked by how many roles each is posting at this moment.

```bash
curl "https://assetfactory-jobs-x402.sigrunner.workers.dev/jobs/roster"
```

At the last refresh that was **53 live boards carrying 8,057 open roles**, each with its current count. The busiest right now are Databricks (901 roles), Stripe (737), Anthropic (669), Cloudflare (464), Elastic (402) and Datadog (397). Every entry is a board we fetched and confirmed is serving roles — not a company that embedded Greenhouse once and might still be using it.

The roster prunes itself. A board that goes dark or stops returning roles drops off on the next refresh, so you are never handed a company that no longer hires here. Keeping a live list of board tokens healthy — companies leave Greenhouse, rename their token, go private — is the standing upkeep you would otherwise own yourself.

## From "who" to the actual jobs, in the same call

A company list is only step one. The point of knowing a company is hiring is to read what it is hiring for. The same rail does that on one paid call: pass `useRoster=true` and it unions the maintained roster into the request, so you pull the live postings across the busiest boards without supplying a single company name.

```bash
# the roster's roles, live, in one paid call — no company list to maintain
curl "https://assetfactory-jobs-x402.sigrunner.workers.dev/jobs/search?useRoster=true&rosterLimit=10&maxPerCompany=50"
```

**`GET /jobs/search`** is $0.004 USDC per call via [x402](https://x402.org) on Base — no account, no API key, no prepaid credits. Each row comes back normalized: title, parsed location and workplace (remote/hybrid/onsite), employment type and seniority, post date, a disclosed salary range when the employer posts one, and the full description on request. `rosterLimit` picks how many of the richest-first boards to pull; `rosterFilter` narrows to a substring on company or token.

## Honest scope

This is a curated, richest-first live feed of the highest-volume Greenhouse employers, not an exhaustive census of every company that has ever touched Greenhouse. If you need the widest possible universe of Greenhouse customers regardless of whether they are hiring, a tech-detection database is the right tool and will list far more names. What you get here instead is the subset that is demonstrably posting roles today, with live counts, on a pay-per-call rail you can hit with nothing but a wallet.

## Why rent this instead of building it

Reading a single Greenhouse board is easy. Keeping a list of board tokens alive — catching the ones that renamed, went private, or stopped posting, and re-ranking by live volume — is the part that rots and needs continuous attention. That upkeep is exactly what a maintained roster is: the reason to rent the live read rather than scrape and babysit a company list yourself.

- [Live Greenhouse jobs API: is this role still open?](live-greenhouse-jobs-api.html) — read any one board live, with new/changed/closed change tracking and ghost-job detection
- [Hiring-intent signal API: which companies are hiring, and how hard](hiring-intent-signal-api.html) — one graded record per company for account scoring and trigger-based outreach
- [Connect live jobs to your agent via MCP](connect-jobs-mcp-server.html) — the same feed as hosted MCP tools for Claude Code, Cursor and Claude Desktop

Pay per call in USDC over x402 on Base, no account. Discovery: [/.well-known/x402](https://assetfactory-jobs-x402.sigrunner.workers.dev/.well-known/x402). Contact: contact@greyridgesignals.ai
