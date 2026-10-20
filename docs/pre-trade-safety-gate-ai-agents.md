---
title: Pre-trade safety gate for AI trading agents
---
# Pre-trade safety gate for AI trading agents

Put one call between "agent decided to buy" and "agent signs the swap":

    import requests
    r = requests.get("https://x402-data-api.sigrunner.workers.dev/gate/swap/preview", params={"token": token}).json()
    if r.get("decision") != "GO":
        raise RuntimeError(f"blocked: {r}")

/gate/swap returns GO / HOLD / BLOCK ($0.008 per call, x402). The deeper /chain/token-report ($0.01) returns the full evidence. LangChain, CrewAI and Vercel AI SDK examples: [greyridge-x402-tools](https://github.com/rezearcher/greyridge-x402-tools).

The free preview allows 3 real-token checks/day/IP so you can wire it before paying.

[Back](index.html)
