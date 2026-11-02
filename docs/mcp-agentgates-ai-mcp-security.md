---
title: "Is the Agentgates Compute MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Agentgates Compute MCP server (https://mcp.agentgates.ai/compute), run 2026-11-02: advertises compute_plans, compute_quote, compute_docs; 3 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Agentgates Compute MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.agentgates.ai/compute`
**Scanned:** 2026-11-02 · **Tools advertised:** 3 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Confidential VMs (Intel TDX) by the hour, paid in USDC over x402: live plans, prices, how to buy.

When an agent connects Agentgates Compute, the model reads all 3 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.agentgates.ai`, scanned 2026-11-02; the verdict below is `clear`.

## What the scan found on Agentgates Compute

- **No tool-poisoning or prompt-injection patterns** were found across the 3 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **3 of 3 advertised tool(s) name a state-changing action** (`compute_plans`, `compute_quote`, `compute_docs`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 3 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Agentgates Compute server
on 2026-11-02; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Agentgates Compute server advertises

The server describes itself to connecting agents as: *Agentgates Compute: confidential virtual machines (Intel TDX, memory encrypted in use) rented by the hour over x402, paid in USDC. No account and no sign-up: the wallet that pays owns the machine. These tools are free and read only: compute_plans (live plans…*

These are the 3 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`compute_plans`** — Lists the confidential virtual machines (Intel TDX, memory encrypted in use) Agentgates rents to agents by the hour: each plan's vCPU, memory, disk and traffic, the hours one paym… _(parameters: plan)_
- **`compute_quote`** — Gets the exact price of one machine without paying: sends the create request with no payment and returns the API's HTTP 402 offer, one leg per network, each with the amount in USD… _(parameters: plan, hours, image, port, compose, machine_id)_
- **`compute_docs`** — Returns the Agentgates compute docs, read live (markdown written for an agent to follow in one pass): the plans with live prices, how to pay the 402 on each network, how to poll a…

## Maintenance & supply-chain — the risk Agentgates Compute's static scan can't see

A prompt-injection scan reads Agentgates Compute's advertised tool metadata at one moment. It cannot tell you the project behind `mcp.agentgates.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `mcp.agentgates.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Agentgates Compute yourself, or claim its badge {#claim}

Re-run this exact Agentgates Compute check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.agentgates.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.agentgates.ai/compute&directory=true"
```

For the itemized findings on Agentgates Compute — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.agentgates.ai/compute"}`. If you
run `mcp.agentgates.ai`, [claim a measured verified-owner badge for Agentgates Compute free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.agentgates.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.agentgates.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.agentgates.ai/compute)
```

Keeping the Agentgates Compute badge green as its tools change — six-hourly re-scans of `mcp.agentgates.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.agentgates.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-02; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
