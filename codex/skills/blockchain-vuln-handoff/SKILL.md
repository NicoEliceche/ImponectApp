---
name: blockchain-vuln-handoff
description: Smart contract audit workflow for autonomous contest or bug bounty runs, and for triaging Slither, Aderyn, Gemini CLI, HTML scope context, GitHub repos, Solidity/EVM source, draft findings, and user notes. Use when Codex must isolate work in WSL, search for real vulnerabilities, require a passing PoC or real test before confirmation, deduplicate findings, calibrate severity and confidence, and produce final vulnerability reports or patch guidance.
---

# Blockchain Vulnerability Handoff

Use this workflow for smart contract audit work. It supports two modes:

- Autonomous runner: the user provides contest/bug bounty context, HTML scope text, a GitHub repo, or target instructions and wants Codex to work independently until it has a confirmed finding or a hard blocker.
- Final pass: the user provides Slither, Aderyn, Gemini CLI, draft reports, or notes and wants Codex to verify, deduplicate, and produce submission-ready reports.

## Inputs

Expect one or more of the following:

- Slither output
- Aderyn output
- Gemini CLI notes, prompts, or draft findings
- Smart contract source files
- Existing markdown reports
- Contest or bounty scope copied as HTML/text
- GitHub repository URL, commit, branch, or archive
- Platform/project/report naming hints

## Workflow

1. Identify the mode. Use autonomous runner mode when the request includes a repo/scope/context and asks Codex to find vulnerabilities; use final pass mode when the user provides existing candidate findings.
2. For autonomous runner mode, read `references/autonomous-runner.md` before cloning, installing dependencies, running analyzers, writing PoCs, or producing reports.
3. For local Ollama-backed Codex runners, read `references/ollama-local-runner.md` and keep Codex, WSL tools, and final reports in their separate roles.
4. Read the provided findings or scope context and extract each distinct claim, target, and constraint.
5. Group duplicate or near-duplicate issues across tools before analyzing severity.
6. Re-open the affected contracts and verify whether each claim is supported by code.
7. Apply the pre-submit validity gate before treating any High/Medium report as confirmed.
8. Classify each claim as:
   - Confirmed
   - Plausible but unverified
   - Informational
   - Rejected false positive
9. For confirmed findings, use the template in `references/finding-template.md`.
10. For triage decisions, use `references/triage-checklist.md`.
11. When asked for fixes, draft the smallest safe change that addresses the root cause without changing unrelated logic.

## Pre-Submit Validity Gate

Before drafting or recommending a submission for any contest or bounty platform, verify that the scenario is real, in-scope, and reproducible under valid protocol conditions:

- A passing local PoC is necessary evidence, not final proof. Do not rely on mocks unless the mocked state is proven to be possible in the live protocol or documented integration.
- A confirmed High/Medium finding must include an exact command that was run successfully against the target repo and a brief statement of what the passing test proves.
- Confirm the exploit path does not require reckless admin/governance behavior, invalid configuration, placeholder deployment parameters, compromised trusted roles, or impossible external-protocol states.
- For findings involving oracles, bridges, precompiles, account models, margin systems, token metadata, or off-chain services, validate the external semantics with primary sources, correctly formed RPC/API calls, or a realistic end-to-end reproduction.
- Reject or downgrade claims where the only demonstrated failure comes from manually forcing an unavailable state in the test harness.
- For High/Medium confidence, be able to state: "This occurs under expected configuration and real protocol behavior, without admin mistakes or impossible mocks."

## Analysis Rules

- Treat analyzer output as hints, not proof.
- Verify exploitability, prerequisites, blast radius, and privilege assumptions.
- Prefer source-backed reasoning over generic vulnerability language.
- Downgrade issues that require unrealistic assumptions.
- Reject findings that rely on dead code, impossible states, or privileged misuse presented as public exploitability.
- Keep false-positive notes short but explicit enough that the user can trust the rejection.
- Do not claim an issue is real merely because a tool, model, or manually forced harness says so.
- Do not submit, weaponize, or test against live third-party systems unless the user has provided an in-scope program and the action is allowed by that scope.

## Output Expectations

- Produce concise markdown suitable for an audit report.
- Cite affected files and functions whenever possible.
- Separate confirmed findings from lower-confidence ideas.
- If evidence is incomplete, say what would be needed to confirm or reject the issue.
- For autonomous runs, write both a confirmed finding report when available and a short worklog/no-confirmed-finding note when no candidate passes the gate.
