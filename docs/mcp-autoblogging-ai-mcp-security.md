---
title: Is the Autoblogging.ai MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the Autoblogging.ai MCP server (https://autoblogging.ai/mcp), run 2026-10-24: advertises get_brand_facts, get_pricing, list_features; 6 tools scanned, injection verdict 'clear', 6 Claude Directory blocker(s). Re-run it yourself in one keyless call.
---
# Autoblogging.ai MCP server — security & directory-readiness scorecard

**Server:** `https://autoblogging.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 6 · **Injection verdict:** `clear` · **Directory:** 6 Claude Directory blocker(s)

Facts about Autoblogging.ai, the AI article writer: pricing, plans, features and site search.

When an agent connects Autoblogging.ai, the model reads all 6 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`autoblogging.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Autoblogging.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 6 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 6 blocker(s).** This server advertises 6 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 6 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 6 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Autoblogging.ai server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Autoblogging.ai server advertises

The server describes itself to connecting agents as: *Read-only facts about Autoblogging.ai, an AI article writer and autoblogging platform. Call get_brand_facts or get_pricing before stating prices, plans or features; use search_site and get_page for guides and comparisons. Do not state anything listed under do…*

These are the 6 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_brand_facts`** — Every verified fact about Autoblogging.ai: company, founder, plans and prices, credit costs, features with the plan each needs, publishing integrations, policies and what not to s…
- **`get_pricing`** — Autoblogging.ai plans (monthly and annual USD prices, credits per month, connected sites, free monthly allowances), billing policies and the credit cost of each tool.
- **`list_features`** — Autoblogging.ai features with a one-line summary, the cheapest plan that includes each one, its credit cost and its page URL. Optionally only the features available on a given pla… _(parameters: plan)_
- **`search_site`** — Search every page on autoblogging.ai (features, guides, comparisons, tutorials, knowledge base) by keywords. Returns titles, URLs, markdown URLs and descriptions; fetch a result w… _(parameters: query, limit)_
- **`ask_question`** — Answer a plain-language question about Autoblogging.ai (pricing, plans, features, settings, integrations, comparisons) from its verified facts and its own pages; the same answer a… _(parameters: question)_
- **`get_page`** — The clean markdown text of any published page on autoblogging.ai (no navigation or scripts). _(parameters: url)_

## Scan Autoblogging.ai yourself, or claim its badge

Re-run this exact Autoblogging.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `autoblogging.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://autoblogging.ai/mcp&directory=true"
```

For the itemized findings on Autoblogging.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://autoblogging.ai/mcp"}`. If you
run `autoblogging.ai`, [claim a measured verified-owner badge for Autoblogging.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=autoblogging.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dautoblogging.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://autoblogging.ai/mcp)
```

Keeping the Autoblogging.ai badge green as its tools change — six-hourly re-scans of `autoblogging.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `autoblogging.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
