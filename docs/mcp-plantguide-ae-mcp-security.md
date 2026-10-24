---
title: "Is the Plant Guide: Dubai gardening research MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Plant Guide: Dubai gardening research MCP server (https://plantguide.ae/mcp), run 2026-10-24: advertises what_to_plant, search_plants, get_plant; 15 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Plant Guide: Dubai gardening research MCP server — security & directory-readiness scorecard

**Server:** `https://plantguide.ae/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 15 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

What to plant in Dubai, indoor plants, plant care in the heat, garden styles and Garden Care prices.

When an agent connects Plant Guide: Dubai gardening research, the model reads all 15 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`plantguide.ae`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Plant Guide: Dubai gardening research

- **No tool-poisoning or prompt-injection patterns** were found across the 15 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 15 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 15 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Plant Guide: Dubai gardening research server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Plant Guide: Dubai gardening research server advertises

The server describes itself to connecting agents as: *Plant Guide answers questions about gardening and houseplants in Dubai: what to plant when, which plants cope with Dubai heat, salt and drought, which indoor plants suit a Dubai home, garden styles, guides, and what monthly garden and pool care costs. Everyth…*

These are the 15 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`what_to_plant`** — What to sow and plant in Dubai in a given month or season, plus what is flowering, fruiting or ready to harvest, the month's verdict, tips, watch-outs and the climate. Defaults to… _(parameters: month, season, group, limit)_
- **`search_plants`** — Search and filter the library of plants rated for Dubai's heat, salt, drought and shade: by name (English, botanical, Arabic or a local name such as Hindi or Tagalog), category, s… _(parameters: query, category, group, sun, water, minHeat)_
- **`get_plant`** — Everything about one plant in Dubai: ratings, size, sun and water, seasonal calendar, watering in summer and winter, soil, feeding, pruning, pests, common mistakes, varieties, des… _(parameters: plant)_
- **`get_planting_calendar`** — Sow, plant, flower, harvest, prune and feed months for a set of plants (by slug, category or group), as a 12-month grid. Use it to compare timings across several plants. _(parameters: slugs, category, group)_
- **`get_dubai_climate`** — Dubai's monthly average high and low temperatures and rainfall (WMO 1991–2020 normals), the planting season and summer work-ban months, and the garden and pool tasks for each mont…
- **`list_garden_styles`** — The garden styles we design in Dubai (tropical, manicured, luxury, desert modern) with mood, upkeep effort, water use, build cost per m² and key plants.
- **`get_garden_style`** — The full guide to one garden style: why choose it, the mood, its anatomy, upkeep (weekly, monthly, seasonal), water, who it suits and doesn't, common beliefs vs reality, Dubai not… _(parameters: style)_
- **`search_guides`** — Find our practical guides (planting calendar, summer watering, lawn grasses, indoor plants, costs, approvals and more) by keyword, topic or month. Topics (pillar): planting, indoo… _(parameters: query, pillar, month)_
- **`get_guide`** — One guide in full, as Markdown, with its FAQ and sources. _(parameters: slug)_
- **`get_kitchen_garden_guide`** — How to grow vegetables, herbs and fruit at home in Dubai: the sowing and harvest calendar, raised beds vs pots vs a fruit-tree corner, a step-by-step bed build, what to do in summ…
- **`get_indoor_plant_guide`** — The starting point for anything about houseplants and indoor plants in Dubai: choosing by light (low, medium, bright indirect, direct sun), by room and for pets; what air conditio… _(parameters: section, month)_
- **`get_indoor_style`** — The full guide to one indoor plant style for Dubai homes: mood and palette, key plants with their light and pet safety, pots and materials, a starter set with an AED budget, how t… _(parameters: slug)_
- **`estimate_garden_care_price`** — Monthly Garden Care price (AED, excluding 5% VAT) for a Dubai villa from garden area, lawn type, pool size, complexity and number of trees, with visit frequency and the breakdown. _(parameters: areaM2, lawn, pool, complexity, trees)_
- **`build_designer_link`** — A link that opens our free 3D garden planner with the given plants already in the plant list, so the person can plan a layout or send the list to our designer. _(parameters: plants)_
- **`get_contact_link`** — A WhatsApp click-to-chat link with a pre-filled message (topic, plants, community and notes) for when the person wants a quote, a visit or help from our team. Nothing is sent unti… _(parameters: topic, plants, community, note)_

## Scan Plant Guide: Dubai gardening research yourself, or claim its badge

Re-run this exact Plant Guide: Dubai gardening research check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `plantguide.ae`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://plantguide.ae/mcp&directory=true"
```

For the itemized findings on Plant Guide: Dubai gardening research — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://plantguide.ae/mcp"}`. If you
run `plantguide.ae`, [claim a measured verified-owner badge for Plant Guide: Dubai gardening research free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=plantguide.ae)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dplantguide.ae&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://plantguide.ae/mcp)
```

Keeping the Plant Guide: Dubai gardening research badge green as its tools change — six-hourly re-scans of `plantguide.ae`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `plantguide.ae` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
