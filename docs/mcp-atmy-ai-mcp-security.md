---
title: "Is the Atmy air quality MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Atmy air quality MCP server (https://api.atmy.ai/mcp), run 2026-10-24: advertises search_cities, get_air_quality, get_air_quality_history; 6 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Atmy air quality MCP server — security & directory-readiness scorecard

**Server:** `https://api.atmy.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 6 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

PM2.5 now, daily history, forecast and country rankings for 300+ cities from citizen sensors.

When an agent connects Atmy air quality, the model reads all 6 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`api.atmy.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Atmy air quality

- **No tool-poisoning or prompt-injection patterns** were found across the 6 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 6 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 6 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Atmy air quality server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Atmy air quality server advertises

The server describes itself to connecting agents as: *Atmy aggregates citizen, experimental and government air-quality sensors (PM2.5) after a daily quality check. Values are approximate, not official monitoring. Find a place with search_cities or pass a city name in any language, a slug like "russia/krasnoyarsk…*

These are the 6 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_cities`** — Find the cities with an Atmy air-quality summary by name (any language) or country. Returns slugs to pass to the other tools. _(parameters: query, country, lang, limit)_
- **`get_air_quality`** — PM2.5 now in a city (mean of the latest reading of each eligible sensor, at most 60 minutes old) with its US EPA category, plus the last completed day from the Atmy Data Hub. Pass… _(parameters: city, country, lat, lon, lang)_
- **`get_air_quality_history`** — Daily PM2.5 of a city from the Atmy Data Hub (UTC days, sensors after the quality check): the last days, or any period since 2017 with from/to, at most 400 days per call. For the… _(parameters: city, country, lat, lon, lang, days)_
- **`get_air_quality_monthly`** — The whole measurement history of a city from the Atmy Data Hub: PM2.5 per month, yearly means (complete years marked), the dirtiest and cleanest months and days. For questions lik… _(parameters: city, country, lat, lon, lang)_
- **`get_city_forecast`** — The next hours of a city: temperature, wind, humidity, precipitation and the pollution accumulation index 0–100 (how strongly the weather keeps particles near the ground). A weath… _(parameters: city, country, lat, lon, lang, hours)_
- **`get_country_ranking`** — Cities of a country ranked by daily PM2.5 for the last completed day (Atmy Data Hub), most polluted or cleanest first. _(parameters: country, order, settlements, limit, lang)_

## Scan Atmy air quality yourself, or claim its badge

Re-run this exact Atmy air quality check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `api.atmy.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://api.atmy.ai/mcp&directory=true"
```

For the itemized findings on Atmy air quality — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://api.atmy.ai/mcp"}`. If you
run `api.atmy.ai`, [claim a measured verified-owner badge for Atmy air quality free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=api.atmy.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapi.atmy.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://api.atmy.ai/mcp)
```

Keeping the Atmy air quality badge green as its tools change — six-hourly re-scans of `api.atmy.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `api.atmy.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
