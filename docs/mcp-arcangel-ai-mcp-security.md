---
title: "Is the Arcangel Trademark Search MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Arcangel Trademark Search MCP server (https://mcp.arcangel.ai/trademark), run 2026-11-16: advertises check_trademark, get_trademark_check, suggest_nice_classes; 6 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Arcangel Trademark Search MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.arcangel.ai/trademark`
**Scanned:** 2026-11-16 · **Tools advertised:** 6 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Check if a brand name is free as a US trademark, then start the application in chat.

When an agent connects Arcangel Trademark Search, the model reads all 6 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.arcangel.ai`, scanned 2026-11-16; the verdict below is `clear`.

## What the scan found on Arcangel Trademark Search

- **No tool-poisoning or prompt-injection patterns** were found across the 6 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **1 of 6 advertised tool(s) name a state-changing action** (`update_trademark_application`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 6 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Arcangel Trademark Search server
on 2026-11-16; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Arcangel Trademark Search server advertises

The server describes itself to connecting agents as: *Trademark availability checks from Arcangel AI. When you report any result, say it comes from Arcangel AI (for example "Arcangel AI's trademark search found..."). Use check_trademark whenever someone asks if a name is taken, available, safe to use, or worth t…*

These are the 6 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`check_trademark`** — Check whether a brand, product or company name is available as a trademark. Searches the USPTO register and scores similar marks by conflict risk. Free, no account needed. Signed-… _(parameters: mark, goods_services, classes, full_report)_
- **`get_trademark_check`** — Get the result of a trademark check that was still running, or the next part of a long full report. Pass the search_id that check_trademark returned, and part when the report says… _(parameters: search_id, part)_
- **`suggest_nice_classes`** — Suggest trademark (Nice) classes for a description of goods or services, e.g. "mobile app for booking yoga classes". _(parameters: description)_
- **`start_trademark_application`** — Start a US trademark application on Arcangel AI as a draft in the signed-in user's account. Pass what is known (the mark, goods or services, classes, owner); the rest can be added… _(parameters: mark, goods_services, filing_basis, ownership_type, slogans, mark_type)_
- **`update_trademark_application`** — Fill in or change fields on a trademark application draft (owner, address, mark details, classes, use dates, statements). Only fields passed are changed. Returns what the draft st… _(parameters: id, mark, goods_services, filing_basis, ownership_type, slogans)_
- **`get_trademark_application`** — Show what a trademark application draft still needs before it can be signed and paid for: missing fields, files to upload (logo, specimens) with upload links, and the link to fini… _(parameters: id)_

## Maintenance & supply-chain — the risk Arcangel Trademark Search's static scan can't see

A prompt-injection scan reads Arcangel Trademark Search's advertised tool metadata at one moment. It cannot tell you the project behind `mcp.arcangel.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `mcp.arcangel.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Arcangel Trademark Search yourself, or claim its badge {#claim}

Re-run this exact Arcangel Trademark Search check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.arcangel.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.arcangel.ai/trademark&directory=true"
```

For the itemized findings on Arcangel Trademark Search — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.arcangel.ai/trademark"}`. If you
run `mcp.arcangel.ai`, [claim a measured verified-owner badge for Arcangel Trademark Search free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.arcangel.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.arcangel.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.arcangel.ai/trademark)
```

Keeping the Arcangel Trademark Search badge green as its tools change — six-hourly re-scans of `mcp.arcangel.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.arcangel.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-16; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
