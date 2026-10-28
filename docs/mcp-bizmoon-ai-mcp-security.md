---
title: "Is the bizmoon.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the bizmoon.ai MCP server (https://bizmoon.ai/api/mcp), run 2026-10-24: advertises search_regulatory_changes, get_regulatory_change, list_jurisdictions; 5 tools scanned, injection verdict 'clear', 5 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# bizmoon.ai MCP server — security & directory-readiness scorecard

**Server:** `https://bizmoon.ai/api/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 5 · **Injection verdict:** `clear` · **Directory:** 5 Claude Directory blocker(s)

Live US federal and state regulatory changes and grant programs, every result cited.

When an agent connects bizmoon.ai, the model reads all 5 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`bizmoon.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on bizmoon.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 5 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 5 blocker(s).** This server advertises 5 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 5 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 5 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the bizmoon.ai server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the bizmoon.ai server advertises

These are the 5 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_regulatory_changes`** — Search US federal and state regulatory documents ingested from official registers, with AI summaries, agencies, effective dates, and source URLs. Funding opportunities are exclude… _(parameters: jurisdiction, agency, category, keyword, from, to)_
- **`get_regulatory_change`** — Fetch one regulatory document by id: title, jurisdiction, agencies, category, published and effective dates, AI summary, full description, and the canonical source URL to cite. _(parameters: id)_
- **`list_jurisdictions`** — List every jurisdiction and official register Bizmoon monitors, with the most recent publication date, and when the source was last checked. Call this first to learn coverage and…
- **`changes_since`** — Everything published since a given date, optionally for one jurisdiction, newest first. Designed for scheduled or recurring agents: store the newest publishedDate you have seen an… _(parameters: since, jurisdiction, limit, offset)_
- **`search_funding_programs`** — Search federal and state grant and incentive programs (grants.gov plus state economic development agencies) by keyword, jurisdiction, agency, and date. Each result includes a summ… _(parameters: jurisdiction, agency, keyword, from, to, limit)_

## Scan bizmoon.ai yourself, or claim its badge

Re-run this exact bizmoon.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `bizmoon.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://bizmoon.ai/api/mcp&directory=true"
```

For the itemized findings on bizmoon.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://bizmoon.ai/api/mcp"}`. If you
run `bizmoon.ai`, [claim a measured verified-owner badge for bizmoon.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=bizmoon.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dbizmoon.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://bizmoon.ai/api/mcp)
```

Keeping the bizmoon.ai badge green as its tools change — six-hourly re-scans of `bizmoon.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `bizmoon.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
