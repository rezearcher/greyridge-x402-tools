---
title: "Is the AlphaCreek SEC Filings MCP MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the AlphaCreek SEC Filings MCP MCP server (https://mcp.alphacreek.ai/mcp), run 2026-10-24: advertises get_latest_filing, list_filings, get_filing_toc; 5 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# AlphaCreek SEC Filings MCP MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.alphacreek.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 5 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Access SEC filings efficiently (10-K, 10-Q, etc), save time and tokens, and get cited answers.

When an agent connects AlphaCreek SEC Filings MCP, the model reads all 5 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.alphacreek.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on AlphaCreek SEC Filings MCP

- **No tool-poisoning or prompt-injection patterns** were found across the 5 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 5 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 5 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the AlphaCreek SEC Filings MCP server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the AlphaCreek SEC Filings MCP server advertises

The server describes itself to connecting agents as: *AlphaCreek MCP provides SEC and UK FCA filing navigation and source text. importantCitation required. If your answer uses text from read_node_content, every paragraph or bullet derived from that text MUST end with an inline markdown link from the matching CIT…*

These are the 5 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_latest_filing`** — Return latest filing metadata for a company or ticker. If ticker and company are omitted, return newly ingested filings newest-first. Omit filing_registry in that mode to include… _(parameters: ticker, company, filing_registry, document_type, limit)_
- **`list_filings`** — List available filings for a ticker (newest first) with artifact_document_id and dates. Use filing_registry=fca_nsm for UK FCA NSM reports. Use this first when you need a specific… _(parameters: ticker, company, filing_registry, document_type, limit)_
- **`get_filing_toc`** — Return the full filing table of contents for one filing. If artifact_document_id is omitted, resolves the single latest filing for ticker/company (and optional document_type) only… _(parameters: artifact_document_id, ticker, company, filing_registry, document_type)_
- **`read_node_content`** — Return content for one or more navigation nodes in a filing. Pass one node via node_id or several via node_ids, using the node ids from TOC lines (the same values shown as NODE_ID… _(parameters: artifact_document_id, node_id, node_ids)_
- **`search_sec_event_filings`** — Search US SEC filing nodes for a disclosure claim. The search covers 8-K, 6-K, 10-K, 10-Q, and 20-F. Omit document_type to search all of those forms. Pass document_type to search… _(parameters: query, concept_groups, start_date, end_date, tickers, ne_tickers)_

## Scan AlphaCreek SEC Filings MCP yourself, or claim its badge

Re-run this exact AlphaCreek SEC Filings MCP check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.alphacreek.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.alphacreek.ai/mcp&directory=true"
```

For the itemized findings on AlphaCreek SEC Filings MCP — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.alphacreek.ai/mcp"}`. If you
run `mcp.alphacreek.ai`, [claim a measured verified-owner badge for AlphaCreek SEC Filings MCP free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.alphacreek.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.alphacreek.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.alphacreek.ai/mcp)
```

Keeping the AlphaCreek SEC Filings MCP badge green as its tools change — six-hourly re-scans of `mcp.alphacreek.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.alphacreek.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
