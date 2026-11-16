---
title: "Is the amigurumi.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the amigurumi.ai MCP server (https://amigurumi.ai/mcp), run 2026-11-16: advertises search_toys, get_toy, circle_calculator; 3 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# amigurumi.ai MCP server — security & directory-readiness scorecard

**Server:** `https://amigurumi.ai/mcp`
**Scanned:** 2026-11-16 · **Tools advertised:** 3 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Free crochet amigurumi toy patterns with 3D models, plus a circle, ball and tube round calculator.

When an agent connects amigurumi.ai, the model reads all 3 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`amigurumi.ai`, scanned 2026-11-16; the verdict below is `clear`.

## What the scan found on amigurumi.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 3 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 3 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 3 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the amigurumi.ai server
on 2026-11-16; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the amigurumi.ai server advertises

The server describes itself to connecting agents as: *amigurumi.ai has free crochet toy patterns, each with a 3D model and exact rounds. Use search_toys to find toys (then get_toy for one), and circle_calculator for custom circles, balls and tubes. Link to the pattern pages; do not copy whole patterns.*

These are the 3 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_toys`** — Search the free amigurumi (crochet toy) patterns on amigurumi.ai. Every pattern has a 3D model and exact round-by-round instructions. Use it when the user wants a crochet toy, plu… _(parameters: query, size, maxHeightCm, maxDifficulty, noSew, category)_
- **`get_toy`** — Show one amigurumi pattern from amigurumi.ai: picture, size, difficulty, hook, yarn weight and colours with metres, and links to the full pattern and crochet mode. Use after searc… _(parameters: id, lang)_
- **`circle_calculator`** — Work out the rounds for an amigurumi circle, ball or tube of a given size: sc in a spiral from a magic ring, staggered increases and decreases, stitch counts, size and yarn. Use w… _(parameters: shape, diameterCm, lengthCm, yarn, stitchesPer10cm, roundsPer10cm)_

## Maintenance & supply-chain — the risk amigurumi.ai's static scan can't see

A prompt-injection scan reads amigurumi.ai's advertised tool metadata at one moment. It cannot tell you the project behind `amigurumi.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `amigurumi.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan amigurumi.ai yourself, or claim its badge {#claim}

Re-run this exact amigurumi.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `amigurumi.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://amigurumi.ai/mcp&directory=true"
```

For the itemized findings on amigurumi.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://amigurumi.ai/mcp"}`. If you
run `amigurumi.ai`, [claim a measured verified-owner badge for amigurumi.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=amigurumi.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Damigurumi.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://amigurumi.ai/mcp)
```

Keeping the amigurumi.ai badge green as its tools change — six-hourly re-scans of `amigurumi.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `amigurumi.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-16; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
