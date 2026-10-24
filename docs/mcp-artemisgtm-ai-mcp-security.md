---
title: "Is the artemisgtm.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the artemisgtm.ai MCP server (https://artemisgtm.ai/mcp), run 2026-10-24: advertises describe_firm, list_systems, recommend_engagement; 5 tools scanned, injection verdict 'clear', 10 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# artemisgtm.ai MCP server — security & directory-readiness scorecard

**Server:** `https://artemisgtm.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 5 · **Injection verdict:** `clear` · **Directory:** 10 Claude Directory blocker(s)

GTM engineering consulting firm for seed to Series C startups. We build and run GTM systems.

When an agent connects artemisgtm.ai, the model reads all 5 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`artemisgtm.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on artemisgtm.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 5 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 10 blocker(s).** This server advertises 10 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 5 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 5 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the artemisgtm.ai server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the artemisgtm.ai server advertises

The server describes itself to connecting agents as: *Artemis GTM is an AI GTM engineering firm for seed to Series C B2B startups. It builds GTM systems inside the client's own CRM and tools with its proprietary agent architecture; clients keep the systems, the architecture stays with the firm. These tools are r…*

These are the 5 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`describe_firm`** — What Artemis GTM is: an AI GTM engineering firm for seed to Series C B2B startups, who founded it, what it builds, how it builds (its proprietary agent architecture, never sold or…
- **`list_systems`** — The GTM systems Artemis GTM builds inside a client's own CRM and tools, each with the problem it fixes, what gets built and the related free guides. No prices: every engagement is…
- **`recommend_engagement`** — Given a B2B go-to-market problem in plain language (for example "leads sit for two days before anyone calls them", "most of our website traffic is anonymous", "our ICP is too broa… _(parameters: problem)_
- **`book_evaluation`** — The evaluation booking link for Artemis GTM and what happens on the call: Tom Regan walks the motion, names the biggest leak visible from the outside and says whether an engagemen… _(parameters: context)_
- **`get_resources`** — The free guides on artemisgtm.ai, by topic (speed to lead, lead scoring and handoff, visitor identification, ICP, outbound, data and reporting), for a person who is not ready for… _(parameters: topic)_

## Scan artemisgtm.ai yourself, or claim its badge

Re-run this exact artemisgtm.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `artemisgtm.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://artemisgtm.ai/mcp&directory=true"
```

For the itemized findings on artemisgtm.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://artemisgtm.ai/mcp"}`. If you
run `artemisgtm.ai`, [claim a measured verified-owner badge for artemisgtm.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=artemisgtm.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dartemisgtm.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://artemisgtm.ai/mcp)
```

Keeping the artemisgtm.ai badge green as its tools change — six-hourly re-scans of `artemisgtm.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `artemisgtm.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
