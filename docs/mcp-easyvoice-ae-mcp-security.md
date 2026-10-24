---
title: "Is the EasyVoice text to speech MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the EasyVoice text to speech MCP server (https://easyvoice.ae/api/mcp), run 2026-10-24: advertises text_to_speech, list_voices, get_usage; 7 tools scanned, injection verdict 'clear', 7 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# EasyVoice text to speech MCP server — security & directory-readiness scorecard

**Server:** `https://easyvoice.ae/api/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 7 · **Injection verdict:** `clear` · **Directory:** 7 Claude Directory blocker(s)

Hosted text-to-speech MCP server: 66 voices in 9 languages, long-form narration, podcasts.

When an agent connects EasyVoice text to speech, the model reads all 7 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`easyvoice.ae`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on EasyVoice text to speech

- **No tool-poisoning or prompt-injection patterns** were found across the 7 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 7 blocker(s).** This server advertises 7 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **1 of 7 advertised tool(s) name a state-changing action** (`create_podcast`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 7 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the EasyVoice text to speech server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the EasyVoice text to speech server advertises

The server describes itself to connecting agents as: *EasyVoice is a hosted text-to-speech service. Free API keys can use the 12 free voices at 20 requests/minute, 2 concurrent requests, and a shared 5,000 characters/day pool; Pro ($9.99/mo flat) unlocks all 66 voices and removes the daily limit (fair use: 10M c…*

These are the 7 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`text_to_speech`** — Convert text to a downloadable MP3 or WAV audio file with one of EasyVoice's 66 neural voices. Returns a hosted audio URL (no inline audio). Per-call limit: 8,000 characters (4,00… _(parameters: text, voice, speed, format)_
- **`list_voices`** — List all 66 EasyVoice catalog voices (id, name, language, accent, gender, free/pro tier) plus this key's cloned voices. Call this before text_to_speech or create_podcast to pick v…
- **`get_usage`** — Check this API key's plan and usage. Free keys see today's used/remaining characters (shared 5,000/day pool, resets at midnight UTC), the 20 requests/minute rate limit and 2-concu…
- **`generate_long_form`** — Generate long-form narration (up to 500,000 characters ≈ 9 hours of audio) as an async job. Requires a Pro subscription key. Kokoro narration voices only — Arabic (ar_*) and clone… _(parameters: input, voice, speed, format, pitch, tone)_
- **`create_podcast`** — Create a two-host (A/B) podcast episode as an async job. Requires a Pro subscription key. Up to 60 segments; combined text up to 30,000 characters. voice_a and voice_b set the two… _(parameters: segments, voice_a, voice_b, format)_
- **`clone_voice`** — Enroll a custom cloned voice from an audio sample (async). Requires a Pro or active 7-day pass key. Provide exactly one of audio_base64 or audio_url (https). Sample limits: 10 MB… _(parameters: name, consent, audio_base64, audio_url, mime_type)_
- **`get_job_status`** — Check the status of a long-form, podcast or tts job owned by this key. Returns status plus audio URL(s) when completed. Audio links are not guaranteed to persist — download prompt… _(parameters: job_id)_

## Scan EasyVoice text to speech yourself, or claim its badge

Re-run this exact EasyVoice text to speech check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `easyvoice.ae`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://easyvoice.ae/api/mcp&directory=true"
```

For the itemized findings on EasyVoice text to speech — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://easyvoice.ae/api/mcp"}`. If you
run `easyvoice.ae`, [claim a measured verified-owner badge for EasyVoice text to speech free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=easyvoice.ae)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Deasyvoice.ae&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://easyvoice.ae/api/mcp)
```

Keeping the EasyVoice text to speech badge green as its tools change — six-hourly re-scans of `easyvoice.ae`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `easyvoice.ae` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
