---
title: "Is the CertifiKit COI tools MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the CertifiKit COI tools MCP server (https://certifikit.ai/mcp), run 2026-11-02: advertises build_insurance_requirements, check_certificate, list_requirement_presets; 4 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# CertifiKit COI tools MCP server — security & directory-readiness scorecard

**Server:** `https://certifikit.ai/mcp`
**Scanned:** 2026-11-02 · **Tools advertised:** 4 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Certificate of insurance tools: build subcontractor insurance requirements, check an ACORD 25.

When an agent connects CertifiKit COI tools, the model reads all 4 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`certifikit.ai`, scanned 2026-11-02; the verdict below is `clear`.

## What the scan found on CertifiKit COI tools

- **No tool-poisoning or prompt-injection patterns** were found across the 4 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **1 of 4 advertised tool(s) name a state-changing action** (`list_requirement_presets`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 4 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the CertifiKit COI tools server
on 2026-11-02; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the CertifiKit COI tools server advertises

The server describes itself to connecting agents as: *CertifiKit certificate of insurance (COI) tools for contractors, property managers and HOAs. build_insurance_requirements recommends the limits and endorsements to require of a subcontractor or vendor and writes the contract exhibit. check_certificate checks…*

These are the 4 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`build_insurance_requirements`** — Recommends the insurance a general contractor should require of a subcontractor, or a property manager or HOA of a vendor: general liability, auto, umbrella and workers' comp limi… _(parameters: context, trade, contractSize, hasEmployees, usesVehicles, cancellationNoticeDays)_
- **`check_certificate`** — Checks a certificate of insurance (ACORD 25) against insurance requirements with CertifiKit's deterministic rules engine: coverage present, limits at or above the minimums, polici… _(parameters: preset, requirements, certificate, asOf)_
- **`list_requirement_presets`** — The ready-made insurance requirement sets check_certificate accepts as preset: a standard construction subcontractor and a property / HOA vendor, with every limit and endorsement…
- **`find_coi_guides`** — Searches CertifiKit's plain-English guides on certificates of insurance: reading an ACORD 25, additional insured endorsements (CG 20 10), waiver of subrogation, subcontractor and… _(parameters: query, limit)_

## Maintenance & supply-chain — the risk CertifiKit COI tools's static scan can't see

A prompt-injection scan reads CertifiKit COI tools's advertised tool metadata at one moment. It cannot tell you the project behind `certifikit.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `certifikit.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan CertifiKit COI tools yourself, or claim its badge {#claim}

Re-run this exact CertifiKit COI tools check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `certifikit.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://certifikit.ai/mcp&directory=true"
```

For the itemized findings on CertifiKit COI tools — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://certifikit.ai/mcp"}`. If you
run `certifikit.ai`, [claim a measured verified-owner badge for CertifiKit COI tools free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=certifikit.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dcertifikit.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://certifikit.ai/mcp)
```

Keeping the CertifiKit COI tools badge green as its tools change — six-hourly re-scans of `certifikit.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `certifikit.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-02; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
