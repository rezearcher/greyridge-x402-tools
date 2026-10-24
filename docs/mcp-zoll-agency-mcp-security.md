---
title: "Is the zoll.agency MCP server safe? Security & Claude Directory readiness scan"
description: "Independent, measured security and Claude Connector Directory readiness scan of the zoll.agency MCP server (https://zoll.agency/mcp), run 2026-10-24: advertises kumulierung_pruefen, praeferenznachweis_bestimmen, incoterms_waehlen; 7 tools scanned, injection verdict 'clear', ready for the Claude Connector Directory. Re-run it yourself in one keyless call."
---
# zoll.agency MCP server — security & directory-readiness scorecard

**Server:** `https://zoll.agency/mcp`
**Scanned:** 2026-10-24 · **Tools advertised:** 7 · **Injection verdict:** `clear` · **Directory:** ready for the Claude Connector Directory

Regeln und Suchen zur Ausfuhr aus der EU: Kumulierung, Präferenznachweis, Incoterms, Warennummer.

When an agent connects zoll.agency, the model reads all 7 of its advertised tool definition(s)
before any tool runs — so a poisoned description or a hidden instruction in any one of them can steer
the agent first. This scorecard is an independent, static read of exactly that advertised metadata for
`zoll.agency`, scanned 2026-10-24; the verdict below is `clear`.

## What the scan found on zoll.agency

- **No tool-poisoning or prompt-injection patterns** were found across the 7 tool definition(s) this server advertises.
- **Claude Connector Directory readiness: ready.** Every advertised tool satisfies the structural rules Anthropic's published review criteria check for (names, annotations, permission hints, no catch-all read+write tool, no unsupported capability).
- **1 of 7 advertised tool(s) name a state-changing action** (`kumulierung_pruefen`). Write-capable tools are the higher-impact surface if a description is ever poisoned, so they are the ones to re-check on every drift alert.

Grade `A` — No tool-poisoning/injection patterns detected across 7 tool(s). Clean on static checks. The scan is **static analysis of the advertised `tools/list` metadata only**:
it never invokes a tool and never sends data anywhere. It is a point-in-time read of the zoll.agency server
on 2026-10-24; an MCP server's tool definitions can change at any time (the "drift" risk this scorecard
makes visible), so a clean result today is not a guarantee for tomorrow.

## Tools the zoll.agency server advertises

The server describes itself to connecting agents as: *Werkzeuge mit den allgemeinen Regeln und Suchen, die zoll.agency auf seinen Seiten zeigt: Kumulierung, Präferenznachweis, Incoterms®-Klausel, Warennummer im amtlichen Wortlaut, ob eine elektronische Ausfuhranmeldung nötig ist, Suche im Ratgeber, Leistungen un…*

These are the 7 tool definition(s) any agent reads before it acts — the exact surface this scan inspects for tool-poisoning and hidden-instruction patterns. Names and descriptions are read verbatim from the server's public `tools/list`:

- **`kumulierung_pruefen`** — Darf Vormaterial aus einem Partnerland der EU für den Ursprung der fertigen Ware zählen, wenn sie in ein bestimmtes Land verkauft wird? Nach der Pan-Europa-Mittelmeer-Kumulierung… _(parameters: vormaterial, bestimmungsland, behandlungen, nachweis)_
- **`praeferenznachweis_bestimmen`** — Welcher Präferenznachweis gilt für die Ausfuhr aus der EU in ein Land (EUR.1, A.TR, Erklärung zum Ursprung auf der Rechnung, REX), mit Wertgrenze und Wortlaut der Erklärung. Zeigt… _(parameters: land, warenwert_eur)_
- **`incoterms_waehlen`** — Ordnet Antworten zu Transportweg, Fracht, Gefahrübergang, Versicherung, Einfuhrabgaben und Abladen einer Klausel der Incoterms® 2020 zu, mit der Angabe für Feld 14 01 der Ausfuhra… _(parameters: weg, fracht, gefahr, versicherung, einfuhr, entladen)_
- **`warennummer_suchen`** — Sucht mit Wörtern oder einer Nummer (2 bis 11 Ziffern) in der Kombinierten Nomenklatur und zeigt höchstens 10 Codes mit dem amtlichen Wortlaut, nach Code sortiert, ohne Rangfolge.… _(parameters: suchtext)_
- **`ausfuhranmeldung_noetig`** — Der Satz der Vorprüfung von zoll.agency für Bestimmungsland, Warenwert und Gewicht der ganzen Lieferung, nach der Grenze von 1.000 EUR und 1.000 kg (Art. 137 UZK-DA), dazu was je… _(parameters: bestimmungsland, warenwert_eur, gewicht_kg, versandweg)_
- **`ratgeber_suchen`** — Sucht in den Seiten von zoll.agency (Ratgeber, Themen, Werkzeuge, Leistungen) wie das Suchfeld der Seite und gibt höchstens 10 Treffer mit Titel, einem Satz und Adresse zurück. _(parameters: suchtext)_
- **`leistungen_und_preise`** — Die Leistungen von zoll.agency mit einem Satz, dem Preis brutto und der Adresse der Seite, wie auf /leistungen.

## Scan zoll.agency yourself, or claim its badge

Re-run this exact zoll.agency check yourself, keyless — the free response carries the verdict and the
directory-blocker count for `zoll.agency`:

```bash
curl "https://x402-data-api.sigrunner.workers.dev/scan/mcp/preview?url=https://zoll.agency/mcp&directory=true"
```

For the itemized findings on zoll.agency — which tool, which OWASP LLM01/LLM08 pattern, and which Claude
Directory criteria fail and how to fix each — the zero-egress paid report is one `$0.05 USDC`
[x402](https://x402.org) call: `POST https://x402-data-api.sigrunner.workers.dev/scan/mcp` with `{"directory":true,"url":"https://zoll.agency/mcp"}`. If you
run `zoll.agency`, [claim a measured verified-owner badge for zoll.agency free](https://x402-data-api.sigrunner.workers.dev/scan/verify?domain=zoll.agency)
(one automated DNS-TXT check, no human review) and drop it in your README:

```markdown
[![MCP security: verified](https://img.shields.io/endpoint?url=https%3A%2F%2Fx402-data-api.sigrunner.workers.dev%2Fscan%2Fverify%2Fbadge%3Fdomain%3Dzoll.agency&style=flat-square)](https://x402-data-api.sigrunner.workers.dev/scan/report?url=https://zoll.agency/mcp)
```

Keeping the zoll.agency badge green as its tools change — six-hourly re-scans of `zoll.agency`, drift alerts, the
dated posture-history timeline and the full report — is the `$9.99/mo`
[monitoring subscription](https://x402-data-api.sigrunner.workers.dev/pricing). The claim and the badge are free; a green badge means no
injection patterns were found on the dates shown — a measured signal, not a warranty of safety.

## More

- [Scan any MCP server for prompt injection / tool poisoning](scan-mcp-server-prompt-injection.html)
- [Why was my Claude connector rejected? — directory readiness criteria](claude-connector-directory-readiness.html)
- [All scanned MCP servers](mcp-server-scorecards.html)

Independent scan of `zoll.agency` by [Grey Ridge Signals](https://github.com/rezearcher/greyridge-x402-tools),
measured 2026-10-24; re-run the command above for a current result. Questions: contact@greyridgesignals.ai
