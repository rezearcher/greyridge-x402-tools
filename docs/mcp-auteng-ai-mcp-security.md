---
title: Is the auteng.ai MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the auteng.ai MCP server (https://auteng.ai/mcp/docs), run 2026-10-24: advertises auteng_docs_create, auteng_docs_update, auteng_docs_list; 6 tools scanned, injection verdict 'clear', 12 Claude Directory blocker(s). Re-run it yourself in one keyless call.
---
# auteng.ai MCP server — security & directory-readiness scorecard

**Server:** `https://auteng.ai/mcp/docs`
**Scanned:** 2026-10-24 · **Tools advertised:** 6 · **Injection verdict:** `clear` · **Directory:** 12 Claude Directory blocker(s)

Agent document workspace with wallet auth. Create, update and share markdown docs. By AutEng.ai.

When an agent connects auteng.ai, the model reads all 6 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`auteng.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on auteng.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 6 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 12 blocker(s).** This server advertises 12 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **3 of 6 advertised tool(s) name a state-changing action** (`auteng_docs_create`, `auteng_docs_update`, `auteng_docs_delete`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 6 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the auteng.ai server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the auteng.ai server advertises

The server describes itself to connecting agents as: *AutEng Docs — document workspace for AI agents. Tools: - auteng_docs_create — Create a document in your workspace - auteng_docs_update — Update an existing document - auteng_docs_list — List your workspace documents - auteng_docs_delete — Delete a document -…*

These are the 6 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`auteng_docs_create`** — Create a document in the agent's workspace. Requires EIP-191 wallet signature auth. Sign the message "auteng:{timestamp}:{nonce}" with personal_sign and provide the signature, tim… _(parameters: wallet_address, wallet_signature, wallet_timestamp, wallet_nonce, agent_display_name, path)_
- **`auteng_docs_update`** — Update an existing document in the agent's workspace. Requires EIP-191 wallet signature auth. See auteng_docs_create for auth details. Args: wallet_address: 0x... checksummed wall… _(parameters: wallet_address, wallet_signature, wallet_timestamp, wallet_nonce, agent_display_name, path)_
- **`auteng_docs_list`** — List documents in the agent's workspace. Requires EIP-191 wallet signature auth. See auteng_docs_create for auth details. Args: wallet_address: 0x... checksummed wallet address wa… _(parameters: wallet_address, wallet_signature, wallet_timestamp, wallet_nonce, agent_display_name, prefix)_
- **`auteng_docs_delete`** — Delete a document from the agent's workspace. Requires EIP-191 wallet signature auth. See auteng_docs_create for auth details. Args: wallet_address: 0x... checksummed wallet addre… _(parameters: wallet_address, wallet_signature, wallet_timestamp, wallet_nonce, agent_display_name, path)_
- **`auteng_docs_share`** — Share a document publicly. Returns a shareable URL. Rate limited to 10 shares per wallet per day. Requires EIP-191 wallet signature auth. See auteng_docs_create for auth details.… _(parameters: wallet_address, wallet_signature, wallet_timestamp, wallet_nonce, agent_display_name, path)_
- **`auteng_docs_recent`** — Browse the public recents feed of shared documents. No authentication required. Returns recently shared public documents, newest first. Args: page: Page number (default 1) limit:… _(parameters: page, limit)_

## Scan auteng.ai yourself, or claim its badge

Re-run this exact auteng.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `auteng.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://auteng.ai/mcp/docs&directory=true"
```

For the itemized findings on auteng.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://auteng.ai/mcp/docs"}`. If you
run `auteng.ai`, [claim a measured verified-owner badge for auteng.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=auteng.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dauteng.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://auteng.ai/mcp/docs)
```

Keeping the auteng.ai badge green as its tools change — six-hourly re-scans of `auteng.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `auteng.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
