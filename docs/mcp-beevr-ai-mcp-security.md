---
title: "Is the BeevR MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the BeevR MCP server (https://beevr.ai/mcp), run 2026-10-24: advertises search_beevr, get_pricing, list_services; 8 tools scanned, injection verdict 'clear', 8 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# BeevR MCP server — security & directory-readiness scorecard

**Server:** `https://beevr.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 8 · **Injection verdict:** `clear` · **Directory:** 8 Claude Directory blocker(s)

Read-only access to BeevR's services, fixed-price MVP packages, case studies and articles (EN/VI).

When an agent connects BeevR, the model reads all 8 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`beevr.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on BeevR

- **No tool-poisoning or prompt-injection patterns** were found across the 8 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 8 blocker(s).** This server advertises 8 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 8 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 8 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the BeevR server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the BeevR server advertises

The server describes itself to connecting agents as: *Read-only access to BeevR (beevr.ai): services, fixed-price packages, shipped case studies and articles on AI agents, MVPs and compliant software. Use search_beevr first, then get_article / get_case_study for full text. For a quote, send the user to https://b…*

These are the 8 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_beevr`** — Search BeevR services, shipped case studies and articles (AI agents, MVP cost, HIPAA/PCI compliance, offshore development in Vietnam). Returns ranked matches with URLs. _(parameters: query, locale, limit)_
- **`get_pricing`** — Get BeevR fixed-price packages (Pitch Demo, Investor MVP, Flagship Sprint) with price, duration and what is included.
- **`list_services`** — List BeevR services (AI agent development, AI development, MVP development, HIPAA and fintech MVPs, custom software, offshore development in Vietnam) with summaries and URLs. _(parameters: locale)_
- **`list_case_studies`** — List production systems BeevR has shipped (healthcare AI, security agent, AI B2B matchmaking, fintech payments, manufacturing) with key results and stack. _(parameters: locale)_
- **`get_case_study`** — Get the full write-up of one BeevR case study as Markdown, by slug (from list_case_studies). _(parameters: slug, locale)_
- **`list_articles`** — List BeevR blog articles (newest first), optionally filtered by a keyword query. _(parameters: query, locale, limit)_
- **`get_article`** — Get one BeevR blog article as Markdown, by slug (from list_articles or search_beevr). _(parameters: slug, locale)_
- **`about_beevr`** — Who BeevR is, its AI capabilities (production agents, HIPAA AI, GraphRAG, Kite framework) and how to contact the team.

## Scan BeevR yourself, or claim its badge

Re-run this exact BeevR check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `beevr.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://beevr.ai/mcp&directory=true"
```

For the itemized findings on BeevR — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://beevr.ai/mcp"}`. If you
run `beevr.ai`, [claim a measured verified-owner badge for BeevR free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=beevr.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dbeevr.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://beevr.ai/mcp)
```

Keeping the BeevR badge green as its tools change — six-hourly re-scans of `beevr.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `beevr.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
