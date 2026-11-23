---
title: "Is the agenticcart.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the agenticcart.ai MCP server (https://agenticcart.ai/mcp), run 2026-11-23: advertises check_store_readiness, check_product, check_acp_feed; 5 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# agenticcart.ai MCP server — security & directory-readiness scorecard

**Server:** `https://agenticcart.ai/mcp`
**Scanned:** 2026-11-23 · **Tools advertised:** 5 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Check any Shopify, WooCommerce or other online store, product page or feed for AI readiness.

When an agent connects agenticcart.ai, the model reads all 5 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`agenticcart.ai`, scanned 2026-11-23; the verdict below is `clear`.

## What the scan found on agenticcart.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 5 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 5 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 5 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the agenticcart.ai server
on 2026-11-23; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the agenticcart.ai server advertises

The server describes itself to connecting agents as: *Audit online stores, product pages, product feeds and llms.txt files for AI and agent readiness. All tools take one publicly reachable URL and only read. Each check returns a score from 0 to 100 and names every issue it finds.*

These are the 5 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`check_store_readiness`** — Audit any public online store for AI and agent readiness. Takes the store homepage URL and returns a 0-100 score with concrete findings: whether AI crawlers are allowed in robots.… _(parameters: url)_
- **`check_product`** — Audit a single product page for how well AI shopping assistants can read and recommend it. Takes the product page URL and returns a 0-100 score with findings on structured data (P… _(parameters: url)_
- **`check_acp_feed`** — Grade a product feed against the Agentic Commerce Protocol (ACP) / OpenAI product feed specification, which governs whether a catalog can be sold inside ChatGPT. Takes the feed UR… _(parameters: url)_
- **`check_merchant_feed`** — Validate a product feed against the Google Merchant Center product specification. Takes the feed URL (XML or JSON) and returns a 0-100 score with findings on required attributes,… _(parameters: url)_
- **`check_llms_txt`** — Fetch a website's /llms.txt and check it against the llmstxt.org format: the H1 title, the summary block, the link sections, whether the listed links answer, and whether the serve… _(parameters: url)_

## Maintenance & supply-chain — the risk agenticcart.ai's static scan can't see

A prompt-injection scan reads agenticcart.ai's advertised tool metadata at one moment. It cannot tell you the project behind `agenticcart.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `agenticcart.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan agenticcart.ai yourself, or claim its badge {#claim}

Re-run this exact agenticcart.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `agenticcart.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://agenticcart.ai/mcp&directory=true"
```

For the itemized findings on agenticcart.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://agenticcart.ai/mcp"}`. If you
run `agenticcart.ai`, [claim a measured verified-owner badge for agenticcart.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=agenticcart.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dagenticcart.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://agenticcart.ai/mcp)
```

Keeping the agenticcart.ai badge green as its tools change — six-hourly re-scans of `agenticcart.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `agenticcart.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-23; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
