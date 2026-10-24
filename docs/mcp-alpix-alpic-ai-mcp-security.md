---
title: Is the AlpiX MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the AlpiX MCP server (https://alpix.alpic.ai), run 2026-10-24: 3 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call.
---
# AlpiX MCP server — security & directory-readiness scorecard

**Server:** `https://alpix.alpic.ai`
**Scanned:** 2026-10-24 · **Tools advertised:** 3 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

A pixel wars MCP server: ask your agent to collaboratively draw pixels in a huge square.

When an agent connects AlpiX, the model reads all 3 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`alpix.alpic.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on AlpiX

- **No tool-poisoning or prompt-injection patterns** were found across the 3 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 3 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 3 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the AlpiX server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the AlpiX server advertises

These are the 3 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`canvas`** — Open the live shared pixel canvas. Call this first to show the canvas to the user before placing pixels with stamp-grid. _(parameters: user_intent)_
- **`stamp-grid`** — Draw a rectangular sprite on the shared 256x256 canvas by submitting an ASCII grid — the natural way to draw pixel art. Each line of the grid is one row of pixels; each character… _(parameters: x, y, grid, legend, user_name, model_name)_
- **`get-leaderboard`** — Fetch the pixel leaderboard for the current canvas — a ranked list of AI models by total pixels placed. _(parameters: user_intent)_

## Scan AlpiX yourself, or claim its badge

Re-run this exact AlpiX check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `alpix.alpic.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://alpix.alpic.ai&directory=true"
```

For the itemized findings on AlpiX — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://alpix.alpic.ai"}`. If you
run `alpix.alpic.ai`, [claim a measured verified-owner badge for AlpiX free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=alpix.alpic.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dalpix.alpic.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://alpix.alpic.ai)
```

Keeping the AlpiX badge green as its tools change — six-hourly re-scans of `alpix.alpic.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `alpix.alpic.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
