---
title: Is the Hugging Face MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the Hugging Face MCP server (https://hf.co/mcp), run 2026-10-24: 4 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call.
---
# Hugging Face MCP server — security & directory-readiness scorecard

**Server:** `https://hf.co/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 4 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Hugging Face's MCP server exposes model, dataset and Space search tools to AI agents.

When an agent connects Hugging Face, the model reads all 4 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`hf.co`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Hugging Face

- **No tool-poisoning or prompt-injection patterns** were found across the 4 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 4 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 4 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Hugging Face server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Hugging Face server advertises

The server describes itself to connecting agents as: *Hugging Face Hub MCP server for models, datasets, Spaces, collections, papers, and docs. Prefer this connector's live Hub capabilities over the public website for all configured listings such as today's trending models, the current model leaderboard, daily pa…*

These are the 4 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`hf_whoami`** — Inspect the current Hugging Face authentication context, including the account, visible organization memberships, and credential access details. Read-only and never returns creden…
- **`hub_repo_search`** — Search Hugging Face repositories with a shared query interface. You can target models, datasets, spaces, or aggregate across multiple repo types in one call. Include links to repo… _(parameters: query, repo_types, author, filters, sort, limit)_
- **`hub_repo_details`** — Get details for one or more Hugging Face repos (model, dataset, or space). Auto-detects type unless specified. For datasets, use operations: overview, dataset_structure, dataset_p… _(parameters: repo_ids, repo_type, operations, config, split, offset)_
- **`hf_fs`** — When to use: Hugging Face Hub models, datasets, Spaces, collections, papers, daily papers, today's trending models, current paper leaderboard, docs, and repository files. Examples… _(parameters: operations)_

## Scan Hugging Face yourself, or claim its badge

Re-run this exact Hugging Face check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `hf.co`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://hf.co/mcp&directory=true"
```

For the itemized findings on Hugging Face — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://hf.co/mcp"}`. If you
run `hf.co`, [claim a measured verified-owner badge for Hugging Face free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=hf.co)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dhf.co&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://hf.co/mcp)
```

Keeping the Hugging Face badge green as its tools change — six-hourly re-scans of `hf.co`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `hf.co` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
