---
title: "Is the AI-Portal Enterprise GenAI Briefing MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the AI-Portal Enterprise GenAI Briefing MCP server (https://www.ai-portal.ai/mcp), run 2026-11-02: advertises list_releases, list_regulations, search_glossary; 4 tools scanned, injection verdict 'clear', 8 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# AI-Portal Enterprise GenAI Briefing MCP server — security & directory-readiness scorecard

**Server:** `https://www.ai-portal.ai/mcp`
**Scanned:** 2026-11-02 · **Tools advertised:** 4 · **Injection verdict:** `clear` · **Directory:** 8 Claude Directory quality item(s) to polish (no hard rejects)

Live AI data for agents: model releases, regulations (EU AI Act), GenAI glossary, daily news.

When an agent connects AI-Portal Enterprise GenAI Briefing, the model reads all 4 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`www.ai-portal.ai`, scanned 2026-11-02; the verdict below is `clear`.

## What the scan found on AI-Portal Enterprise GenAI Briefing

- **No tool-poisoning or prompt-injection patterns** were found across the 4 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 8 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 4 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 4 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the AI-Portal Enterprise GenAI Briefing server
on 2026-11-02; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the AI-Portal Enterprise GenAI Briefing server advertises

The server describes itself to connecting agents as: *Read-only tools over AI-Portal data (https://www.ai-portal.ai): AI model releases, AI regulations, a GenAI glossary, and daily curated GenAI news. Use list_releases for "when did model X ship / what did provider Y release", list_regulations for AI compliance…*

These are the 4 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`list_releases`** — List AI model and product releases tracked by AI-Portal, newest first. Filter by category, provider, year, or landmark releases only. _(parameters: category, provider, year, landmark_only, limit)_
- **`list_regulations`** — List AI regulations and their compliance status (EU AI Act, ISO 42001, and more), including jurisdiction, effective dates, key requirements, and fines. _(parameters: status, jurisdiction)_
- **`search_glossary`** — Search AI-Portal's glossary of AI/GenAI terms. Returns term, definition, category, and a usage example. _(parameters: query, category)_
- **`get_latest_news`** — Latest curated GenAI news items from AI-Portal, refreshed every weekday morning. _(parameters: limit)_

## Maintenance & supply-chain — the risk AI-Portal Enterprise GenAI Briefing's static scan can't see

A prompt-injection scan reads AI-Portal Enterprise GenAI Briefing's advertised tool metadata at one moment. It cannot tell you the project behind `www.ai-portal.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `www.ai-portal.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan AI-Portal Enterprise GenAI Briefing yourself, or claim its badge {#claim}

Re-run this exact AI-Portal Enterprise GenAI Briefing check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `www.ai-portal.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://www.ai-portal.ai/mcp&directory=true"
```

For the itemized findings on AI-Portal Enterprise GenAI Briefing — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://www.ai-portal.ai/mcp"}`. If you
run `www.ai-portal.ai`, [claim a measured verified-owner badge for AI-Portal Enterprise GenAI Briefing free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=www.ai-portal.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dwww.ai-portal.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://www.ai-portal.ai/mcp)
```

Keeping the AI-Portal Enterprise GenAI Briefing badge green as its tools change — six-hourly re-scans of `www.ai-portal.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `www.ai-portal.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-02; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
