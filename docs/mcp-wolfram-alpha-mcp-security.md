---
title: "Is the Wolfram Alpha MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Wolfram Alpha MCP server (https://agenttools.wolfram.com/mcp), run 2026-10-27: advertises WolframContext, WolframLanguageEvaluator, WolframAlpha; 3 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Wolfram Alpha MCP server — security & directory-readiness scorecard

**Server:** `https://agenttools.wolfram.com/mcp`
**Scanned:** 2026-10-27 · **Tools advertised:** 3 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Wolfram's MCP server exposes computational-knowledge query tools to AI agents.

When an agent connects Wolfram Alpha, the model reads all 3 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`agenttools.wolfram.com`, scanned 2026-10-27; the verdict below is `clear`.

## What the scan found on Wolfram Alpha

- **No tool-poisoning or prompt-injection patterns** were found across the 3 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 3 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 3 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Wolfram Alpha server
on 2026-10-27; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Wolfram Alpha server advertises

These are the 3 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`WolframContext`** — Uses semantic search to retrieve any relevant information from Wolfram. Always use this tool at the start of new conversations or if the topic changes to ensure you have up-to-dat… _(parameters: context)_
- **`WolframLanguageEvaluator`** — Evaluates Wolfram Language code for the user in a Wolfram Language kernel. If a formatted result is provided as a markdown link, use that in your response instead of typing out th… _(parameters: code, timeConstraint)_
- **`WolframAlpha`** — Use natural language queries with Wolfram|Alpha to get up-to-date computational results about entities in chemistry, physics, geography, history, art, astronomy, and more. _(parameters: query)_

## Scan Wolfram Alpha yourself, or claim its badge {#claim}

Re-run this exact Wolfram Alpha check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `agenttools.wolfram.com`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://agenttools.wolfram.com/mcp&directory=true"
```

For the itemized findings on Wolfram Alpha — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://agenttools.wolfram.com/mcp"}`. If you
run `agenttools.wolfram.com`, [claim a measured verified-owner badge for Wolfram Alpha free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=agenttools.wolfram.com)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dagenttools.wolfram.com&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://agenttools.wolfram.com/mcp)
```

Keeping the Wolfram Alpha badge green as its tools change — six-hourly re-scans of `agenttools.wolfram.com`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `agenttools.wolfram.com` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-27; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
