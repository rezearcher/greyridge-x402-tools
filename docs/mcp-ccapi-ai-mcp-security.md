---
title: "Is the CCAPI MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the CCAPI MCP server (https://api.ccapi.ai/mcp), run 2026-10-24: advertises chat_completion, edit_image, extend_music; 11 tools scanned, injection verdict 'clear', 11 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# CCAPI MCP server — security & directory-readiness scorecard

**Server:** `https://api.ccapi.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 11 · **Injection verdict:** `clear` · **Directory:** 11 Claude Directory blocker(s)

Image, video, music and text generation across 100+ models through one endpoint.

When an agent connects CCAPI, the model reads all 11 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`api.ccapi.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on CCAPI

- **No tool-poisoning or prompt-injection patterns** were found across the 11 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 11 blocker(s).** This server advertises 11 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **1 of 11 advertised tool(s) name a state-changing action** (`edit_image`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 11 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the CCAPI server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the CCAPI server advertises

The server describes itself to connecting agents as: *CCAPI gives you access to image, video, music and text models through one API key. Key facts: - Every tool call consumes the account's balance. Prefer one good call over exploratory retries. - Call list_models first if you are unsure which model names are ava…*

These are the 11 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`chat_completion`** — Send a conversation to any text model available through CCAPI (Claude, GPT, Gemini, DeepSeek, GLM, MiniMax, Kimi, Qwen…) and get the reply. Useful for consulting a second model fo… _(parameters: model, messages, max_tokens, temperature, top_p, stop)_
- **`edit_image`** — Edit existing images according to an instruction, using the dedicated image edit endpoint. Provide at least one source image. For pure text-to-image, or for models that take refer… _(parameters: model, prompt, images, size, n, quality)_
- **`extend_music`** — Continue an existing song from a given timestamp, producing a longer version. Requires the clip_id of a previously generated song, which appears in the 'raw' payload of a complete… _(parameters: clip_id, continue_at, prompt, title, tags, provider)_
- **`generate_image`** — Generate an image from a text prompt, optionally guided by reference images (image-to-image). Returns image URLs directly. Most models finish in 10-60 seconds; if your client time… _(parameters: model, prompt, images, size, n, quality)_
- **`generate_lyrics`** — Write song lyrics from a description, without generating audio. Useful as a first step before generate_music with custom=true, so the user can approve the words before paying for… _(parameters: prompt, lyrics_model, provider, wait_seconds)_
- **`generate_music`** — Generate a song with vocals or instrumental. Two modes: simple (custom=false) where you describe the song and the model writes the lyrics, or custom (custom=true) where you supply… _(parameters: prompt, custom, title, tags, negative_tags, instrumental)_
- **`generate_video`** — Generate a video from a text prompt, optionally driven by reference images (image-to-video, first/last frame). This is asynchronous: it returns a task_id you poll with get_task(pl… _(parameters: model, prompt, images, videos, audios, duration)_
- **`get_balance`** — Report the remaining and used balance for this CCAPI key. Useful before starting an expensive batch of generations, or to explain a quota failure to the user.
- **`get_task`** — Check the status of an asynchronous generation task submitted by generate_video, generate_music, generate_lyrics, extend_music, or generate_image with async=true. Pass the platfor… _(parameters: platform, task_id, wait_seconds)_
- **`list_models`** — List the AI models this CCAPI key can actually call, with their capability category and the MCP tool that drives them. Call this before generating anything if you are unsure a mod… _(parameters: category, search)_
- **`upscale_image`** — Increase the resolution of an existing image 2x with ccapi-upscale-v1. Input must be between 256x256 and 1024x1024 and under 5 MB; for larger inputs, regenerate with a high-resolu… _(parameters: image, model_quality, response_format)_

## Scan CCAPI yourself, or claim its badge

Re-run this exact CCAPI check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `api.ccapi.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://api.ccapi.ai/mcp&directory=true"
```

For the itemized findings on CCAPI — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://api.ccapi.ai/mcp"}`. If you
run `api.ccapi.ai`, [claim a measured verified-owner badge for CCAPI free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=api.ccapi.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dapi.ccapi.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://api.ccapi.ai/mcp)
```

Keeping the CCAPI badge green as its tools change — six-hourly re-scans of `api.ccapi.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `api.ccapi.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
