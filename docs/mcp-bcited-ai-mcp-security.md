---
title: "Is the mcp.bcited.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the mcp.bcited.ai MCP server (https://mcp.bcited.ai/public), run 2026-10-24: advertises scan_site, list_leaderboard_categories, get_leaderboard; 6 tools scanned, injection verdict 'clear', 6 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# mcp.bcited.ai MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.bcited.ai/public`
**Scanned:** 2026-10-24 · **Tools advertised:** 6 · **Injection verdict:** `clear` · **Directory:** 6 Claude Directory blocker(s)

AEO tools: scan any URL for AI-citation readiness, read the public leaderboard and citation panel.

When an agent connects mcp.bcited.ai, the model reads all 6 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.bcited.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on mcp.bcited.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 6 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 6 blocker(s).** This server advertises 6 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 6 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 6 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the mcp.bcited.ai server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the mcp.bcited.ai server advertises

The server describes itself to connecting agents as: *b/cited (bcited.ai) measures Answer Engine Optimization: whether AI answer engines — ChatGPT, Claude, Perplexity — cite a site, and what would make them. The public tools need no account. scan_site audits any public URL with a rule-based scanner (every check…*

These are the 6 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`scan_site`** — Run b/cited's Site Readiness scan on one public URL: a rule-based audit (not model-judged) of 30+ observable signals across nine categories — indexing, metadata, social cards, str… _(parameters: url, include_performance)_
- **`list_leaderboard_categories`** — List the 12 industry categories of b/cited's public AEO readiness leaderboard (slug, name, description). Use a slug with get_leaderboard.
- **`get_leaderboard`** — Return one category of b/cited's public AEO readiness leaderboard: every curated domain ranked by overall readiness score (0–100) with its letter grade and AEO score, as scanned w… _(parameters: category, limit)_
- **`get_domain_readiness`** — Look up one domain on b/cited's public AEO readiness leaderboard: its rank, grade, overall and AEO scores in every category it appears in, the AEO-category checks from its most re… _(parameters: domain, category, history_limit)_
- **`get_prompt_citations`** — For one leaderboard category, which sites ChatGPT, Claude and Perplexity cited when asked b/cited's fixed set of buyer prompts, for one ISO week (default: the latest recorded). Pe… _(parameters: category, week)_
- **`lookup_glossary`** — Define a term the way b/cited's glossary defines it — AEO, citation, brand rank, visibility score, authority score, topical cluster, coverage diff, llms.txt, ai.txt, and 30 more.… _(parameters: term)_

## Scan mcp.bcited.ai yourself, or claim its badge

Re-run this exact mcp.bcited.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.bcited.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.bcited.ai/public&directory=true"
```

For the itemized findings on mcp.bcited.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.bcited.ai/public"}`. If you
run `mcp.bcited.ai`, [claim a measured verified-owner badge for mcp.bcited.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.bcited.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.bcited.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.bcited.ai/public)
```

Keeping the mcp.bcited.ai badge green as its tools change — six-hourly re-scans of `mcp.bcited.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.bcited.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
