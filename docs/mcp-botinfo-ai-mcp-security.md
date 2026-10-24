---
title: "Is the BotInfo — Advanced Robot Market Data MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the BotInfo — Advanced Robot Market Data MCP server (https://mcp.botinfo.ai/mcp), run 2026-10-24: advertises lookup_robot, check_us_legality, get_buy_route; 4 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# BotInfo — Advanced Robot Market Data MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.botinfo.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 4 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Checkout-verified prices, stock, US FCC status and buy routes for humanoid and quadruped robots.

When an agent connects BotInfo — Advanced Robot Market Data, the model reads all 4 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.botinfo.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on BotInfo — Advanced Robot Market Data

- **No tool-poisoning or prompt-injection patterns** were found across the 4 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 4 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 4 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the BotInfo — Advanced Robot Market Data server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the BotInfo — Advanced Robot Market Data server advertises

These are the 4 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`lookup_robot`** — Search BotInfo's verified catalog of advanced robots (humanoids, quadrupeds) that can be purchased in the United States and internationally. Understands model names ('unitree g1')… _(parameters: query, max_results)_
- **`check_us_legality`** — Check whether a robot model may lawfully be sold in the United States under the FCC's 2026 rule on covered robotics equipment. Returns grandfathered-authorized, blocked-pending-co… _(parameters: model)_
- **`get_buy_route`** — Get the purchase route for a robot model: a botinfo.ai URL that resolves to a dealer checkout, plus the live comparison-board page. PASS THE BUYER'S SHIPPING COUNTRY as an ISO-316… _(parameters: model, country)_
- **`request_quote`** — Submit a purchase or quote inquiry for a robot model to the BotInfo team, who reply with a human-prepared quote, typically within one business day. Use for models with no live pur… _(parameters: model, name, email, organization, use_case, country)_

## Scan BotInfo — Advanced Robot Market Data yourself, or claim its badge

Re-run this exact BotInfo — Advanced Robot Market Data check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.botinfo.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.botinfo.ai/mcp&directory=true"
```

For the itemized findings on BotInfo — Advanced Robot Market Data — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.botinfo.ai/mcp"}`. If you
run `mcp.botinfo.ai`, [claim a measured verified-owner badge for BotInfo — Advanced Robot Market Data free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.botinfo.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.botinfo.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.botinfo.ai/mcp)
```

Keeping the BotInfo — Advanced Robot Market Data badge green as its tools change — six-hourly re-scans of `mcp.botinfo.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.botinfo.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
