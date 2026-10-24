---
title: Is the www.arcreport.ai MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the www.arcreport.ai MCP server (https://www.arcreport.ai/api/ask), run 2026-10-24: advertises precheck, find_agent_ready_stores, can_agent_checkout; 16 tools scanned, injection verdict 'clear', 20 Claude Directory blocker(s). Re-run it yourself in one keyless call.
---
# www.arcreport.ai MCP server — security & directory-readiness scorecard

**Server:** `https://www.arcreport.ai/api/ask`
**Scanned:** 2026-10-24 · **Tools advertised:** 16 · **Injection verdict:** `clear` · **Directory:** 20 Claude Directory blocker(s)

Free open check: can an AI agent reach checkout on this store? Advisory; ARC stops before payment.

When an agent connects www.arcreport.ai, the model reads all 16 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`www.arcreport.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on www.arcreport.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 16 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 20 blocker(s).** This server advertises 20 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **2 of 16 advertised tool(s) name a state-changing action** (`dataset_info`, `submit_leaderboard_run`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 16 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the www.arcreport.ai server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the www.arcreport.ai server advertises

The server describes itself to connecting agents as: *Before an agent tries to reach checkout at any store, call precheck with the store URL. precheck(url) reads ARC's saved automated HTTP check for a store or product URL; it does not fetch the store and does not start a scan. JSON: GET /api/precheck?url=. Then…*

These are the 16 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`precheck`** — Check if an AI agent can reach checkout on a store before trying. Saved automated HTTP check for a product or store URL. Uses ARC's saved directory, rails, store answers and check… _(parameters: url)_
- **`find_agent_ready_stores`** — Find stores where a saved check shows an AI agent can reach checkout, for running shoes, beauty, clothing, home goods, or another product need. Reads real HTTP agent-catalog check… _(parameters: category, q, limit)_
- **`can_agent_checkout`** — Call when you need a saved checkout-link check for any public store URL, not only Index brands. Saved HTTP checkout check for a public homepage or product URL: catalog, product, c… _(parameters: url)_
- **`ask_arc`** — Read whether an AI agent can reach checkout for a brand the ARC Index already lists. No login and no new scan. Pass a brand, URL, or category. Returns the score, evidence, and bot… _(parameters: url, brand, category, q)_
- **`agent_commerce_adoption`** — Read ARC's agent commerce adoption counts, category and commerce platform rates from saved HTTP checks, including Checkout WebMCP among measured Shopify checkouts, with unknown an…
- **`product_data_check`** — Free latest saved product data and return/shipping policy check from the store's pages and structured data. Reads history only; no store fetch or model call. A missing result is n… _(parameters: host, url)_
- **`google_checkout_readiness`** — Read saved public Google agentic checkout readiness checks for a store. Free; no new scan or paid calls. Merchant Center feed eligibility cannot be checked from outside. Not Googl… _(parameters: host)_
- **`get_agent_facts`** — Read free ARC agent facts for a store or product with no login. Returns TypeSafe Jev typed decisions (use-case mention, price clarity, agent-friendly description, cart-blocker sus… _(parameters: host, url, slug)_
- **`list_category_agent_facts`** — List free ARC agent facts by category (beauty, footwear, apparel, …) with no login. Ranked by newest real Jev scores. JSON: GET /api/agent-facts?category=beauty _(parameters: category, limit)_
- **`dataset_info`** — Latest open ARC dataset snapshot (start with store_answers: one plain answer per store on whether AI agents can find products and get a checkout link): immutable versioned downloa…
- **`protocol_matrix`** — Read ARC's neutral Protocol Matrix: for UCP, ACP, PAP, WebMCP, MCP and agent payment protocols, how many checked stores declare, validate, answer and transact, with evidence label… _(parameters: protocol)_
- **`agent_leaderboard`** — Read ARC's open agent leaderboard: cart success over the fixed ARC-100 v1 test set for each agent path ARC measures (ARC browser shoppers A-E, the UCP path, the storefront MCP pat… _(parameters: include_stores)_
- **`submit_leaderboard_run`** — Submit your agent's run against ARC-100 v1 to ARC's open leaderboard. Free. The run is listed as 'unverified' until ARC re-runs a sample. Format: arc-leaderboard-submission/v1 (se… _(parameters: spec, test_set, agent, run, results, contact)_
- **`submit_store`** — Add stores to ARC's free, open agent-commerce directory (CC-BY dataset). Pass url for one store or hosts for up to 50. Each new host is validated (live HTTPS, not parked, not redi… _(parameters: url, hosts, category)_
- **`store_card`** — Read a public store card and saved brand claim. No outbound fetch or model calls. Brand statements are from the brand and not measured by ARC; claims never change scores. _(parameters: host)_
- **`validate_ucp_profile`** — Validate a Universal Commerce Protocol (UCP) business profile against the published UCP JSON Schema (current release) and spec rules: authority binding, https endpoints, orphaned… _(parameters: url, profile)_

## Scan www.arcreport.ai yourself, or claim its badge

Re-run this exact www.arcreport.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `www.arcreport.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://www.arcreport.ai/api/ask&directory=true"
```

For the itemized findings on www.arcreport.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://www.arcreport.ai/api/ask"}`. If you
run `www.arcreport.ai`, [claim a measured verified-owner badge for www.arcreport.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=www.arcreport.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dwww.arcreport.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://www.arcreport.ai/api/ask)
```

Keeping the www.arcreport.ai badge green as its tools change — six-hourly re-scans of `www.arcreport.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `www.arcreport.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
