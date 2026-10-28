---
title: "Is the ChinaAPI MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the ChinaAPI MCP server (https://api.chinaapi.ai/mcp), run 2026-10-24: advertises chinaapi_estimate_cost, chinaapi_get_model, chinaapi_get_recipe; 4 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# ChinaAPI MCP server — security & directory-readiness scorecard

**Server:** `https://api.chinaapi.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 4 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Read-only ChinaAPI model catalogue, price snapshot, cost estimates and request recipes.

When an agent connects ChinaAPI, the model reads all 4 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`api.chinaapi.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on ChinaAPI

- **No tool-poisoning or prompt-injection patterns** were found across the 4 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 4 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 4 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the ChinaAPI server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the ChinaAPI server advertises

The server describes itself to connecting agents as: *ChinaAPI (https://dash.chinaapi.ai) is an API gateway to Chinese AI models behind one OpenAI- and Anthropic-compatible base URL (https://api.chinaapi.ai/v1). These tools are read-only and anonymous: they read ChinaAPI's public model catalogue and published pr…*

These are the 4 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`chinaapi_estimate_cost`** — Estimate the USD cost of a workload on one model from its published per-meter prices: Standard, and Paid where it is lower. Pass quantities in the model's own units — tokens for t… _(parameters: audio_input_tokens, audio_output_tokens, audio_seconds, cache_read_tokens, cache_write_1h_tokens, cache_write_tokens)_
- **`chinaapi_get_model`** — Get one model by its exact ID: base URL and endpoints, the Standard and Paid price snapshot per meter with the time it was read and the price-book versions, context window and mod… _(parameters: model)_
- **`chinaapi_get_recipe`** — Get a runnable request for one model — endpoint, headers, JSON body or multipart form, a curl command, and for video the polling step — exactly as ChinaAPI's /agents page shows it… _(parameters: agent, capability, model, protocol)_
- **`chinaapi_list_models`** — List the models ChinaAPI serves, optionally filtered by capability, task, maker or a model-ID substring. Each entry has the exact model ID, maker, capabilities and tasks, context… _(parameters: capability, cursor, limit, maker, query, task)_

## Scan ChinaAPI yourself, or claim its badge

Re-run this exact ChinaAPI check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `api.chinaapi.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://api.chinaapi.ai/mcp&directory=true"
```

For the itemized findings on ChinaAPI — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://api.chinaapi.ai/mcp"}`. If you
run `api.chinaapi.ai`, [claim a measured verified-owner badge for ChinaAPI free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=api.chinaapi.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapi.chinaapi.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://api.chinaapi.ai/mcp)
```

Keeping the ChinaAPI badge green as its tools change — six-hourly re-scans of `api.chinaapi.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `api.chinaapi.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
