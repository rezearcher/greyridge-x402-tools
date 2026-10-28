---
title: "Is the CleanVector MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the CleanVector MCP server (https://cleanvector.ai/api/mcp), run 2026-10-24: advertises generate_illustration, generate_logo, vectorize_image; 11 tools scanned, injection verdict 'clear', 22 Claude Directory blocker(s). Re-run it yourself in one keyless call."
---
# CleanVector MCP server — security & directory-readiness scorecard

**Server:** `https://cleanvector.ai/api/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 11 · **Injection verdict:** `clear` · **Directory:** 22 Claude Directory blocker(s)

Create professional SVG artwork, icons and vector logos from a prompt, or vectorize any image.

When an agent connects CleanVector, the model reads all 11 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`cleanvector.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on CleanVector

- **No tool-poisoning or prompt-injection patterns** were found across the 11 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: 22 blocker(s).** This server advertises 22 tool definition(s) that would likely fail Anthropic's structural review criteria. The Connector Directory review runs about 20 days, so a rejection is expensive — the itemized list of which criteria fail, and how to fix each, is one paid call away.
- **All 11 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 11 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the CleanVector server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the CleanVector server advertises

The server describes itself to connecting agents as: *CleanVector creates production-ready vector graphics. Every result is a real, editable SVG with clean paths and a transparent background, never an embedded bitmap. Use generate_illustration for SVG artwork described in words: illustrations, icons, stickers an…*

These are the 11 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`generate_illustration`** — Generate professional, editable SVG artwork from a text prompt: illustrations, icons, stickers and mascot scenes. The result is real vector paths with a transparent background, no… _(parameters: prompt, mascot_id, no_background, aspect_ratio)_
- **`generate_logo`** — Generate a professional vector logo as editable SVG, delivered as a brand kit: the original mark, black and white variants, transparent PNG exports and a color palette measured fr… _(parameters: prompt, brand_name, reference_image_url, reference_image_base64, reference_role, request_id)_
- **`vectorize_image`** — Convert a raster image (PNG/JPG/WebP, max 5 MB) into a clean, editable SVG. Provide image_url or image_base64. no_background defaults to true and isolates the subject (4 credits).… _(parameters: image_url, image_base64, mode, prompt, no_background)_
- **`get_task`** — Fetch the current status of a task. Status is one of queued, processing, succeeded, failed. A succeeded task includes the result with download URLs. _(parameters: task_id)_
- **`wait_for_task`** — Block until a task settles (succeeded/failed) or the timeout passes. Preferred over polling get_task in a loop. Generation typically takes 10-60 seconds. _(parameters: task_id, timeout_seconds)_
- **`list_tasks`** — List the user's most recent tasks, newest first. _(parameters: limit)_
- **`list_mascots`** — List the user's ready-to-use mascots (consistent characters). Pass a mascot id to generate_illustration to place that character in a new scene. Mascots are created in the CleanVec…
- **`download_png`** — Return the finished artwork as a PNG image (free on all plans). Use after a task succeeded. For larger exports up to 8192px, use the png_url from the task result with the same Bea… _(parameters: task_id, width, variant)_
- **`download_svg`** — Return the finished artwork as SVG markup. Use after a task succeeded. _(parameters: task_id, variant)_
- **`download_logo_kit`** — Return a completed logo kit as an embedded ZIP resource. Includes three SVGs, three PNGs and palette.json. MCP output is capped at 2048px; use zip_url from the task result for lar… _(parameters: task_id, width)_
- **`get_account`** — Current plan and credit balance. Costs: vectorize 1, generate/enhance 4, logo 8 credits. PNG and SVG downloads are free on every plan.

## Scan CleanVector yourself, or claim its badge

Re-run this exact CleanVector check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `cleanvector.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://cleanvector.ai/api/mcp&directory=true"
```

For the itemized findings on CleanVector — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://cleanvector.ai/api/mcp"}`. If you
run `cleanvector.ai`, [claim a measured verified-owner badge for CleanVector free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=cleanvector.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dcleanvector.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://cleanvector.ai/api/mcp)
```

Keeping the CleanVector badge green as its tools change — six-hourly re-scans of `cleanvector.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `cleanvector.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
