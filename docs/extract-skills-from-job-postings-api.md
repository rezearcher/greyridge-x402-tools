---
title: Extract required skills, experience and education from job postings (x402 API)
description: Read a company's live hiring board and get a structured requirements block on every role — the named skills with their category, the minimum years of experience, and the degree the posting asks for — parsed from the job description itself across 10 applicant-tracking systems. Keyless x402 pay-per-call in USDC on Base, free preview, no account.
---
# Turn a job description into structured skills, experience and education

A job description is written for a human to read: a paragraph of "you'll" and "we're looking for," a bulleted wishlist, a sentence about a degree somewhere near the bottom. If you are building something that ranks candidates against a role, tracks which skills a market is hiring for, or routes a posting to the right matching logic, you first have to turn that prose into fields. That extraction is the work — and it is the part that keeps breaking, because every company phrases the same requirement a different way.

This endpoint does that step for you. Point it at a company, ask for descriptions, and every role comes back with a `requirements` block already parsed from its own posting: the concrete skills it names, each tagged with a category, the lowest number of years of experience the text actually states, and the highest degree it asks for. Nothing is guessed from the title — the block is populated only when the description was read, and a field stays empty when the posting says nothing about it rather than being filled with a model's best guess.

## What one row carries

Point it at Stripe with descriptions on and a data role returns this, verbatim from the live board:

| Field | Value |
|---|---|
| `skill_names` | `["Python", "SQL", "Spark", "Databricks", "Pandas"]` |
| `skills` | each skill tagged with a category, e.g. `{"name":"Spark","category":"data"}` |
| `skills_count` | `5` |
| `categories` | `["data","language","ml"]` |
| `years_experience_min` | `5` |
| `education_level` | `bachelors` |
| `source` | `description` |

The `source` field is there on purpose: it tells you the block came from a description that was actually fetched, so you never mistake an empty requirements block (title-only read) for a role that asked for nothing.

## The taxonomy is the part that rots — and that is the point

The skills are matched against a maintained taxonomy of 77 technologies across eight categories — languages (16), frameworks (13), data (13), devops (10), machine learning (9), tools (8), security (5) and cloud (3). A taxonomy is easy to start and expensive to keep honest, because the hard cases are short, ambiguous tokens that collide with ordinary English:

- **"Go"** the language versus "go-to-market," "go live," "go to the dashboard." It is matched only when the token sits in a skills list, carries an explicit cue ("Go programming"), or appears in a conjunction with another known language ("Python and Go").
- **"R"** the language versus "R&D" and "rigor"; **"Spark"** the engine versus "spark joy"; **"Express"** the framework versus "express interest"; **"Excel"** the tool versus "excel at"; **"SAP"** matched case-sensitively so it never fires on "sapping."

Each of those is a hand-tuned, context-anchored pattern, not a bare keyword. The policy is precision over recall: a skill is reported when the posting really names it, and skipped when it is only prose. Maintaining that set of guards as companies rewrite their postings is exactly the upkeep a buyer rents instead of building — the same reason you would rent a maintained scraper rather than hold ten integrations yourself.

## Where this fits, honestly

Most "skills" products sit somewhere else in the market, and if one of them is what you need, use it:

- **Resume-side extractors** (Apyhub's skill extraction, People Data Labs' skill enrichment) turn a *candidate's* résumé into skills and years. That is the other side of the match — the supply side. This endpoint reads the *demand* side: the requirements an employer published on an open role.
- **Enterprise skills-intelligence platforms** (Textkernel, HrFlow.ai, the skills engines inside an HCM suite) are deep ontologies behind an account, a contract and an integration, and they are built to enrich *your own* job catalogue. This is a keyless read of *other companies'* live postings, billed per call.
- **Resold enriched job databases** hand you a cached table of postings with some fields pre-computed. The trade is freshness and transparency: you get their snapshot and their field choices. Here the requirements block is computed from the company's own board on the call you make, returned inline on each row, and the matcher's rules are described above rather than hidden.

The honest limit: this reads what a description states in text. It will not infer a skill the posting never mentions, and `years_experience_min` reflects the lowest number the text gives — a floor to filter on, not a market estimate. If you want modeled or inferred skills, an ontology product is the right tool. If you want the requirements a specific company actually posted, this is narrower and live.

## Try it before you pay

The free preview returns three real sample rows for one company, each already carrying its `requirements` block, so you can see the exact shape — and confirm the live adapter is reading the board — before any payment:

```
curl "https://assetfactory-jobs-x402.sigrunner.workers.dev/jobs/preview?companies=stripe.com"
```

The paid feed is the same depth over [x402](https://x402.org) on Base — up to 25 companies with full descriptions and the requirements block on every row, one call, no account:

```
GET /jobs/search?companies=stripe.com&includeDescription=true   # $0.004 per call, USDC on Base
```

Pay-per-call means you spend on the roles you actually read. No subscription, no seat, no key — a wallet and one request.

*Part of the [Grey Ridge jobs & hiring data for agents](index.html) cluster: live board reads, ghost-job detection, disclosed salary, hiring-intent signal, and now structured requirements — across 10 applicant-tracking systems.*
