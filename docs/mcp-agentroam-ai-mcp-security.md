---
title: Is the AgentRoam MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the AgentRoam MCP server (https://agentroam.ai/api/mcp), run 2026-10-24: advertises search_products, get_price, validate_order; 11 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call.
---
# AgentRoam MCP server — security & directory-readiness scorecard

**Server:** `https://agentroam.ai/api/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 11 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Buy travel eSIMs, gift cards and mobile top-ups with crypto — user confirms before any order.

When an agent connects AgentRoam, the model reads all 11 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`agentroam.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on AgentRoam

- **No tool-poisoning or prompt-injection patterns** were found across the 11 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **1 of 11 advertised tool(s) name a state-changing action** (`create_order`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 11 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the AgentRoam server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the AgentRoam server advertises

The server describes itself to connecting agents as: *Buy travel gift cards, eSIM data plans and mobile top-ups with crypto (USDC, USDT, BTC, SOL and more). Flow: search_products → get_price → validate_order (returns a summary + one-time confirm_token; show the summary to the user for explicit approval) → create…*

These are the 11 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_products`** — Search the AgentRoam travel-crypto catalog: gift cards (Airbnb, Uber, airlines, 500+ US brands), eSIM data plans (110+ destinations incl. Europe/Global region plans) and mobile to… _(parameters: query, country, kind)_
- **`get_price`** — Live crypto price for one product/denomination. Payment coins include USDT, USDC, BTC (incl. Lightning), ETH, SOL, DAI, PYUSD, LTC, TRX, TON, DOGE and SUI across many networks; ge… _(parameters: brand_slug, country_code, denomination_label, amount_usd, dynamic, coin)_
- **`validate_order`** — Dry-run an order and mint a one-time confirm_token (valid 10 minutes). Returns a human-readable purchase summary for the buyer to approve, plus the one-time token that create_orde… _(parameters: brand_slug, country_code, denomination_label, amount_usd, dynamic, coin)_
- **`create_order`** — Creates the real order. Requires a confirm_token minted by validate_order. Returns the payment wallet address, exact crypto amount, 30-minute expiry, and an order-status URL. The… _(parameters: confirm_token, full_name)_
- **`list_esim_plans`** — Live eSIM data plans for a destination (110+ countries, plus "eu" Europe and "ww" Global multi-country plans) with USD prices and crypto amounts. In clients that support widgets,… _(parameters: destination, coin)_
- **`get_order_status`** — Poll order state (WAITING_FOR_PAYMENT → PARTIAL → COMPLETED, or CANCELED/EXPIRED). Requires the status_token from create_order. _(parameters: external_order_id, status_token)_
- **`list_brands`** — Browse all available brands/carriers for a country: gift cards (500+ US brands) and mobile top-up carriers (100+ countries). Creates no order. _(parameters: country_code, kind)_
- **`list_products`** — List a brand's live products/denominations with prices in the chosen coin — including the exact denomination labels the pricing and order tools expect (eSIM destinations are cover… _(parameters: brand_slug, country_code, coin)_
- **`get_currencies`** — List all supported payment cryptocurrencies (the response carries the current set).
- **`get_payment_methods`** — Full payment matrix: every supported coin × network combination currently available, with the exact network strings orders require. The response includes live totals for coins, ne…
- **`purchase_wizard`** — Stateful text-only purchase flow for clients without widget support. Called repeatedly with the same session_token, one question at a time, until status is "complete"; the first c… _(parameters: session_token, answer, action)_

## Scan AgentRoam yourself, or claim its badge

Re-run this exact AgentRoam check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `agentroam.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://agentroam.ai/api/mcp&directory=true"
```

For the itemized findings on AgentRoam — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://agentroam.ai/api/mcp"}`. If you
run `agentroam.ai`, [claim a measured verified-owner badge for AgentRoam free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=agentroam.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dagentroam.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://agentroam.ai/api/mcp)
```

Keeping the AgentRoam badge green as its tools change — six-hourly re-scans of `agentroam.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `agentroam.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
