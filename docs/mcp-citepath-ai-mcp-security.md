---
title: "Is the citepath MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the citepath MCP server (https://citepath.ai/api/mcp), run 2026-10-24: 3 tools scanned, injection verdict 'clear', 6 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# citepath MCP server — security & directory-readiness scorecard

**Server:** `https://citepath.ai/api/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 3 · **Injection verdict:** `clear` · **Directory:** 6 Claude Directory blocker(s)

Citepath public MCP server for LLM readiness audits and public scan results.

When an agent connects citepath, the model reads all 3 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`citepath.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on citepath

- **No tool-poisoning or prompt-injection patterns** were found across the 3 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 6 blocker(s).** This server advertises 6 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.

Grade `A` — No tool-poisoning/injection patterns detected across 3 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the citepath server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.


## Scan citepath yourself, or claim its badge

Re-run this exact citepath check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `citepath.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://citepath.ai/api/mcp&directory=true"
```

For the itemized findings on citepath — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://citepath.ai/api/mcp"}`. If you
run `citepath.ai`, [claim a measured verified-owner badge for citepath free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=citepath.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dcitepath.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://citepath.ai/api/mcp)
```

Keeping the citepath badge green as its tools change — six-hourly re-scans of `citepath.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `citepath.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
