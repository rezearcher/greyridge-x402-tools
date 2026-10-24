---
title: "Is the Calaf Seed Tools MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Calaf Seed Tools MCP server (https://calaf.ai/api/mcp), run 2026-10-24: advertises get_seed_format, validate_seed; 2 tools scanned, injection verdict 'clear', 2 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# Calaf Seed Tools MCP server — security & directory-readiness scorecard

**Server:** `https://calaf.ai/api/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 2 · **Injection verdict:** `clear` · **Directory:** 2 Claude Directory blocker(s)

Author and validate Calaf workspace seeds against the app's real importer. No account needed.

When an agent connects Calaf Seed Tools, the model reads all 2 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`calaf.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Calaf Seed Tools

- **No tool-poisoning or prompt-injection patterns** were found across the 2 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 2 blocker(s).** This server advertises 2 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 2 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 2 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Calaf Seed Tools server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Calaf Seed Tools server advertises

The server describes itself to connecting agents as: *Calaf (calaf.ai) is an MBA recruiting manager whose workspaces are stocked from "seeds" — single JSON documents any assistant can author. Use get_seed_format (or the seed-format resource) to learn the format, author the seed, then run validate_seed and fix ev…*

These are the 2 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`get_seed_format`** — Returns the complete specification (markdown) for calaf_seed: 1 JSON documents — the format to follow when a user asks for a Calaf seed. Read it before authoring; then check your…
- **`validate_seed`** — Runs a draft seed document through the exact parser the Calaf app imports with. Pass the entire JSON document as a string. Returns per-section counts and the precise issue list (p… _(parameters: seed)_

## Scan Calaf Seed Tools yourself, or claim its badge

Re-run this exact Calaf Seed Tools check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `calaf.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://calaf.ai/api/mcp&directory=true"
```

For the itemized findings on Calaf Seed Tools — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://calaf.ai/api/mcp"}`. If you
run `calaf.ai`, [claim a measured verified-owner badge for Calaf Seed Tools free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=calaf.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dcalaf.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://calaf.ai/api/mcp)
```

Keeping the Calaf Seed Tools badge green as its tools change — six-hourly re-scans of `calaf.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `calaf.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
