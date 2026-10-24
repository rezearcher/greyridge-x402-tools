---
title: "Is the Catalyst evidence graph MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the Catalyst evidence graph MCP server (https://catalystproject.ai/mcp), run 2026-10-24: advertises find_evidence, search_nodes, get_findings; 7 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# Catalyst evidence graph MCP server — security & directory-readiness scorecard

**Server:** `https://catalystproject.ai/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 7 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Findings on what compounds and supplements do in the body, with evidence strength, quote and paper.

When an agent connects Catalyst evidence graph, the model reads all 7 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`catalystproject.ai`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on Catalyst evidence graph

- **No tool-poisoning or prompt-injection patterns** were found across the 7 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **All 7 advertised tool(s) read-only by name** — no create/update/delete verbs in the tool names. A lower-impact surface, though a poisoned read tool can still exfiltrate or mislead, which is why the static read still matters.

Grade `A` — No tool-poisoning/injection patterns detected across 7 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the Catalyst evidence graph server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the Catalyst evidence graph server advertises

The server describes itself to connecting agents as: *Catalyst is building computational infrastructure for human biology, starting with a provenance-aware knowledge graph of biological entities and biomedical findings. The current MCP interface exposes graph search, study findings with their evidence strength,…*

These are the 7 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`find_evidence`** — Use this when someone asks what a supplement, nutrient, drug, food compound or plant does in the body, or whether it affects something specific (for example "does magnesium help s… _(parameters: query, about, evidence_strength, limit, detail)_
- **`search_nodes`** — Search the Catalyst evidence graph by name or synonym (for example "magnesium", "vitamin D", "sleep", "creatine"). Returns node ids to pass to get_findings or get_relations. Each… _(parameters: query)_
- **`get_findings`** — The curated study findings for one node: for a compound, organism or material, what it has been shown to affect; for an outcome, which compounds have been studied against it. summ… _(parameters: node_id, limit, about, evidence_strength, detail)_
- **`get_finding`** — One finding by its id (the last part of a permalink, /e/{id}): the claim, its evidence strength and what that level means, the verbatim quote, the study design and the paper, and… _(parameters: finding_id)_
- **`get_relations`** — What public reference databases (Reactome, UniProt, Rhea, ChEBI and others) record about a node: transporters, enzymes, pathways, expression. Every row is assertion_class 'inferre… _(parameters: node_id, predicate, limit, offset)_
- **`get_reactions`** — Biochemical reactions from Rhea and Human-GEM that a compound is a substrate or product of, or that a protein catalyses or transports. Every row is assertion_class 'inferred': a r… _(parameters: node_id, limit, offset)_
- **`reach`** — Breadth-first reachability through the reactions two public databases (Rhea, Human-GEM) record: what a compound could become, and through which reactions and enzymes, within up to… _(parameters: from_id, to_id, depth, limit, offset)_

## Scan Catalyst evidence graph yourself, or claim its badge

Re-run this exact Catalyst evidence graph check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `catalystproject.ai`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://catalystproject.ai/mcp&directory=true"
```

For the itemized findings on Catalyst evidence graph — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://catalystproject.ai/mcp"}`. If you
run `catalystproject.ai`, [claim a measured verified-owner badge for Catalyst evidence graph free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=catalystproject.ai)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dcatalystproject.ai&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://catalystproject.ai/mcp)
```

Keeping the Catalyst evidence graph badge green as its tools change — six-hourly re-scans of `catalystproject.ai`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `catalystproject.ai` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
