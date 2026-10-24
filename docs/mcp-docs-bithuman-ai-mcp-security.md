---
title: "Is the bitHuman docs MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the bitHuman docs MCP server (https://docs.bithuman.ai/docs-mcp), run 2026-10-24: advertises search, fetch; 2 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# bitHuman docs MCP server — security & directory-readiness scorecard

**Server:** `https://docs.bithuman.ai/docs-mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 2 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

The bitHuman docs over MCP: two read-only tools, search and fetch; it needs no account and no key.

When an agent connects bitHuman docs, the model reads all 2 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`docs.bithuman.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on bitHuman docs

- **No tool-poisoning or prompt-injection patterns** were found across the 2 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 2 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 2 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the bitHuman docs server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the bitHuman docs server advertises

The server describes itself to connecting agents as: *bitHuman documentation (https://docs.bithuman.ai). Use 'search' to find pages and 'fetch' to read one as markdown; the index is https://docs.bithuman.ai/llms.txt.*

These are the 2 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search`** — Search docs.bithuman.ai (bitHuman real-time avatar SDKs, the REST API, deployment options, models, pricing). Returns JSON {results: [{id, title, url, section, text}]}, most releva… _(parameters: query, section, limit)_
- **`fetch`** — Fetch one docs page as markdown by the id 'search' returned (a path such as /platforms/python), or by its full docs.bithuman.ai URL. Returns JSON {id, title, text (the whole page… _(parameters: id)_

## Scan bitHuman docs yourself, or claim its badge

Re-run this exact bitHuman docs check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `docs.bithuman.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://docs.bithuman.ai/docs-mcp&directory=true"
```

For the itemized findings on bitHuman docs — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://docs.bithuman.ai/docs-mcp"}`. If you
run `docs.bithuman.ai`, [claim a measured verified-owner badge for bitHuman docs free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=docs.bithuman.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Ddocs.bithuman.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://docs.bithuman.ai/docs-mcp)
```

Keeping the bitHuman docs badge green as its tools change — six-hourly re-scans of `docs.bithuman.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `docs.bithuman.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
