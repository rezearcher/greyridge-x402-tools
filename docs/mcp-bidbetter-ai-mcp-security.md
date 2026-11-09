---
title: "Is the BidBetter collector-car values MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the BidBetter collector-car values MCP server (https://bidbetter.ai/api/mcp), run 2026-11-09: advertises value_model, list_models; 2 tools scanned, injection verdict 'clear', 2 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# BidBetter collector-car values MCP server — security & directory-readiness scorecard

**Server:** `https://bidbetter.ai/api/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 2 · **Injection verdict:** `clear` · **Directory:** 2 Claude Directory quality item(s) to polish (no hard rejects)

Collector-car values from completed auction sales: median, 25th-75th band and sale count by model.

When an agent connects BidBetter collector-car values, the model reads all 2 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`bidbetter.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on BidBetter collector-car values

- **No tool-poisoning or prompt-injection patterns** were found across the 2 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 2 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 2 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 2 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the BidBetter collector-car values server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the BidBetter collector-car values server advertises

The server describes itself to connecting agents as: *BidBetter publishes collector-car values from completed auction sales. Call list_models to see what is covered, then value_model for a specific model. Quote the median with its sale count and as-of date, and say it is an estimate from completed sales, not an…*

These are the 2 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`value_model`** — Median, 25th-75th percentile band and sale count for a specific collector-car model and year range, from completed auction sales. Use for questions like 'what is a 1989 Porsche 91… _(parameters: query, make)_
- **`list_models`** — Every collector-car model BidBetter publishes a value for, with its median, band, sale count and page URL. Call this first when you are unsure whether BidBetter covers a car, rath…

## Maintenance & supply-chain — the risk BidBetter collector-car values's static scan can't see

A prompt-injection scan reads BidBetter collector-car values's advertised tool metadata at one moment. It cannot tell you the project behind `bidbetter.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `bidbetter.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan BidBetter collector-car values yourself, or claim its badge {#claim}

Re-run this exact BidBetter collector-car values check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `bidbetter.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://bidbetter.ai/api/mcp&directory=true"
```

For the itemized findings on BidBetter collector-car values — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://bidbetter.ai/api/mcp"}`. If you
run `bidbetter.ai`, [claim a measured verified-owner badge for BidBetter collector-car values free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=bidbetter.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dbidbetter.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://bidbetter.ai/api/mcp)
```

Keeping the BidBetter collector-car values badge green as its tools change — six-hourly re-scans of `bidbetter.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `bidbetter.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
