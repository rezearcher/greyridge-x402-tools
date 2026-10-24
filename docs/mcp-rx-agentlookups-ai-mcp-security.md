---
title: Is the CounterScript - Drug Price Benchmarks MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the CounterScript - Drug Price Benchmarks MCP server (https://rx.agentlookups.ai/mcp), run 2026-10-24: 1 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call.
---
# CounterScript - Drug Price Benchmarks MCP server — security & directory-readiness scorecard

**Server:** `https://rx.agentlookups.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 1 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Free US drug-price benchmarks from federal data (CMS NADAC): a benchmark, not a price anyone owes.

When an agent connects CounterScript - Drug Price Benchmarks, the model reads all 1 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`rx.agentlookups.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on CounterScript - Drug Price Benchmarks

- **No tool-poisoning or prompt-injection patterns** were found across the 1 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 1 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 1 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the CounterScript - Drug Price Benchmarks server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the CounterScript - Drug Price Benchmarks server advertises

The server describes itself to connecting agents as: *CounterScript gives US drug-price benchmarks from federal data, free during beta: CMS NADAC pharmacy acquisition costs, FDA Orange Book generic equivalents, and CMS Medicare negotiated prices. A match result carries provenance (source, run, artifact hash and…*

These are the 1 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`drug_price`** — Looks up what US pharmacies actually pay to acquire a drug (the CMS NADAC benchmark, per unit, with its date), a fair cash-price estimate range, FDA generic equivalents, and Medic… _(parameters: query)_

## Scan CounterScript - Drug Price Benchmarks yourself, or claim its badge

Re-run this exact CounterScript - Drug Price Benchmarks check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `rx.agentlookups.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://rx.agentlookups.ai/mcp&directory=true"
```

For the itemized findings on CounterScript - Drug Price Benchmarks — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://rx.agentlookups.ai/mcp"}`. If you
run `rx.agentlookups.ai`, [claim a measured verified-owner badge for CounterScript - Drug Price Benchmarks free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=rx.agentlookups.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Drx.agentlookups.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://rx.agentlookups.ai/mcp)
```

Keeping the CounterScript - Drug Price Benchmarks badge green as its tools change — six-hourly re-scans of `rx.agentlookups.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `rx.agentlookups.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
