---
title: "Is the Celestio MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Celestio MCP server (https://celestio.ai/mcp), run 2026-10-24: advertises compute_birth_chart, compare_birth_charts, get_birth_reading; 7 tools scanned, injection verdict 'clear', 7 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# Celestio MCP server — security & directory-readiness scorecard

**Server:** `https://celestio.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 7 · **Injection verdict:** `clear` · **Directory:** 7 Claude Directory blocker(s)

Birth charts and personal astrology readings, plus compatibility between two people's charts.

When an agent connects Celestio, the model reads all 7 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`celestio.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Celestio

- **No tool-poisoning or prompt-injection patterns** were found across the 7 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 7 blocker(s).** This server advertises 7 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **1 of 7 advertised tool(s) name a state-changing action** (`compute_birth_chart`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 7 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Celestio server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Celestio server advertises

The server describes itself to connecting agents as: *Celestio calculates birth charts for any person, any place worldwide and any date from 1900 to 2100, and writes personal readings. Without an account: compute_birth_chart for positions and compare_birth_charts for how two people relate; each returns a link th…*

These are the 7 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`compute_birth_chart`** — Calculates a birth chart (planets, signs, houses, rising sign, aspects) for anyone from their name, birth date, place and, if known, time. No account needed and nothing is saved.… _(parameters: name, date, time, place, latitude, longitude)_
- **`compare_birth_charts`** — Compatibility between two people (partners, crushes, friends, family) from their names, birth dates, places and, if known, times. No account needed and nothing is saved. Returns t… _(parameters: first, second, relationship)_
- **`get_birth_reading`** — Writes (or returns the already written) free personal birth chart reading for someone, saved in the connected Celestio account. Pass person (birth details) or a chartId from an ea… _(parameters: chartId, person, relationship)_
- **`list_my_readings`** — Lists the readings saved in the connected Celestio account, newest first (birth readings and compatibility reports and Transit reports with their stored period). Pass nextCursor f… _(parameters: limit, cursor)_
- **`get_reading`** — Returns one reading from the connected Celestio account by readingId: its sections and a link to it on celestio.ai. Status "writing" means it is still being written; try again sho… _(parameters: readingId)_
- **`preview_transits`** — Calculates a free personal 30-day Transit preview for exactly one chartId OR person (birth details). Requires createReadings and may save a chart. An omitted start defaults to tod… _(parameters: chartId, person, start)_
- **`preview_compatibility`** — Free compatibility preview for two people: saves both charts in the connected Celestio account and returns the strongest connections between them. _(parameters: first, second)_

## Scan Celestio yourself, or claim its badge

Re-run this exact Celestio check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `celestio.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://celestio.ai/mcp&directory=true"
```

For the itemized findings on Celestio — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://celestio.ai/mcp"}`. If you
run `celestio.ai`, [claim a measured verified-owner badge for Celestio free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=celestio.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dcelestio.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://celestio.ai/mcp)
```

Keeping the Celestio badge green as its tools change — six-hourly re-scans of `celestio.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `celestio.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
