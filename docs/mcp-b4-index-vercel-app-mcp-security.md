---
title: "Is the B4 Index MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the B4 Index MCP server (https://b4-index.vercel.app/mcp), run 2026-10-24: advertises b4_browse, b4_score, b4_audit; 5 tools scanned, injection verdict 'clear', 5 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# B4 Index MCP server — security & directory-readiness scorecard

**Server:** `https://b4-index.vercel.app/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 5 · **Injection verdict:** `clear` · **Directory:** 5 Claude Directory blocker(s)

Independent build-vs-buy index: score software categories BUILD/BUY/BRIDGE/BEWARE.

When an agent connects B4 Index, the model reads all 5 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`b4-index.vercel.app`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on B4 Index

- **No tool-poisoning or prompt-injection patterns** were found across the 5 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 5 blocker(s).** This server advertises 5 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 5 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 5 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the B4 Index server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the B4 Index server advertises

The server describes itself to connecting agents as: *B4 scores software CATEGORIES, never vendors — never say a named vendor scored a number. Every result carries a 'guidance' block: follow its recommendedAction and doNotClaim, and carry 'verdict.confidence' through to the user verbatim (clear / lean / split).…*

These are the 5 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`b4_browse`** — For browsing, filtering, or finding the index's name for something. Example: {"query": "warehouse picking", "domain": "Supply Chain"}. Search and filter every independently scored… _(parameters: org, query, domain, quadrant, industry, cursor)_
- **`b4_score`** — For one exact category name or id. Example: {"category": "Expense Management", "org": "medium"}. Score a software category using the B4 Index. Provide a known category name to get… _(parameters: org, category, includeEvidence, scores)_
- **`b4_audit`** — For a list of vendor or product names (a stack), with an optional description per row. Example: {"tools": ["Salesforce", {"name": "Lydia Voice", "description": "voice-directed pic… _(parameters: org, tools)_
- **`b4_compare`** — For one exact category name or id when the question is the build path against the buy path. Example: {"category": "Order Management (OMS)"}. Returns the authored side-by-side comp… _(parameters: org, category)_
- **`b4_recommend`** — For a need or problem in words, not a vendor name. Example: {"description": "we need to route warehouse pickers by voice"}. Get B4 Index recommendations from a natural language de… _(parameters: org, capability, exclusions, description)_

## Scan B4 Index yourself, or claim its badge

Re-run this exact B4 Index check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `b4-index.vercel.app`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://b4-index.vercel.app/mcp&directory=true"
```

For the itemized findings on B4 Index — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://b4-index.vercel.app/mcp"}`. If you
run `b4-index.vercel.app`, [claim a measured verified-owner badge for B4 Index free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=b4-index.vercel.app)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Db4-index.vercel.app&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://b4-index.vercel.app/mcp)
```

Keeping the B4 Index badge green as its tools change — six-hourly re-scans of `b4-index.vercel.app`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `b4-index.vercel.app` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
