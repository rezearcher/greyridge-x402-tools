---
title: "Is the Inside Ads MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Inside Ads MCP server (https://app.inside.ad/api/mcp), run 2026-10-26: advertises estimate_campaign, create_campaign_draft, get_draft_status; 3 tools scanned, injection verdict 'clear', 6 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# Inside Ads MCP server — security & directory-readiness scorecard

**Server:** `https://app.inside.ad/api/mcp`
**Scanned:** 2026-10-26 · **Tools advertised:** 3 · **Injection verdict:** `clear` · **Directory:** 6 Claude Directory quality item(s) to polish (no hard rejects)

Telegram ad exchange: estimate reach and cost with no account, then create and run campaigns.

When an agent connects Inside Ads, the model reads all 3 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`app.inside.ad`, scanned 2026-10-26; the verdict below is `clear`.

## What the scan found on Inside Ads

- **No tool-poisoning or prompt-injection patterns** were found across the 3 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 6 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **1 of 3 advertised tool(s) name a state-changing action** (`create_campaign_draft`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 3 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Inside Ads server
on 2026-10-26; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Inside Ads server advertises

These are the 3 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`estimate_campaign`** — Estimate reach, clicks and cost of advertising a product to Telegram audiences — no account or authorization required. Call this FIRST, before asking the user to connect an accoun… _(parameters: url, description, keywords, budget, geo, lang)_
- **`create_campaign_draft`** — Build a ready-to-launch ad campaign for a product WITHOUT the user having an account yet. Parses the landing page, generates ad creatives, and returns a single checkout link. Give… _(parameters: url, description, budget, geo, lang)_
- **`get_draft_status`** — Check what happened to a campaign draft you created with create_campaign_draft: whether the user opened the link, signed in and paid. Poll this instead of asking the user to repor… _(parameters: draftId)_

## Scan Inside Ads yourself, or claim its badge

Re-run this exact Inside Ads check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `app.inside.ad`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://app.inside.ad/api/mcp&directory=true"
```

For the itemized findings on Inside Ads — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://app.inside.ad/api/mcp"}`. If you
run `app.inside.ad`, [claim a measured verified-owner badge for Inside Ads free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=app.inside.ad)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapp.inside.ad&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://app.inside.ad/api/mcp)
```

Keeping the Inside Ads badge green as its tools change — six-hourly re-scans of `app.inside.ad`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `app.inside.ad` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-26; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
