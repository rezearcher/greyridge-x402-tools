---
title: "Is the Avioverse EASA library MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Avioverse EASA library MCP server (https://avioverse.aero/mcp), run 2026-11-23: advertises search, fetch, get_rule; 5 tools scanned, injection verdict 'clear', 5 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# Avioverse EASA library MCP server — security & directory-readiness scorecard

**Server:** `https://avioverse.aero/mcp`
**Scanned:** 2026-11-23 · **Tools advertised:** 5 · **Injection verdict:** `clear` · **Directory:** 5 Claude Directory quality item(s) to polish (no hard rejects)

EASA regulations with AMC and GM, and EASA definitions, read-only, each with its page to cite.

When an agent connects Avioverse EASA library, the model reads all 5 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`avioverse.aero`, scanned 2026-11-23; the verdict below is `clear`.

## What the scan found on Avioverse EASA library

- **No tool-poisoning or prompt-injection patterns** were found across the 5 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 5 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 5 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 5 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Avioverse EASA library server
on 2026-11-23; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Avioverse EASA library server advertises

The server describes itself to connecting agents as: *Avioverse publishes the EASA Easy Access Rules rule by rule, with each rule's AMC and GM, the official reference and the EAR revision date, plus EASA definitions and implementation guides. Use 'get_rule' when you know a rule reference (for example 145.A.30(e)…*

These are the 5 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search`** — Search EASA rules, EASA definitions, implementation guides, articles and the Metis manual by reference or by words. Returns matching pages with their URLs. A rule reference such a… _(parameters: query)_
- **`fetch`** — Return the full text of one library page as Markdown. 'id' is the 'id' (site path) or 'url' of a result from 'search'. _(parameters: id)_
- **`get_rule`** — Return an EASA rule by its reference (for example 145.A.30(e), CAMO.A.305, ORO.GEN.200, FCL.010) with its text, AMC and GM, the regulation, the EAR revision date and the page URL.… _(parameters: reference, regulation)_
- **`lookup_term`** — Return how EASA defines a term, quoted verbatim with the regulation and article it comes from, plus the entry from the general aviation glossary when there is one. _(parameters: term)_
- **`list_regulations`** — List the EASA regulations in the library with their official reference, the EAR revision date the text reproduces, and the 'regulation' value to pass to 'get_rule'.

## Maintenance & supply-chain — the risk Avioverse EASA library's static scan can't see

A prompt-injection scan reads Avioverse EASA library's advertised tool metadata at one moment. It cannot tell you the project behind `avioverse.aero` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `avioverse.aero` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Avioverse EASA library yourself, or claim its badge {#claim}

Re-run this exact Avioverse EASA library check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `avioverse.aero`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://avioverse.aero/mcp&directory=true"
```

For the itemized findings on Avioverse EASA library — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://avioverse.aero/mcp"}`. If you
run `avioverse.aero`, [claim a measured verified-owner badge for Avioverse EASA library free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=avioverse.aero)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Davioverse.aero&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://avioverse.aero/mcp)
```

Keeping the Avioverse EASA library badge green as its tools change — six-hourly re-scans of `avioverse.aero`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `avioverse.aero` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-23; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
