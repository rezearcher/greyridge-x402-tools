---
title: "Is the Cloudflare Docs MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Cloudflare Docs MCP server (https://docs.mcp.cloudflare.com/mcp), run 2026-10-27: advertises search_cloudflare_documentation, migrate_pages_to_workers_guide; 2 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Cloudflare Docs MCP server — security & directory-readiness scorecard

**Server:** `https://docs.mcp.cloudflare.com/mcp`
**Scanned:** 2026-10-27 · **Tools advertised:** 2 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Cloudflare's documentation MCP server exposes docs-search tools to AI agents.

When an agent connects Cloudflare Docs, the model reads all 2 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`docs.mcp.cloudflare.com`, scanned 2026-10-27; the verdict below is `clear`.

## What the scan found on Cloudflare Docs

- **No tool-poisoning or prompt-injection patterns** were found across the 2 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 2 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 2 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Cloudflare Docs server
on 2026-10-27; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Cloudflare Docs server advertises

These are the 2 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_cloudflare_documentation`** — Search the Cloudflare documentation. This tool should be used to answer any question about Cloudflare products or features, including: - Workers, Pages, R2, Images, Stream, D1, Du… _(parameters: query)_
- **`migrate_pages_to_workers_guide`** — ALWAYS read this guide before migrating Pages projects to Workers.

## Maintenance & supply-chain — the risk Cloudflare Docs's static scan can't see

A prompt-injection scan reads Cloudflare Docs's advertised tool metadata at one moment. It cannot tell you the project behind `docs.mcp.cloudflare.com` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `docs.mcp.cloudflare.com` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Cloudflare Docs yourself, or claim its badge {#claim}

Re-run this exact Cloudflare Docs check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `docs.mcp.cloudflare.com`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://docs.mcp.cloudflare.com/mcp&directory=true"
```

For the itemized findings on Cloudflare Docs — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://docs.mcp.cloudflare.com/mcp"}`. If you
run `docs.mcp.cloudflare.com`, [claim a measured verified-owner badge for Cloudflare Docs free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=docs.mcp.cloudflare.com)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Ddocs.mcp.cloudflare.com&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://docs.mcp.cloudflare.com/mcp)
```

Keeping the Cloudflare Docs badge green as its tools change — six-hourly re-scans of `docs.mcp.cloudflare.com`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `docs.mcp.cloudflare.com` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-27; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
