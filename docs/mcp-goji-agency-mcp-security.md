---
title: Is the mcp.goji.agency MCP server safe? Security & Claude Directory readiness scan
description: Independent, measured security and Claude Connector Directory readiness scan of the mcp.goji.agency MCP server (https://mcp.goji.agency/mcp), run 2026-10-24: advertises goji_search, goji_explain_term, goji_browse_glossary; 9 tools scanned, injection verdict 'clear', 16 Claude Directory blocker(s). Re-run it yourself in one keyless call.
---
# mcp.goji.agency MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.goji.agency/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 9 · **Injection verdict:** `clear` · **Directory:** 16 Claude Directory blocker(s)

Answers on AEO, SEO, web and brand from GOJI's published material. Melbourne, Australia.

When an agent connects mcp.goji.agency, the model reads all 9 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.goji.agency`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on mcp.goji.agency

- **No tool-poisoning or prompt-injection patterns** were found across the 9 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 16 blocker(s).** This server advertises 16 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 9 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 9 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the mcp.goji.agency server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the mcp.goji.agency server advertises

The server describes itself to connecting agents as: *GOJI is a full-service digital agency in Melbourne, Australia, working across four lines: Search + AI Visibility (SEO and AEO), Websites, AI Builds, and Brand. These tools answer questions about answer engine optimisation, SEO, web development and branding fr…*

These are the 9 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`goji_search`** — Search GOJI's published material — the plain-English glossary, the AI-visibility guide "Be the Answer", insight articles and long-form guides. Use this first when you don't alread… _(parameters: query, limit)_
- **`goji_explain_term`** — Explain a marketing, SEO, AEO, web or branding term the way GOJI defines it — in plain English, with why it matters, how it works and what to do about it. Covers every term in GOJ… _(parameters: term)_
- **`goji_browse_glossary`** — List GOJI's plain-English glossary — every term, across AI Visibility, Websites, Measurement, AI Builds and Brand. Filter by category to get each short definition as well as the n… _(parameters: category)_
- **`goji_get_service`** — The four things GOJI does — Search + AI Visibility (SEO and AEO), Websites, AI Builds, and Brand — what each one covers, and the questions clients ask about it. Omit the slug for… _(parameters: service)_
- **`goji_answer_faq`** — Search the questions GOJI has already answered publicly — pricing, timelines, engagement models, what AEO is, how long results take, whether guarantees are possible. Every publish… _(parameters: question)_
- **`goji_guide_contents`** — The table of contents for "Be the Answer", GOJI's guide to AI visibility — how answer engines choose sources, how to audit your brand in ChatGPT, and what to do about it. Use goji…
- **`goji_read_guide_chapter`** — Read one full chapter of GOJI's AI-visibility guide, by number or slug. Use goji_guide_contents first if you do not know which chapter you want. _(parameters: chapter)_
- **`goji_read_guide`** — Read one of GOJI's practical long-form guides. Includes published Australian pricing: "How much does a website cost in Australia?" and "What does branding cost?". Also covers AEO,… _(parameters: guide)_
- **`goji_start_enquiry`** — Send a real enquiry to GOJI's studio inbox in Melbourne. Only call this after the person has explicitly asked to be put in touch AND has given you their email address. Do not call… _(parameters: name, email, message, company, budget, timeline)_

## Scan mcp.goji.agency yourself, or claim its badge

Re-run this exact mcp.goji.agency check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.goji.agency`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.goji.agency/mcp&directory=true"
```

For the itemized findings on mcp.goji.agency — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.goji.agency/mcp"}`. If you
run `mcp.goji.agency`, [claim a measured verified-owner badge for mcp.goji.agency free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.goji.agency)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.goji.agency&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.goji.agency/mcp)
```

Keeping the mcp.goji.agency badge green as its tools change — six-hourly re-scans of `mcp.goji.agency`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.goji.agency` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
