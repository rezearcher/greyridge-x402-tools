---
title: "Is the BenchGecko MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the BenchGecko MCP server (https://benchgecko.ai/api/mcp), run 2026-10-24: advertises search_models, get_model, cheapest_provider; 9 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# BenchGecko MCP server — security & directory-readiness scorecard

**Server:** `https://benchgecko.ai/api/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 9 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

AI model prices per provider, benchmarks, own AI behavior tests and AI economy data, with sources.

When an agent connects BenchGecko, the model reads all 9 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`benchgecko.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on BenchGecko

- **No tool-poisoning or prompt-injection patterns** were found across the 9 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 9 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 9 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the BenchGecko server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the BenchGecko server advertises

The server describes itself to connecting agents as: *BenchGecko tracks every AI model: prices per provider (refreshed daily), benchmark scores aggregated from public leaderboards with their sources, and BenchGecko's own Gecko Tests (who-are-you, world-map, censorship-index, knowledge-horizon, tokenizer-tax, sam…*

These are the 9 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_models`** — Find AI models in the BenchGecko catalog by name, slug or lab. Returns slugs to use with get_model, cheapest_provider and compare_models, with BenchGecko score and list price. _(parameters: query, limit)_
- **`get_model`** — Core facts for one AI model: BenchGecko score and rank, list price, price at every provider, benchmark scores with their original sources, Gecko Tests grades and as-of dates. _(parameters: model)_
- **`cheapest_provider`** — Every provider serving a model, sorted by input price per 1M tokens (refreshed daily from provider endpoints), with output price, quantization and 1 day uptime. _(parameters: model)_
- **`compare_models`** — Side by side: BenchGecko score, list price, cheapest provider, context window, shared benchmark scores and Gecko Tests grades for two models. _(parameters: a, b)_
- **`get_gecko_test`** — Results of one of BenchGecko's own tests (own measurements, CC BY 4.0): who-are-you (Does the model know which lab made it?) world-map (How well does the model draw the world map… _(parameters: test, limit)_
- **`get_scorecard`** — BenchGecko Gecko Scorecard: every model across BenchGecko's own profile tests with a letter grade per test and an overall Gecko Score (behavior, not intelligence). _(parameters: limit)_
- **`latest_findings`** — Latest notable results detected in the Gecko Tests and price data (fixed rules, numbers and quotes from stored results). _(parameters: limit)_
- **`search`** — Search BenchGecko models and Gecko Tests. Returns ids for fetch. _(parameters: query)_
- **`fetch`** — Fetch the full record for an id returned by search (model:slug, gecko-test:slug or scorecard). _(parameters: id)_

## Scan BenchGecko yourself, or claim its badge

Re-run this exact BenchGecko check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `benchgecko.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://benchgecko.ai/api/mcp&directory=true"
```

For the itemized findings on BenchGecko — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://benchgecko.ai/api/mcp"}`. If you
run `benchgecko.ai`, [claim a measured verified-owner badge for BenchGecko free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=benchgecko.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dbenchgecko.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://benchgecko.ai/api/mcp)
```

Keeping the BenchGecko badge green as its tools change — six-hourly re-scans of `benchgecko.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `benchgecko.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
