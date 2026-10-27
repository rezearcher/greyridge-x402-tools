---
title: "Is the BeachClubs.ae MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the BeachClubs.ae MCP server (https://www.beachclubs.ae/mcp), run 2026-10-27: advertises search_beach_clubs, get_beach_club, list_events; 4 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# BeachClubs.ae MCP server — security & directory-readiness scorecard

**Server:** `https://www.beachclubs.ae/mcp`
**Scanned:** 2026-10-27 · **Tools advertised:** 4 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Search UAE beach clubs, day pass prices, amenities, opening hours and events across all 7 emirates.

When an agent connects BeachClubs.ae, the model reads all 4 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`www.beachclubs.ae`, scanned 2026-10-27; the verdict below is `clear`.

## What the scan found on BeachClubs.ae

- **No tool-poisoning or prompt-injection patterns** were found across the 4 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 4 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 4 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the BeachClubs.ae server
on 2026-10-27; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the BeachClubs.ae server advertises

The server describes itself to connecting agents as: *BeachClubs.ae is a directory of beach clubs in the United Arab Emirates (Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, Fujairah). Places outside the UAE are not covered. Recommended flow: search_beach_clubs to find clubs, get_beach_club for…*

These are the 4 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_beach_clubs`** — Searches the BeachClubs.ae directory of beach clubs in the United Arab Emirates by name, hotel, area, emirate, family suitability, amenities and day pass price. Returns paginated… _(parameters: query, emirate, family_friendly, max_day_pass_price, amenities, limit)_
- **`get_beach_club`** — Returns public details for one beach club in the United Arab Emirates, looked up by id or by name (typo tolerant): BeachClubs.ae page and primary call-to-action link, description,… _(parameters: id, name)_
- **`list_events`** — Lists published upcoming events at beach clubs in the United Arab Emirates (brunches, ladies' days, parties, live music) with Dubai local times, ticket prices and the BeachClubs.a… _(parameters: from, to, emirate, beach_club_id, limit, offset)_
- **`request_booking_enquiry`** — Sends a booking enquiry for a beach club in the United Arab Emirates to the BeachClubs.ae team, who reply to the guest by email. An enquiry is not a confirmed booking. Requires th… _(parameters: club_id, club_name, visit_date, guests, name, email)_

## Maintenance & supply-chain — the risk BeachClubs.ae's static scan can't see

A prompt-injection scan reads BeachClubs.ae's advertised tool metadata at one moment. It cannot tell you the project behind `www.beachclubs.ae` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `www.beachclubs.ae` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan BeachClubs.ae yourself, or claim its badge {#claim}

Re-run this exact BeachClubs.ae check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `www.beachclubs.ae`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://www.beachclubs.ae/mcp&directory=true"
```

For the itemized findings on BeachClubs.ae — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://www.beachclubs.ae/mcp"}`. If you
run `www.beachclubs.ae`, [claim a measured verified-owner badge for BeachClubs.ae free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=www.beachclubs.ae)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dwww.beachclubs.ae&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://www.beachclubs.ae/mcp)
```

Keeping the BeachClubs.ae badge green as its tools change — six-hourly re-scans of `www.beachclubs.ae`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `www.beachclubs.ae` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-27; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
