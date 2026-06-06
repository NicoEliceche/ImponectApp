# Triage Checklist

Use this checklist before promoting a finding to confirmed:

1. Is the affected code reachable in the current design?
2. Can the attacker satisfy the required preconditions?
3. Is the issue exploitable by an untrusted actor, privileged actor, or only by misconfiguration?
4. Does the issue break funds safety, accounting, access control, liveness, or upgrade integrity?
5. Is there a realistic impact path, not just a theoretical anti-pattern?
6. Does another contract, modifier, role check, or invariant already prevent exploitation?
7. Is the same issue already reported elsewhere under a different name?
8. Would a minimal fix be localized, or does it reveal a broader design weakness?
9. Is there a passing local PoC or test against the target repo?
10. Does the PoC use real reachable state rather than impossible mocks or forced storage?
11. Can the final report include the exact command and result that reproduced the issue?

Severity guidance:

- Critical: direct catastrophic loss or permanent protocol compromise with realistic execution.
- High: serious loss, insolvency, theft, or hard privilege break.
- Medium: meaningful abuse or disruption with bounded impact.
- Low: limited impact, edge-case misuse, or weak hardening gap.
- Informational: code quality, observability, or maintainability concern without concrete exploit impact.
