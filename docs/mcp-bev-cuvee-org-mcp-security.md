---
title: "Is the agent-bev Library MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the agent-bev Library MCP server (https://mcp.bev-cuvee.org/mcp), run 2026-11-23: advertises get_rulebook, list_countries; 2 tools scanned, injection verdict 'clear', 4 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# agent-bev Library MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.bev-cuvee.org/mcp`
**Scanned:** 2026-11-23 · **Tools advertised:** 2 · **Injection verdict:** `clear` · **Directory:** 4 Claude Directory quality item(s) to polish (no hard rejects)

The trade rulebook for beverage alcohol, country by country, each section with its official sources.

When an agent connects agent-bev Library, the model reads all 2 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.bev-cuvee.org`, scanned 2026-11-23; the verdict below is `clear`.

## What the scan found on agent-bev Library

- **No tool-poisoning or prompt-injection patterns** were found across the 2 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 4 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 2 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 2 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the agent-bev Library server
on 2026-11-23; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the agent-bev Library server advertises

The server describes itself to connecting agents as: *agent-bev Library: The trade rulebook for beverage alcohol, country by country, each section with its official sources. Call list_countries, then get_rulebook with a country's code. Read-only. Every answer carries the notice line and audience: trade.*

These are the 2 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_rulebook`** — The trade rulebook for one country by its two-letter code (uk for the United Kingdom): market status, who can trade, customs and duty, labelling, age and sale limits, protected na… _(parameters: code)_
- **`list_countries`** — Every country in the Library with its code, its page and its as-of date.

## Maintenance & supply-chain — the risk agent-bev Library's static scan can't see

A prompt-injection scan reads agent-bev Library's advertised tool metadata at one moment. It cannot tell you the project behind `mcp.bev-cuvee.org` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `mcp.bev-cuvee.org` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan agent-bev Library yourself, or claim its badge {#claim}

Re-run this exact agent-bev Library check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.bev-cuvee.org`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.bev-cuvee.org/mcp&directory=true"
```

For the itemized findings on agent-bev Library — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.bev-cuvee.org/mcp"}`. If you
run `mcp.bev-cuvee.org`, [claim a measured verified-owner badge for agent-bev Library free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.bev-cuvee.org)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.bev-cuvee.org&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.bev-cuvee.org/mcp)
```

Keeping the agent-bev Library badge green as its tools change — six-hourly re-scans of `mcp.bev-cuvee.org`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.bev-cuvee.org` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-23; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
