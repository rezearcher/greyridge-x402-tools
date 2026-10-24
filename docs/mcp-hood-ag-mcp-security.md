---
title: "Is the hood. — .hood name service MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the hood. — .hood name service MCP server (https://www.hood.ag/api/mcp), run 2026-10-24: advertises resolve_name, reverse_resolve, resolve_text; 5 tools scanned, injection verdict 'clear', 10 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# hood. — .hood name service MCP server — security & directory-readiness scorecard

**Server:** `https://www.hood.ag/api/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 5 · **Injection verdict:** `clear` · **Directory:** 10 Claude Directory blocker(s)

Resolve .hood names on Robinhood Chain — forward/reverse, text records, availability & pricing.

When an agent connects hood. — .hood name service, the model reads all 5 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`www.hood.ag`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on hood. — .hood name service

- **No tool-poisoning or prompt-injection patterns** were found across the 5 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 10 blocker(s).** This server advertises 10 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 5 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 5 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the hood. — .hood name service server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the hood. — .hood name service server advertises

These are the 5 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`resolve_name`** — Forward-resolve a .hood name to the address it points to. Returns null if unset. _(parameters: name)_
- **`reverse_resolve`** — Reverse-resolve an address to its primary .hood name. 'verified' is true only when the name's forward record points back to the address. _(parameters: address)_
- **`resolve_text`** — Read a text record (e.g. "avatar", "url", "com.twitter") set on a .hood name. _(parameters: name, key)_
- **`check_availability`** — Check whether a .hood name is available to register, and its yearly price. _(parameters: name)_
- **`name_info`** — Full snapshot of a .hood name: resolved address, NFT owner, expiry, and availability. _(parameters: name)_

## Scan hood. — .hood name service yourself, or claim its badge

Re-run this exact hood. — .hood name service check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `www.hood.ag`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://www.hood.ag/api/mcp&directory=true"
```

For the itemized findings on hood. — .hood name service — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://www.hood.ag/api/mcp"}`. If you
run `www.hood.ag`, [claim a measured verified-owner badge for hood. — .hood name service free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=www.hood.ag)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dwww.hood.ag&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://www.hood.ag/api/mcp)
```

Keeping the hood. — .hood name service badge green as its tools change — six-hourly re-scans of `www.hood.ag`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `www.hood.ag` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
