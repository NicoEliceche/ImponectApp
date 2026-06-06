# Finding Template

Use this structure for confirmed findings:

## Title

`[severity] Short finding title`

## Summary

State the bug in one short paragraph.

## Impact

Explain what an attacker, privileged actor, or faulty integration can actually do.

## Affected Code

- Contract:
- Function:
- File:

## Root Cause

Explain the broken assumption or missing invariant in code terms.

## Exploit Conditions

List the preconditions needed for the issue to matter.

## Proof of Concept

- Test file or script:
- Exact command:
- Passing result:

Explain what the passing test proves and why the tested state is reachable under valid protocol conditions.

## Recommendation

Describe the smallest safe fix.

## Confidence

State `high`, `medium`, or `low` and justify it in one sentence.
