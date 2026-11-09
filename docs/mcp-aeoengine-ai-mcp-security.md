---
title: "Is the Best AI Search Agency AEO Report MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Best AI Search Agency AEO Report MCP server (https://aeoengine.ai/mcp), run 2026-11-09: advertises run_aeo_report, get_aeo_report_status; 2 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Best AI Search Agency AEO Report MCP server — security & directory-readiness scorecard

**Server:** `https://aeoengine.ai/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 2 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Free AEO visibility report MCP — run AI search audits for any domain.

When an agent connects Best AI Search Agency AEO Report, the model reads all 2 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`aeoengine.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on Best AI Search Agency AEO Report

- **No tool-poisoning or prompt-injection patterns** were found across the 2 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **1 of 2 advertised tool(s) name a state-changing action** (`run_aeo_report`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 2 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Best AI Search Agency AEO Report server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Best AI Search Agency AEO Report server advertises

These are the 2 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`run_aeo_report`** — Run the free AI-visibility report for a website (ChatGPT, Perplexity, Gemini, Claude coverage, competitor gaps, prioritized fixes). Requires the user's real email — the finished r… _(parameters: domain, email, customQuestions, competitor, competitors, market)_
- **`get_aeo_report_status`** — Poll a previously submitted AEO report job once. status is queued, preparing, needs_review or running (keep polling) or complete, partial or failed (terminal); state carries the p… _(parameters: job_id)_

## Maintenance & supply-chain — the risk Best AI Search Agency AEO Report's static scan can't see

A prompt-injection scan reads Best AI Search Agency AEO Report's advertised tool metadata at one moment. It cannot tell you the project behind `aeoengine.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `aeoengine.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Best AI Search Agency AEO Report yourself, or claim its badge {#claim}

Re-run this exact Best AI Search Agency AEO Report check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `aeoengine.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://aeoengine.ai/mcp&directory=true"
```

For the itemized findings on Best AI Search Agency AEO Report — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://aeoengine.ai/mcp"}`. If you
run `aeoengine.ai`, [claim a measured verified-owner badge for Best AI Search Agency AEO Report free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=aeoengine.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Daeoengine.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://aeoengine.ai/mcp)
```

Keeping the Best AI Search Agency AEO Report badge green as its tools change — six-hourly re-scans of `aeoengine.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `aeoengine.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
