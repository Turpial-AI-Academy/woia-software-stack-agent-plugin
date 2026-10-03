# Stack Validation Checklist

Use this before treating a stack decision as complete.

For a bounded rationale amendment, check the affected row and mandatory rationale/version/compatibility invariants; reuse inspectable evidence for unchanged decisions. Record what was reused, invalidated, or freshly verified, with source/freshness/target scope. Assumptions do not satisfy a check. A changed technology, version, environment, migration or safety constraint requires the deep path; do not convert missing or expired evidence into PASS.

## 1. Inputs

- [ ] Product requirements affecting technology choice are identified.
- [ ] Constraints are classified as hard, soft, preference, assumption, or unknown.
- [ ] Target environments/distribution surfaces are explicit where material.
- [ ] Existing repository technology is inventoried when applicable.

## 2. Essential technologies

For every essential technology:

- [ ] Role is stated.
- [ ] Choice is stated.
- [ ] Version/range/channel/constraint is stated or explicitly unresolved.
- [ ] Rationale traces to a requirement or constraint.
- [ ] Evidence is recorded.
- [ ] Compatibility status is explicit.
- [ ] Material risks/conditions are recorded.

If any essential technology lacks a verifiable reason, the gate fails.

## 3. Compatibility

- [ ] Material runtime/framework/language relationships are checked.
- [ ] External SDK/API/service compatibility is checked where relevant.
- [ ] Target OS/architecture/browser/runtime/deployment compatibility is checked.
- [ ] Pairwise support is not inferred transitively without evidence.
- [ ] `UNVERIFIED` and `UNKNOWN` combinations are not described as supported.
- [ ] Lifecycle/support status is checked when it can affect delivery or maintenance.

If a material compatibility unknown can invalidate the decision, mark the result conditional or blocked.

## 4. Version policy

- [ ] Exact pin vs range vs minimum/maximum vs release channel is intentional.
- [ ] `latest` is not used as a durable version policy.
- [ ] Existing declared constraints are distinguished from resolved versions.
- [ ] Version precision is no tighter than the evidence/requirement justifies.
- [ ] No upgrade is proposed solely because a newer release exists.

## 5. Existing-system preservation

- [ ] Healthy existing choices are preserved unless a concrete reason to migrate is documented.
- [ ] Migration proposals identify the problem they solve.
- [ ] Switching cost and compatibility/migration path are recorded.
- [ ] No technology is replaced for fashion, aesthetic consistency, or agent familiarity.

## 6. Minimality and scope

- [ ] Every essential technology has a required role.
- [ ] Optional complexity is deferred unless justified.
- [ ] Architecture, environment setup, testing, security, CI/CD, and deployment policy are not silently taken over by the stack decision.
- [ ] The artifact remains useful without ASPS or Turpial authoring tooling.

## 7. Evidence quality

- [ ] Time-sensitive claims use fresh authoritative sources or current target-environment evidence.
- [ ] Facts are separated from assumptions and recommendations.
- [ ] Skipped/unavailable checks are listed.
- [ ] Targeted experiments are used when documentation cannot resolve a material unknown.

## 8. Output gate

The decision may be reported as passing only when:

> Every essential technology and every material version/constraint has a verifiable reason and is compatible with the product and target environment to the level claimed.

Otherwise report exactly what is conditional, blocked, unverified, or unknown.
