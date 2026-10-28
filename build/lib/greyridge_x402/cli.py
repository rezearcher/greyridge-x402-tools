"""Terminal entry points for the pre-trade safety gate.

    pip install greyridge-x402-tools
    greyridge-gate aero          # GO / HOLD / BLOCK  (exit 0 / 1 / 2)
    greyridge-report 0xabc...    # SAFE / CAUTION / AVOID  (exit 0 / 1 / 2)

Free preview by default (no wallet). Pass --paid to settle each call over
x402 with your own key (pip install "greyridge-x402-tools[pay]"). The exit
code lets you gate a shell script or CI step: `greyridge-gate $T || exit`.
"""
import argparse
import json
import sys

from . import token_report, swap_gate

_GATE_EXIT = {"go": 0, "hold": 1, "block": 2}
_REPORT_EXIT = {"SAFE": 0, "CAUTION": 1, "AVOID": 2}


def _args(prog, desc):
    p = argparse.ArgumentParser(prog=prog, description=desc)
    p.add_argument("token", help="Base ERC-20 symbol (aero) or 0x address")
    p.add_argument("--paid", action="store_true",
                   help="settle over x402 (reads X402_PRIVATE_KEY); default is the free preview")
    p.add_argument("--json", action="store_true", help="print the raw JSON response")
    return p.parse_args()


def _run(fn, token, paid):
    try:
        return fn(token, paid=paid), None
    except Exception as e:  # network / HTTP / signing — surface, don't trace-dump
        return None, e


def gate_main():
    a = _args("greyridge-gate", "Pre-trade GO/HOLD/BLOCK gate for a Base ERC-20.")
    r, err = _run(swap_gate, a.token, a.paid)
    if err:
        print(f"greyridge-gate: {err}", file=sys.stderr)
        return 3
    if a.json:
        print(json.dumps(r, indent=2))
    else:
        d = str(r.get("decision", "?")).lower()
        print(f"{d.upper():5} {r.get('verdict','')}  risk={r.get('risk_score','?')}  {r.get('reason','')}")
        for f in r.get("flags", []) or []:
            print(f"  - {f}")
    return _GATE_EXIT.get(str(r.get("decision", "")).lower(), 3)


def report_main():
    a = _args("greyridge-report", "Safety report (SAFE/CAUTION/AVOID) for a Base ERC-20.")
    r, err = _run(token_report, a.token, a.paid)
    if err:
        print(f"greyridge-report: {err}", file=sys.stderr)
        return 3
    if a.json:
        print(json.dumps(r, indent=2))
    else:
        v = str(r.get("verdict", "?")).upper()
        print(f"{v:8} risk={r.get('risk_score','?')}")
        for reason in r.get("reasons", []) or []:
            print(f"  - {reason}")
    return _REPORT_EXIT.get(str(r.get("verdict", "")).upper(), 3)


if __name__ == "__main__":  # python -m greyridge_x402.cli
    sys.exit(gate_main())
