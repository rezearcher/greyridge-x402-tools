---
title: "Is the Ahel MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Ahel MCP server (https://mcp.ahel.ai), run 2026-11-23: advertises capability_search, capability_inspect, run_capability; 13 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Ahel MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.ahel.ai`
**Scanned:** 2026-11-23 · **Tools advertised:** 13 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Data and tools for your AI agent: company, people, SEO, social and EU register data. Pay per call.

When an agent connects Ahel, the model reads all 13 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.ahel.ai`, scanned 2026-11-23; the verdict below is `clear`.

## What the scan found on Ahel

- **No tool-poisoning or prompt-injection patterns** were found across the 13 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **4 of 11 advertised tool(s) name a state-changing action** (`run_capability`, `run_batch`, `run_recipe`, `capability_run_status`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 13 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Ahel server
on 2026-11-23; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Ahel server advertises

The server describes itself to connecting agents as: *Ahel finds business data for the person: companies, the people who work there, work emails, local businesses, web and social data. Each job is an action; a recipe is several actions done as one job. Runs are paid from the workspace's prepaid balance; finding…*

These are the 11 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`capability_search`** — Find the action for a job, by the person's own words ("work email of a person", "dentists in a city") or by an action id. Use it first for any one-off data job. When a ready-made… _(parameters: query, platform, kind, status, limit)_
- **`capability_inspect`** — One action by its id: its inputs, what it gives and its price rule. With arguments (the person's real inputs) it also prices that exact run: the most it can cost, what it usually… _(parameters: id, arguments, max_items, timeout_seconds, endpoint_ids, exclude_endpoint_ids)_
- **`run_capability`** — Run one action, after the person agreed to the price capability_inspect gave. Give id, arguments and max_cost_usd from that price: a run that would cost more is refused with nothi… _(parameters: id, capability_id, arguments, max_items, timeout_seconds, endpoint_ids)_
- **`run_batch`** — Run one action over many inputs in one call (1 to 100 items, each the action's inputs), such as a company lookup for 20 domains. Priced the same per item as a single run, with no… _(parameters: id, items, max_items, max_cost_usd, idempotency_key, tag)_
- **`run_recipe`** — Run a recipe: a ready-made job of several actions, such as local businesses of one kind in one place with their emails (or only those with weak reviews), new companies with contac… _(parameters: id, inputs, max_cost_usd, run_id, idempotency_key)_
- **`capability_run_status`** — Read a run that was still going: give execution_id from run_capability and results true for its rows. Answers the result in plain words, the charge and the rows; an answer with ro… _(parameters: execution_id, results, include_raw, offset, full_text, max_items)_
- **`catalog_request`** — Ask Ahel to add an action the catalog does not have, when capability_search finds nothing that fits. Give the job in plain words, one example input, and the most the person would… _(parameters: what, example_input, max_price_usd)_
- **`feedback`** — Tell Ahel what went wrong or right: rate one run or request good or bad by its id, or with no id report anything confusing (results, charges, instructions, errors, a workaround yo… _(parameters: id, rating, category, note)_
- **`balance`** — The workspace's prepaid balance, what running jobs have set aside, spending today and this month (for the Owner), any daily cap on this connection's key, and the top-up link. Use…
- **`review`** — Rate how useful one finished run was, after using its result: useful, partly, not_useful or not_sure, with an optional reason (missing rows, wrong data, stale). Reviewing again re… _(parameters: run_id, usefulness, reason)_
- **`get_started`** — Start here when the person is new, asks what Ahel can do, or has no clear job yet. Answers what Ahel does in plain words, the ready-made recipes to offer first, how paying works,…

## Maintenance & supply-chain — the risk Ahel's static scan can't see

A prompt-injection scan reads Ahel's advertised tool metadata at one moment. It cannot tell you the project behind `mcp.ahel.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance grade `A`** — last commit pushed 19 day(s) ago, 0 open issue(s).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `mcp.ahel.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Ahel yourself, or claim its badge {#claim}

Re-run this exact Ahel check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.ahel.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.ahel.ai&directory=true"
```

For the itemized findings on Ahel — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.ahel.ai"}`. If you
run `mcp.ahel.ai`, [claim a measured verified-owner badge for Ahel free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.ahel.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.ahel.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.ahel.ai)
```

Keeping the Ahel badge green as its tools change — six-hourly re-scans of `mcp.ahel.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.ahel.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-23; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
