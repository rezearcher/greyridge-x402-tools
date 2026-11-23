---
title: "Is the Discond MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Discond MCP server (https://mcp.discond.ae/mcp), run 2026-11-23: advertises discond_find_discounts, discond_find_venues, discond_autocomplete_businesses; 9 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Discond MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.discond.ae/mcp`
**Scanned:** 2026-11-23 · **Tools advertised:** 9 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

UAE restaurant picks and live discounts across Fazaa, The Entertainer, Talabat and more.

When an agent connects Discond, the model reads all 9 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.discond.ae`, scanned 2026-11-23; the verdict below is `clear`.

## What the scan found on Discond

- **No tool-poisoning or prompt-injection patterns** were found across the 9 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 9 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 9 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Discond server
on 2026-11-23; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Discond server advertises

The server describes itself to connecting agents as: *Discond lists live discounts at UAE merchants across providers such as Fazaa, The Entertainer and Talabat. discond_find_discounts covers most discount searches; discond_find_venues picks restaurants and other venues near an area or landmark by cuisine, budget…*

These are the 9 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`discond_find_discounts`** — Search UAE merchants with live discounts on Discond by free text, place (emirate or area such as "Dubai Marina"), coordinates, discount provider, or category. Returns merchants wi… _(parameters: q, place, lat, lng, radius_m, provider)_
- **`discond_find_venues`** — Find UAE restaurants, cafés and other venues near an area or landmark (e.g. "Burj Khalifa", "Dubai Marina", "Yas Island") that fit a cuisine, a budget per person and must-haves su… _(parameters: place, lat, lng, radius_m, cuisines, must_have)_
- **`discond_autocomplete_businesses`** — Typo-tolerant autocomplete of UAE merchant names on Discond. Returns matching merchant ids and names for partial or misspelled input. _(parameters: q, limit, offset, response_format)_
- **`discond_get_business`** — Get one Discond merchant by id: name, a short description when we have one, categories, providers, link and its branches. Pass the user's lat/lng when known so branches come neare… _(parameters: business_id, include_offers, offer_limit, lat, lng, response_format)_
- **`discond_list_offers`** — List live Discond offers, filtered by merchant, branch, provider, category, validity or online-only, sorted by newest, expiring or biggest discount. Has no place filter: filter by… _(parameters: q, business_id, business_branch_id, include_all_branches, provider_ids, category_ids)_
- **`discond_get_offer`** — Get one Discond offer by id: headline, terms, validity and redeem links. Requires the user to be signed in to Discond. _(parameters: offer_id, response_format)_
- **`discond_list_categories`** — List Discond merchant categories with ids, optionally filtered by name. _(parameters: q, limit, offset, response_format)_
- **`discond_list_providers`** — List the discount providers Discond covers (for example Fazaa, The Entertainer, Talabat) with ids and offer counts, optionally filtered by name. _(parameters: q, limit, offset, response_format)_
- **`discond_resolve_place`** — Resolve a UAE place name to Discond place ids (emirate, community, settlement) or to a known area. A known area or landmark (Burj Khalifa, Dubai Mall…) has level "area" or "landma… _(parameters: q, level, region_id, community_id, limit, response_format)_

## Maintenance & supply-chain — the risk Discond's static scan can't see

A prompt-injection scan reads Discond's advertised tool metadata at one moment. It cannot tell you the project behind `mcp.discond.ae` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `mcp.discond.ae` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Discond yourself, or claim its badge {#claim}

Re-run this exact Discond check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.discond.ae`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.discond.ae/mcp&directory=true"
```

For the itemized findings on Discond — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.discond.ae/mcp"}`. If you
run `mcp.discond.ae`, [claim a measured verified-owner badge for Discond free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.discond.ae)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.discond.ae&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.discond.ae/mcp)
```

Keeping the Discond badge green as its tools change — six-hourly re-scans of `mcp.discond.ae`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.discond.ae` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-23; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
