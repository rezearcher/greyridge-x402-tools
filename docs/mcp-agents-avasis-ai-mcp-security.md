---
title: "Is the Avasis Agent Platform MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Avasis Agent Platform MCP server (https://agents.avasis.ai/mcp), run 2026-11-09: advertises avasis_products, avasis_free_sample, avasis_quote; 4 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Avasis Agent Platform MCP server — security & directory-readiness scorecard

**Server:** `https://agents.avasis.ai/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 4 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Free MCP tools to quote and sample x402 APIs: Solana rug checks, Base token-watch, $49 starter kit.

When an agent connects Avasis Agent Platform, the model reads all 4 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`agents.avasis.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on Avasis Agent Platform

- **No tool-poisoning or prompt-injection patterns** were found across the 4 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 4 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 4 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Avasis Agent Platform server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Avasis Agent Platform server advertises

The server describes itself to connecting agents as: *Avasis sells agent data over x402 (USDC on Base, no account, no API key) at https://agents.avasis.ai: Solana token safety verdicts and complete rug-check kits, a Polymarket odds kit, a web page reader, chain tips and an EVM gas ops kit. Every tool here is fre…*

These are the 4 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`avasis_products`** — List every paid API route on this Avasis host (Solana token safety verdicts and complete rug-check kits, Polymarket odds kits, web page reader, chain tips, EVM gas ops) with its l…
- **`avasis_free_sample`** — Return a real, free sample of a paid product so you can see the exact keys before paying: sol-kit (Solana rug check complete kit), pm-kit (Polymarket odds kit), sol-verdict (Solan… _(parameters: kind)_
- **`avasis_quote`** — Return the x402 payment requirements of a paid route (price, accepts[] with amount/asset/payTo/network, the pay URL with your inputs filled in, the free sample and the also_availa… _(parameters: product, input)_
- **`avasis_verdict_rubric`** — The published deterministic rules behind the SAFE / WARN / DANGER Solana token verdict: flag codes, severities, weights and grade thresholds. Cite it when explaining a verdict. Fr…

## Maintenance & supply-chain — the risk Avasis Agent Platform's static scan can't see

A prompt-injection scan reads Avasis Agent Platform's advertised tool metadata at one moment. It cannot tell you the project behind `agents.avasis.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `agents.avasis.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Avasis Agent Platform yourself, or claim its badge {#claim}

Re-run this exact Avasis Agent Platform check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `agents.avasis.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://agents.avasis.ai/mcp&directory=true"
```

For the itemized findings on Avasis Agent Platform — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://agents.avasis.ai/mcp"}`. If you
run `agents.avasis.ai`, [claim a measured verified-owner badge for Avasis Agent Platform free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=agents.avasis.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dagents.avasis.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://agents.avasis.ai/mcp)
```

Keeping the Avasis Agent Platform badge green as its tools change — six-hourly re-scans of `agents.avasis.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `agents.avasis.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
