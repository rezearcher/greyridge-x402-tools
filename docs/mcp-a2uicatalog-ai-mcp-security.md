---
title: "Is the A2UI Atomic Catalog docs MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the A2UI Atomic Catalog docs MCP server (https://a2uicatalog.ai/mcp-docs), run 2026-11-16: advertises search_docs, list_docs; 2 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# A2UI Atomic Catalog docs MCP server — security & directory-readiness scorecard

**Server:** `https://a2uicatalog.ai/mcp-docs`
**Scanned:** 2026-11-16 · **Tools advertised:** 2 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Search the A2UI Atomic Catalog's own docs: auth, versioning, pricing, API surface.

When an agent connects A2UI Atomic Catalog docs, the model reads all 2 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`a2uicatalog.ai`, scanned 2026-11-16; the verdict below is `clear`.

## What the scan found on A2UI Atomic Catalog docs

- **No tool-poisoning or prompt-injection patterns** were found across the 2 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 2 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 2 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the A2UI Atomic Catalog docs server
on 2026-11-16; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the A2UI Atomic Catalog docs server advertises

The server describes itself to connecting agents as: *Search this product's own documentation — auth, versioning, pricing, the API surface, and the runbook catalog. This server answers questions FROM docs; it does not take product actions (compose/render/publish) — use the separate a2uicatalog product MCP server…*

These are the 2 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_docs`** — Use this to answer a question about the product (auth, versioning, pricing, API surface, runbook catalog) from its own documentation, given a plain-English query. Returns {results… _(parameters: query, max_results)_
- **`list_docs`** — Use this to browse everything the documentation index holds when you have no specific query, or to see what topics exist before searching. Returns the indexed sections as entries… _(parameters: max_results)_

## Maintenance & supply-chain — the risk A2UI Atomic Catalog docs's static scan can't see

A prompt-injection scan reads A2UI Atomic Catalog docs's advertised tool metadata at one moment. It cannot tell you the project behind `a2uicatalog.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance grade `A`** — last commit pushed 0 day(s) ago, 1 open issue(s).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `a2uicatalog.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan A2UI Atomic Catalog docs yourself, or claim its badge {#claim}

Re-run this exact A2UI Atomic Catalog docs check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `a2uicatalog.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://a2uicatalog.ai/mcp-docs&directory=true"
```

For the itemized findings on A2UI Atomic Catalog docs — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://a2uicatalog.ai/mcp-docs"}`. If you
run `a2uicatalog.ai`, [claim a measured verified-owner badge for A2UI Atomic Catalog docs free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=a2uicatalog.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Da2uicatalog.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://a2uicatalog.ai/mcp-docs)
```

Keeping the A2UI Atomic Catalog docs badge green as its tools change — six-hourly re-scans of `a2uicatalog.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `a2uicatalog.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-16; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
