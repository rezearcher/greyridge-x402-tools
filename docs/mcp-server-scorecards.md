---
title: MCP server security scorecards — independent injection & directory-readiness scans
description: Independent, measured security and Claude Connector Directory readiness scans of well-known public MCP servers. Static tool-poisoning / prompt-injection analysis plus directory-readiness, each re-runnable keyless in one call.
---
# MCP server security scorecards

Independent, static security reads of well-known public MCP servers — each one scans the tool
definitions the server advertises for prompt-injection / tool-poisoning patterns (OWASP LLM01/LLM08)
and checks them against the Anthropic Claude Connector Directory review criteria. Every scorecard is
dated and re-runnable by you in one keyless call; results are point-in-time (tool definitions drift).

Last generated 2026-10-22.

- [DeepWiki](mcp-deepwiki-mcp-security.html) — `clear` injection verdict, 3 tools, 6 directory blocker(s)
- [Wolfram Alpha](mcp-wolfram-alpha-mcp-security.html) — `clear` injection verdict, 3 tools, directory-ready
- [Hugging Face](mcp-hugging-face-mcp-security.html) — `clear` injection verdict, 4 tools, directory-ready
- [Cloudflare Docs](mcp-cloudflare-docs-mcp-security.html) — `clear` injection verdict, 2 tools, directory-ready
- [Astro Docs](mcp-astro-docs-mcp-security.html) — `clear` injection verdict, 1 tools, 2 directory blocker(s)
- [Hive Intelligence](mcp-hive-intelligence-mcp-security.html) — `clear` injection verdict, 8 tools, 8 directory blocker(s)
- [Find A Domain](mcp-find-a-domain-mcp-security.html) — `clear` injection verdict, 2 tools, 4 directory blocker(s)

Scan a server not listed here:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://your-mcp-host/mcp&directory=true"
```

Method and the rest of the catalogue: [vet an MCP server before your agent trusts it](index.html).
Independent scans by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools).
