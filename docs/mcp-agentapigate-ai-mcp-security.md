---
title: "Is the mcp.agentapigate.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the mcp.agentapigate.ai MCP server (https://mcp.agentapigate.ai/mcp), run 2026-11-23: advertises search_endpoints, get_endpoint_schema, call_endpoint; 4 tools scanned, injection verdict 'clear', 4 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# mcp.agentapigate.ai MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.agentapigate.ai/mcp`
**Scanned:** 2026-11-23 · **Tools advertised:** 4 · **Injection verdict:** `clear` · **Directory:** 4 Claude Directory quality item(s) to polish (no hard rejects)

Walmart, Shopee, TikTok Shop, Shopify & WooCommerce live product & pricing MCP (x402 USDC or key).

When an agent connects mcp.agentapigate.ai, the model reads all 4 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.agentapigate.ai`, scanned 2026-11-23; the verdict below is `clear`.

## What the scan found on mcp.agentapigate.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 4 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 4 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 4 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 4 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the mcp.agentapigate.ai server
on 2026-11-23; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the mcp.agentapigate.ai server advertises

The server describes itself to connecting agents as: *AgentAPIGate MCP Server. Supports 1-Click MCP OAuth 2.1 PKCE or Authorization: Bearer aag_live_* (or aag_agent_*). Default output is compact (4k token cap). Empty or failed upstream calls cost $0.*

These are the 4 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_endpoints`** — Search 136 real-time APIs across x, search, social, commerce, b2b, finance, local, intel. Returns id, price_usd, p50_ms, summary. _(parameters: query, category)_
- **`get_endpoint_schema`** — Get JSON input schema, price, and sample params for an endpoint_id. _(parameters: endpoint_id)_
- **`call_endpoint`** — Execute an endpoint and return compact LLM-ready output (-80% context tokens). _(parameters: endpoint_id, params, format, max_cost_usd)_
- **`get_account_status`** — Inspect paid_usd, bonus_usd, rate limit, and active sub-key caps.

## Maintenance & supply-chain — the risk mcp.agentapigate.ai's static scan can't see

A prompt-injection scan reads mcp.agentapigate.ai's advertised tool metadata at one moment. It cannot tell you the project behind `mcp.agentapigate.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `mcp.agentapigate.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan mcp.agentapigate.ai yourself, or claim its badge {#claim}

Re-run this exact mcp.agentapigate.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.agentapigate.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.agentapigate.ai/mcp&directory=true"
```

For the itemized findings on mcp.agentapigate.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.agentapigate.ai/mcp"}`. If you
run `mcp.agentapigate.ai`, [claim a measured verified-owner badge for mcp.agentapigate.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.agentapigate.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.agentapigate.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.agentapigate.ai/mcp)
```

Keeping the mcp.agentapigate.ai badge green as its tools change — six-hourly re-scans of `mcp.agentapigate.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.agentapigate.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-23; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
