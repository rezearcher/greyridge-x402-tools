---
title: "Is the Singapore new launches MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Singapore new launches MCP server (https://property.bluebed.ai/mcp), run 2026-11-09: advertises list_launches, search_floor_plans, get_launch; 11 tools scanned, injection verdict 'clear', 22 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# Singapore new launches MCP server — security & directory-readiness scorecard

**Server:** `https://property.bluebed.ai/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 11 · **Injection verdict:** `clear` · **Directory:** 22 Claude Directory quality item(s) to polish (no hard rejects)

Reviewed Singapore new-launch floor plans, area details and buyer rules. Trial.

When an agent connects Singapore new launches, the model reads all 11 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`property.bluebed.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on Singapore new launches

- **No tool-poisoning or prompt-injection patterns** were found across the 11 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 22 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **1 of 11 advertised tool(s) name a state-changing action** (`cancel_booking`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 11 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Singapore new launches server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Singapore new launches server advertises

These are the 11 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`list_launches`** — Lists the new launches this service covers: name, property type (condo or ec, an executive condominium), district, street, number of units, stage, launch date, whether it is sold…
- **`search_floor_plans`** — Searches floor plans across the reviewed launches, a selection during the trial. Filter by property type (condo or ec), bedrooms, size in square feet, postal district, launch stag… _(parameters: bedrooms, min_sqft, max_sqft, districts, stages, property_types)_
- **`get_launch`** — Returns one launch by slug: its property type (condo or ec, which adds a notice on executive condominiums), its reviewed facts with source and page, the price statement with its k… _(parameters: slug)_
- **`get_unit_type`** — Returns one unit type of a launch by slug and type name: size, bathrooms, powder rooms and WCs, stacks (stacks_note explains an asterisk), the plan image, the answers read from th… _(parameters: slug, type)_
- **`get_area`** — Returns the reviewed area details of a launch by slug: address, tenure, nearby amenities with straight-line distances, schools within two kilometres, and food places the agent has… _(parameters: slug)_
- **`rules_for_buyer`** — Quotes the Singapore property rules that apply to a buyer, exactly as published, with the authority, source link, effective date and the date each was last checked: additional buy… _(parameters: profile, properties_owned, purchase_date, slug)_
- **`book_call`** — Booking a call through your assistant is not open yet. Calling this holds nothing and takes no details: it returns a WhatsApp link to the agent, with a short neutral message alrea…
- **`confirm_booking`** — Booking a call through your assistant is not open yet. Calling this holds nothing and takes no details: it returns a WhatsApp link to the agent, with a short neutral message alrea…
- **`check_booking`** — Booking a call through your assistant is not open yet. Calling this holds nothing and takes no details: it returns a WhatsApp link to the agent, with a short neutral message alrea…
- **`cancel_booking`** — Booking a call through your assistant is not open yet. Calling this holds nothing and takes no details: it returns a WhatsApp link to the agent, with a short neutral message alrea…
- **`about`** — Says who runs this service, the agent's CEA registration and agency licence, how the service is paid for, and how to reach the agent.

## Maintenance & supply-chain — the risk Singapore new launches's static scan can't see

A prompt-injection scan reads Singapore new launches's advertised tool metadata at one moment. It cannot tell you the project behind `property.bluebed.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance grade `A`** — last commit pushed 6 day(s) ago, 0 open issue(s).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `property.bluebed.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Singapore new launches yourself, or claim its badge {#claim}

Re-run this exact Singapore new launches check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `property.bluebed.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://property.bluebed.ai/mcp&directory=true"
```

For the itemized findings on Singapore new launches — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://property.bluebed.ai/mcp"}`. If you
run `property.bluebed.ai`, [claim a measured verified-owner badge for Singapore new launches free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=property.bluebed.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dproperty.bluebed.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://property.bluebed.ai/mcp)
```

Keeping the Singapore new launches badge green as its tools change — six-hourly re-scans of `property.bluebed.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `property.bluebed.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
