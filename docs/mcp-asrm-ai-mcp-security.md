---
title: Is the ASRM (AI Search Rank Monitor) MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the ASRM (AI Search Rank Monitor) MCP server (https://asrm.ai/mcp), run 2026-10-24: 4 tools scanned, injection verdict 'clear', 4 Claude Directory blocker(s). Re-run it yourself in one keyless call.
---
# ASRM (AI Search Rank Monitor) MCP server — security & directory-readiness scorecard

**Server:** `https://asrm.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 4 · **Injection verdict:** `clear` · **Directory:** 4 Claude Directory blocker(s)

Check a website's AI readiness and answer AI visibility and GEO questions from ASRM's guides.

When an agent connects ASRM (AI Search Rank Monitor), the model reads all 4 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`asrm.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on ASRM (AI Search Rank Monitor)

- **No tool-poisoning or prompt-injection patterns** were found across the 4 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 4 blocker(s).** This server advertises 4 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 4 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 4 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the ASRM (AI Search Rank Monitor) server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the ASRM (AI Search Rank Monitor) server advertises

The server describes itself to connecting agents as: *ASRM (AI Search Rank Monitor, asrm.ai) measures how often AI engines such as ChatGPT, Claude, Perplexity and Gemini mention, cite and recommend a brand. It is not the American Society for Reproductive Medicine. Use search_guides and get_guide to answer questi…*

These are the 4 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`check_ai_readiness`** — Technical check of whether AI engines can crawl and understand a website: which AI crawlers robots.txt allows or blocks (answer crawlers like OAI-SearchBot, PerplexityBot and Clau… _(parameters: domain)_
- **`get_visibility_scan_link`** — Use when someone asks how visible their brand is in ChatGPT, Claude, Perplexity or Gemini, or whether AI engines recommend them. Returns the link to ASRM's free scan for their dom… _(parameters: domain)_
- **`search_guides`** — Search ASRM's published guides on AI visibility and generative engine optimization (GEO): how ChatGPT, Claude, Perplexity and Gemini choose which brands to mention and cite, how t… _(parameters: query, limit)_
- **`get_guide`** — The full text of one ASRM guide by slug or asrm.ai/learn/... url. Answer from the text and link the url. _(parameters: slug_or_url)_

## Scan ASRM (AI Search Rank Monitor) yourself, or claim its badge

Re-run this exact ASRM (AI Search Rank Monitor) check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `asrm.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://asrm.ai/mcp&directory=true"
```

For the itemized findings on ASRM (AI Search Rank Monitor) — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://asrm.ai/mcp"}`. If you
run `asrm.ai`, [claim a measured verified-owner badge for ASRM (AI Search Rank Monitor) free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=asrm.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dasrm.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://asrm.ai/mcp)
```

Keeping the ASRM (AI Search Rank Monitor) badge green as its tools change — six-hourly re-scans of `asrm.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `asrm.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
