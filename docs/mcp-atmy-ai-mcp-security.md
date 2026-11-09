---
title: "Is the Atmy air quality MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Atmy air quality MCP server (https://api.atmy.ai/mcp), run 2026-11-09: advertises search_cities, get_air_quality, get_air_quality_history; 11 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Atmy air quality MCP server — security & directory-readiness scorecard

**Server:** `https://api.atmy.ai/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 11 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

PM2.5 of 300+ cities: now, history, forecast, rankings; 12 000 sensors with a quality rating.

When an agent connects Atmy air quality, the model reads all 11 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`api.atmy.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on Atmy air quality

- **No tool-poisoning or prompt-injection patterns** were found across the 11 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 11 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 11 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Atmy air quality server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Atmy air quality server advertises

The server describes itself to connecting agents as: *Atmy aggregates citizen, experimental and government air-quality sensors (PM2.5) after a daily quality check. Values are approximate, not official monitoring. Find a place with search_cities or pass a city name in any language, a slug like "russia/krasnoyarsk…*

These are the 11 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_cities`** — Find the cities with an Atmy air-quality summary by name (any language) or country. Returns slugs to pass to the other tools. _(parameters: query, country, lang, limit)_
- **`get_air_quality`** — PM2.5 now in a city (mean of the latest reading of each eligible sensor, at most 60 minutes old; a government station hour up to 3 hours old, with the time it was measured) with i… _(parameters: city, country, lat, lon, lang)_
- **`get_air_quality_history`** — Daily PM2.5 of a city from the Atmy Data Hub (UTC days, sensors after the quality check) with the day's weather from 2026-01-19 (mean, lowest and highest temperature, humidity, pr… _(parameters: city, country, lat, lon, lang, days)_
- **`get_air_quality_monthly`** — The whole measurement history of a city from the Atmy Data Hub: PM2.5 per month with the month's weather from 2026-01, yearly means (complete years marked), the dirtiest and clean… _(parameters: city, country, lat, lon, lang)_
- **`get_city_forecast`** — The next hours of a city: temperature, wind, humidity, precipitation and the pollution accumulation index 0–100 (how strongly the weather keeps particles near the ground). A weath… _(parameters: city, country, lat, lon, lang, hours)_
- **`get_country_ranking`** — Cities of a country ranked by daily PM2.5 for the last completed day (Atmy Data Hub), most polluted or cleanest first. _(parameters: country, order, settlements, limit, lang)_
- **`list_sensor_networks`** — The sensor networks in Atmy (Sensor.Community, AirGradient, Atmy, and government stations of official networks) with their number of sensors, how many pass the quality check, and…
- **`find_sensors`** — Single sensors with their latest reading (PM1, PM2.5, PM10, temperature, humidity, pressure), network and quality check: status, rating 0–10 of the last checked day, the mean rati… _(parameters: city, country, lat, lon, radius_km, network)_
- **`get_sensor`** — One sensor by its id: location, network, license, quality check with rating and reasons, and the latest reading. _(parameters: id)_
- **`get_sensor_readings`** — Readings of one sensor: raw (the last 31 days, at most 7 days a call), 5-minute means (the same windows), hourly means (the last 366 days, at most 92 days a call) or daily means (… _(parameters: id, interval, from, to)_
- **`get_sensors_average`** — The mean of up to 100 sensors per 5 minutes, hour or UTC day, each sensor counted once per bucket, with the number of sensors in each bucket. Windows as in get_sensor_readings; by… _(parameters: ids, interval, from, to)_

## Maintenance & supply-chain — the risk Atmy air quality's static scan can't see

A prompt-injection scan reads Atmy air quality's advertised tool metadata at one moment. It cannot tell you the project behind `api.atmy.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain grade `A`** — no known advisory (OSV) and no deprecated release across the package(s) this server publishes.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `api.atmy.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Atmy air quality yourself, or claim its badge {#claim}

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
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
