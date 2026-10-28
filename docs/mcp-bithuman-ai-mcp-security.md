---
title: "Is the bitHuman MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the bitHuman MCP server (https://mcp.bithuman.ai/mcp), run 2026-10-24: advertises list_characters, make_character_video, talk_to_character; 3 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# bitHuman MCP server — security & directory-readiness scorecard

**Server:** `https://mcp.bithuman.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 3 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Animated AI characters in your chat: short clips of a character saying your words, or a live talk.

When an agent connects bitHuman, the model reads all 3 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`mcp.bithuman.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on bitHuman

- **No tool-poisoning or prompt-injection patterns** were found across the 3 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 3 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 3 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the bitHuman server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the bitHuman server advertises

The server describes itself to connecting agents as: *bitHuman makes its own animated house characters talk. Call list_characters to see who is available. make_character_video: one character says the exact words you give (up to 200 characters, about 15 seconds) in a short clip that plays inline. To hold a conver…*

These are the 3 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`list_characters`** — List the bitHuman house characters that can speak. Each has an id (pass it as 'character' to make_character_video or talk_to_character), a name, a short description, a picture URL…
- **`make_character_video`** — Make a short video of one bitHuman house character saying 'text' word for word, in its own voice. Returns video_url (an MP4 that plays inline and expires after 7 days), duration_s… _(parameters: character, text)_
- **`talk_to_character`** — Open a live voice conversation with one bitHuman house character in a player in the chat. The user presses Start and speaks through the microphone; the character answers out loud.… _(parameters: character)_

## Scan bitHuman yourself, or claim its badge

Re-run this exact bitHuman check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `mcp.bithuman.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://mcp.bithuman.ai/mcp&directory=true"
```

For the itemized findings on bitHuman — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://mcp.bithuman.ai/mcp"}`. If you
run `mcp.bithuman.ai`, [claim a measured verified-owner badge for bitHuman free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=mcp.bithuman.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dmcp.bithuman.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://mcp.bithuman.ai/mcp)
```

Keeping the bitHuman badge green as its tools change — six-hourly re-scans of `mcp.bithuman.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `mcp.bithuman.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
