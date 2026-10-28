---
title: "Is the bidclub.ai MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the bidclub.ai MCP server (https://bidclub.ai/api/mcp), run 2026-10-24: advertises bidclub_list_shows, bidclub_list_episodes, bidclub_search_episodes; 6 tools scanned, injection verdict 'clear', 12 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# bidclub.ai MCP server — security & directory-readiness scorecard

**Server:** `https://bidclub.ai/api/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 6 · **Injection verdict:** `clear` · **Directory:** 12 Claude Directory blocker(s)

Search 45+ investor podcasts and read transcripts, TL;DRs, digests — bilingual EN/中文, keyless.

When an agent connects bidclub.ai, the model reads all 6 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`bidclub.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on bidclub.ai

- **No tool-poisoning or prompt-injection patterns** were found across the 6 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 12 blocker(s).** This server advertises 12 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 6 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 6 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the bidclub.ai server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the bidclub.ai server advertises

The server describes itself to connecting agents as: *BidClub publishes bilingual digests and transcripts of investment and technology podcasts. Search or list to find a slug, then read the tldr or digest section; page a transcript only when the summary is not enough.*

These are the 6 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`bidclub_list_shows`** — List every show in the BidClub library with its id, display name, source language, hosts, and source links. Start here when you need a show id for the show parameter of the other…
- **`bidclub_list_episodes`** — List episodes newest first, optionally narrowed to one show. Returns metadata only — titles, deks, dates, durations, participant chips and source links — never the digest or trans… _(parameters: show, source_lang, limit, offset, asset, sector)_
- **`bidclub_search_episodes`** — Full-text search across titles, deks, TL;DRs, digests and transcripts, with a substring sweep that handles Chinese queries the tokenizer cannot segment. Returns up to 20 metadata… _(parameters: q, time, person, show, source_lang, len)_
- **`bidclub_get_episode`** — Read one section of an episode. Long sections page deterministically: when the result says truncated: true, call again with offset set to next_offset and concatenate content_md un… _(parameters: slug, section, lang, offset, max_chars)_
- **`bidclub_feed_index`** — The slim catalogue of every episode — one row each, metadata only. Narrow it with show or person; passing both is an error. Large responses are truncated to the newest rows with a… _(parameters: show, person, asset, sector, focus)_
- **`bidclub_download_links`** — Build the download URLs for an episode or a whole show without fetching anything. Hand these to the user, or fetch one yourself when you need a complete transcript in a single req… _(parameters: slug, show, lang)_

## Scan bidclub.ai yourself, or claim its badge

Re-run this exact bidclub.ai check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `bidclub.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://bidclub.ai/api/mcp&directory=true"
```

For the itemized findings on bidclub.ai — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://bidclub.ai/api/mcp"}`. If you
run `bidclub.ai`, [claim a measured verified-owner badge for bidclub.ai free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=bidclub.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dbidclub.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://bidclub.ai/api/mcp)
```

Keeping the bidclub.ai badge green as its tools change — six-hourly re-scans of `bidclub.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `bidclub.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
