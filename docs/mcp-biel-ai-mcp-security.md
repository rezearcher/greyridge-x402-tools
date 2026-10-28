---
title: "Is the Biel.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Biel.ai MCP server (https://mcp.biel.ai/v2/{project_slug}/mcp), run 2026-10-24: 3 tools scanned, injection verdict 'clear', 4 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# Biel.ai MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.biel.ai/v2/{project_slug}/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 3 · **Injection verdict:** `clear` · **Directory:** 4 Claude Directory blocker(s)

Query your product docs from AI tools. Source-cited answers from your indexed documentation.

When an agent connects Biel.ai, the model reads all 3 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.biel.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Biel.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 3 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 4 blocker(s).** This server advertises 4 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.

Grade `A` — No tool-poisoning/injection patterns detected across 3 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Biel.ai server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.


## Scan Biel.ai yourself, or claim its badge

Re-run this exact Biel.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.biel.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.biel.ai/v2/{project_slug}/mcp&directory=true"
```

For the itemized findings on Biel.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.biel.ai/v2/{project_slug}/mcp"}`. If you
run `mcp.biel.ai`, [claim a measured verified-owner badge for Biel.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.biel.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.biel.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.biel.ai/v2/{project_slug}/mcp)
```

Keeping the Biel.ai badge green as its tools change — six-hourly re-scans of `mcp.biel.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.biel.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
