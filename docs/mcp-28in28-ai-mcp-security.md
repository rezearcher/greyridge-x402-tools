---
title: "Is the 28in28.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the 28in28.ai MCP server (https://28in28.ai/mcp), run 2026-11-09: advertises checkDomain, quoteFixVerify, verifyFixVerify; 3 tools scanned, injection verdict 'clear', 3 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# 28in28.ai MCP server — security & directory-readiness scorecard

**Server:** `https://28in28.ai/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 3 · **Injection verdict:** `clear` · **Directory:** 3 Claude Directory quality item(s) to polish (no hard rejects)

Check SPF/DKIM/DMARC of a domain, get a non-binding Fix & Verify quote, re-verify after the DNS fix.

When an agent connects 28in28.ai, the model reads all 3 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`28in28.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on 28in28.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 3 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 3 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 3 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 3 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the 28in28.ai server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the 28in28.ai server advertises

The server describes itself to connecting agents as: *Read-only check of a domain's public email-authentication DNS (MX, SPF, DKIM, DMARC, MTA-STS, TLS-RPT) with the exact records to change, a non-binding machine-readable quote for the Fix & Verify service (quoteFixVerify) and a re-check against the quoted crite…*

These are the 3 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`checkDomain`** — Reads the public DNS of one domain and reports SPF, DKIM, DMARC, MX, MTA-STS and TLS-RPT findings, risks, unknowns and the exact DNS changes to fix them. Read-only; nothing is sto… _(parameters: domain)_
- **`quoteFixVerify`** — Runs the email-authentication check of one domain and returns a machine-readable, NON-BINDING quote for Fix & Verify: price (EUR 99 net per domain), scope (exact DNS changes), acc… _(parameters: domain)_
- **`verifyFixVerify`** — Re-runs the check of the domain and compares it with the acceptance criteria and baseline of an earlier quoteFixVerify result: PASS when every criterion is resolved and no new cri… _(parameters: domain, criteria, baseline, token)_

## Maintenance & supply-chain — the risk 28in28.ai's static scan can't see

A prompt-injection scan reads 28in28.ai's advertised tool metadata at one moment. It cannot tell you the project behind `28in28.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `28in28.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan 28in28.ai yourself, or claim its badge {#claim}

Re-run this exact 28in28.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `28in28.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://28in28.ai/mcp&directory=true"
```

For the itemized findings on 28in28.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://28in28.ai/mcp"}`. If you
run `28in28.ai`, [claim a measured verified-owner badge for 28in28.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=28in28.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3D28in28.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://28in28.ai/mcp)
```

Keeping the 28in28.ai badge green as its tools change — six-hourly re-scans of `28in28.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `28in28.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
