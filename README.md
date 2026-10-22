# greyridge-x402-tools

Pre-trade safety gate for Base tokens as agent tools. Backed by a keyless x402 API (USDC per call on Base): honeypot sell-simulation, proxy/tax/liquidity checks → SAFE / CAUTION / AVOID, plus a GO / HOLD / BLOCK swap gate.

```bash
pip install "git+https://github.com/rezearcher/greyridge-x402-tools"
```

```python
from greyridge_x402 import token_report, swap_gate
print(token_report("aero"))            # free preview, no wallet
print(swap_gate("0x..."))              # free preview

# paid (x402, $0.01 / $0.008 per call), your own key:
#   pip install "greyridge-x402-tools[pay] @ git+https://github.com/rezearcher/greyridge-x402-tools"
token_report("0x...", paid=True)       # reads X402_PRIVATE_KEY
```

Note: preview path is tested; the paid path uses the x402 Python SDK `x402_requests` client and has not been exercised by us (we do not pay our own API).

LangChain / CrewAI: `from greyridge_x402 import langchain_tools; tools = langchain_tools()`.

Guides (honeypot check, pre-trade gate, x402): https://rezearcher.github.io/greyridge-x402-tools/

API discovery: https://x402-data-api.sigrunner.workers.dev/.well-known/x402 · contact@greyridgesignals.ai
MIT.


## CrewAI

```python
# pip install "git+https://github.com/rezearcher/greyridge-x402-tools"
from greyridge_x402 import crewai_tools
tools = crewai_tools()   # free preview; crewai_tools(paid=True) pays via x402 (set a Base USDC key)
agent = Agent(role="trader", tools=tools, ...)
```

Tools: `base_token_report` (SAFE/CAUTION/AVOID) and `base_swap_gate` (GO/HOLD/BLOCK). Measured latency: `docs/STATUS.md` in the data-api repo.

## Drop-in swap guard (JS)

`swap-gate.mjs` — `gateToken(addr)` calls the free preview (no wallet); pass an x402 `fetchPaid` to use the paid `/gate/swap` ($0.008). `guardedSwap(addr, doSwap)` runs your swap only when the decision is `go`.

## mcpscan — vet an MCP server before your agent trusts it

```
npx -y github:rezearcher/greyridge-x402-tools#v0.2.0 mcpscan https://mcp.deepwiki.com/mcp
```
Free preview: tools scanned, issue counts by severity, risk score, verdict (clear/review/block). Exit code 2 on `block`, so it works as a CI gate. Static analysis of advertised tool metadata only; it never calls your tools. Itemized findings with evidence + OWASP mapping: paid `/scan/mcp` ($0.05 USDC, x402 on Base).

### Offline — audit an `mcp-egress` run with no network

If you already record a server with [mcp-egress](https://github.com/basitalisandhu/mcp-egress), score its `egress.json` **fully offline** — nothing leaves the machine:

```bash
mcp-egress run --calls calls.json --out egress.json -- uvx some-mcp-server
npx -y github:rezearcher/greyridge-x402-tools#v0.2.0 mcpscan --from-egress egress.json   # reads .tools[], exits 2 on block
```

Reads the recorded `.tools[]` (name/title/description/annotations) and applies the same tool-poisoning rules locally — no second connection to the server, no payment. Exit 0 clear / 1 review / 2 block. The one-liner is pinned to the `v0.2.0` release tag so a CI admission gate gets a fixed, reproducible artifact.

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
      - uses: rezearcher/greyridge-x402-tools@v0.2.1
        with:
          url: https://your-mcp-host/mcp   # the MCP server your agent trusts
```

Exit code mirrors the `mcpscan` CLI: `2` on `block`, `1` on `review`, `0` on `clear`, and `3` if the scan could not run (**fails closed**, so a broken scan never silently passes an admission gate). Any non-zero exit fails the job.

**Free vs paid in CI:** the Action runs the free preview (verdict + severity counts) on every push — $0, no key. When a job fails and you need the *itemized findings with evidence + OWASP LLM01/LLM08 mapping* to fix it, the free preview line points you at the paid `GET /scan/mcp?url=` ($0.05 USDC, x402 on Base) — a zero-egress `POST /scan/mcp` with your `tools` array works too if the server isn't publicly reachable.

## Framework integrations
- LangChain / CrewAI: `greyridge_x402.langchain_tools()` / `crewai_tools()`
- ElizaOS: `integrations/elizaos/index.mjs` (action `CHECK_BASE_TOKEN`)
- Coinbase AgentKit / any x402 wallet: `integrations/agentkit/README.md`
