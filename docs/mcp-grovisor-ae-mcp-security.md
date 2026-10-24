---
title: Is the groTAX by Grovisor MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the groTAX by Grovisor MCP server (https://mcp.grovisor.ae/), run 2026-10-24: 8 tools scanned, injection verdict 'clear', 8 Claude Directory blocker(s). Re-run it yourself in one keyless call.
---
# groTAX by Grovisor MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.grovisor.ae/`
**Scanned:** 2026-10-24 · **Tools advertised:** 8 · **Injection verdict:** `clear` · **Directory:** 8 Claude Directory blocker(s)

UAE Corporate Tax: CT computation, SBR, penalties, free zone test, TP and health-check.

Before an agent — or a user — connects it, every tool definition it advertises is read
by the model, so a poisoned description or a hidden instruction can steer the agent before any
tool runs. This scorecard is an independent, static read of that advertised metadata, run against
the groTAX by Grovisor server on the date above.

## What the scan found

- **No tool-poisoning or prompt-injection patterns** were found across the 8 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 8 blocker(s).** This server advertises 8 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.

The scan is **static analysis of the advertised `tools/list` metadata only** — it never invokes a
tool and never sends data anywhere. It is a point-in-time read: an MCP server's tool definitions can
change at any time (that is the "drift" risk this scorecard exists to make visible), so a clean result
today is not a guarantee for tomorrow.

## Re-run this scan yourself

No account, no key:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.grovisor.ae/&directory=true"
```

That free response gives you the verdict and the directory blocker **count**. For the **itemized
findings** — which tools, which OWASP LLM01/LLM08 pattern, and for the directory check *which* criteria
fail and how to fix each — the zero-egress paid report is one call:

```bash
curl -s -X POST https://x402-data-api.sigrunner.workers.dev/scan/mcp -H 'content-type: application/json' \
  -d '{"directory":true,"url":"https://mcp.grovisor.ae/"}'
```

`$0.05 USDC` via [x402](https://x402.org) on Base, no account. To keep a server honest as it changes,
continuous drift monitoring with alerts is `$9.99/mo` — see [pricing](https://x402-data-api.sigrunner.workers.dev/pricing).

## Run groTAX by Grovisor? Claim its verified badge — free

If this is your server, you can put a measured security badge on your own README. Prove you
control `mcp.grovisor.ae` once — a single DNS TXT record, checked automatically, no email thread and no
human review — and the claim is yours:

```bash
# start the one-time ownership check (DNS TXT, fully automated)
open https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.grovisor.ae
```

Once the domain is verified, you get an embeddable **verified-owner** badge for your README and a
public report page — both free. The badge renders live from the latest scan, so it stays honest:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.grovisor.ae&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.grovisor.ae/)
```

Keeping the badge **green as your tools change** — re-scans every six hours, drift alerts the moment
a tool definition shifts, the dated posture-history timeline, and the full itemized report — is the
`$9.99/mo` monitoring subscription. The claim and the badge cost nothing; monitoring is what you pay
for. A green badge means this scan found no injection patterns on the dates shown — it is a measured
signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools).
Measured on 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
