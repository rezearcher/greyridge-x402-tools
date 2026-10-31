"""safe_fetch: check an x402 endpoint before paying, prove the payment after.

    from greyridge_x402.safe_fetch import safe_fetch
    res = safe_fetch("https://api.example.com/paid", private_key="0x...")
    res.response      # the requests.Response (paid body)
    res.preflight     # PAY / CAUTION / AVOID dict, before any money moves
    res.receipt       # SETTLED / UNDERPAID / WRONG_RECIPIENT ... dict, after

Both checks run on api.greyridgesignals.ai (free preview tier, 3 checks per
IP per day). Payment signing uses your own key via `pip install
"greyridge-x402-tools[pay]"`. Receipt proof is skipped, and says so, when the
server returns no settlement tx.
"""
import base64
import json
import os
from dataclasses import dataclass, field
from typing import Any, Optional

import requests

CHECK_BASE = os.environ.get("GREYRIDGE_CHECK_BASE", "https://api.greyridgesignals.ai")


class PreflightBlocked(Exception):
    """Raised when preflight says AVOID (or CAUTION with block_on_caution)."""

    def __init__(self, preflight):
        self.preflight = preflight
        super().__init__(f"preflight {preflight.get('verdict')}: {url_of(preflight)}")


def url_of(p):
    return p.get("url", "?")


@dataclass
class SafeFetchResult:
    response: Optional[requests.Response]
    preflight: dict
    receipt: Optional[dict] = None
    tx: Optional[str] = None
    notes: list = field(default_factory=list)

    @property
    def settled(self) -> bool:
        return bool(self.receipt and self.receipt.get("verdict") == "SETTLED")


def _check(path: str, params: dict) -> dict:
    r = requests.get(CHECK_BASE + path, params={k: v for k, v in params.items() if v},
                     timeout=30, headers={"User-Agent": "greyridge-safe-fetch/0.7"})
    try:
        return r.json()
    except ValueError:
        return {"verdict": "UNVERIFIED", "error": f"non-JSON HTTP {r.status_code}"}


def settlement_tx(resp: requests.Response) -> Optional[str]:
    """Pull the settlement tx hash from the x402 response header, if present."""
    for h in ("X-PAYMENT-RESPONSE", "PAYMENT-RESPONSE"):
        raw = resp.headers.get(h)
        if not raw:
            continue
        try:
            pad = "=" * (-len(raw) % 4)
            data = json.loads(base64.b64decode(raw + pad))
        except Exception:
            continue
        tx = data.get("transaction") or data.get("txHash") or data.get("tx")
        if isinstance(tx, str) and tx.startswith("0x") and len(tx) == 66:
            return tx
    return None


def safe_fetch(url: str, private_key: Optional[str] = None, *, advertised: Optional[str] = None,
               block_on_caution: bool = False, verify_receipt: bool = True,
               session: Any = None, **kwargs) -> SafeFetchResult:
    """GET `url` with a free preflight first and an on-chain receipt check after.

    Raises PreflightBlocked on AVOID (and on CAUTION if block_on_caution).
    Pass `session` to use your own x402-capable requests session instead of
    a private key.
    """
    pre = _check("/x402/preflight/preview", {"url": url, "advertised": advertised})
    verdict = pre.get("verdict")
    if verdict == "AVOID" or (verdict == "CAUTION" and block_on_caution):
        raise PreflightBlocked(pre)

    if session is None:
        from eth_account import Account
        from x402.clients.requests import x402_requests
        key = private_key or os.environ["X402_PRIVATE_KEY"]
        session = x402_requests(Account.from_key(key))
    resp = session.get(url, **kwargs)
    out = SafeFetchResult(response=resp, preflight=pre)

    if not verify_receipt:
        return out
    tx = settlement_tx(resp)
    if not tx:
        out.notes.append("no settlement tx in response headers; receipt proof skipped")
        return out
    out.tx = tx
    out.receipt = _check("/x402/receipt-verify/preview", {"tx": tx, "url": url})
    return out
