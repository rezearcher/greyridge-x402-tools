---
title: "Is the Astro Docs MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Astro Docs MCP server (https://mcp.docs.astro.build/mcp), run 2026-10-27: advertises search_astro_docs; 1 tools scanned, injection verdict 'clear', 2 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# Astro Docs MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.docs.astro.build/mcp`
**Scanned:** 2026-10-27 · **Tools advertised:** 1 · **Injection verdict:** `clear` · **Directory:** 2 Claude Directory quality item(s) to polish (no hard rejects)

The Astro project's MCP server exposes documentation-search tools to AI agents.

When an agent connects Astro Docs, the model reads all 1 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.docs.astro.build`, scanned 2026-10-27; the verdict below is `clear`.

## What the scan found on Astro Docs

- **No tool-poisoning or prompt-injection patterns** were found across the 1 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 2 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 1 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 1 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Astro Docs server
on 2026-10-27; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Astro Docs server advertises

These are the 1 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_astro_docs`** — Search the official Astro framework docs _(parameters: query)_

## Maintenance & supply-chain — the risk Astro Docs's static scan can't see

A prompt-injection scan reads Astro Docs's advertised tool metadata at one moment. It cannot tell you the project behind `mcp.docs.astro.build` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `mcp.docs.astro.build` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Astro Docs yourself, or claim its badge {#claim}

Re-run this exact Astro Docs check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.docs.astro.build`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.docs.astro.build/mcp&directory=true"
```

For the itemized findings on Astro Docs — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.docs.astro.build/mcp"}`. If you
run `mcp.docs.astro.build`, [claim a measured verified-owner badge for Astro Docs free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.docs.astro.build)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.docs.astro.build&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.docs.astro.build/mcp)
```

Keeping the Astro Docs badge green as its tools change — six-hourly re-scans of `mcp.docs.astro.build`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.docs.astro.build` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-27; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
