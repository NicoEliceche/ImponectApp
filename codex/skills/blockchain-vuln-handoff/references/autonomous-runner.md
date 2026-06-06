# Autonomous Runner

Use this reference when the user provides a contest, bug bounty, GitHub repo, copied HTML scope, or target instructions and asks Codex to work independently.

## Operating Contract

- Work only on user-provided targets and scope.
- Treat copied HTML/text as scope evidence: extract platform, project, repo URL, branch/commit, in-scope contracts, out-of-scope areas, severity rules, and required submission format.
- If the repo, commit, or scope is ambiguous, make the most conservative assumption and record it. Stop only for credentials, missing private access, destructive live actions, or impossible setup.
- Run in long-form mode. Do not stop after clean static analyzer output; pivot to manual invariant review, edge-case tests, and protocol-specific attack surfaces.
- Never promote a vulnerability to confirmed without a reproducible test or PoC that passes against the target repo.

## WSL Isolation

Create one unique WSL workspace per Codex session and never reuse another session's directory:

```bash
export AUDIT_ROOT="${HOME}/codex-audits"
export TARGET_SLUG="${TARGET_SLUG:-target}"
export RUN_ID="$(date -u +%Y%m%dT%H%M%SZ)-${TARGET_SLUG}-$$"
mkdir -p "${AUDIT_ROOT}/${RUN_ID}"
cd "${AUDIT_ROOT}/${RUN_ID}"
```

Prefer cloning and testing inside the WSL ext4 filesystem, not under `/mnt/c`, for speed and isolation. Use `/mnt/c/Nico/Workspaces/Blockchain-Vulnerabilities-Reports` only for final reports and durable notes.

For every target:

1. Clone into the unique WSL run directory.
2. Checkout the requested branch/commit/tag.
3. Initialize submodules.
4. Install dependencies locally for that repo.
5. Keep generated artifacts, analyzer output, and test logs inside the run directory.
6. Do not modify shared global configs unless the user explicitly asked for workstation setup.

Multiple PowerShell/Codex sessions may run at once. Avoid shared writable paths except the final report tree. Include the project name or run id in filenames when collision is possible.

If the session is using a local Ollama backend, also read `ollama-local-runner.md`. Ollama provides the model; Codex still owns shell execution, WSL commands, file edits, and report writing.

## Baseline Setup

After cloning, discover the build system before installing or testing:

- Foundry: `foundry.toml`, `forge test`, `forge build`
- Hardhat: `hardhat.config.*`, `npm/pnpm/yarn test`, `npx hardhat test`
- Brownie/Ape: `brownie-config.yaml`, `ape-config.yaml`
- Rust/Solana/CosmWasm: `Cargo.toml`, `cargo test`
- Move: `Move.toml`, framework-specific tests

Run the smallest baseline test/build command that proves the repo works before adding PoCs. If baseline tests fail, isolate whether the failure is environment-only. A PoC is strongest when the new targeted test fails before the fix or demonstrates the vulnerable behavior while unrelated baseline failures are understood.

## Analysis Loop

Use analyzers as leads, not proof:

1. Run available static tools such as Slither and Aderyn when applicable.
2. Search manually for value-flow, authorization, accounting, oracle, upgrade, replay, signature, rounding, invariant, liquidation, bridge, callback, hook, and cross-chain assumptions.
3. Build a candidate list with affected files/functions, required preconditions, likely impact, and initial confidence.
4. Pick the highest-impact realistic candidate and write the smallest PoC/test that exercises the real code path.
5. Run the exact test command. Save or quote the key passing output in the report.
6. If the candidate requires impossible mocks, privileged misuse, invalid config, or external behavior that cannot occur, reject or downgrade it and continue.
7. Repeat until a confirmed finding exists, a hard blocker is reached, or the user-specified budget is exhausted.

Do not dilute the final output with many weak findings. One confirmed High/Medium with real test evidence is better than several speculative notes.

## Real Test Gate

A candidate is confirmed only when all of these are true:

- The affected code is in scope and reachable.
- The attacker or faulty integration can satisfy the preconditions under expected deployment/configuration.
- The impact is concrete: funds, accounting, access control, liveness, liquidation, bridge correctness, upgrade integrity, or other scoped severity category.
- A local PoC/test passes against the target repo and demonstrates the vulnerable behavior.
- The PoC does not depend on manually forcing an impossible state unless that state is shown to be reachable by another valid action.
- The report can name the exact command used to reproduce the result.

If these are not true, classify the candidate as plausible, informational, or rejected.

## Reporting

Write final reports in the handoff repo:

```text
reports/<Platform>/<Project>/<Severity>/<severity>_<slug>.md
```

Place PoC files next to the report when they are standalone, or record their WSL path and relevant diff when they live inside the cloned target repo. Include:

- title and severity
- summary
- affected code with file/function references
- root cause
- exploit conditions
- impact
- PoC/test evidence with exact command and passing result
- recommendation
- confidence

If no candidate passes the gate, write a concise worklog/no-confirmed-finding note under the project report folder. Include commands run, areas reviewed, rejected leads, blockers, and next hypotheses.
