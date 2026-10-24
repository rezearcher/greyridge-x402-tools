---
title: Is the agent-bev MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the agent-bev MCP server (https://mcp.bev-buyer.ai/mcp), run 2026-10-24: advertises search_drinks, get_record, find_producer; 9 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call.
---
# agent-bev MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.bev-buyer.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 9 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

The world's largest agentic B2B hub for beer, wine and spirits. Powered by CUVEE. Trade only.

When an agent connects agent-bev, the model reads all 9 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.bev-buyer.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on agent-bev

- **No tool-poisoning or prompt-injection patterns** were found across the 9 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **1 of 9 advertised tool(s) name a state-changing action** (`create_order_intent`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 9 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the agent-bev server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the agent-bev server advertises

The server describes itself to connecting agents as: *agent-bev is Europe's agentic commerce hub for the B2B beverage alcohol (bev-alc) industry. AI agents for buyers source, sort and procure. Every beer, wine and spirit in Europe, through agent-bev.ai. Trade only, never to consumers. Call list_nodes, then searc…*

These are the 9 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_drinks`** — Find beers, wines, spirits, ciders and ready-to-drink drinks by name, style, origin or category across every open country node. Returns record ids with each record's CUVEE. _(parameters: query, node, category, limit)_
- **`get_record`** — Read one product in full by record_id: every field with its source page, reader and state; its CUVEE; its claim status; the signed record (JWS). _(parameters: record_id)_
- **`find_producer`** — Find a maker and its products across every open node, with the maker's name as each source wrote it. _(parameters: producer, node)_
- **`list_nodes`** — List the countries on the record: each node's door, languages, state and, for an open node, its counts.
- **`compare_drinks`** — Compare two to ten products side by side, field by field, each value with its source page. _(parameters: record_ids)_
- **`get_order_route`** — Get the maker's or distributor's trade channel to order a product, as the record states it. Never a consumer channel. _(parameters: record_id)_
- **`create_order_intent`** — Place an order intent for one to ten records (quantity, delivery market, optional date and note, the buyer's organisation and email). The Bourse routes it to each maker; verified… _(parameters: record_ids, quantity, market, needed_by, note, buyer)_
- **`get_offers`** — Read the makers' offers on an order intent, and the order once placed. By the buyer's email given on create_order_intent. _(parameters: intent_id, email)_
- **`accept_offer`** — Accept one offer and place the order through the Bourse. Accepting is one x402 paid call (HTTP 402 with the payment offer until paid): it settles and signs the order. The goods ar… _(parameters: intent_id, offer_id, email)_

## Scan agent-bev yourself, or claim its badge

Re-run this exact agent-bev check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.bev-buyer.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.bev-buyer.ai/mcp&directory=true"
```

For the itemized findings on agent-bev — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.bev-buyer.ai/mcp"}`. If you
run `mcp.bev-buyer.ai`, [claim a measured verified-owner badge for agent-bev free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.bev-buyer.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.bev-buyer.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.bev-buyer.ai/mcp)
```

Keeping the agent-bev badge green as its tools change — six-hourly re-scans of `mcp.bev-buyer.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.bev-buyer.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
