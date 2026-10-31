"""Stdio MCP server: verify x402 payments before and after your agent pays.

    uvx --from greyridge-x402-tools greyridge-x402-verify

Two free tools (no wallet, no API key; the hosted preview is rate-limited
to 3 real checks per IP per day):

  x402_preflight(url)               pre-payment: will it settle, is the price
                                    what it advertised, is it safe to pay
  x402_receipt_verify(tx, payto)    post-payment: did the Base USDC transfer
                                    land at the advertised recipient

Pure stdlib JSON-RPC over stdio; the checks run on api.greyridgesignals.ai.
"""
import json
import sys
import urllib.parse
import urllib.request

BASE = "https://api.greyridgesignals.ai"
PROTOCOL = "2024-11-05"

TOOLS = [
    {
        "name": "x402_preflight",
        "description": "Check an x402 endpoint before paying: will it settle (PAY/CAUTION/AVOID), is the charged price the advertised one, does it leak the resource unpaid, is the payee sanctioned or a known scammer. Free preview, 3 real URLs/IP/day.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "url": {"type": "string", "description": "Absolute http(s) URL of the x402 endpoint"},
                "advertised": {"type": "string", "description": "Optional price in USDC your catalog quoted, e.g. 0.005"},
            },
            "required": ["url"],
        },
    },
    {
        "name": "x402_receipt_verify",
        "description": "Verify an x402 payment settled on-chain: reads the Base tx receipt from two RPCs, decodes USDC transfers, and reconciles them against the recipient and amount you expect. Returns SETTLED, UNDERPAID, WRONG_RECIPIENT, NO_TRANSFER, REVERTED, NOT_FOUND or UNVERIFIED. Free preview, 3 checks/IP/day.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "tx": {"type": "string", "description": "0x-prefixed Base transaction hash"},
                "payto": {"type": "string", "description": "Expected recipient address (0x...)"},
                "expect": {"type": "string", "description": "Expected amount in USDC, e.g. 0.005"},
                "url": {"type": "string", "description": "Optional: the paid endpoint; its live 402 supplies payTo and amount"},
            },
            "required": ["tx"],
        },
    },
]


def _get(path, params):
    q = urllib.parse.urlencode({k: v for k, v in params.items() if v})
    req = urllib.request.Request(f"{BASE}{path}?{q}", headers={"User-Agent": "greyridge-x402-verify/0.6"})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return r.read().decode()
    except urllib.error.HTTPError as e:
        return e.read().decode()


def call_tool(name, args):
    if name == "x402_preflight":
        return _get("/x402/preflight/preview", {"url": args.get("url"), "advertised": args.get("advertised")})
    if name == "x402_receipt_verify":
        return _get("/x402/receipt-verify/preview",
                    {k: args.get(k) for k in ("tx", "payto", "expect", "url")})
    raise ValueError(f"unknown tool {name}")


def handle(msg):
    mid, method = msg.get("id"), msg.get("method")
    if method == "initialize":
        return {"protocolVersion": PROTOCOL, "capabilities": {"tools": {}},
                "serverInfo": {"name": "greyridge-x402-verify", "version": "0.6.0"}}
    if method == "tools/list":
        return {"tools": TOOLS}
    if method == "tools/call":
        p = msg.get("params", {})
        try:
            text = call_tool(p.get("name"), p.get("arguments") or {})
            return {"content": [{"type": "text", "text": text}]}
        except Exception as e:
            return {"content": [{"type": "text", "text": f"error: {e}"}], "isError": True}
    if method == "ping":
        return {}
    return None if mid is None else {"__error": {"code": -32601, "message": "method not found"}}


def main():
    for line in sys.stdin:
        line = line.strip()
        if not line:
            continue
        try:
            msg = json.loads(line)
        except ValueError:
            continue
        res = handle(msg)
        if msg.get("id") is None or res is None:
            continue
        out = {"jsonrpc": "2.0", "id": msg["id"]}
        if "__error" in res:
            out["error"] = res["__error"]
        else:
            out["result"] = res
        sys.stdout.write(json.dumps(out) + "\n")
        sys.stdout.flush()
    return 0


if __name__ == "__main__":
    sys.exit(main())
