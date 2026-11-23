---
title: "Is the BaseEdge Labs Catalog MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the BaseEdge Labs Catalog MCP server (https://baseedgelabs.ai/mcp), run 2026-11-23: advertises list_strategies, list_presets, get_preset; 4 tools scanned, injection verdict 'clear', 4 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# BaseEdge Labs Catalog MCP server — security & directory-readiness scorecard

**Server:** `https://baseedgelabs.ai/mcp`
**Scanned:** 2026-11-23 · **Tools advertised:** 4 · **Injection verdict:** `clear` · **Directory:** 4 Claude Directory quality item(s) to polish (no hard rejects)

Browse BaseEdge Labs trading strategies for TradingView and get free presets. No account needed.

When an agent connects BaseEdge Labs Catalog, the model reads all 4 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`baseedgelabs.ai`, scanned 2026-11-23; the verdict below is `clear`.

## What the scan found on BaseEdge Labs Catalog

- **No tool-poisoning or prompt-injection patterns** were found across the 4 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 4 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **3 of 4 advertised tool(s) name a state-changing action** (`list_presets`, `get_preset`, `export_preset`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 4 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the BaseEdge Labs Catalog server
on 2026-11-23; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the BaseEdge Labs Catalog server advertises

The server describes itself to connecting agents as: *BaseEdge Labs publishes automated trading strategies for TradingView. This server, the BaseEdge Labs Catalog, lists them and hands out the settings (presets) of the free ones. No account is needed. Typical use: call list_strategies, then list_presets to pick…*

These are the 4 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`list_strategies`** — Lists every BaseEdge Labs trading strategy for TradingView: its strategy_id, name, page on baseedgelabs.ai, whether it is free or paid, how many presets it has and, when signed in…
- **`list_presets`** — Finds presets: saved settings of a strategy for one instrument and chart timeframe. Each result has its preset_id, strategy, instrument, timeframe, a plain summary and, where publ… _(parameters: strategy, instrument, timeframe)_
- **`get_preset`** — Returns one preset in full: its summary and Strategy Tester results, the Strategy Tester properties to set (initial capital, commission, slippage), its contracts, the strategy's p… _(parameters: preset_id)_
- **`export_preset`** — Returns download links to one preset's two files, each with import steps. "tradingview": a flat settings file keyed by input label, for TradingView's Load Parameters. "hypernull":… _(parameters: preset_id)_

## Maintenance & supply-chain — the risk BaseEdge Labs Catalog's static scan can't see

A prompt-injection scan reads BaseEdge Labs Catalog's advertised tool metadata at one moment. It cannot tell you the project behind `baseedgelabs.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `baseedgelabs.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan BaseEdge Labs Catalog yourself, or claim its badge {#claim}

Re-run this exact BaseEdge Labs Catalog check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `baseedgelabs.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://baseedgelabs.ai/mcp&directory=true"
```

For the itemized findings on BaseEdge Labs Catalog — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://baseedgelabs.ai/mcp"}`. If you
run `baseedgelabs.ai`, [claim a measured verified-owner badge for BaseEdge Labs Catalog free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=baseedgelabs.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dbaseedgelabs.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://baseedgelabs.ai/mcp)
```

Keeping the BaseEdge Labs Catalog badge green as its tools change — six-hourly re-scans of `baseedgelabs.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `baseedgelabs.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-23; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
