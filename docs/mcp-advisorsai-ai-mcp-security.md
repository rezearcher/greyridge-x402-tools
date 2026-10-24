---
title: "Is the advisorsai.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the advisorsai.ai MCP server (https://advisorsai.ai/store-readiness-mcp), run 2026-10-24: advertises advisors_store_readiness_check; 1 tools scanned, injection verdict 'clear', 1 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# advisorsai.ai MCP server — security & directory-readiness scorecard

**Server:** `https://advisorsai.ai/store-readiness-mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 1 · **Injection verdict:** `clear` · **Directory:** 1 Claude Directory blocker(s)



When an agent connects advisorsai.ai, the model reads all 1 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`advisorsai.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on advisorsai.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 1 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 1 blocker(s).** This server advertises 1 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 1 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 1 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the advisorsai.ai server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the advisorsai.ai server advertises

The server describes itself to connecting agents as: *Expose only advisors_store_readiness_check. Call it only when the requester asks to inspect a public HTTP(S) page. Never infer ranking, mentions, buyer intent, sales, or ownership. Return only the bounded measurement and its verification receipts.*

These are the 1 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`advisors_store_readiness_check`** — Use only after the requester supplies a public page and asks for a read-only check. Returns at most one measured finding with a server-authenticated source receipt and the fixed a… _(parameters: url, language)_

## Scan advisorsai.ai yourself, or claim its badge

Re-run this exact advisorsai.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `advisorsai.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://advisorsai.ai/store-readiness-mcp&directory=true"
```

For the itemized findings on advisorsai.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://advisorsai.ai/store-readiness-mcp"}`. If you
run `advisorsai.ai`, [claim a measured verified-owner badge for advisorsai.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=advisorsai.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dadvisorsai.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://advisorsai.ai/store-readiness-mcp)
```

Keeping the advisorsai.ai badge green as its tools change — six-hourly re-scans of `advisorsai.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `advisorsai.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
