---
title: "Is the Booqer MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Booqer MCP server (https://booqer.ai/mcp), run 2026-10-24: advertises search_businesses, get_business, resolve_business; 8 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Booqer MCP server — security & directory-readiness scorecard

**Server:** `https://booqer.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 8 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Verified Booqer shops. A keyless consult is confirmed when the slot is open.

When an agent connects Booqer, the model reads all 8 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`booqer.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Booqer

- **No tool-poisoning or prompt-injection patterns** were found across the 8 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 8 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 8 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Booqer server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Booqer server advertises

The server describes itself to connecting agents as: *Booqer lists enrolled home-service businesses. Use these tools when the user wants to find, book, check availability for, or check the status of a local home-service appointment: search_businesses, get_business, resolve_business, check_availability, request_b…*

These are the 8 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_businesses`** — Use this when the user wants to find a local home-service business or appointment: plumber, HVAC, electrician, gate, fence, or security install, pole barn, or builder. Searches th… _(parameters: query)_
- **`get_business`** — Use this when the user wants to read one enrolled local home-service business and search_businesses or resolve_business already returned its id. Returns one enrolled shop as JSON:… _(parameters: shop_id)_
- **`resolve_business`** — Use this when the user wants to resolve one enrolled local home-service business from a domain, a place, or a phone number. An ambiguous match is refused. Returns that one identit… _(parameters: domain, place, phone)_
- **`check_availability`** — Use this when the user wants to check availability for a local home-service appointment before booking. Lists the open 30-minute slots for one shop and one date. Booked and blocke… _(parameters: shop_id, date, start, offering)_
- **`request_booking`** — Use this when the user wants to book a local home-service appointment and has already chosen an open time. Confirms a free consult when the slot is open. Calling this again with t… _(parameters: shop_id, offering, name, phone, email, start)_
- **`get_booking_status`** — Use this when the user wants to check the status of a local home-service appointment. status is confirmed, pending, canceled, or failed. No customer name, phone, or email. _(parameters: request_id)_
- **`request_service`** — Use this when the user wants to open a quote form for a local home-service business rather than book a confirmed appointment time. Opens the quote widget for one enrolled business… _(parameters: business_id, shop_id)_
- **`submit_service_request`** — Sends the user's quote request (name, email, optional phone, service location, preferred time) to the chosen business. Called by the quote form only. _(parameters: business_id, offering, name, phone, email, service_address)_

## Scan Booqer yourself, or claim its badge

Re-run this exact Booqer check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `booqer.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://booqer.ai/mcp&directory=true"
```

For the itemized findings on Booqer — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://booqer.ai/mcp"}`. If you
run `booqer.ai`, [claim a measured verified-owner badge for Booqer free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=booqer.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dbooqer.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://booqer.ai/mcp)
```

Keeping the Booqer badge green as its tools change — six-hourly re-scans of `booqer.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `booqer.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
