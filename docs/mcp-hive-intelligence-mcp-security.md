---
title: "Is the Hive Intelligence MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Hive Intelligence MCP server (https://hiveintelligence.xyz/mcp), run 2026-10-26: advertises get_token_price, check_token_safety, get_wallet_portfolio; 8 tools scanned, injection verdict 'clear', 10 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# Hive Intelligence MCP server — security & directory-readiness scorecard

**Server:** `https://hiveintelligence.xyz/mcp`
**Scanned:** 2026-10-26 · **Tools advertised:** 8 · **Injection verdict:** `clear` · **Directory:** 10 Claude Directory quality item(s) to polish (no hard rejects)

Hive Intelligence's MCP server exposes crypto and market-data tools to AI agents.

When an agent connects Hive Intelligence, the model reads all 8 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`hiveintelligence.xyz`, scanned 2026-10-26; the verdict below is `clear`.

## What the scan found on Hive Intelligence

- **No tool-poisoning or prompt-injection patterns** were found across the 8 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 10 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 8 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 8 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Hive Intelligence server
on 2026-10-26; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Hive Intelligence server advertises

The server describes itself to connecting agents as: *Hive serves live crypto market data to AI agents over a compact 8-tool root. Loop: search_tools - get_api_endpoint_schema - invoke_api_endpoint for reads (invoke_stateful_endpoint only after explicit user approval; validate_task_result before structured answe…*

These are the 8 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_token_price`** — Current price for one token. Pass token as a CoinGecko id or symbol ("bitcoin", "BTC"), or pass chain + address for a specific contract. Returns price, market cap, and 24h change… _(parameters: token, chain, address, vs_currency, response_format)_
- **`check_token_safety`** — Token security screen for a contract address: honeypot, taxes, ownership, and related GoPlus risk datapoints, plus a summary of LP lock status, top-holder concentration, and creat… _(parameters: address, chain, response_format)_
- **`get_wallet_portfolio`** — Token holdings for a wallet with balances, USD values, and 24h price change where available. Likely spam airdrops are hidden and counted (include_spam=true shows them). EVM chains… _(parameters: address, chain, include_spam, response_format)_
- **`search_tools`** — Search canonical task toolsets, compact user-intent routes, and the full Hive coverage catalog. Select a matching route first, follow its ordered primary calls and conditional fal… _(parameters: query, provider, category, limit, cursor, toolset_id)_
- **`get_api_endpoint_schema`** — Returns the full input schema, operation type, and correct root invoker for any Hive tool by name. Tool names come from search_tools; inspect this contract before execution. _(parameters: endpoint, endpoint_name, response_format)_
- **`invoke_api_endpoint`** — Invokes only read-only Hive endpoints by name. First discover the tool, inspect get_api_endpoint_schema, and pass bounded schema-valid arguments. State-changing endpoints are reje… _(parameters: endpoint_name, endpoint, args, response_format)_
- **`invoke_stateful_endpoint`** — Invokes a Hive-native state-changing endpoint after explicit user approval. This router can create, update, archive, remember, forget, acknowledge, or resolve durable Hive state,… _(parameters: endpoint_name, endpoint, args, response_format)_
- **`validate_task_result`** — Validates a proposed workflow answer against Hive's typed task-output and evidence-receipt contract before it is shown to the user. It checks the selected route id, ordered route-… _(parameters: task_toolset_id, result, response_format)_

## Scan Hive Intelligence yourself, or claim its badge

Re-run this exact Hive Intelligence check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `hiveintelligence.xyz`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://hiveintelligence.xyz/mcp&directory=true"
```

For the itemized findings on Hive Intelligence — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://hiveintelligence.xyz/mcp"}`. If you
run `hiveintelligence.xyz`, [claim a measured verified-owner badge for Hive Intelligence free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=hiveintelligence.xyz)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dhiveintelligence.xyz&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://hiveintelligence.xyz/mcp)
```

Keeping the Hive Intelligence badge green as its tools change — six-hourly re-scans of `hiveintelligence.xyz`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `hiveintelligence.xyz` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-26; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
