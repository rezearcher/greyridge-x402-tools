# greyridge-x402-tools

[![PyPI](https://img.shields.io/pypi/v/greyridge-x402-tools?logo=pypi&logoColor=white)](https://pypi.org/project/greyridge-x402-tools/)
[![GitHub Marketplace](https://img.shields.io/badge/GitHub_Marketplace-MCP_tool--poisoning_scan-2ea44f?logo=github)](https://github.com/marketplace/actions/mcp-server-tool-poisoning-scan)

Keyless **x402** APIs for AI agents — USDC per call on Base, free preview on every route, no account and no key. Two product lines:

1. **Jobs & hiring data** — a live, maintained Greenhouse feed with a stateful change-feed, a per-run freshness SLA, and keyless company enrichment. For sourcing, recruiting-ops and hiring-intel agents.
2. **Agent safety gates** — `mcpscan` (vet an MCP server for prompt-injection / tool-poisoning before your agent trusts it) and `rugcheck / swap-gate` (honeypot + pre-trade checks for Base tokens).

Jump to: [Jobs & hiring data](#jobs--hiring-data--live-maintained-pay-per-call) · [MCP server security](#state-of-mcp-server-security--what-we-found-scanning-144-live-servers) · [mcpscan](#mcpscan--vet-an-mcp-server-before-your-agent-trusts-it) · [rugcheck / swap-gate](#rugcheck--swap-gate--pre-trade-safety-for-base-tokens)

## Jobs & hiring data — live, maintained, pay-per-call

A normalized hiring feed built on **Greenhouse** — read from the live board at run time, not resold from a stale database. Priced per call in USDC on Base; every route has a free preview, no account or key.

The incumbent (`fantastic-jobs/greenhouse-jobs-api`, ~1,000 users) resells a roughly six-month database refreshed twice-hourly, so it cannot authoritatively answer "is *this* role open right now." This feed reads the board when you call it, and adds three things the resold DB does not ship:

- **Stateful change-feed** — every run diffs against the previous one: `new | changed | open | closed`, plus ghost-job detection (a role still open far past a configurable age threshold, default 60 days — a likely evergreen "ghost" post). No separate "new-only" scraper.
- **Per-run freshness SLA** — each response is stamped `OK | EMPTY | SCHEMA_DRIFT | DOWN`, so an agent knows whether it got live truth or hit a broken adapter, instead of silently consuming stale rows.
- **Keyless company enrichment** (`includeCompany`) — resolved domain, email provider, SaaS/tech stack, and domain age + registrar per board, derived live from DNS/MX/TXT and RDAP. The incumbent's equivalent fields come from a rented third-party key; ours use no paid API, and the domain is authoritative-or-verified (never guessed — `null` when it can't be confirmed).

Depth on every job: parsed location (city / state / country / remote), canonical employment type and seniority, salary when the posting states one, and a structured `requirements` block (a maintained skills taxonomy + minimum years + education level) — all parsed from the posting, no enrichment key.

### Endpoints (USDC on Base `eip155:8453`, free preview on each)

| Route | Returns | Price |
|---|---|---|
| `GET /jobs/search` | Normalized live jobs; `includeCompany`, change-feed, ghost flags, roster mode | **$0.004** |
| `GET /jobs/comp` | Normalized cross-posting compensation layer | **$0.005** |
| `GET /hiring/signal` | Whether a company is hiring and its open-role breakdown | **$0.003** |
| `GET /company/enrich` | Standalone firmographics: domain, email provider, SaaS stack, registration | **$0.01** |
| `GET /email/verify` | Deliverability: MX / SPF / DMARC, disposable + typo detection | **$0.002** |

Try it free — one company, first rows, no key:

```bash
curl "https://assetfactory-jobs-x402.sigrunner.workers.dev/jobs/preview?companies=stripe&includeCompany=true"
```

The paid route returns the full result set and otherwise `402`s with an x402 payment-required body any x402 wallet can satisfy (`/jobs/search` = 4000 micro-USDC = $0.004). No company list required: `useRoster=true` runs against a **self-pruning roster of 53 maintained Greenhouse boards** — more than half of a naive hand-built board list is already dead, which is exactly why the upkeep is the product.

**Honest gap vs the incumbent:** it has tenure, store-search ranking, and a large multi-company backfill in a single call; and we do not emit headcount / industry / HQ from a paid people-database (that needs a rented key, and we keep COGS keyless). We win on live truth, the change-feed, the freshness SLA, keyless enrichment, and price.

Also on Apify Store: [greenhouse-jobs-live](https://apify.com/greyridge-signals/greenhouse-jobs-live) · [company-enrichment-scraper](https://apify.com/greyridge-signals/company-enrichment-scraper) · [multi-ats-jobs-scraper](https://apify.com/greyridge-signals/multi-ats-jobs-scraper). Guides: https://rezearcher.github.io/greyridge-x402-tools/

## State of MCP server security — what we found scanning 144 live servers

We ran the `mcpscan` static audit against **144 public MCP servers** (1,470 advertised tools) and graded each one A–F. The result is the opposite of the usual headline:

- **100% passed the static prompt-injection / tool-poisoning test** — 143 graded **A**, 1 graded **B**, 0 flagged. None of these 144 servers shipped a hidden-instruction, conceal-from-user, data-exfiltration, cross-tool-shadowing or invisible-unicode pattern in its advertised tool metadata.
- **But 59.7% (86 of 144) carry at least one readiness or maintenance blocker** — missing tool descriptions/titles, over-long tool names, mixed read-write capabilities declared unsafely, unsupported capabilities, and maintenance / supply-chain drift. Only **40.3% (58 of 144)** are fully connector-directory-ready.

**The takeaway: for live MCP servers today, blatant tool-poisoning is rare; the real exposure is rot** — under-specified, drifting, or unmaintained tool surfaces that a one-shot "readiness score" misses and that get worse over time. That is why we grade *maintenance + supply-chain drift*, not just injection, and why we monitor continuously rather than scanning once.

Every number above is counted directly from the published scorecard corpus (grade scale: A 0–9, B 10–29, C 30–49, D 50–69, F 70+ risk, or any critical finding — our grade, not a third-party certification). **"Clear" means we found no static injection pattern; it does not mean "safe".** Browse the full corpus and per-server scorecards:

- **MCP security scorecards (all 144, ranked A–F):** https://rezearcher.github.io/greyridge-x402-tools/mcp-server-scorecards.html
- Examples: [Cloudflare Docs](https://rezearcher.github.io/greyridge-x402-tools/mcp-cloudflare-docs-mcp-security.html) · [Hugging Face](https://rezearcher.github.io/greyridge-x402-tools/mcp-hugging-face-mcp-security.html) · [DeepWiki](https://rezearcher.github.io/greyridge-x402-tools/mcp-deepwiki-mcp-security.html)

Want your server graded and a live **"MCP security: monitored"** badge your users can verify? Scan is free; continuous monitoring + drift alerts + the full itemized report is **$9.99/mo** → https://api.greyridgesignals.ai/pricing

## mcpscan — vet an MCP server before your agent trusts it

Every tool an MCP server advertises runs inside your agent's context — its name, description and JSON schema are read by the model, so a poisoned or injection-laden tool can steer the agent before it ever calls anything. Scan any server in one command, no key:

```
npx mcpscan https://mcp.deepwiki.com/mcp
```

or pin a reproducible build straight from the release tag, no install:

```
npx -y github:rezearcher/greyridge-x402-tools#v0.3.1 mcpscan https://mcp.deepwiki.com/mcp
```

Prints tools scanned, issue counts by severity, risk score, and a verdict (`clear` / `review` / `block`). **Exit code 2 on `block`**, so it drops straight into CI as a gate before you wire a new server to an agent. Static analysis of advertised tool metadata only — it never invokes your tools. Checks cover OWASP LLM01/LLM08 patterns: hidden instructions, conceal-from-user directives, data-exfiltration hints, cross-tool shadowing, and invisible-unicode payloads. Itemized findings with evidence and OWASP mapping: paid `/scan/mcp` ($0.05 USDC, x402 on Base).

Scanning a private or local server (nothing leaves your machine except the tool list):

```
npx github:rezearcher/greyridge-x402-tools mcpscan --from-egress egress.json
```

### Offline — audit an `mcp-egress` run with no network

If you already record a server with [mcp-egress](https://github.com/basitalisandhu/mcp-egress), score its `egress.json` **fully offline** — nothing leaves the machine:

```bash
mcp-egress run --calls calls.json --out egress.json -- uvx some-mcp-server
npx -y github:rezearcher/greyridge-x402-tools#v0.3.1 mcpscan --from-egress egress.json   # reads .tools[], exits 2 on block
```

Reads the recorded `.tools[]` (name/title/description/annotations) and applies the same tool-poisoning rules locally — no second connection to the server, no payment. Exit 0 clear / 1 review / 2 block. The one-liner is pinned to the `v0.3.1` release tag so a CI admission gate gets a fixed, reproducible artifact.

### Continuous monitoring — catch a server that turns hostile after you trust it

A one-time scan tells you a server is clean today. The real supply-chain risk is a server you already trust quietly changing its tool definitions later — a rug-pull on an approved dependency. Grey Ridge monitors your servers on a schedule and alerts you when a tool's description, schema or risk verdict changes:

- **$9.99/mo** — continuous monitoring with drift alerts, full itemized findings, and OWASP LLM01/LLM08 mapping for every server you track: **https://api.greyridgesignals.ai/pricing**

The CLI and Action above stay free forever for point-in-time scans.

### Badge for your MCP server's README

Live shields.io badge showing the scan verdict for any public MCP server (free, cached 6h):

```markdown
![mcp-scan](https://img.shields.io/endpoint?url=https%3A%2F%2Fapi.greyridgesignals.ai%2Fscan%2Fmcp%2Fbadge%3Furl%3DYOUR_MCP_URL)
```

Replace `YOUR_MCP_URL` with your URL-encoded server endpoint (e.g. `https%3A%2F%2Fmcp.deepwiki.com%2Fmcp`).

### As a GitHub Action — admission gate for MCP servers

Copy this into `.github/workflows/mcp-security-gate.yml` to fail CI whenever a third-party MCP server you depend on starts advertising tool-poisoning / prompt-injection patterns (e.g. a supply-chain rug-pull on an already-trusted server):

```yaml
name: MCP security gate
on: [push, pull_request]
jobs:
  mcp-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: rezearcher/greyridge-x402-tools@v0.3.1
        with:
          url: https://your-mcp-host/mcp   # the MCP server your agent trusts
```

Exit code mirrors the `mcpscan` CLI: `2` on `block`, `1` on `review`, `0` on `clear`, and `3` if the scan could not run (**fails closed**, so a broken scan never silently passes an admission gate). Any non-zero exit fails the job.

**Free vs paid in CI:** the Action runs the free preview (verdict + severity counts) on every push — $0, no key. When a job fails and you need the *itemized findings with evidence + OWASP LLM01/LLM08 mapping* to fix it, the free preview line points you at the paid `GET /scan/mcp?url=` ($0.05 USDC, x402 on Base) — a zero-egress `POST /scan/mcp` with your `tools` array works too if the server isn't publicly reachable.

## DeFi & crypto data — keyless, named functions

Spot prices, DeFi pool yields, and 5-venue perp funding as first-class Python functions — **no API key**, a free preview on every call, and x402 USDC settlement only when you ask for the full set. Every competitor SDK (pycoingecko-pro, the official `coingecko-sdk`, the GoPlus SDK) gates its named functions behind an account key; these do not.

```bash
pip install greyridge-x402-tools
```

```python
from greyridge_x402 import token_prices, defi_yields, funding_rates

token_prices("bitcoin,ethereum")   # spot USD price + 24h change + confidence (free preview)
token_prices(["sol", "aero"])      # a list works too
defi_yields("lido")                # ranked APY + TVL + risk-adjusted APY for a protocol family
funding_rates("BTC")               # 5-venue funding + CEX/DEX arb spread + LONGS_PAY/SHORTS_PAY signal

# Full result set over x402 (your own Base USDC key):
#   pip install "greyridge-x402-tools[pay]"
defi_yields("aave", paid=True)     # ranked set, reads X402_PRIVATE_KEY
```

Migrating from pycoingecko? `get_price(ids="bitcoin,ethereum")` is a drop-in alias of `token_prices`.

Terminal:

```bash
greyridge-data prices bitcoin,ethereum
greyridge-data yields lido
greyridge-data funding BTC
```

The free preview returns a representative sample (top-1 pool / funding row, or a 1-of-N price); the paid routes return the ranked set — `/crypto/prices` ($0.001, up to 25 coins), `/defi/yields` ($0.001), `/crypto/funding` ($0.004, Binance+Bybit+OKX+Hyperliquid+dYdX). Keyless, Base-native, pay-per-call.

## rugcheck / swap-gate — pre-trade safety for Base tokens

Honeypot sell-simulation, proxy/tax/liquidity checks → `SAFE` / `CAUTION` / `AVOID`, plus a `GO` / `HOLD` / `BLOCK` swap gate.

```bash
pip install greyridge-x402-tools
```

Terminal in 10 seconds — the exit code is the gate (`0` GO, `1` HOLD, `2` BLOCK), so it drops straight into a script or CI step:

```bash
greyridge-gate aero                    # GO    SAFE  risk=15  ...
greyridge-report 0xabc... --json       # full report as JSON
greyridge-gate 0xabc... || echo "skip this trade"
```

```python
from greyridge_x402 import token_report, swap_gate
print(token_report("aero"))            # free preview, no wallet
print(swap_gate("0x..."))              # free preview

# paid (x402, $0.01 / $0.008 per call), your own key:
#   pip install "greyridge-x402-tools[pay]"
token_report("0x...", paid=True)       # reads X402_PRIVATE_KEY
```

Note: the preview path is tested; the paid path uses the x402 Python SDK `x402_requests` client and has not been exercised by us (we do not pay our own API).

### CrewAI

```python
from greyridge_x402 import crewai_tools
tools = crewai_tools()   # free preview; crewai_tools(paid=True) pays via x402 (set a Base USDC key)
agent = Agent(role="trader", tools=tools, ...)
```

Tools: `base_token_report` (SAFE/CAUTION/AVOID), `base_swap_gate` (GO/HOLD/BLOCK), plus the data tools `crypto_prices`, `defi_pool_yields` and `perp_funding_rates`. `langchain_tools()` / `crewai_tools()` return all five. Measured latency: `docs/STATUS.md` in the data-api repo.

### Drop-in swap guard (JS)

`swap-gate.mjs` — `gateToken(addr)` calls the free preview (no wallet); pass an x402 `fetchPaid` to use the paid `/gate/swap` ($0.008). `guardedSwap(addr, doSwap)` runs your swap only when the decision is `go`.

## Framework integrations
- LangChain / CrewAI: `greyridge_x402.langchain_tools()` / `crewai_tools()`
- ElizaOS: `integrations/elizaos/index.mjs` (action `CHECK_BASE_TOKEN`)
- Coinbase AgentKit / any x402 wallet: `integrations/agentkit/README.md`

Guides (MCP scan, honeypot check, pre-trade gate, x402): https://rezearcher.github.io/greyridge-x402-tools/

API discovery: https://api.greyridgesignals.ai/.well-known/x402 · contact@greyridgesignals.ai
MIT.

## Verify x402 payments from your MCP client (free)

```bash
uvx --from greyridge-x402-tools greyridge-x402-verify
```

Claude Desktop / Cursor config:

```json
{ "mcpServers": { "x402-verify": { "command": "uvx", "args": ["--from", "greyridge-x402-tools", "greyridge-x402-verify"] } } }
```

Two tools, no wallet or API key: `x402_preflight(url)` checks an endpoint before you pay (will it settle, charged vs advertised price, unpaid leak, sanctioned or scam payee), and `x402_receipt_verify(tx, payto)` confirms a Base USDC settlement landed at the right recipient, reading the receipt from two RPCs. The hosted preview allows 3 real checks per IP per day; unmetered paid versions are $0.001 and $0.004 per call.
