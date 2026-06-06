# Ollama Local Runner

Use this reference when the user asks to run Codex CLI against a local Ollama backend for smart contract audit work.

## Role Split

- Ollama is the local model backend.
- Codex CLI is the agent that reads files, edits files, runs shell commands, and launches WSL tools.
- WSL is where target repos, Slither, Aderyn, Foundry, Hardhat, and PoC execution should live.

Do not describe Ollama as executing WSL directly. Codex executes WSL commands while using Ollama as the model provider.

## Default Launch

Use the repo wrapper when available:

```powershell
.\scripts\start-codex-ollama-yolo.ps1
```

Equivalent command:

```powershell
codex --oss --local-provider ollama -m qwen2.5-coder:7b --dangerously-bypass-approvals-and-sandbox -C <repo root>
```

Current repo wrappers support hardware profiles:

```powershell
.\scripts\start-codex-ollama-yolo.ps1 -HardwareProfile Laptop
.\scripts\start-codex-ollama-yolo.ps1 -HardwareProfile Desktop
```

Use `Laptop` for Intel i7-8665U / 16 GB RAM machines. It defaults to `qwen2.5-coder:1.5b`.

Use `Desktop` for 32 GB RAM / RTX 3060-class machines. It defaults to `qwen2.5-coder:7b`.

Test `gpt-oss:20b` as a stronger local model when memory allows it. Treat `gpt-oss:120b` as an experiment for stronger hardware.

## Local Runner Constraints

- Local runs avoid OpenAI quota usage, but they are still limited by context length, RAM, VRAM, CPU, disk, and model quality.
- Start with 1 local agent on the 16 GB laptop.
- Start with 2 local agents on the desktop, then scale to 3, then 4-5 only after verifying machine stability.
- Keep every target in a unique WSL workspace under `${HOME}/codex-audits/<run-id>`.
- Keep generated analyzer output and temporary PoCs inside the session workspace.
- Write durable final reports only under `reports/<Platform>/<Project>/<Severity>/`.

## Real-Test Gate

Local model confidence is not submission evidence. A Medium or High report candidate still needs a PoC or real test passing against the target repo, with the exact command and relevant passing output recorded.

Use the same confirmation rules from `autonomous-runner.md`:

- in-scope affected code
- reachable exploit path
- concrete impact
- valid protocol conditions
- no impossible mocks or forced invalid states
- exact reproduction command

## Candidate States

```text
RED    idea only, no proof
YELLOW test exists but does not prove the issue yet
GREEN  PoC/test passes and exploit path appears realistic
BLUE   reviewed by GPT-5.5 or human, ready for platform template
```

When GPT-5.5 quota is available, use it to calibrate Green candidates. When quota is unavailable, continue local exploration but keep the evidence standard unchanged.
