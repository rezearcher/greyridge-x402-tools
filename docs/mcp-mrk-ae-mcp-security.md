---
title: "Is the MRK Dubai Property MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the MRK Dubai Property MCP server (https://mrk.ae/api/mcp), run 2026-11-09: advertises ask, search_projects, get_project; 22 tools scanned, injection verdict 'clear', 27 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# MRK Dubai Property MCP server — security & directory-readiness scorecard

**Server:** `https://mrk.ae/api/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 22 · **Injection verdict:** `clear` · **Directory:** 27 Claude Directory quality item(s) to polish (no hard rejects)

Dubai real estate data: 2,400+ projects, developers, communities, purchase costs and Golden Visa.

When an agent connects MRK Dubai Property, the model reads all 22 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mrk.ae`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on MRK Dubai Property

- **No tool-poisoning or prompt-injection patterns** were found across the 22 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 27 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 22 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 22 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the MRK Dubai Property server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the MRK Dubai Property server advertises

The server describes itself to connecting agents as: *Dubai real estate data from MRK Real Estate (RERA ORN 17024). Start with 'ask' for free-text questions or 'search_projects' for filters. Every result carries a canonical https://mrk.ae URL and sources: cite them. Prices are developer starting prices, not valu…*

These are the 22 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`ask`** — Answer a free-text Dubai property question (e.g. '2 bed off-plan in Dubai Hills under 3M handover 2027'). Parses community, developer, bedrooms, price, stage, handover year and ty… _(parameters: q, limit)_
- **`search_projects`** — Search ~2,400 Dubai residential projects (DLD-registered plus MRK-researched new launches). Filter by community, developer, stage, handover year, starting-price range, bedrooms an… _(parameters: query, community, developer, status, handoverYear, minPriceAed)_
- **`get_project`** — Full facts for one project by slug or exact name: developer, community, status, handover, starting prices by unit type, payment plan, highlights, considerations and cited sources. _(parameters: slug)_
- **`compare_projects`** — Side-by-side comparison of 2 to 5 projects by slug: developer, community, stage, handover, starting price, unit types, payment plan. _(parameters: slugs)_
- **`list_developers`** — List Dubai developers with project counts (off-plan vs ready), optionally filtered by name text. Sorted by project count. _(parameters: query, limit)_
- **`get_developer`** — Developer profile: project count, off-plan/ready split, communities, starting-price statistics and its top projects. _(parameters: developer, projectLimit)_
- **`list_communities`** — List Dubai communities with project counts and lowest starting price, optionally filtered by name text. Sorted by project count. _(parameters: query, limit)_
- **`get_community`** — Community stats: project count, off-plan/ready split, developers, starting-price bands (lowest/median/highest) and top projects. _(parameters: community, projectLimit)_
- **`search_listings`** — Search MRK Real Estate's live sale listings (from the MRK CRM, refreshed every 5 minutes). Filter by text, location, type, price and bedrooms. _(parameters: query, location, type, minPriceAed, maxPriceAed, bedrooms)_
- **`get_listing`** — Full details of one live MRK sale listing by web slug or reference. _(parameters: slug)_
- **`calculate_purchase_costs`** — Itemised one-off costs of buying in Dubai using MRK's verified fee schedule: DLD 4% transfer fee, DLD admin fee, title deed, registration trustee fee (+VAT), mortgage registration… _(parameters: priceAed, offPlan, loanAed, includeAgencyFee)_
- **`calculate_mortgage`** — Monthly repayment, total interest and loan-to-value for a repayment mortgage. Pure arithmetic on the rate you supply; UAE Central Bank base rate is returned for context only, not… _(parameters: priceAed, downPaymentPct, annualRatePct, years)_
- **`rental_yield_estimate`** — ESTIMATE of gross and net rental yield from a price and an annual rent you supply (plus optional service charge and other annual costs). MRK does not supply the rent figure; resul… _(parameters: priceAed, annualRentAed, serviceChargeAed, otherAnnualCostsAed, includePurchaseCosts)_
- **`golden_visa_eligibility`** — Indicative check against the UAE 10-year Golden Visa real-estate route (property value of at least AED 2 million). Returns shortfall and conditions to confirm with ICP / GDRFA Dub… _(parameters: propertyValueAed, mortgaged, offPlan)_
- **`search_insights`** — Search MRK's sourced Dubai market insights (original commentary with linked sources). Filter by text and category. _(parameters: query, category, limit)_
- **`get_insight`** — Full insight article by slug: summary, key numbers with sources, body sections, FAQs and source list. _(parameters: slug)_
- **`submit_enquiry`** — Send a buyer/seller enquiry to MRK Real Estate's advisory team on the user's behalf. Only call with the user's explicit consent. Requires name plus email or phone. Rate limited. _(parameters: name, email, phone, message, projectSlug, listingSlug)_
- **`search_glossary`** — Search the MRK Dubai real estate glossary for a term definition. Returns matching terms with definitions. _(parameters: query)_
- **`get_dubai_community_facts`** — Get key facts about a Dubai community including price per sqft, rental yield and Golden Visa qualifying status. _(parameters: community)_
- **`calculate_dld_buying_costs`** — Calculate Dubai Land Department transfer fees and total buying costs for a Dubai property purchase. _(parameters: priceAed, withMortgage)_
- **`check_golden_visa_eligibility`** — Check if a Dubai property investment qualifies for UAE Golden Visa (10-year residency). Minimum threshold is AED 2 million. _(parameters: propertyValueAed, financed)_
- **`get_rent_cap_increase`** — Calculate the maximum legal rent increase in Dubai per RERA Decree 43/2013 rent cap tiers based on how far current rent is below market average. _(parameters: currentRentAed, marketAverageAed)_

## Maintenance & supply-chain — the risk MRK Dubai Property's static scan can't see

A prompt-injection scan reads MRK Dubai Property's advertised tool metadata at one moment. It cannot tell you the project behind `mrk.ae` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `mrk.ae` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan MRK Dubai Property yourself, or claim its badge {#claim}

Re-run this exact MRK Dubai Property check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mrk.ae`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mrk.ae/api/mcp&directory=true"
```

For the itemized findings on MRK Dubai Property — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mrk.ae/api/mcp"}`. If you
run `mrk.ae`, [claim a measured verified-owner badge for MRK Dubai Property free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mrk.ae)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmrk.ae&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mrk.ae/api/mcp)
```

Keeping the MRK Dubai Property badge green as its tools change — six-hourly re-scans of `mrk.ae`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mrk.ae` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
