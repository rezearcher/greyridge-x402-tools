// Grey Ridge — MCP Server Security Scanner (Apify Actor)
//
// Audits a Model Context Protocol server for tool-poisoning / prompt-injection
// risk. It performs the standard MCP initialize + tools/list handshake, then
// scores every advertised tool with the Grey Ridge detection engine. Tools are
// never invoked; with a pasted tools/list the run makes no network call at all.
//
// One completed scan = one dataset report (the pay-per-result billing unit).

import { Actor } from 'apify';
import { spawn } from 'node:child_process';
import { writeFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

await Actor.init();

const input = (await Actor.getInput()) || {};
const mcpUrl = (input.mcpUrl || '').trim();
const failOn = (input.failOn || 'never').toLowerCase();

// --- resolve the scanner CLI shipped in the greyridge-x402-tools package ------
function resolveScannerBin() {
    const candidates = [
        join(process.cwd(), 'node_modules', 'greyridge-x402-tools', 'bin', 'mcpscan.mjs'),
        join(process.cwd(), 'node_modules', '.bin', 'mcpscan'),
    ];
    for (const c of candidates) if (existsSync(c)) return c;
    return candidates[0]; // best effort; spawn will surface a clear error if absent
}

// --- MCP JSON-RPC helpers -----------------------------------------------------
function parseRpc(contentType, body) {
    if ((contentType || '').includes('text/event-stream')) {
        for (const line of body.split(/\r?\n/)) {
            const m = line.match(/^data:\s*(.*)$/);
            if (m) {
                try {
                    const o = JSON.parse(m[1]);
                    if (o && (o.result !== undefined || o.error !== undefined || o.id !== undefined)) return o;
                } catch { /* keep scanning data lines */ }
            }
        }
        return null;
    }
    try { return JSON.parse(body); } catch { return null; }
}

async function postRpc(url, headers, payload) {
    const res = await fetch(url, { method: 'POST', headers, body: JSON.stringify(payload) });
    const body = await res.text();
    return { res, parsed: parseRpc(res.headers.get('content-type'), body) };
}

async function fetchToolsFromServer(url) {
    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json, text/event-stream',
    };
    const init = await postRpc(url, headers, {
        jsonrpc: '2.0', id: 1, method: 'initialize',
        params: {
            protocolVersion: '2024-11-05',
            capabilities: {},
            clientInfo: { name: 'greyridge-mcp-scanner', version: '1.0.0' },
        },
    });
    const sessionId = init.res.headers.get('mcp-session-id');
    const h2 = { ...headers };
    if (sessionId) h2['mcp-session-id'] = sessionId;

    // Best-effort initialized notification (ignored by servers that don't need it).
    await fetch(url, {
        method: 'POST', headers: h2,
        body: JSON.stringify({ jsonrpc: '2.0', method: 'notifications/initialized' }),
    }).catch(() => {});

    const list = await postRpc(url, h2, { jsonrpc: '2.0', id: 2, method: 'tools/list', params: {} });
    const tools = list.parsed?.result?.tools;
    if (!Array.isArray(tools)) {
        const err = list.parsed?.error?.message || `unexpected response (HTTP ${list.res.status})`;
        throw new Error(`could not read tools/list from ${url}: ${err}`);
    }
    return tools;
}

function normalizeTools(raw) {
    const arr = Array.isArray(raw) ? raw : Array.isArray(raw?.tools) ? raw.tools : null;
    if (!arr) throw new Error('toolsJson must be a tools[] array or an object with a tools[] array');
    return arr;
}

// --- run the Grey Ridge engine locally (offline, no network to target) --------
function runEngine(tools) {
    return new Promise((resolve, reject) => {
        const egressPath = join(tmpdir(), `egress-${Date.now()}.json`);
        writeFileSync(egressPath, JSON.stringify({
            tools: tools.map((t) => ({
                name: t.name,
                title: t.title,
                description: t.description,
                inputSchema: t.inputSchema,
                annotations: t.annotations,
            })),
        }));
        const bin = resolveScannerBin();
        const child = spawn('node', [bin, '--from-egress', egressPath], { stdio: ['ignore', 'pipe', 'pipe'] });
        let out = '', errOut = '';
        child.stdout.on('data', (d) => { out += d; });
        child.stderr.on('data', (d) => { errOut += d; });
        child.on('error', reject);
        child.on('close', () => {
            try { resolve(JSON.parse(out)); }
            catch { reject(new Error(`scanner did not return JSON: ${errOut.slice(0, 300) || out.slice(0, 300)}`)); }
        });
    });
}

// --- main ---------------------------------------------------------------------
try {
    let tools;
    let serverLabel;
    if (input.toolsJson) {
        tools = normalizeTools(typeof input.toolsJson === 'string' ? JSON.parse(input.toolsJson) : input.toolsJson);
        serverLabel = '(pasted tools/list)';
    } else if (mcpUrl) {
        tools = await fetchToolsFromServer(mcpUrl);
        serverLabel = mcpUrl;
    } else {
        throw new Error('provide either mcpUrl or toolsJson');
    }

    const scan = await runEngine(tools);
    const findings = scan.findings || [];
    const sev = (s) => findings.filter((f) => f.severity === s).length;

    const report = {
        mcpServer: serverLabel,
        verdict: scan.verdict,
        riskScore: scan.risk_score,
        toolsScanned: scan.tools_scanned,
        criticalCount: sev('critical'),
        highCount: sev('high'),
        mediumCount: sev('medium'),
        lowCount: sev('low'),
        riskSummary: scan.risk_summary,
        findings,
        engine: 'grey-ridge /scan/mcp (offline port)',
        scannedAt: new Date().toISOString(),
    };

    await Actor.pushData(report); // one completed scan = one billable result

    const line = `MCP scan complete — ${serverLabel}: verdict=${report.verdict} risk=${report.riskScore} `
        + `(${report.toolsScanned} tools, ${report.criticalCount} critical / ${report.highCount} high)`;
    console.log(line);
    await Actor.setValue('OUTPUT', report);

    const rank = { clear: 0, review: 1, block: 2 };
    const threshold = rank[failOn];
    if (threshold !== undefined && rank[report.verdict] >= threshold) {
        await Actor.exit({ exitCode: 1, statusMessage: `Verdict ${report.verdict} met failOn=${failOn}` });
    }
    await Actor.exit({ statusMessage: line });
} catch (err) {
    console.error(`scan failed: ${err.message}`);
    await Actor.fail(`scan failed: ${err.message}`);
}
