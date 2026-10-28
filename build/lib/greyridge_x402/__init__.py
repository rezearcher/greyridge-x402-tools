"""Pre-trade safety gate for Base tokens, over x402 (USDC per call, no API key).

Free preview mode (default) needs no wallet. Paid mode signs an x402 USDC
authorization with your own key (pip install "greyridge-x402-tools[pay]").
"""
import os
import requests

BASE = os.environ.get("GREYRIDGE_X402_BASE", "https://x402-data-api.sigrunner.workers.dev")


def token_report(token: str, paid: bool = False, private_key: str = None) -> dict:
    """SAFE/CAUTION/AVOID verdict for a Base ERC-20 (symbol like 'aero' or 0x address): honeypot sell-sim, proxy risk, tax, liquidity. $0.01 paid."""
    return _get("/chain/token-report", {"token": token}, paid, private_key)


def swap_gate(token: str, paid: bool = False, private_key: str = None) -> dict:
    """GO/HOLD/BLOCK pre-trade gate for a Base ERC-20 before executing a swap. $0.008 paid."""
    return _get("/gate/swap", {"token": token}, paid, private_key)


def _get(path, params, paid, private_key):
    if not paid:
        r = requests.get(BASE + path + "/preview", params=params, timeout=30)
        r.raise_for_status()
        return r.json()
    from eth_account import Account
    from x402.clients.requests import x402_requests
    key = private_key or os.environ["X402_PRIVATE_KEY"]
    s = x402_requests(Account.from_key(key))
    r = s.get(BASE + path, params=params, timeout=60)
    r.raise_for_status()
    return r.json()


def langchain_tools(paid: bool = False):
    """Return LangChain tools (requires langchain-core)."""
    from langchain_core.tools import tool

    @tool
    def base_token_report(token: str) -> dict:
        """Safety verdict (SAFE/CAUTION/AVOID) for a Base ERC-20 before trading it."""
        return token_report(token, paid=paid)

    @tool
    def base_swap_gate(token: str) -> dict:
        """GO/HOLD/BLOCK decision for swapping into a Base ERC-20."""
        return swap_gate(token, paid=paid)

    return [base_token_report, base_swap_gate]


def crewai_tools(paid: bool = False):
    """CrewAI tools: pre-trade token safety gate for Base ERC-20s (preview is free, paid=True pays via x402)."""
    from crewai.tools import tool

    @tool("base_token_report")
    def base_token_report(token: str) -> str:
        """SAFE/CAUTION/AVOID report (honeypot sim, proxy, tax, liquidity) for a Base token address."""
        return str(token_report(token, paid=paid))

    @tool("base_swap_gate")
    def base_swap_gate(token: str) -> str:
        """GO/HOLD/BLOCK pre-trade gate for a Base token address; call before executing a swap."""
        return str(swap_gate(token, paid=paid))

    return [base_token_report, base_swap_gate]
