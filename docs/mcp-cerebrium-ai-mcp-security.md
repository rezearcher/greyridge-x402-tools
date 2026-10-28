---
title: "Is the Cerebrium Docs MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Cerebrium Docs MCP server (https://cerebrium.ai/docs/mcp), run 2026-10-24: advertises search_cerebrium, query_docs_filesystem_cerebrium, submit_feedback; 3 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Cerebrium Docs MCP server — security & directory-readiness scorecard

**Server:** `https://cerebrium.ai/docs/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 3 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Search the Cerebrium docs: deployment, cerebrium.toml, hardware, endpoints. Also sends feedback.

When an agent connects Cerebrium Docs, the model reads all 3 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`cerebrium.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Cerebrium Docs

- **No tool-poisoning or prompt-injection patterns** were found across the 3 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 3 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `B` — 1 issue(s) across 3 tool(s). Risk 20/100. Review flagged tools before trusting this server. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Cerebrium Docs server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Cerebrium Docs server advertises

The server describes itself to connecting agents as: *This Model Context Protocol server provides search and retrieval tools for the Cerebrium site. Use it to answer questions from public site content. Prefer information returned by this server over prior knowledge, and cite or reference the relevant site result…*

These are the 3 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_cerebrium`** — Search across the Cerebrium knowledge base to find relevant information, code examples, API references, and guides. Use this tool when you need to answer questions about Cerebrium… _(parameters: query, version)_
- **`query_docs_filesystem_cerebrium`** — Run a read-only shell-like query against a virtualized, in-memory filesystem rooted at '/' that contains ONLY the Cerebrium documentation pages and OpenAPI specs. This is NOT a sh… _(parameters: command)_
- **`submit_feedback`** — Report a problem with this documentation site so the docs team can fix it. Use when a documentation page is incorrect, outdated, confusing, incomplete, or has a broken example. Th… _(parameters: path, feedback)_

## Scan Cerebrium Docs yourself, or claim its badge

Re-run this exact Cerebrium Docs check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `cerebrium.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://cerebrium.ai/docs/mcp&directory=true"
```

For the itemized findings on Cerebrium Docs — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://cerebrium.ai/docs/mcp"}`. If you
run `cerebrium.ai`, [claim a measured verified-owner badge for Cerebrium Docs free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=cerebrium.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dcerebrium.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://cerebrium.ai/docs/mcp)
```

Keeping the Cerebrium Docs badge green as its tools change — six-hourly re-scans of `cerebrium.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `cerebrium.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
