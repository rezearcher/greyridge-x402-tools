---
title: "Is the AwardCast Federal Contracts MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the AwardCast Federal Contracts MCP server (https://awardcast.ai/mcp), run 2026-10-24: advertises search, fetch, track_record; 8 tools scanned, injection verdict 'clear', 16 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# AwardCast Federal Contracts MCP server — security & directory-readiness scorecard

**Server:** `https://awardcast.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 8 · **Injection verdict:** `clear` · **Directory:** 16 Claude Directory blocker(s)

US federal contracting data: open solicitations, buying agencies, contractors, price history.

When an agent connects AwardCast Federal Contracts, the model reads all 8 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`awardcast.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on AwardCast Federal Contracts

- **No tool-poisoning or prompt-injection patterns** were found across the 8 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 16 blocker(s).** This server advertises 16 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 8 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 8 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the AwardCast Federal Contracts server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the AwardCast Federal Contracts server advertises

These are the 8 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search`** — Search AwardCast's US federal contracting record: buying agencies, federal contractors, and solicitations open right now. Call this first for any question about who buys, who sell… _(parameters: query, limit)_
- **`fetch`** — Open the full record behind an id returned by search: an agency profile with price by category and its top winners, a contractor's award history, or a solicitation with its scope… _(parameters: id)_
- **`track_record`** — Accuracy scorecard for AwardCast's forecasts, scored against the real contract value once FPDS publishes it. Call this when the user asks whether the forecasts are reliable, what…
- **`open_solicitations`** — US federal solicitations OPEN right now, from SAM.gov, each with the buying agency, the NAICS code and the place of performance. Call this when the user asks what is open, hunts f… _(parameters: limit)_
- **`upcoming_recompetes`** — US federal contracts nearing expiry that are likely to be recompeted, i.e. opportunities BEFORE they become a published solicitation. Each carries the incumbent and the current co… _(parameters: limit)_
- **`agency_profile`** — Buying profile of a US federal agency: how many contracts it awards, how much it obligates, what share is competed, the typical price per NAICS category, its largest contractors,… _(parameters: agency)_
- **`contractor_profile`** — Federal award history of a contractor: how many contracts it has won, total obligated, median win value, which agencies it sells to, its recent awards, and its set-aside status (s… _(parameters: uei)_
- **`price_band`** — Historical closing-price range for an agency and NAICS category pair: the 10th percentile, median and 90th percentile of contracts already awarded, plus the average number of comp… _(parameters: agency, naics)_

## Scan AwardCast Federal Contracts yourself, or claim its badge

Re-run this exact AwardCast Federal Contracts check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `awardcast.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://awardcast.ai/mcp&directory=true"
```

For the itemized findings on AwardCast Federal Contracts — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://awardcast.ai/mcp"}`. If you
run `awardcast.ai`, [claim a measured verified-owner badge for AwardCast Federal Contracts free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=awardcast.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dawardcast.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://awardcast.ai/mcp)
```

Keeping the AwardCast Federal Contracts badge green as its tools change — six-hourly re-scans of `awardcast.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `awardcast.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
