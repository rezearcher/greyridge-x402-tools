---
title: "Is the Cloud World Model MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Cloud World Model MCP server (https://www.cloudworldmodel.ai/mcp), run 2026-10-24: advertises simulation.inject_failure, simulation.recover_resource, simulation.delete; 9 tools scanned, injection verdict 'clear', 9 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# Cloud World Model MCP server — security & directory-readiness scorecard

**Server:** `https://www.cloudworldmodel.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 9 · **Injection verdict:** `clear` · **Directory:** 9 Claude Directory blocker(s)

Simulate cloud infrastructure and estimate cost before deploying or changing infrastructure.

When an agent connects Cloud World Model, the model reads all 9 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`www.cloudworldmodel.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Cloud World Model

- **No tool-poisoning or prompt-injection patterns** were found across the 9 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 9 blocker(s).** This server advertises 9 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **2 of 9 advertised tool(s) name a state-changing action** (`simulation.delete`, `simulation.create`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 9 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Cloud World Model server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Cloud World Model server advertises

The server describes itself to connecting agents as: *Cloud World Model Streamable HTTP MCP server. build_revision=d4191a01b283 build_timestamp=2026-10-20T21:54:56.681Z simulation_create_schema_fingerprint=sha256:7d1d7b544d7e3c38874cbc59ffff866106004e0a3750edd0c0878349259aa8c4 anonymous_mcp_capability_version=pr…*

These are the 9 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`simulation.inject_failure`** — Fail one compute/Kubernetes node, database, or cache in a temporary anonymous demo simulation (marked critical, not removed). Targeted database quick failures are bounded and reve… _(parameters: simulationId, resourceName, resourceId)_
- **`simulation.recover_resource`** — Recover one reversible failed resource in a temporary anonymous demo simulation. No API key required for this temporary anonymous demo operation. Lower traffic to a serviceable le… _(parameters: simulationId, resourceName, resourceId)_
- **`simulation.delete`** — Permanently delete an owned temporary anonymous demo simulation and its metrics, events, failures, and capability. This is the explicit way to free a simulation slot; deletion is… _(parameters: simulationId)_
- **`scenario.list`** — List the built-in demo scenarios as compact catalog cards — stable IDs, title/name, description, difficulty, tags, category, duration, provider summary, resource/connection counts… _(parameters: provider, category, difficulty)_
- **`scenario.get`** — Hydrate one built-in scenario from the live Cloud World Model scenario library. Prerequisite: a scenario id returned by scenario.list. Returns the complete selected scenario graph… _(parameters: scenarioId)_
- **`simulation.create`** — Create a temporary anonymous demo cloud simulation from a list of resources and connections (max 2 active simulations per client, up to 10 resources; the returned simulationId is… _(parameters: name, appWeight, description, scenarioId, scenarioOverrides, resources)_
- **`simulation.step`** — Advance a temporary anonymous demo simulation by one time step and return updated metrics — CPU, latency, throughput, error rate, cost (max 20 persisted steps per demo). Concurren… _(parameters: simulationId, traffic, responseMode)_
- **`simulation.metrics`** — Read the latest metrics and resource states for a temporary anonymous demo simulation: latency, CPU, throughput, error rate, cost per hour, and per-resource health. Use it to insp… _(parameters: simulationId, responseMode)_
- **`simulation.inject_traffic`** — Change traffic on a demo simulation using targetRps, deltaPercent, or explicit random: true. targetRps takes precedence over deltaPercent; random cannot be combined with either. M… _(parameters: simulationId, targetRps, deltaPercent, random)_

## Scan Cloud World Model yourself, or claim its badge

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
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
