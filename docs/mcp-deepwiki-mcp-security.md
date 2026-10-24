---
title: Is the DeepWiki MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the DeepWiki MCP server (https://mcp.deepwiki.com/mcp), run 2026-10-24: 3 tools scanned, injection verdict 'clear', 6 Claude Directory blocker(s). Re-run it yourself in one keyless call.
---
# DeepWiki MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.deepwiki.com/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 3 · **Injection verdict:** `clear` · **Directory:** 6 Claude Directory blocker(s)

DeepWiki's MCP server exposes repository-documentation lookup tools to AI agents.

When an agent connects DeepWiki, the model reads all 3 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.deepwiki.com`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on DeepWiki

- **No tool-poisoning or prompt-injection patterns** were found across the 3 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 6 blocker(s).** This server advertises 6 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 3 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 3 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the DeepWiki server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the DeepWiki server advertises

The server describes itself to connecting agents as: *DeepWiki MCP provides AI-powered documentation for GitHub repositories. With a user OAuth token, all devin_* tools act in one organization: without an X-Org-Id header, the first one the user joined. Not found usually means another of their orgs; send X-Org-Id…*

These are the 3 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`ask_wiki_question`** — Ask any question about a GitHub repository's codebase and get an AI-powered answer grounded in its DeepWiki. _(parameters: repoName, question)_
- **`read_wiki_contents`** — View documentation about a GitHub repository. _(parameters: repoName)_
- **`read_wiki_structure`** — Get a list of documentation topics for a GitHub repository. _(parameters: repoName)_

## Scan DeepWiki yourself, or claim its badge

Re-run this exact DeepWiki check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.deepwiki.com`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.deepwiki.com/mcp&directory=true"
```

For the itemized findings on DeepWiki — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.deepwiki.com/mcp"}`. If you
run `mcp.deepwiki.com`, [claim a measured verified-owner badge for DeepWiki free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.deepwiki.com)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.deepwiki.com&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.deepwiki.com/mcp)
```

Keeping the DeepWiki badge green as its tools change — six-hourly re-scans of `mcp.deepwiki.com`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.deepwiki.com` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
