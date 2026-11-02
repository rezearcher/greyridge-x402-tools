---
title: "Is the asms MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the asms MCP server (https://asms.ai/mcp), run 2026-11-02: advertises get_balance, get_pricing, get_inventory; 12 tools scanned, injection verdict 'clear', 12 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# asms MCP server — security & directory-readiness scorecard

**Server:** `https://asms.ai/mcp`
**Scanned:** 2026-11-02 · **Tools advertised:** 12 · **Injection verdict:** `clear` · **Directory:** 12 Claude Directory quality item(s) to polish (no hard rejects)

Phone numbers for AI agents: SMS verification codes and rented numbers that receive SMS.

When an agent connects asms, the model reads all 12 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`asms.ai`, scanned 2026-11-02; the verdict below is `clear`.

## What the scan found on asms

- **No tool-poisoning or prompt-injection patterns** were found across the 12 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 12 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **3 of 12 advertised tool(s) name a state-changing action** (`create_otp_order`, `cancel_order`, `cancel_rental`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 12 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the asms server
on 2026-11-02; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the asms server advertises

The server describes itself to connecting agents as: *ASMS gives you phone numbers to receive SMS on. For one verification code: get_pricing → create_otp_order → poll_sms until the code arrives. For a number you keep (1 day to 12 months) that receives every SMS sent to it: get_rental_offers → rent_number → read_…*

These are the 12 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_balance`** — Get the current wallet balance for the authenticated account.
- **`get_pricing`** — Get the retail price per OTP activation for a service in a country. Omit 'service' to list prices for every available service. _(parameters: country, service)_
- **`get_inventory`** — Get how many numbers are in stock for a service in a country. Omit 'service' to list stock for every available service. _(parameters: country, service)_
- **`create_otp_order`** — Buy a number to receive an OTP: allocates a number, debits the wallet, and returns an orderId + phoneNumber. Then poll with poll_sms. If no code arrives, do NOT cancel to retry: s… _(parameters: country, service)_
- **`poll_sms`** — Check for the SMS / OTP code on an order. Returns the code once it has arrived, otherwise an empty result: poll again after a few seconds. If nothing lands after a minute or two,… _(parameters: orderId)_
- **`list_active_orders`** — List recent OTP orders for the account (awaiting a code or already received). _(parameters: limit)_
- **`cancel_order`** — Rarely needed. To retry a verification do NOT cancel: just call create_otp_order again, because every unfilled order auto-refunds within 10 minutes on its own, and cancel is block… _(parameters: orderId)_
- **`get_rental_offers`** — List the rental periods and prices for a country (1 day to 12 months). A rented number is yours for the whole period and receives every SMS sent to it, unlike an OTP order, which… _(parameters: country)_
- **`rent_number`** — Rent a phone number in a country for a period (get the periods and prices from get_rental_offers first). Debits the wallet and returns the number and when the rental ends. Read it… _(parameters: country, period)_
- **`list_rentals`** — List the account's rented numbers with their country, period and end date. Ended rentals are left out unless 'includeEnded' is true. _(parameters: includeEnded)_
- **`read_rental_sms`** — Read the SMS a rented number has received during this rental, newest first. Poll again every few seconds while waiting for a message. _(parameters: number)_
- **`cancel_rental`** — Cancel a rented number and refund it. Only possible between 5 and 120 minutes after renting, and only if the number has received no SMS; after that the rental runs to its end date. _(parameters: number)_

## Maintenance & supply-chain — the risk asms's static scan can't see

A prompt-injection scan reads asms's advertised tool metadata at one moment. It cannot tell you the project behind `asms.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance grade `A`** — last commit pushed 3 day(s) ago, 0 open issue(s).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `asms.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan asms yourself, or claim its badge {#claim}

Re-run this exact asms check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `asms.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://asms.ai/mcp&directory=true"
```

For the itemized findings on asms — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://asms.ai/mcp"}`. If you
run `asms.ai`, [claim a measured verified-owner badge for asms free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=asms.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dasms.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://asms.ai/mcp)
```

Keeping the asms badge green as its tools change — six-hourly re-scans of `asms.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `asms.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-02; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
