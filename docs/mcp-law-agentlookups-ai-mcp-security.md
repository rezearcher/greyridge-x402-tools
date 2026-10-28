---
title: "Is the GroundRules - US Law Text MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the GroundRules - US Law Text MCP server (https://law.agentlookups.ai/mcp), run 2026-10-26: advertises law_for_location, law_search, law_get_section; 4 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# GroundRules - US Law Text MCP server — security & directory-readiness scorecard

**Server:** `https://law.agentlookups.ai/mcp`
**Scanned:** 2026-10-26 · **Tools advertised:** 4 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

The original text of US federal and state law, with official sources; never a summary or advice.

When an agent connects GroundRules - US Law Text, the model reads all 4 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`law.agentlookups.ai`, scanned 2026-10-26; the verdict below is `clear`.

## What the scan found on GroundRules - US Law Text

- **No tool-poisoning or prompt-injection patterns** were found across the 4 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 4 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 4 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the GroundRules - US Law Text server
on 2026-10-26; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the GroundRules - US Law Text server advertises

The server describes itself to connecting agents as: *GroundRules serves the verbatim text of enacted law with provenance (official source URL, current-through or vintage label, retrieval time, jurisdiction). Nothing is summarized, interpreted, or ranked by importance; the calling agent interprets. Vintage-label…*

These are the 4 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`law_for_location`** — Resolve an address or lat/lon to its full jurisdiction stack: federal, state, county, place, each with its code sources (name, publisher, official URL, current-through, whether we… _(parameters: address, lat, lon)_
- **`law_search`** — Search original law by topic, question, or citation. Exact citations resolve directly. Scoped by jurisdiction or source ids (e.g. us, us-tx; us-cfr scopes to the CFR alone, us cov… _(parameters: address, include_text, jurisdictions, limit, mode, offset)_
- **`law_get_section`** — Fetch full verbatim text by id or citation, or pass references for a batch of up to 10. Each batch item has its own result/error. Includes provenance (official source URL, current… _(parameters: citation, id, references)_
- **`law_coverage`** — Per-source coverage: what we host, section counts, current-through or vintage, last_verified, and a stale flag for any source the recurring verify has proven behind its upstream.…

## Scan GroundRules - US Law Text yourself, or claim its badge

Re-run this exact GroundRules - US Law Text check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `law.agentlookups.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://law.agentlookups.ai/mcp&directory=true"
```

For the itemized findings on GroundRules - US Law Text — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://law.agentlookups.ai/mcp"}`. If you
run `law.agentlookups.ai`, [claim a measured verified-owner badge for GroundRules - US Law Text free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=law.agentlookups.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dlaw.agentlookups.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://law.agentlookups.ai/mcp)
```

Keeping the GroundRules - US Law Text badge green as its tools change — six-hourly re-scans of `law.agentlookups.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `law.agentlookups.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-26; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
