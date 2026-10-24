---
title: Is the api.aislabs.ai MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the api.aislabs.ai MCP server (https://api.aislabs.ai/cve/mcp), run 2026-10-24: 4 tools scanned, injection verdict 'clear', 8 Claude Directory blocker(s). Re-run it yourself in one keyless call.
---
# api.aislabs.ai MCP server — security & directory-readiness scorecard

**Server:** `https://api.aislabs.ai/cve/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 4 · **Injection verdict:** `clear` · **Directory:** 8 Claude Directory blocker(s)

Daily CVE priorities ranked by real exploitation (KEV+EPSS) for AI agents; free teaser, paid full.

When an agent connects api.aislabs.ai, the model reads all 4 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`api.aislabs.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on api.aislabs.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 4 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 8 blocker(s).** This server advertises 8 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 4 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 4 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the api.aislabs.ai server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the api.aislabs.ai server advertises

These are the 4 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`brief_teaser`** — FREE. Today's top-3 CVE priorities from the AIS daily ranking (no scores). Ranked by real exploitation — KEV + EPSS + KEV-recency — not CVSS alone. Use top_cves_today for the full…
- **`top_cves_today`** — PAID — unlock with an AIS CVE key ($19 / 30 days) or campus pass (https://aislabs.ai/gateway/), or pay per call over x402 on the HTTP twin: $0.02. Today's FULL ranked CVE priority…
- **`kev_fresh`** — PAID — unlock with an AIS CVE key ($19 / 30 days) or campus pass (https://aislabs.ai/gateway/), or pay per call over x402 on the HTTP twin: $0.01. CVEs added to CISA KEV in the la…
- **`cve_verdict`** — PAID — unlock with an AIS CVE key ($19 / 30 days) or campus pass (https://aislabs.ai/gateway/), or pay per call over x402 on the HTTP twin: $0.005. One CVE's priority verdict from… _(parameters: cve_id)_

## Scan api.aislabs.ai yourself, or claim its badge

Re-run this exact api.aislabs.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `api.aislabs.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://api.aislabs.ai/cve/mcp&directory=true"
```

For the itemized findings on api.aislabs.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://api.aislabs.ai/cve/mcp"}`. If you
run `api.aislabs.ai`, [claim a measured verified-owner badge for api.aislabs.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=api.aislabs.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapi.aislabs.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://api.aislabs.ai/cve/mcp)
```

Keeping the api.aislabs.ai badge green as its tools change — six-hourly re-scans of `api.aislabs.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `api.aislabs.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
