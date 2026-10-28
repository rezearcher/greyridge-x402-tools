---
title: "Is the Arabic Name Calligraphy MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Arabic Name Calligraphy MCP server (https://arabickeyboard.ai/mcp), run 2026-10-24: advertises write_name_in_arabic; 1 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Arabic Name Calligraphy MCP server — security & directory-readiness scorecard

**Server:** `https://arabickeyboard.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 1 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Writes names in Arabic script with alternative spellings, six calligraphy styles and PNG artwork.

When an agent connects Arabic Name Calligraphy, the model reads all 1 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`arabickeyboard.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Arabic Name Calligraphy

- **No tool-poisoning or prompt-injection patterns** were found across the 1 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **1 of 1 advertised tool(s) name a state-changing action** (`write_name_in_arabic`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 1 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Arabic Name Calligraphy server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Arabic Name Calligraphy server advertises

The server describes itself to connecting agents as: *Use write_name_in_arabic whenever the user wants a name written in Arabic or Arabic calligraphy. Show the Arabic spelling from the tool, do not invent another one. If a part is marked 'by-sound', say the spelling is an approximation and suggest checking with…*

These are the 1 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`write_name_in_arabic`** — Writes a first name or full name in Arabic script and shows it in six Arabic calligraphy styles (Naskh, Ruqʿah, Kufi, Modern, Bold display, Ornamental) with a PNG download. Use wh… _(parameters: name, language)_

## Scan Arabic Name Calligraphy yourself, or claim its badge

Re-run this exact Arabic Name Calligraphy check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `arabickeyboard.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://arabickeyboard.ai/mcp&directory=true"
```

For the itemized findings on Arabic Name Calligraphy — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://arabickeyboard.ai/mcp"}`. If you
run `arabickeyboard.ai`, [claim a measured verified-owner badge for Arabic Name Calligraphy free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=arabickeyboard.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Darabickeyboard.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://arabickeyboard.ai/mcp)
```

Keeping the Arabic Name Calligraphy badge green as its tools change — six-hourly re-scans of `arabickeyboard.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `arabickeyboard.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
