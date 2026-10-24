---
title: Is the Achromat MOM MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the Achromat MOM MCP server (https://mom.achromat.ai/mcp), run 2026-10-24: advertises achromat_recall; 1 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call.
---
# Achromat MOM MCP server — security & directory-readiness scorecard

**Server:** `https://mom.achromat.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 1 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Recall and calibrate agent tool calls against verified policy lessons from Achromat MOM.

When an agent connects Achromat MOM, the model reads all 1 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mom.achromat.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Achromat MOM

- **No tool-poisoning or prompt-injection patterns** were found across the 1 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 1 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 1 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Achromat MOM server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Achromat MOM server advertises

The server describes itself to connecting agents as: *Public sandbox of Achromat Machine Operational Memory. achromat_recall returns sample verified lessons for a domain; it does not match or evaluate your call. This is a sandboxed preview. Do not use these sample arguments for live execution. To access the full…*

These are the 1 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`achromat_recall`** — SANDBOX PREVIEW of Achromat Machine Operational Memory. It takes the same input as the full achromat_recall, but this public endpoint does not search: it ignores task_description… _(parameters: domain, tool_name, task_description, arguments)_

## Scan Achromat MOM yourself, or claim its badge

Re-run this exact Achromat MOM check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mom.achromat.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mom.achromat.ai/mcp&directory=true"
```

For the itemized findings on Achromat MOM — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mom.achromat.ai/mcp"}`. If you
run `mom.achromat.ai`, [claim a measured verified-owner badge for Achromat MOM free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mom.achromat.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmom.achromat.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mom.achromat.ai/mcp)
```

Keeping the Achromat MOM badge green as its tools change — six-hourly re-scans of `mom.achromat.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mom.achromat.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
