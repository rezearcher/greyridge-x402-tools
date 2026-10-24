---
title: Is the api.askmiles.ai MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the api.askmiles.ai MCP server (https://api.askmiles.ai/mcp), run 2026-10-24: advertises search_card_catalog, get_card_facts, compare_card_facts; 5 tools scanned, injection verdict 'clear', 10 Claude Directory blocker(s). Re-run it yourself in one keyless call.
---
# api.askmiles.ai MCP server — security & directory-readiness scorecard

**Server:** `https://api.askmiles.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 5 · **Injection verdict:** `clear` · **Directory:** 10 Claude Directory blocker(s)

Miles' public credit-card catalog: facts, transfer partners, valuations. Keyless, read-only.

When an agent connects api.askmiles.ai, the model reads all 5 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`api.askmiles.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on api.askmiles.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 5 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 10 blocker(s).** This server advertises 10 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 5 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 5 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the api.askmiles.ai server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the api.askmiles.ai server advertises

The server describes itself to connecting agents as: *Miles' public credit-card catalog: every card open to new applicants, the transfer-partner graph, and Miles' own point valuations. This is catalog data, not advice. It carries card facts — issuer, annual fee, network, foreign transaction fee, rewards currency…*

These are the 5 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_card_catalog`** — Find credit cards open to new applicants by issuer, annual fee, network, rewards currency, or a benefit they carry. Returns a short row per card; call get_card_facts for one card'… _(parameters: issuer, card_type, network, max_annual_fee, no_foreign_transaction_fee, rewards_currency)_
- **`get_card_facts`** — Everything the public catalog holds on one card: issuer, annual fee, network, foreign transaction fee, rewards currency, and the names of its statement credits, lounge networks an… _(parameters: card_name)_
- **`compare_card_facts`** — The same catalog record for 2-5 cards at once, for comparing fees, networks and which benefits each carries. Card facts only — no earning rates, welcome-offer amounts, transfer ra… _(parameters: card_names)_
- **`find_transfer_routes`** — Which loyalty programs a currency transfers to, or which currencies reach a destination, and whether a transfer bonus is running. This is the route graph only — it does not carry… _(parameters: from_program, to_program, only_with_bonus, include_inactive, limit)_
- **`estimate_point_value`** — Miles' own estimate of a loyalty point's value in cents, optionally multiplied by a balance. Call with no arguments to list every program Miles values, with the exact spelling to… _(parameters: program, points)_

## Scan api.askmiles.ai yourself, or claim its badge

Re-run this exact api.askmiles.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `api.askmiles.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://api.askmiles.ai/mcp&directory=true"
```

For the itemized findings on api.askmiles.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://api.askmiles.ai/mcp"}`. If you
run `api.askmiles.ai`, [claim a measured verified-owner badge for api.askmiles.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=api.askmiles.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapi.askmiles.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://api.askmiles.ai/mcp)
```

Keeping the api.askmiles.ai badge green as its tools change — six-hourly re-scans of `api.askmiles.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `api.askmiles.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
