# Stack

## 1. Decision status

**Status:** proposed | accepted | conditional | blocked

**Scope:** <product/repository/change>

For a healthy existing record, amend only affected rows/sections; this template is not a requirement to recreate the artifact.

**Amendment (when applicable):** <affected row/rationale; unchanged choices, versions, targets, manifests/lockfiles and compatibility scope>

**Evidence lifecycle:** <reused evidence with provenance/freshness; invalidated evidence and cause; fresh observations/probes and results; assumptions kept separate>

## 2. Inputs

### Requirements used

- <requirement and source>

### Constraints used

| Constraint | Class | Source | Effect on stack |
|---|---|---|---|
| <constraint> | hard / soft / preference / assumption / unknown | <source> | <effect> |

## 3. Existing stack evidence

> Remove this section for a true greenfield decision.

| Role | Current technology | Declared/resolved version | Evidence | Disposition |
|---|---|---|---|---|
| <role> | <technology> | <constraint/version> | <manifest/lock/runtime/docs> | preserve / review / replace-candidate / unknown |

## 4. Selected essential technologies

| Role | Technology | Version / constraint | Rationale | Evidence | Compatibility | Status |
|---|---|---|---|---|---|---|
| <role> | <choice> | <pin/range/min/max/channel/unresolved> | <requirement/constraint served> | <source/probe> | VERIFIED / CONDITIONAL / UNVERIFIED / INCOMPATIBLE / UNKNOWN | selected / conditional / blocked |

Every essential row needs a verifiable reason. Do not use `latest` as a durable version policy.

## 5. Compatibility

Summarize the relationships that can invalidate the stack.

| Relationship | Claimed scope | Evidence | Status | Conditions / notes |
|---|---|---|---|---|
| <runtime ↔ framework> | <versions/environment> | <source/probe> | VERIFIED / CONDITIONAL / UNVERIFIED / INCOMPATIBLE / UNKNOWN | <notes> |

Use the compatibility-matrix asset when this section becomes large.

## 6. Alternatives considered

### <role or decision>

**Selected:** <choice>

**Alternative:** <candidate>

**Advantages:**
- <advantage>

**Tradeoffs / reason not selected:**
- <reason tied to requirement/constraint>

## 7. Consequences and costs

### Positive

- <consequence>

### Negative / operational burden

- <consequence>

### Migration implications

- <none or migration notes>

## 8. Risks and mitigations

| Risk | Impact | Mitigation | Evidence required |
|---|---|---|---|
| <risk> | high / medium / low | <action> | <test/source/probe> |

## 9. Validation

### Executed

- <check/probe/source review and result>

### Skipped or unavailable

- <check and why>

### Gate result

PASS | CONDITIONAL | BLOCKED

> PASS requires a verifiable reason for every essential technology/material version constraint and compatibility with the product/environment to the level claimed.

## 10. Assumptions, unknowns, and open questions

- <assumption/unknown>
- <evidence needed>
- <decision blocked, if any>

## 11. Review triggers

Revisit this decision if:

- <target platform changes>;
- <lifecycle/support changes>;
- <compatibility evidence changes>;
- <material requirement/constraint changes>.
