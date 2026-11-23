---
title: "Is the AirboxShip Shipping (public) MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the AirboxShip Shipping (public) MCP server (https://airboxship.ai/mcp-public), run 2026-11-23: advertises find_pickup_hubs, get_shipping_rates, track_package; 3 tools scanned, injection verdict 'clear', 3 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# AirboxShip Shipping (public) MCP server — security & directory-readiness scorecard

**Server:** `https://airboxship.ai/mcp-public`
**Scanned:** 2026-11-23 · **Tools advertised:** 3 · **Injection verdict:** `clear` · **Directory:** 3 Claude Directory quality item(s) to polish (no hard rejects)

Find USPS pickup points, compare USPS and UPS rates, track USPS packages. No sign-in.

When an agent connects AirboxShip Shipping (public), the model reads all 3 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`airboxship.ai`, scanned 2026-11-23; the verdict below is `clear`.

## What the scan found on AirboxShip Shipping (public)

- **No tool-poisoning or prompt-injection patterns** were found across the 3 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 3 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 3 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 3 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the AirboxShip Shipping (public) server
on 2026-11-23; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the AirboxShip Shipping (public) server advertises

The server describes itself to connecting agents as: *Look up USPS Post Offices and Smart Lockers for package pickup/drop-off, get USPS and UPS shipping rates (price and delivery time) between two US addresses, and track a USPS package by tracking number. No sign-in is needed. This service only looks things up;…*

These are the 3 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`find_pickup_hubs`** — Find nearby USPS Post Offices and Smart Lockers for package pickup/drop-off. Returns each location's id, name, type, address and distance in miles. This is a look-up only; it does… _(parameters: location, radius_miles)_
- **`get_shipping_rates`** — Get shipping rates (postage cost and delivery time) for mailing a package with USPS or UPS home delivery, between two US addresses. Returns each option's carrier, service, price i… _(parameters: sender_name, sender_street1, sender_city, sender_state, sender_zip, recipient_name)_
- **`track_package`** — Look up the current status of a USPS package by its tracking number. Returns the status, USPS's one-line summary, the expected delivery date and the latest scan (what happened, wh… _(parameters: tracking_number)_

## Maintenance & supply-chain — the risk AirboxShip Shipping (public)'s static scan can't see

A prompt-injection scan reads AirboxShip Shipping (public)'s advertised tool metadata at one moment. It cannot tell you the project behind `airboxship.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `airboxship.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan AirboxShip Shipping (public) yourself, or claim its badge {#claim}

Re-run this exact AirboxShip Shipping (public) check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `airboxship.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://airboxship.ai/mcp-public&directory=true"
```

For the itemized findings on AirboxShip Shipping (public) — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://airboxship.ai/mcp-public"}`. If you
run `airboxship.ai`, [claim a measured verified-owner badge for AirboxShip Shipping (public) free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=airboxship.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dairboxship.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://airboxship.ai/mcp-public)
```

Keeping the AirboxShip Shipping (public) badge green as its tools change — six-hourly re-scans of `airboxship.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `airboxship.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-23; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
