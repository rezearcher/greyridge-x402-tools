---
title: "Is the Plumbline - Contractor License Checks MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Plumbline - Contractor License Checks MCP server (https://contractors.agentlookups.ai/mcp), run 2026-10-26: advertises check_contractor; 1 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Plumbline - Contractor License Checks MCP server — security & directory-readiness scorecard

**Server:** `https://contractors.agentlookups.ai/mcp`
**Scanned:** 2026-10-26 · **Tools advertised:** 1 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Free contractor-license checks from official state records; a no-match never proves unlicensed.

When an agent connects Plumbline - Contractor License Checks, the model reads all 1 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`contractors.agentlookups.ai`, scanned 2026-10-26; the verdict below is `clear`.

## What the scan found on Plumbline - Contractor License Checks

- **No tool-poisoning or prompt-injection patterns** were found across the 1 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 1 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 1 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Plumbline - Contractor License Checks server
on 2026-10-26; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Plumbline - Contractor License Checks server advertises

The server describes itself to connecting agents as: *Free, neutral contractor-license checks from official state and local licensing records across dozens of US jurisdictions; the covered set changes as sources are added. Every finding carries provenance (source, snapshot date, artifact hash). A no_match_in_ind…*

These are the 1 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`check_contractor`** — Looks up a contractor's public credential in indexed state and local licensing records. Licenses, registrations and bond records mean different things. Each record carries a crede… _(parameters: city, entity_id, jurisdiction, license, name, offset)_

## Scan Plumbline - Contractor License Checks yourself, or claim its badge

Re-run this exact Plumbline - Contractor License Checks check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `contractors.agentlookups.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://contractors.agentlookups.ai/mcp&directory=true"
```

For the itemized findings on Plumbline - Contractor License Checks — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://contractors.agentlookups.ai/mcp"}`. If you
run `contractors.agentlookups.ai`, [claim a measured verified-owner badge for Plumbline - Contractor License Checks free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=contractors.agentlookups.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dcontractors.agentlookups.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://contractors.agentlookups.ai/mcp)
```

Keeping the Plumbline - Contractor License Checks badge green as its tools change — six-hourly re-scans of `contractors.agentlookups.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `contractors.agentlookups.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-26; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
