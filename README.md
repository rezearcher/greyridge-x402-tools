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

API discovery: https://x402-data-api.sigrunner.workers.dev/.well-known/x402 · contact@greyridgesignals.ai
MIT.
