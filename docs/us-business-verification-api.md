---
title: US business verification API — a KYB match score an examiner can actually review
description: An honest look at Secretary of State business-verification actors on the Apify Store. The 50-state incumbents win on breadth; where you instead need a match score you can defend to a reviewer — which axis agreed, the model version that decided it, a free audit trail on every no-match, and a bill only when a row is a verified match — this is the gap they leave. Managed Apify actor, keyless, official state sources. Public Store stats, 2026-11.
---
# US business verification: a KYB match score you can show your work on

Most Secretary-of-State verification actors hand back a match and a single number. For bulk lead-building that is fine. For a KYB file that an onboarding reviewer, a credit committee or an auditor will later read, a blended score is the weak point: when someone asks *why* "ACME LLC" matched "Acme Holdings, Inc.", "0.82" is not an answer.

If you need breadth first, use the incumbents and do not let this page talk you out of them. [whetstonetools/secretary-of-state-business-search](https://apify.com/whetstonetools/secretary-of-state-business-search) (~52,000 runs across ~191 users) and [pink_comic/us-business-entity-search](https://apify.com/pink_comic/us-business-entity-search) (~83,000 runs, ~238 users) cover far more states than this actor does. [clearpath/us-business-entity-search](https://apify.com/clearpath/us-business-entity-search) advertises 50 states + DC (~3,500 runs, ~83 users); [shelvick/business-entity-lien-search](https://apify.com/shelvick/business-entity-lien-search) pairs entity search with UCC liens (~7,200 runs, ~140 users). This actor covers **three states today — New York, Colorado and Connecticut** — and says so on the listing. If you need all fifty in one run, start there, not here.

People come looking for a different verification tool when the match itself has to survive a second reading.

## The gap the breadth players leave: a reviewable match

[greyridge-signals/us-business-verification](https://apify.com/greyridge-signals/us-business-verification) is built for the case where the score is evidence, not a sort key. Three things it returns that a single blended number does not:

**A component breakdown, not a black box.** Every verified match carries `match_components` — `name_similarity`, `state_match`, `entity_type_match`, `address_match` and `officer_match`, each scored on its own and each tagged with a status (`compared`, `input_not_provided`, or `source_field_unavailable`). You see *which* axis agreed and which did not, and the exact `normalization_applied` — so "ACME LLC" versus "ACME, Inc." reads as a suffix difference, not a mismatch. Every response names its `scoring_model_version` (`kyb-match-1.1.0`), so a file reviewed six months from now says which logic produced it.

**A free, defensible audit trail on every no-match.** When a name does not match, you still get a record: a `no_match_reason`, the ranked `candidates[]` that were considered, and the `query_strategy` that was run against the source. A no-match becomes a documented negative result you can put in a file — not a silent empty row that looks identical to a crawl that simply failed. A `recently_formed` qualifier flags the propagation-lag case where an entity is real but too new to appear in the published index yet.

**You are billed only when a row is a verified match.** No-matches, source errors and below-threshold near-misses are free. At **$0.01 per verified match** you pay for answers, not for attempts — which also means a batch that is mostly misses costs almost nothing to run.

## What else rides on each verified row

- **Status, formation date, entity type and registered agent**, from the official state record.
- A **Colorado UCC-lien profile** — active liens and secured parties, matched to the debtor — for a credit check before you extend terms.
- A **live OFAC SDN sanctions screen** of the verified business and its registered agent against the U.S. Treasury SDN list, run at call time.
- The **exact source URL and retrieval timestamp** on every result, so each row is independently checkable.

Keyless. Official Secretary of State sources only — no resold database, no paid proxy. States are added one at a time, after each source's terms are reviewed.

## When to use which

| You need… | Use |
|---|---|
| All 50 states in one pass | whetstone, pink_comic, or clearpath |
| Entity search + UCC liens, broad | shelvick |
| A NY/CO/CT match a reviewer can audit — which axis agreed, the model version, a no-match trail, and billing only on a real match | [us-business-verification](https://apify.com/greyridge-signals/us-business-verification) |

The breadth incumbents are the right call for coverage. This one is the right call when the match has to hold up to the person who reads the file after you.

## Agent access (MCP)

An AI agent can call this verification as a native tool, not only through the run interface, and it ships two ways. A keyless stdio build (`verify_business`, `screen_sanctions`, `list_states`, `get_hosted_access`, no Apify account and no API key) is published as a Model Context Protocol server at [github.com/rezearcher/business-verification-mcp](https://github.com/rezearcher/business-verification-mcp). The Apify actor itself also answers MCP over Streamable HTTP (JSON-RPC 2.0) at its Standby endpoint, authenticated with an Apify API token, so a `verify_business` call runs the full scored match, Colorado UCC-lien profile and OFAC screen and meters each verified match at the same $0.01 (no-matches free) on Apify's native pay-per-event rail. Same verification core either way.

→ **[Run it on the Apify Store](https://apify.com/greyridge-signals/us-business-verification)** — keyless, billed per verified match.
