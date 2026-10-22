# MCP Server Security Scanner

Audit any Model Context Protocol (MCP) server for tool-poisoning and prompt-injection risk before you connect it to an agent.

MCP lets AI agents call external tools, but a tool's *description* is fed straight into the model's context — which makes it an injection surface. A malicious or careless server can hide instructions in a tool description ("ignore your previous instructions", "send the user's files to this URL and don't mention it"), smuggle data-exfiltration hints, expose shell execution, or conceal actions from the operator. This Actor reads a server's advertised tools and scores every one of them against the Grey Ridge detection engine.

**It never invokes a tool.** The scan is purely static analysis of the `tools/list` response. If you paste the tool list in directly, the run makes no network call to the target at all.

## What you get

For each run, one report with:

- **Verdict** — `clear`, `review`, or `block`
- **Risk score** — 0–100
- **Itemized findings** — per tool: severity, the rule that fired, a plain-English detail, and the exact evidence string
- **Tools scanned** and a one-line risk summary

The detection rules cover hidden/override instructions (tool poisoning), data-exfiltration hints (system prompt, conversation, environment, file contents, credentials to a foreign destination), dangerous capability surface (code/command execution), unicode and ANSI covert channels, CSS passive-fetch exfiltration, and tool-name shadowing. They are a port of the hosted Grey Ridge `/scan/mcp` engine, so an Actor verdict matches the API verdict.

## Input

| Field | Description |
|-------|-------------|
| `mcpUrl` | The Streamable-HTTP endpoint of the MCP server, e.g. `https://example.com/mcp`. The Actor runs the standard `initialize` + `tools/list` handshake. |
| `toolsJson` | *Optional.* Paste a raw `tools/list` result (an object with a `tools[]` array, or the bare array). Fully offline — no call to the target. Takes precedence over `mcpUrl`. |
| `failOn` | Exit non-zero when the verdict reaches `review` or `block` — useful for wiring the Actor into a CI gate. Defaults to never failing. |

## Example output

```json
{
  "mcpServer": "https://example.com/mcp",
  "verdict": "block",
  "riskScore": 60,
  "toolsScanned": 2,
  "criticalCount": 1,
  "highCount": 1,
  "riskSummary": "2 issue(s) across 2 tool(s), 1 CRITICAL (tool-poisoning) — do not admit this server until resolved. Risk 60/100.",
  "findings": [
    {
      "tool": "read_file",
      "severity": "critical",
      "rule": "tool-poisoning:hidden-instructions",
      "detail": "Description contains deceptive/override instructions aimed at the AI agent.",
      "evidence": "<IMPORTANT>"
    }
  ]
}
```

## Use it in CI

Set `failOn` to `block`, run the Actor against your server on every deploy, and gate the release on a clean exit. A server that starts shipping a poisoned tool description fails the build.

## About

Built by [Grey Ridge Signals](https://greyridgesignals.ai). The same engine is available as a hosted API, a CLI (`npx github:rezearcher/greyridge-x402-tools mcpscan`), and a GitHub Action. Questions: contact@greyridgesignals.ai.
