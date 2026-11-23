---
title: "Is the Cloud World Model MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Cloud World Model MCP server (https://www.cloudworldmodel.ai/mcp), run 2026-11-23: advertises simulation.from_input, simulation.inject_failure, simulation.recover_resource; 10 tools scanned, injection verdict 'clear', 10 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# Cloud World Model MCP server — security & directory-readiness scorecard

**Server:** `https://www.cloudworldmodel.ai/mcp`
**Scanned:** 2026-11-23 · **Tools advertised:** 10 · **Injection verdict:** `clear` · **Directory:** 10 Claude Directory quality item(s) to polish (no hard rejects)



When an agent connects Cloud World Model, the model reads all 10 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`www.cloudworldmodel.ai`, scanned 2026-11-23; the verdict below is `clear`.

## What the scan found on Cloud World Model

- **No tool-poisoning or prompt-injection patterns** were found across the 10 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 10 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **3 of 10 advertised tool(s) name a state-changing action** (`simulation.from_input`, `simulation.delete`, `simulation.create`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 10 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Cloud World Model server
on 2026-11-23; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Cloud World Model server advertises

The server describes itself to connecting agents as: *Cloud World Model Streamable HTTP MCP server. build_revision=ea79017d7437 build_timestamp=2026-11-23T05:11:06.716Z simulation_create_schema_fingerprint=sha256:19ca68486513cf54cbb238cfd851e540e69dbd14d6ddf936f97d8027580940d6 anonymous_mcp_capability_version=pr…*

These are the 10 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`simulation.from_input`** — Discovery only; write key. DaemonSet: placement.workers/podSlotsPerWorker. id → simulation.step. cwm://guides/public/simulation.from_input/core _(parameters: gcpMigRecovery, scaleToZero, format, content, filename, overlay)_
- **`simulation.inject_failure`** — Use simulationId from simulation.create or current demo. Use resourceId or resourceName to target a resource. Returns updated state; next tool is simulation.step, then simulation.… _(parameters: simulationId, resourceName, resourceId, nodePoolId, nodePoolName, type)_
- **`simulation.recover_resource`** — Use simulationId from simulation.create or current demo. Use resourceId or resourceName for reversible resource recovery. Returns recovery progress; next tool is simulation.step,… _(parameters: simulationId, resourceName, resourceId)_
- **`simulation.delete`** — The likely next tool is simulation.create to use the freed slot. Prerequisite: a simulationId from simulation.create, or an active simulation in the preserved MCP session. Keyless… _(parameters: simulationId)_
- **`scenario.list`** — No prerequisites. Cards return scenarioId (alias of id) for scenario.get, then simulation.create. Keep filters and detailed unchanged; pass nextCursor as cursor until null. Defaul… _(parameters: limit, cursor, detailed, provider, category, difficulty)_
- **`scenario.get`** — Requires scenarioId returned by scenario.list. Returns the graph and presets. Next tool is simulation.create with scenarioId or the hydrated graph. Keyless demo. cwm://guides/publ… _(parameters: scenarioId)_
- **`simulation.create`** — Use scenarioId from scenario.list or resources/connections, not both. Returns id for simulation.step. Check for a committed create before retrying a timeout. Keyless demo. cwm://g… _(parameters: costAssumptions, name, appWeight, description, scenarioId, scenarioOverrides)_
- **`simulation.step`** — Use simulationId from simulation.create or current demo. Returns completed steps and currentStep; next tool is simulation.metrics. Retry with the same operationId and inputs. Keyl… _(parameters: operationId, expectedCheckpoint, simulationId, steps, traffic, responseMode)_
- **`simulation.metrics`** — Use simulationId from simulation.create or current demo. Reads compact/latest or full history without stepping. Keyless demo. cwm://guides/public/simulation.metrics/core _(parameters: simulationId, responseMode)_
- **`simulation.inject_traffic`** — Use simulationId from simulation.create or current demo. Choose targetRps, deltaPercent, ramp, or random:true. Returns applied traffic; next tool is simulation.step, then simulati… _(parameters: simulationId, targetRps, deltaPercent, ramp, random)_

## Maintenance & supply-chain — the risk Cloud World Model's static scan can't see

A prompt-injection scan reads Cloud World Model's advertised tool metadata at one moment. It cannot tell you the project behind `www.cloudworldmodel.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `www.cloudworldmodel.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Cloud World Model yourself, or claim its badge {#claim}

Re-run this exact Cloud World Model check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `www.cloudworldmodel.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://www.cloudworldmodel.ai/mcp&directory=true"
```

For the itemized findings on Cloud World Model — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://www.cloudworldmodel.ai/mcp"}`. If you
run `www.cloudworldmodel.ai`, [claim a measured verified-owner badge for Cloud World Model free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=www.cloudworldmodel.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dwww.cloudworldmodel.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://www.cloudworldmodel.ai/mcp)
```

Keeping the Cloud World Model badge green as its tools change — six-hourly re-scans of `www.cloudworldmodel.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `www.cloudworldmodel.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-23; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
