---
name: stack
description: Selects and reviews software technology stacks from requirements, constraints, repository evidence, version compatibility, lifecycle, and operational needs. Use when choosing or reviewing languages, runtimes, frameworks, data stores, infrastructure technologies, essential dependencies, version ranges, compatibility constraints, or stack migration decisions.
license: MIT
compatibility: Works with greenfield and existing software products across languages, platforms, and deployment models; fresh compatibility claims depend on authoritative upstream evidence or target-environment validation.
metadata:
  author: Turpial AI Academy
  version: "0.5.7"
---

# stack

## Operating flow

~~~text
DISCOVER -> DECIDE -> IMPLEMENT -> VALIDATE -> REPORT
~~~

## Purpose

Select or review the minimum sufficient technology stack for a software product or repository, with traceable reasons for every essential technology and every material version or compatibility constraint.

The objective is fit and compatibility for the actual product and environment, not adoption of fashionable technology.

## Non-negotiable rules

- Discover requirements, constraints, and existing technology before proposing a stack.
- Preserve a healthy existing stack unless a concrete requirement, incompatibility, unsupported lifecycle state, or disproportionate cost establishes a reason to change it.
- Do not select technology merely because it is popular, familiar, newest, "latest", or preferred by the author.
- Do not invent compatibility. Verify material claims from authoritative upstream documentation, repository manifests/lockfiles, supported-environment evidence, or a targeted experiment.
- Treat product constraints as decision inputs; do not silently rewrite requirements to fit a preferred tool.
- For every essential technology, record its role, selected technology, version/range/constraint, rationale, evidence, compatibility status, and material risks.
- Distinguish exact pins, supported ranges, minimums/maximums, release channels, and unresolved constraints. Do not turn "latest" into a version policy.
- Separate observed facts, user-provided constraints, assumptions, inferences, and recommendations.
- Prefer the smallest stack that satisfies the requirements; every additional essential technology adds lifecycle, security, integration, and operational cost.
- Keep stack selection distinct from architecture, repository environment, detailed technical design, testing, security, CI/CD, and deployment policy.
- Do not report an unverified technology/environment combination as supported.
- Do not present skipped or unavailable validation as passed.

## Minimum-sufficient evidence

Choose the path from the affected stack decision and the health of its evidence, not from the start of a new turn.

### Bounded amendment

Use the fast path for a local clarification of rationale or traceability in a healthy existing stack artifact when technology choices, version constraints, target OS/architecture/runtime, manifests, lockfiles, and claimed compatibility remain unchanged.

1. Locate the authoritative existing stack record and the affected technology row or rationale.
2. Confirm its requirements, constraints, repository declarations, and evidence still cover the same decision scope. Read only the affected manifests/lock entries or source needed to establish that fact.
3. Amend the smallest affected section. Preserve unrelated choices, alternatives, artifacts, and valid evidence; do not replay whole-product discovery or candidate comparison.
4. Revalidate the affected rationale and the mandatory invariants: every essential technology has a verifiable reason, version/constraint, and supported compatibility scope; uncertainty remains explicit.
5. Report reused evidence with provenance, evidence invalidated by the amendment, fresh observations/probes and their results, and assumptions/inferences separately. A remembered recommendation is not evidence.

### Deep path and evidence freshness

Use the deep path for a new stack decision, unclear scope, contradictory or missing durable evidence, or a material change to technology, versions/ranges, target environment, public contracts, persisted data, migration, security/licensing constraints, or deployment/rollback risk. Expand only the affected relationships and required cross-cutting invariants; do not invent unrelated migration work.

Upstream compatibility, support, lifecycle, security, and licensing facts can expire even when repository bytes are unchanged. Reuse them only when their source, date/version, target environment, and freshness still cover the claim. Invalidate evidence when its inputs or scope change or a failed invariant contradicts it; obtain fresh authoritative evidence or the smallest useful compatibility probe before claiming support. Assumptions and inferences remain explicitly unverified.

Load detailed references by trigger: the selection standard/discovery model for new or uncertain decisions; the decision matrix for real candidate comparisons; version/compatibility guidance for version, environment, lifecycle or freshness questions; and the validation checklist for changed compatibility relationships or a full decision gate. Use templates only for missing artifacts or necessary restructuring. A healthy local amendment does not require replaying every reference or template.

## Discover

For the deep path, read [STACK_SELECTION_STANDARD.md](references/STACK_SELECTION_STANDARD.md), then use [DISCOVERY_MODEL.md](references/DISCOVERY_MODEL.md). For a bounded amendment, start with the existing record and affected evidence above.

Start from two explicit inputs:

~~~text
requirements
constraints
~~~

Gather, as applicable:

