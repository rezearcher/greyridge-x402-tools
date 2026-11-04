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
    or a Python list (['bitcoin', 'ethereum']). The free path returns EVERY coin
    you request 3×/IP/day (then a 1-of-N sample + the paid URL); paid ($0.001) is
    unmetered. Shape matches the ``get_price(ids=...)`` ergonomics of pycoingecko,
    but keyless.
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
    or omit it for the top pools. The free path returns the COMPLETE ranked list
    for your query 3×/IP/day (then a top-1 sample + the paid URL); paid ($0.001)
    is unmetered, up to `limit` (max 25).
    """
    params = {"limit": limit}
    if project:
        params["project"] = project
    return _get("/defi/yields", params, paid, private_key)


def funding_rates(symbol: str = None, limit: int = 20, paid: bool = False,
                  private_key: str = None) -> dict:
    """6-venue perp funding (Binance+Bybit+OKX+Hyperliquid+dYdX+Gate) + OI-weighted CEX/DEX arb verdict.

    Pass `symbol` ('BTC', 'ETH', ...) for one coin, or omit it for the top
    funding movers. Each row carries per-venue open_interest_usd,
    funding_spread_bps, best_long/short_venue (thin-book venues screened out so
    the arb is executable) and a LONGS_PAY/SHORTS_PAY signal. The free path =
    the COMPLETE ranked feed + arb verdict 3×/IP/day (then a top-1 sample + the
    paid URL); paid ($0.004) is unmetered, ranked set up to `limit`.
    """
    params = {"limit": limit}
    if symbol:
        params["symbol"] = symbol
    return _get("/crypto/funding", params, paid, private_key)


def yield_entry_verdict(pool: str = None, project: str = None, paid: bool = False,
                        private_key: str = None) -> dict:
    """Should an agent enter a DeFi pool now? Packaged SUSTAINABLE | DECAYING | OUTLIER | AVOID verdict.

    This is the proprietary DECISION on top of raw yields: an APY-decay forecast,
    outlier/trap detection, impermanent-loss and liquidity flags, a risk score and
    field-cited reasons — the judgement a yield-farming agent pays for before it
    commits capital (GoPlus/CoinGecko do not do yield sustainability).

    Pass `pool` (a poolId from ``defi_yields(...)``) to score YOUR specific
    position — the repeat-payment use case: re-check an open LP every few hours.
    With a `pool` the free path scores YOUR pool 3×/IP/day (then it falls back to
    the top-TVL demo verdict + the paid URL); with no args it always scores the
    current top-TVL pool. Paid ($0.01) is unmetered on the exact `pool` you pass.
    """
    params = {}
    if pool:
        params["pool"] = pool
    if project:
        params["project"] = project
    return _get("/defi/yield-entry-verdict", params, paid, private_key)


# Per-route price (USDC) — surfaced in paid-mode setup errors so an agent (or a
# dev) sees the exact cost of the call it is about to settle, not a bare crash.
_PRICE_USDC = {
    "/chain/token-report": "0.01",
    "/gate/swap": "0.008",
    "/crypto/prices": "0.001",
    "/defi/yields": "0.001",
    "/crypto/funding": "0.004",
    "/defi/yield-entry-verdict": "0.01",
}


class GreyRidgePaymentSetupError(RuntimeError):
    """Raised when paid mode is requested but the x402 payment prerequisites
    (the [pay] extra, or a signing key) are not in place. Carries actionable,
    copy-pasteable setup steps instead of a raw ImportError/KeyError."""


def _paid_setup_hint(path, reason):
    price = _PRICE_USDC.get(path, "a few tenths of a cent")
    dollars = f"${price}" if price[0].isdigit() else price
    return (
        f"Paid mode for {path} needs {reason}\n"
        f"This call settles {dollars} USDC on Base via x402 — keyless, no account, "
        f"and gasless (you need a little USDC on Base, no ETH for gas).\n"
        f"  1) pip install 'greyridge-x402-tools[pay]'\n"
        f"  2) export X402_PRIVATE_KEY=0x...   # a Base wallet holding a little USDC\n"
        f"     (or pass private_key='0x...' to this function)\n"
        f"Not ready to pay? Call the same function with paid=False for a free "
        f"preview sample (no wallet needed)."
    )


def _get(path, params, paid, private_key):
    if not paid:
        r = requests.get(BASE + path + "/preview", params=params, timeout=30)
        r.raise_for_status()
        return r.json()
    try:
        from eth_account import Account
        from x402.clients.requests import x402_requests
    except ImportError as e:
        raise GreyRidgePaymentSetupError(
            _paid_setup_hint(path, "the optional payment dependencies (missing: "
                             f"{e.name}).")
        ) from e
    key = private_key or os.environ.get("X402_PRIVATE_KEY")
    if not key:
        raise GreyRidgePaymentSetupError(
            _paid_setup_hint(path, "a signing key (X402_PRIVATE_KEY is not set).")
        )
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
        """6-venue perp funding + per-venue open interest + OI-weighted CEX/DEX arb verdict; pass a coin ('BTC') or '' for the top funding movers."""
        return funding_rates(symbol or None, paid=paid)

    @tool
    def defi_yield_entry_verdict(pool: str = "") -> dict:
        """Should I enter this DeFi pool now? SUSTAINABLE/DECAYING/OUTLIER/AVOID verdict + APY-decay forecast; pass a poolId from defi_pool_yields or '' for the top-TVL pool."""
        return yield_entry_verdict(pool or None, paid=paid)

    return [base_token_report, base_swap_gate, crypto_prices,
            defi_pool_yields, perp_funding_rates, defi_yield_entry_verdict]


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
        """6-venue perp funding + per-venue open interest + OI-weighted CEX/DEX arb verdict; pass a coin ('BTC') or '' for the top funding movers."""
        return str(funding_rates(symbol or None, paid=paid))

    @tool("defi_yield_entry_verdict")
    def defi_yield_entry_verdict(pool: str = "") -> str:
        """Should I enter this DeFi pool now? SUSTAINABLE/DECAYING/OUTLIER/AVOID verdict + APY-decay forecast; pass a poolId from defi_pool_yields or '' for the top-TVL pool."""
        return str(yield_entry_verdict(pool or None, paid=paid))

    return [base_token_report, base_swap_gate, crypto_prices,
            defi_pool_yields, perp_funding_rates, defi_yield_entry_verdict]
