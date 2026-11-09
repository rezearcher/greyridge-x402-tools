---
title: "Is the Mizan MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Mizan MCP server (https://mizan.ac/mcp), run 2026-11-09: advertises lookup_player, check_players, list_sources; 5 tools scanned, injection verdict 'clear', 5 Claude Directory quality item(s) to polish (no hard rejects). Re-run it yourself in one keyless call."
---
# Mizan MCP server — security & directory-readiness scorecard

**Server:** `https://mizan.ac/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 5 · **Injection verdict:** `clear` · **Directory:** 5 Claude Directory quality item(s) to polish (no hard rejects)

Player ban records from 560+ game community ban lists, with Steam's own bans. Reads need no key.

When an agent connects Mizan, the model reads all 5 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mizan.ac`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on Mizan

- **No tool-poisoning or prompt-injection patterns** were found across the 5 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 5 quality item(s) to polish.** No hard rejects — but this server advertises tool definition(s) that miss quality criteria Anthropic reviews (titles, read-only hints, descriptions). These don't auto-reject, yet the review runs about 20 days, so polishing them first avoids a slow round-trip. The itemized list and how to fix each is one paid call away.
- **All 5 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 5 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Mizan server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Mizan server advertises

The server describes itself to connecting agents as: *Mizan reads the public ban lists of game communities and files each ban under the account it names. A ban is the claim of the list that made it: quote a record's 'verdict.text' as it stands, credit each ban to its list, and never call a player a cheater or cl…*

These are the 5 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`lookup_player`** — Look up a player's Mizan record: their bans across every list Mizan reads, whether any list banned them for cheating, and Steam's own VAC and game bans for a Steam account. Pass a… _(parameters: query)_
- **`check_players`** — Check up to 100 Steam accounts in one call, such as everyone on a game server: each account's bans across every list Mizan reads, whether a list banned it for cheating, and Steam'… _(parameters: players)_
- **`list_sources`** — List the ban lists Mizan reads, largest first: each list's name, who issues its bans, the games it covers, its bans and how many are in force, and whether Mizan is still reading i… _(parameters: game, name, limit)_
- **`registry_stats`** — The size of Mizan's registry: how many ban lists it reads, the bans on them, how many are in force, and the same counts for each game.
- **`list_my_communities`** — List the communities you belong to on Mizan, your role in each, their registry status and their game servers. Needs you to sign in to Mizan.

## Maintenance & supply-chain — the risk Mizan's static scan can't see

A prompt-injection scan reads Mizan's advertised tool metadata at one moment. It cannot tell you the project behind `mizan.ac` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `mizan.ac` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Mizan yourself, or claim its badge {#claim}

Re-run this exact Mizan check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mizan.ac`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mizan.ac/mcp&directory=true"
```

For the itemized findings on Mizan — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mizan.ac/mcp"}`. If you
run `mizan.ac`, [claim a measured verified-owner badge for Mizan free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mizan.ac)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmizan.ac&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mizan.ac/mcp)
```

Keeping the Mizan badge green as its tools change — six-hourly re-scans of `mizan.ac`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mizan.ac` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