- required product capabilities, quality attributes, scale/latency/availability expectations, data characteristics, offline/online behavior, and integration needs;
- target operating systems, architectures, browsers, devices, runtimes, deployment surfaces, network restrictions, and packaging/distribution constraints;
- compliance, licensing, privacy, data residency, security, accessibility, support, budget, team, and delivery constraints;
- existing manifests, lockfiles, toolchain files, source languages, frameworks, services, databases, infrastructure, generated clients, and runtime/deployment evidence;
- organizational standards that are genuinely mandatory versus preferences or precedent;
- lifecycle/support state and compatibility constraints for technologies that are already material to the product.

Build an evidence-backed constraint map before comparing candidates.

For an existing repository, classify each relevant technology as:

~~~text
PRESERVE
REVIEW
REPLACE_CANDIDATE
UNKNOWN
~~~

Do not infer a migration requirement from age alone.

## Decide

Use [DECISION_MATRIX.md](references/DECISION_MATRIX.md) for comparisons and [VERSION_AND_COMPATIBILITY.md](references/VERSION_AND_COMPATIBILITY.md) when a material version/compatibility or freshness question exists.

For each required technology role:

1. state the requirement or constraint the role must satisfy;
2. identify the smallest credible candidate set;
3. eliminate candidates that violate hard constraints;
4. compare remaining candidates using relevant decision forces rather than a universal scorecard;
5. verify material compatibility and lifecycle claims;
6. choose preserve, select, defer, prototype, or reject;
7. state the version/range/constraint policy and why that precision is appropriate;
8. record meaningful alternatives and consequences.

Use decision forces only when relevant, such as:

- functional fit;
- target-platform compatibility;
- interoperability with the rest of the selected stack;
- lifecycle/support horizon;
- ecosystem/library availability;
- operational complexity;
- performance/resource requirements;
- security/supply-chain surface;
- licensing/commercial constraints;
- portability/vendor coupling;
- team capability and maintainability;
- migration cost;
- observability/debuggability needs;
- testability and local-development implications.

Do not collapse these forces into fake precision when the evidence is qualitative.

## Implement

The primary implementation is the stack decision artifact, not automatic adoption of the selected technologies.

Amend a healthy existing record in place. Use [stack-report.template.md](assets/stack-report.template.md) for a new or structurally incomplete artifact.

When the requested workflow expects the conventional project artifact, write:

~~~text
docs/project/05-STACK.md
~~~

Otherwise use the repository's existing decision-document location.

The artifact must make each essential technology auditable:

~~~text
ROLE
-> CHOICE
-> VERSION / CONSTRAINT
-> RATIONALE
-> EVIDENCE
-> COMPATIBILITY
-> RISKS / CONDITIONS
~~~

Use [compatibility-matrix.template.md](assets/compatibility-matrix.template.md) when pairwise technology or platform compatibility is material.

Do not modify manifests, lockfiles, infrastructure, or application code merely to make the selected stack real unless the user separately authorizes implementation.

## Validate

Use [VALIDATION_CHECKLIST.md](references/VALIDATION_CHECKLIST.md) for the decision gate, applying only affected checks plus mandatory invariants on the bounded path.

The minimum gate is:

> Every essential technology and every material version/constraint has a verifiable reason and is compatible with the product and target environment to the level claimed.

Validation should include, when applicable:

- trace every essential choice to at least one requirement or constraint;
- verify the exact meaning of version/range/channel constraints;
- verify pairwise compatibility among tightly coupled technologies;
- verify target OS/architecture/browser/runtime/deployment compatibility;
- confirm existing-repository choices against actual manifests and lockfiles;
- run a focused spike, build, install, compatibility probe, or smoke test when documentation alone cannot resolve material uncertainty;
- identify unsupported, experimental, end-of-life, or unverified combinations explicitly;
- verify the artifact separates facts, assumptions, evidence, decisions, and open questions.

A decision with material unknown compatibility is not a PASS. Mark it blocked, conditional, or requiring an experiment.

## Report

Report:

1. requirements and constraints used;
2. current stack evidence when applicable;
3. selected essential technologies and their roles;
4. version/range/constraint policy for each material choice;
5. evidence and compatibility status;
6. alternatives considered and why they were not selected;
7. consequences, lifecycle/operational costs, and migration implications;
8. validation actually executed and results;
9. unverified combinations, blocked checks, assumptions, and open questions;
10. the path of the resulting stack artifact.

For amendments, identify the changed section, preserved decisions, reused/invalidated/fresh evidence, and unresolved assumptions.

Do not hide uncertainty behind a recommendation.

## Detailed references

- [Stack Selection Standard](references/STACK_SELECTION_STANDARD.md)
- [Discovery Model](references/DISCOVERY_MODEL.md)
- [Decision Matrix](references/DECISION_MATRIX.md)
- [Version and Compatibility](references/VERSION_AND_COMPATIBILITY.md)
- [Validation Checklist](references/VALIDATION_CHECKLIST.md)
