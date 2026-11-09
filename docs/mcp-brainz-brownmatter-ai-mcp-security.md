---
title: "Is the Brainz MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Brainz MCP server (https://brainz.brownmatter.ai/mcp), run 2026-11-09: advertises search_concepts, get_concept, get_related; 17 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Brainz MCP server — security & directory-readiness scorecard

**Server:** `https://brainz.brownmatter.ai/mcp`
**Scanned:** 2026-11-09 · **Tools advertised:** 17 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Shared product-knowledge graph for AI agent fleets — vault tools + agent self-signup over MCP.

When an agent connects Brainz, the model reads all 17 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`brainz.brownmatter.ai`, scanned 2026-11-09; the verdict below is `clear`.

## What the scan found on Brainz

- **No tool-poisoning or prompt-injection patterns** were found across the 17 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **3 of 17 advertised tool(s) name a state-changing action** (`delete_concept`, `create_task`, `create_vault`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 17 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Brainz server
on 2026-11-09; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Brainz server advertises

The server describes itself to connecting agents as: *# Brainz — shared product knowledge graph This server is one Brainz vault: a product's features, specs, decisions, constraints and tasks, stored as linked markdown concepts. - 'search_concepts', 'list_concepts', 'get_concept' and 'get_related' find and read c…*

These are the 17 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`search_concepts`** — Search the product knowledge vault by free-text query. Useful when you need product knowledge but don't yet know which concept ids exist. Returns ranked hits (id, title, type, sco… _(parameters: query, mode, product, tags, type, limit)_
- **`get_concept`** — Fetch one concept by exact id: full markdown body, metadata, and its direct graph neighbors (each with the relation that connects it). Use after search_concepts or when another no… _(parameters: id)_
- **`get_related`** — Walk the knowledge graph outward from a concept and return everything within 'depth' hops, with distance and the edge path that reached it. Use to map the blast radius before chan… _(parameters: id, depth, limit, relations)_
- **`get_context`** — Assemble a markdown briefing of the concepts most relevant to a query and/or explicit ids, expanded through the graph and trimmed to a token budget. The briefing is self-contained… _(parameters: query, ids, product, depth, tokenBudget)_
- **`upsert_concept`** — Write a concept note into the vault (creates or overwrites the markdown file, then reindexes it). Use to capture new product knowledge discovered during a task — a decision made,… _(parameters: id, title, body, type, status, product)_
- **`delete_concept`** — Remove a concept from the vault and all of its outgoing edges. Use to clear a note that is wrong, obsolete, or junk (e.g. a probe or test node that shouldn't be in the graph). Ide… _(parameters: id)_
- **`link_concepts`** — Add a typed, directed edge between two existing concepts by editing the 'from' note's frontmatter (e.g. lead-scoring depends_on contact-model). Use when you notice a relationship… _(parameters: from, to, relation)_
- **`list_concepts`** — Enumerate concept metadata (no bodies), optionally filtered by product, type, or a single tag. Use to get the lay of the land in an unfamiliar vault, to audit what exists (e.g. al… _(parameters: product, type, tag)_
- **`vault_stats`** — Summarize the vault: counts of concepts and edges, the products and tags in use, a breakdown by concept type, and whether semantic search is available. Useful for gauging how much…
- **`onboard`** — Index an existing product's codebase into this vault. {action: "start"} returns the onboarding playbook: a method for surveying the codebase and recording its product knowledge (d… _(parameters: action, productName, repoHint, summary, areaList)_
- **`sync`** — Re-index an onboarded vault after the code changes (drift). {action: "start"} returns the sync playbook: the vault's last_synced_at, a coverage map over the concepts' code_areas,… _(parameters: action, productName, summary, areaList, changedPaths)_
- **`dream`** — Dreaming: a scheduled consolidation sweep over this vault. Light stages what changed since the last dream (near-duplicate concepts, finished task outcomes, hygiene counts); REM as… _(parameters: action, id, proposals, limit, enabled, cadenceHours)_
- **`list_tasks`** — List the vault's work pile: 'task'-type concepts with their lifecycle (open/taken/done), oldest first, including who has taken each one (takenBy). Filter by taskStatus or by the d… _(parameters: taskStatus, domain)_
- **`take_task`** — Claim a task and get its briefing in one call. Pass an 'id' to claim a specific task, or omit it to claim the next open task (oldest open by createdAt then id). Atomically flips t… _(parameters: id, takenBy)_
- **`complete_task`** — Mark a task done. Sets taskStatus=done + doneAt and appends 'outcome' to the task body as an Outcome section. The result carries a one-line 'reminder' that the rest of the graph i… _(parameters: id, outcome)_
- **`create_task`** — Turn a finding into first-class work: creates a 'task'-type concept with taskStatus=open and the given relations — part_of a domain, 'realizes' stories/features, 'governed_by' spe… _(parameters: title, body, domain, realizes, governedBy, codeAreas)_
- **`create_vault`** — Create a new, empty vault owned by you and add it to this connection. Returns the new vault and the vaults this connection can now use. Once a connection covers more than one vaul… _(parameters: name, slug)_

## Maintenance & supply-chain — the risk Brainz's static scan can't see

A prompt-injection scan reads Brainz's advertised tool metadata at one moment. It cannot tell you the project behind `brainz.brownmatter.ai` went quiet, or that a package it ships picked up a CVE last week — the two ways a server that scanned clean becomes a liability without its tool definitions changing at all. These are measured, dated reads:

- **Maintenance: not measurable** — no public source repository to measure maintenance from (no grade asserted either way).
- **Supply chain: not measurable** — this server declares no published package to trace upstream advisories against.

A one-shot scan (and the free one-shot competitors) can only ever show the snapshot above. The value in watching `brainz.brownmatter.ai` is the **change**: the alert the week its upstream ships an advisory, or the month its repo crosses from active into stale. That continuous drift watch — six-hourly re-checks of all three signals with an alert on any worsening — is the [`$9.99/mo` monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). A grade here is a point-in-time measurement, not a warranty.

## Scan Brainz yourself, or claim its badge {#claim}

Re-run this exact Brainz check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `brainz.brownmatter.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://brainz.brownmatter.ai/mcp&directory=true"
```

For the itemized findings on Brainz — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://brainz.brownmatter.ai/mcp"}`. If you
run `brainz.brownmatter.ai`, [claim a measured verified-owner badge for Brainz free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=brainz.brownmatter.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dbrainz.brownmatter.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://brainz.brownmatter.ai/mcp)
```

Keeping the Brainz badge green as its tools change — six-hourly re-scans of `brainz.brownmatter.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `brainz.brownmatter.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-11-09; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
