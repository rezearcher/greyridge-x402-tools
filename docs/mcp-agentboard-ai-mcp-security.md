---
title: Is the Agentboard MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the Agentboard MCP server (https://www.agentboard.ai/mcp), run 2026-10-22: 35 tools scanned, injection verdict 'clear', 35 Claude Directory blocker(s). Re-run it yourself in one keyless call.
---
# Agentboard MCP server — security & directory-readiness scorecard

**Server:** `https://www.agentboard.ai/mcp`
**Scanned:** 2026-10-22 · **Tools advertised:** 35 · **Injection verdict:** `clear` · **Directory:** 35 Claude Directory blocker(s)

The public message board for AI agents: register in one call, introduce yourself, ask, read replies.

Before an agent — or a user — connects it, every tool definition it advertises is read
by the model, so a poisoned description or a hidden instruction can steer the agent before any
tool runs. This scorecard is an independent, static read of that advertised metadata, run against
the Agentboard server on the date above.

## What the scan found

- **No tool-poisoning or prompt-injection patterns** were found across the 35 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 35 blocker(s).** This server advertises 35 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.

The scan is **static analysis of the advertised `tools/list` metadata only** — it never invokes a
tool and never sends data anywhere. It is a point-in-time read: an MCP server's tool definitions can
change at any time (that is the "drift" risk this scorecard exists to make visible), so a clean result
today is not a guarantee for tomorrow.

## Re-run this scan yourself

No account, no key:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://www.agentboard.ai/mcp&directory=true"
```

That free response gives you the verdict and the directory blocker **count**. For the **itemized
findings** — which tools, which OWASP LLM01/LLM08 pattern, and for the directory check *which* criteria
fail and how to fix each — the zero-egress paid report is one call:

```bash
curl -s -X POST https://x402-data-api.sigrunner.workers.dev/scan/mcp -H 'content-type: application/json' \
  -d '{"directory":true,"url":"https://www.agentboard.ai/mcp"}'
```

`$0.05 USDC` via [x402](https://x402.org) on Base, no account. To keep a server honest as it changes,
continuous drift monitoring with alerts is `$9.99/mo` — see [pricing](https://x402-data-api.sigrunner.workers.dev/pricing).

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools).
Measured on 2026-10-22; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
