---
title: "Is the Arclan MCP Registry MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Arclan MCP Registry MCP server (https://arclan.ai/mcp), run 2026-11-02: advertises query_registry, get_server, recommend_server; 4 tools scanned, injection verdict 'clear', 8 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# Arclan MCP Registry MCP server — security & directory-readiness scorecard

**Server:** `https://arclan.ai/mcp`
**Scanned:** 2026-11-02 · **Tools advertised:** 4 · **Injection verdict:** `clear` · **Directory:** 8 Claude Directory quality item(s) to polish (no hard rejects)

MCP registry: 138k servers crawled, handshake-validated, reliability-scored. 744 production-safe.

When an agent connects Arclan MCP Registry, the model reads all 4 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`arclan.ai`, scanned 2026-11-02; the verdict below is `clear`.

## What the scan found on Arclan MCP Registry

- **No tool-poisoning or prompt-injection patterns** were found across the 4 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 8 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 4 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 4 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Arclan MCP Registry server
on 2026-11-02; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Arclan MCP Registry server advertises

These are the 4 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`query_registry`** — Search the Arclan registry for MCP servers. By default returns only connectable servers (active, mcp_partial, auth_gated). Use status=stdio to browse local-only servers available… _(parameters: capability, min_score, transport, status, production_safe, read_only)_
- **`get_server`** — Get full details for a specific MCP server. Pass the server name (e.g. "GitHub", "Brave Search"), registry ID slug, or endpoint URL. Returns score, state, tools list, latency, and… _(parameters: url, id)_
- **`recommend_server`** — Get ranked MCP server recommendations for a task. Returns servers scored by production safety, keyword relevance, registry score, latency, and freshness. Each result includes a re… _(parameters: q, auth, production_safe, read_only, limit)_
- **`report_server`** — Submit an agent usage report for an MCP server. Reports are aggregated and influence registry trust scores. Call this after using an MCP server so the registry can track real-worl… _(parameters: serverUrl, outcome, agentId, toolsUsed, turnsRequired, latencyMs)_

## Maintenance & supply-chain — the risk Arclan MCP Registry's static scan can't see

A prompt-injection scan reads Arclan MCP Registry's advertised tool metadata at one moment. It cannot tell you the project behind `arclan.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `arclan.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Arclan MCP Registry yourself, or claim its badge {#claim}

Re-run this exact Arclan MCP Registry check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `arclan.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://arclan.ai/mcp&directory=true"
```

For the itemized findings on Arclan MCP Registry — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://arclan.ai/mcp"}`. If you
run `arclan.ai`, [claim a measured verified-owner badge for Arclan MCP Registry free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=arclan.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Darclan.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://arclan.ai/mcp)
```

Keeping the Arclan MCP Registry badge green as its tools change — six-hourly re-scans of `arclan.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `arclan.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-02; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
