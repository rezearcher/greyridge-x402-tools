---
title: Is the mcp.datadubai.ae MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the mcp.datadubai.ae MCP server (https://mcp.datadubai.ae/mcp), run 2026-10-22: 6 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call.
---
# mcp.datadubai.ae MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.datadubai.ae/mcp`
**Scanned:** 2026-10-22 · **Tools advertised:** 6 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Dubai property prices, AED/sqft, sales, rents, yields and projects from DLD registered transactions.

Before an agent — or a user — connects it, every tool definition it advertises is read
by the model, so a poisoned description or a hidden instruction can steer the agent before any
tool runs. This scorecard is an independent, static read of that advertised metadata, run against
the mcp.datadubai.ae server on the date above.

## What the scan found

- **No tool-poisoning or prompt-injection patterns** were found across the 6 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).

The scan is **static analysis of the advertised `tools/list` metadata only** — it never invokes a
tool and never sends data anywhere. It is a point-in-time read: an MCP server's tool definitions can
change at any time (that is the "drift" risk this scorecard exists to make visible), so a clean result
today is not a guarantee for tomorrow.

## Re-run this scan yourself

No account, no key:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.datadubai.ae/mcp&directory=true"
```

That free response gives you the verdict and the directory blocker **count**. For the **itemized
findings** — which tools, which OWASP LLM01/LLM08 pattern, and for the directory check *which* criteria
fail and how to fix each — the zero-egress paid report is one call:

```bash
curl -s -X POST https://x402-data-api.sigrunner.workers.dev/scan/mcp -H 'content-type: application/json' \
  -d '{"directory":true,"url":"https://mcp.datadubai.ae/mcp"}'
```

`$0.05 USDC` via [x402](https://x402.org) on Base, no account. To keep a server honest as it changes,
continuous drift monitoring with alerts is `$9.99/mo` — see [pricing](https://x402-data-api.sigrunner.workers.dev/pricing).

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools).
Measured on 2026-10-22; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
