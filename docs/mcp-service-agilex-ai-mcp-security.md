---
title: "Is the AGILEX Docs MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the AGILEX Docs MCP server (https://service.agilex.ai/agilex-docs/mcp), run 2026-11-09: advertises search_docs, find_in_doc, get_doc; 5 tools scanned, injection verdict 'clear', 5 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# AGILEX Docs MCP server — security & directory-readiness scorecard

**Server:** `https://service.agilex.ai/agilex-docs/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 5 · **Injection verdict:** `clear` · **Directory:** 5 Claude Directory quality item(s) to polish (no hard rejects)

Official AGILEX robotics product docs: manuals, CAN protocol, firmware, FAQ. Read-only.

When an agent connects AGILEX Docs, the model reads all 5 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`service.agilex.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on AGILEX Docs

- **No tool-poisoning or prompt-injection patterns** were found across the 5 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 5 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 5 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 5 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the AGILEX Docs server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the AGILEX Docs server advertises

The server describes itself to connecting agents as: *AGILEX (松灵机器人) product documentation. Use this server BEFORE writing or explaining integration code for AGILEX hardware (piper, pika, nero, ranger, limo, scout, bunker, hunter, tracer, umr, cobot_magic, aloha). It contains the official user manuals, CAN/proto…*

These are the 5 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_docs`** — Full-text search over the official AGILEX product documentation. Use this first for any question about AGILEX hardware: pinouts, CAN protocol details, baud rate, firmware upgrade,… _(parameters: query, limit, space)_
- **`find_in_doc`** — Locate a passage *inside* one manual, without paging through it. Use this after ''search_docs'' whenever you need a specific table, command or error code rather than the whole pag… _(parameters: doc_id, query, limit)_
- **`get_doc`** — Read one documentation page as Markdown. Call this with a ''doc_id'' returned by ''search_docs'' (or a slug such as ''ymZimX7JLe''). Manuals are often 20k-60k characters, so this… _(parameters: doc_id, max_chars, offset)_
- **`list_docs`** — List documented pages, optionally inside one space. Use when the caller wants an inventory ("what manuals exist for ranger") rather than an answer. Args: space: optional space slu… _(parameters: space, limit, offset)_
- **`list_spaces`** — List the public documentation spaces with page counts. Call this when the caller is unsure which product family a document belongs to, or to explain coverage. Returns JSON: {count…

## Maintenance & supply-chain — the risk AGILEX Docs's static scan can't see

A prompt-injection scan reads AGILEX Docs's advertised tool metadata at one moment. It cannot tell you the project behind `service.agilex.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance grade `A`** — last commit pushed 5 day(s) ago, 0 open issue(s).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `service.agilex.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan AGILEX Docs yourself, or claim its badge {#claim}

Re-run this exact AGILEX Docs check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `service.agilex.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://service.agilex.ai/agilex-docs/mcp&directory=true"
```

For the itemized findings on AGILEX Docs — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://service.agilex.ai/agilex-docs/mcp"}`. If you
run `service.agilex.ai`, [claim a measured verified-owner badge for AGILEX Docs free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=service.agilex.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dservice.agilex.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://service.agilex.ai/agilex-docs/mcp)
```

Keeping the AGILEX Docs badge green as its tools change — six-hourly re-scans of `service.agilex.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `service.agilex.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
