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


def _csv(ids):
    """Accept 'bitcoin,ethereum', ['bitcoin','ethereum'], or 'bitcoin' — return a CSV string."""
    if isinstance(ids, (list, tuple, set)):
        return ",".join(str(i).strip() for i in ids if str(i).strip())
    return str(ids).strip()


def token_prices(coins, paid: bool = False, private_key: str = None) -> dict:
    """Spot USD price + 24h change + a confidence score for up to 25 coins (keyless, Base x402).

    `coins` takes a CoinGecko-style id list — a comma string ('bitcoin,ethereum')
    or a Python list (['bitcoin', 'ethereum']). Free preview returns a 1-of-N
    sample; paid ($0.001) returns every requested coin. Shape matches the
    ``get_price(ids=...)`` ergonomics of pycoingecko, but keyless.
    """
    return _get("/crypto/prices", {"coins": _csv(coins)}, paid, private_key)


# pycoingecko-compatible alias: get_price(ids='bitcoin', ...)
def get_price(ids, paid: bool = False, private_key: str = None) -> dict:
    """Alias of token_prices() matching pycoingecko's get_price(ids=...) signature."""
    return token_prices(ids, paid=paid, private_key=private_key)


def defi_yields(project: str = None, limit: int = 20, paid: bool = False,
                private_key: str = None) -> dict:
    """Ranked DeFi pool yields (APY + TVL + risk-adjusted APY + APY trend) across chains.

    Pass `project` to filter to a protocol family ('lido', 'aave', 'curve', ...),
    or omit it for the top pools. Free preview returns the top-1 sample; paid
    ($0.001) returns the ranked set up to `limit` (max 25).
    """
    params = {"limit": limit}
    if project:
        params["project"] = project
    return _get("/defi/yields", params, paid, private_key)


def funding_rates(symbol: str = None, limit: int = 20, paid: bool = False,
                  private_key: str = None) -> dict:
    """5-venue perp funding (Binance+Bybit+OKX+Hyperliquid+dYdX) + CEX/DEX arb spread.

    Pass `symbol` ('BTC', 'ETH', ...) for one coin, or omit it for the top
    funding movers. Each row carries funding_spread_bps, best_long/short_venue
    and a LONGS_PAY/SHORTS_PAY signal. Free preview = top-1 sample; paid
    ($0.004) = ranked set up to `limit`.
    """
    params = {"limit": limit}
    if symbol:
        params["symbol"] = symbol
    return _get("/crypto/funding", params, paid, private_key)


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

    @tool
    def crypto_prices(coins: str) -> dict:
        """Spot USD price + 24h change for coins (comma-separated CoinGecko ids, e.g. 'bitcoin,ethereum')."""
        return token_prices(coins, paid=paid)

    @tool
    def defi_pool_yields(project: str = "") -> dict:
        """Ranked DeFi pool APY + TVL + risk-adjusted APY; pass a protocol family ('lido','aave') or '' for the top pools."""
        return defi_yields(project or None, paid=paid)

    @tool
    def perp_funding_rates(symbol: str = "") -> dict:
        """5-venue perp funding + CEX/DEX arb spread; pass a coin ('BTC') or '' for the top funding movers."""
        return funding_rates(symbol or None, paid=paid)

    return [base_token_report, base_swap_gate, crypto_prices,
            defi_pool_yields, perp_funding_rates]


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

    @tool("crypto_prices")
    def crypto_prices(coins: str) -> str:
        """Spot USD price + 24h change for coins (comma-separated CoinGecko ids, e.g. 'bitcoin,ethereum')."""
        return str(token_prices(coins, paid=paid))

    @tool("defi_pool_yields")
    def defi_pool_yields(project: str = "") -> str:
        """Ranked DeFi pool APY + TVL + risk-adjusted APY; pass a protocol family ('lido','aave') or '' for the top pools."""
        return str(defi_yields(project or None, paid=paid))

    @tool("perp_funding_rates")
    def perp_funding_rates(symbol: str = "") -> str:
        """5-venue perp funding + CEX/DEX arb spread; pass a coin ('BTC') or '' for the top funding movers."""
        return str(funding_rates(symbol or None, paid=paid))

    return [base_token_report, base_swap_gate, crypto_prices,
            defi_pool_yields, perp_funding_rates]
