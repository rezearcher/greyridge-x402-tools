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
- [tandem.ac](mcp-tandem-ac-mcp-security.html) — `clear` injection verdict, 13 tools, directory-ready
- [Apex AI Academy](mcp-apexai-academy-mcp-security.html) — `clear` injection verdict, 30 tools, 31 directory blocker(s)
- [Agentic Engineering Periodic System](mcp-ase-academy-mcp-security.html) — `clear` injection verdict, 4 tools, 8 directory blocker(s)
- [Getlead](mcp-getle-ad-mcp-security.html) — `clear` injection verdict, 35 tools, directory-ready
- [Inside Ads](mcp-inside-ad-mcp-security.html) — `clear` injection verdict, 3 tools, 6 directory blocker(s)
- [BeachClubs.ae](mcp-beachclubs-ae-mcp-security.html) — `clear` injection verdict, 3 tools, 3 directory blocker(s)
- [Brainy Prices — UAE Cost of Living](mcp-prices-brainy-ae-mcp-security.html) — `clear` injection verdict, 26 tools, 26 directory blocker(s)
- [mcp.datadubai.ae](mcp-datadubai-ae-mcp-security.html) — `clear` injection verdict, 6 tools, directory-ready
- [EasyVoice text to speech](mcp-easyvoice-ae-mcp-security.html) — `clear` injection verdict, 7 tools, 7 directory blocker(s)
- [GENOSYS UAE](mcp-genosys-ae-mcp-security.html) — `clear` injection verdict, 11 tools, 11 directory blocker(s)
- [groTAX by Grovisor](mcp-grovisor-ae-mcp-security.html) — `clear` injection verdict, 8 tools, 8 directory blocker(s)
- [Plant Guide: Dubai gardening research](mcp-plantguide-ae-mcp-security.html) — `clear` injection verdict, 15 tools, directory-ready
- [Projectory](mcp-projectory-ae-mcp-security.html) — `clear` injection verdict, 5 tools, 5 directory blocker(s)
- [Propick Integration MCP](mcp-propick-ae-mcp-security.html) — `clear` injection verdict, 8 tools, 16 directory blocker(s)
- [Fenlight](mcp-fenlight-waggle-ae-mcp-security.html) — `clear` injection verdict, 8 tools, 8 directory blocker(s)
- [Vera](mcp-vera-waggle-ae-mcp-security.html) — `clear` injection verdict, 16 tools, directory-ready
- [Events.Aero](mcp-events-aero-mcp-security.html) — `clear` injection verdict, 5 tools, directory-ready
- [hood. — .hood name service](mcp-hood-ag-mcp-security.html) — `clear` injection verdict, 5 tools, 10 directory blocker(s)
- [mcp.goji.agency](mcp-goji-agency-mcp-security.html) — `clear` injection verdict, 9 tools, 16 directory blocker(s)
- [JustIdea Agency](mcp-justidea-agency-mcp-security.html) — `clear` injection verdict, 8 tools, directory-ready
- [Business Contact Finder](mcp-business-contact-finder-mcp-ottobot2025-workers-dev-mcp-security.html) — `clear` injection verdict, 1 tools, 2 directory blocker(s)
- [Contractor Licence Changes](mcp-license-changes-mcp-ottobot2025-workers-dev-mcp-security.html) — `clear` injection verdict, 2 tools, 4 directory blocker(s)
- [Licensed House Painters](mcp-house-painters-ottobot-agency-mcp-security.html) — `clear` injection verdict, 3 tools, 3 directory blocker(s)
- [Bureau public reader](mcp-thebureauoflostcontext-agency-mcp-security.html) — `clear` injection verdict, 5 tools, 5 directory blocker(s)
- [1Court Directory](mcp-state-1court-ai-mcp-security.html) — `clear` injection verdict, 4 tools, directory-ready
- [Achromat MOM](mcp-mom-achromat-ai-mcp-security.html) — `clear` injection verdict, 1 tools, directory-ready
- [actwise.ai](mcp-actwise-ai-mcp-security.html) — `clear` injection verdict, 2 tools, 2 directory blocker(s)
- [mcp.adoraads.ai](mcp-adoraads-ai-mcp-security.html) — `clear` injection verdict, 6 tools, directory-ready
- [advisorsai.ai](mcp-advisorsai-ai-mcp-security.html) — `clear` injection verdict, 1 tools, 1 directory blocker(s)
- [AFG: agents hire agents (test money)](mcp-afg-ai-mcp-security.html) — `clear` injection verdict, 18 tools, 18 directory blocker(s)

Scan a server not listed here:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://your-mcp-host/mcp&directory=true"
```

Method and the rest of the catalogue: [vet an MCP server before your agent trusts it](index.html).
Independent scans by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools).
