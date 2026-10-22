---
title: Why your Claude connector was rejected — Connector Directory readiness check
description: The Anthropic Claude Connector Directory runs a security and structural review that takes about 20 days, and a rejection sends you to the back of the queue. Check your MCP server's tool definitions against the published review criteria in one call, before you submit.
---
# Why was my Claude connector rejected?

Submitting an MCP server to the [Anthropic Claude Connector Directory](https://claude.com/docs/connectors) puts it through a review that runs **around 20 days**. If it comes back rejected, you fix the problem and rejoin the queue — another ~20 days. Most rejections are not subtle security failures; they are structural rules in Anthropic's published review criteria that are easy to miss and cheap to fix *if you catch them before you submit*.

This page lists the structural criteria a reviewer checks, and gives you a way to test your own `tools/list` against them in one call — no account, no login, nothing leaving your machine for private servers.

## The checks that fail connectors before a human ever reads them

These come straight from Anthropic's published connector review criteria. Each applies per tool your server advertises:

- **Tool name over 64 characters.** Names must be 64 characters or fewer. A long, namespaced tool name is a hard reject.
- **Missing `annotations.title`.** Every tool must carry a human-readable `title` annotation. Anthropic uses it to render and reason about the tool; its absence is a documented reject.
- **Missing permission hint.** Every tool must declare the applicable hint — `readOnlyHint: true` for read-only tools, `destructiveHint: true` for tools that modify or delete data. These drive Claude's auto-permission behaviour, so a tool with neither is rejected.
- **Catch-all read+write tool.** A single tool that accepts both safe HTTP methods (GET/HEAD/OPTIONS) and unsafe ones (POST/PUT/PATCH/DELETE) via a `method` parameter is rejected. Split it into separate read and write tools.
- **Unsupported capability.** Tools that transfer money, cryptocurrency or other financial assets, or that generate image/video/audio through an AI model, are auto-rejected. (Diagram, chart and UI-mockup generation are allowed.)
- **Prompt-injection / tool-poisoning in the metadata.** A tool description carrying concealed instructions, a "don't tell the user" directive, a data-exfiltration hint, cross-tool shadowing, or invisible-unicode payloads will fail the security review. This is the [OWASP LLM01/LLM08](scan-mcp-server-prompt-injection.html) class, and it is exactly what a security reviewer is looking for.

## Check your server before you submit

Run the readiness check against your tool definitions. It evaluates every tool against the criteria above and tells you whether you would clear the structural bar — before you spend a review cycle finding out.

**URL mode** — your MCP server is reachable:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://your-mcp-host/mcp&directory=true"
```

**Paste mode** — private, OAuth-gated or stdio-only server, nothing leaves your machine:

```bash
curl -s -X POST https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview \
  -H 'content-type: application/json' \
  -d '{"directory":true,"tools":[ /* your tools/list result */ ]}'
```

The free response tells you **whether you are ready and how many blockers you have**:

```json
{
  "directory_readiness": {
    "ready": false,
    "blocker_count": 2,
    "checked_against": "Anthropic Claude Connector Directory published review criteria"
  }
}
```

A clean, minimal `get_weather` tool already returns two blockers — a missing `title` and a missing permission hint — because those annotations are required and are the single most common thing people forget. Knowing the count before you submit is the point.

## Get the itemized blockers and how to fix each

The free check tells you *that* you would fail and *how many* criteria. To see **which tools fail, which criterion each one trips, and the exact fix**, request the itemized readiness report:

```bash
curl -s -X POST https://x402-data-api.sigrunner.workers.dev/scan/mcp \
  -H 'content-type: application/json' \
  -d '{"directory":true,"tools":[ /* your tools/list result */ ]}'
```

That returns a `blockers` array — one entry per failing tool with the rule, the detail, and the evidence — for $0.05 USDC via [x402](https://x402.org) on Base, no account. One itemized report costs a fraction of a cent and saves a ~20-day round trip.

## Keep it compliant on every release — CI gate

A connector that passes today can regress the moment a tool is renamed or a new one is added without its annotations. Gate it in CI so a non-compliant change never reaches a submission:

```yaml
name: Claude connector readiness
on: [push, pull_request]
jobs:
  readiness:
    runs-on: ubuntu-latest
    steps:
      - uses: rezearcher/mcp-directory-readiness@v1
        with:
          url: https://your-mcp-host/mcp
```

The Action [`rezearcher/mcp-directory-readiness`](https://github.com/rezearcher/mcp-directory-readiness) runs the same check on every push and **fails closed** — a readiness check that can't run exits non-zero rather than silently passing.

## What this does not check

This evaluates the **published structural criteria** and the metadata security class. It does not reproduce Anthropic's private review and cannot guarantee acceptance. Verify these yourself: a published privacy policy, a working OAuth 2.0 configuration, and DNS/domain ownership for your connector — the review also covers those, and they live outside the tool definitions.

---

Static analysis of advertised tool metadata only — the scanner reads tool names, descriptions and schemas; it never invokes a tool. Code: [greyridge-x402-tools](https://github.com/rezearcher/greyridge-x402-tools) · [mcp-directory-readiness Action](https://github.com/rezearcher/mcp-directory-readiness) · Contact: contact@greyridgesignals.ai
