---
title: "Is the tandem.ac MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the tandem.ac MCP server (https://tandem.ac/mcp), run 2026-10-26: advertises search_docs, get_doc, get_start_path; 13 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# tandem.ac MCP server — security & directory-readiness scorecard

**Server:** `https://tandem.ac/mcp`
**Scanned:** 2026-10-26 · **Tools advertised:** 13 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Remote MCP server for Tandem docs, install guides, SDKs, workflows, and agent setup help.

When an agent connects tandem.ac, the model reads all 13 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`tandem.ac`, scanned 2026-10-26; the verdict below is `clear`.

## What the scan found on tandem.ac

- **No tool-poisoning or prompt-injection patterns** were found across the 13 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 13 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 13 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the tandem.ac server
on 2026-10-26; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the tandem.ac server advertises

The server describes itself to connecting agents as: *Use tools/list and tools/call to retrieve Tandem documentation guidance.*

These are the 13 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_docs`** — Search the published Tandem docs index for relevant pages. _(parameters: query, docs_ref, engine_version, limit, audience)_
- **`get_doc`** — Fetch and normalize a published Tandem docs page by path or URL. _(parameters: path, docs_ref, engine_version)_
- **`get_start_path`** — Recommend the best Tandem docs starting path for a desktop user, server admin, or developer. _(parameters: role, docs_ref)_
- **`recommend_next_docs`** — Recommend the next Tandem docs to read after a current page, optionally biased toward a goal. _(parameters: current_path, docs_ref, goal, limit)_
- **`answer_how_to`** — Answer how to install or use Tandem, build workflows, or use the SDKs by synthesizing relevant published docs. _(parameters: task, docs_ref, engine_version, audience, limit)_
- **`get_tandem_guide`** — Return a structured Tandem learning guide for install-engine, python-sdk, typescript-sdk, build-workflows, or headless-deploy. _(parameters: topic, docs_ref)_
- **`warmup_docs_cache`** — Refresh the docs index and preload the most important Tandem docs pages into cache. _(parameters: force_refresh, docs_ref)_
- **`get_docs_cache_status`** — Inspect the current docs cache state for index sources and warmed pages.
- **`refresh_docs_index`** — Force-refresh docs indexes and report whether data came from the network, cache, or stale fallback. _(parameters: force_refresh, docs_ref)_
- **`refresh_doc_page`** — Force-refresh a docs page and report whether content came from the network, cache, or stale fallback. _(parameters: path, docs_ref, force_refresh)_
- **`invalidate_docs_cache`** — Invalidate docs cache entries for index data, all pages, or a specific page path. _(parameters: target, path, docs_ref)_
- **`compare_docs_index_refresh`** — Force-refresh the docs indexes and return before/after hashes so content changes can be proven. _(parameters: docs_ref)_
- **`compare_doc_page_refresh`** — Force-refresh a docs page and return before/after hashes so page content changes can be proven. _(parameters: path, docs_ref)_

## Scan tandem.ac yourself, or claim its badge

Re-run this exact tandem.ac check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `tandem.ac`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://tandem.ac/mcp&directory=true"
```

For the itemized findings on tandem.ac — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://tandem.ac/mcp"}`. If you
run `tandem.ac`, [claim a measured verified-owner badge for tandem.ac free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=tandem.ac)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dtandem.ac&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://tandem.ac/mcp)
```

Keeping the tandem.ac badge green as its tools change — six-hourly re-scans of `tandem.ac`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `tandem.ac` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-26; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
