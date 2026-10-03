# Stack Decision Matrix

This is a decision guide, not a universal technology ranking.

## 1. Existing technology disposition

| Situation | Default action |
|---|---|
| Existing technology satisfies requirements, target environment, lifecycle, and interoperability | `PRESERVE` |
| Evidence is incomplete but no concrete failure is established | `REVIEW` / gather evidence |
| A hard requirement or compatibility constraint is violated | `REPLACE_CANDIDATE` |
| Technology is unsupported/end-of-life for the required target and no acceptable support path exists | `REPLACE_CANDIDATE` |
| Migration would add cost without solving a product problem | `PRESERVE` |
| Existing choice is unusual but healthy and supported | `PRESERVE` unless a material constraint says otherwise |
| Current state cannot be established | `UNKNOWN` |

## 2. Candidate disposition

| Situation | Action |
|---|---|
| Candidate violates a hard constraint | `REJECT` |
| Candidate satisfies hard constraints and evidence is sufficient | `SELECT` or keep as viable alternative |
| Material compatibility remains unknown | `PROTOTYPE` / verify before selection |
| Decision can safely wait without blocking delivery | `DEFER` |
| Candidate only wins on popularity or agent familiarity | Do not select on that basis |
| Candidate requires extra essential infrastructure with no requirement for it | Prefer the simpler viable candidate |

## 3. Choose the comparison dimensions

Use only dimensions that can change the decision.

Potential dimensions:

- required feature fit;
- supported target environments;
- compatibility with preserved technologies;
- lifecycle/support policy;
- ecosystem/integration availability;
- performance/resource fit;
- operational burden;
- security/supply-chain exposure;
- licensing/commercial fit;
- portability/vendor lock-in;
- team maintainability;
- testability/debugging;
- migration cost;
- total cost.

Document evidence behind each material comparison.

## 4. No fake scoring

Avoid a weighted score when:

- weights are arbitrary;
- evidence quality differs substantially;
- a hard constraint can be hidden by a high total score;
- qualitative tradeoffs are being forced into invented numbers.

If a score is genuinely required by organizational policy, keep hard constraints as pass/fail gates before scoring.

## 5. Minimality test

Before adding an essential technology, ask:

1. What requirement creates this role?
2. Can an already selected technology satisfy it safely?
3. Does this addition create another runtime, service, data system, deployment unit, or operational boundary?
4. What compatibility relationships now require maintenance?
5. Is the new complexity justified by evidence?

If the role has no requirement, defer the addition.

## 6. Migration test

A migration proposal should state:

- current limitation;
- requirement/constraint being solved;
- target choice;
- compatibility/migration path;
- data/API/build implications;
- coexistence strategy if needed;
- rollback or exit path;
- validation proving the reason for migration is actually resolved.

Do not migrate solely for aesthetic consistency.

## 7. Tie handling

When multiple candidates remain viable:

- prefer the one with fewer unsupported assumptions;
- prefer lower essential complexity when product value is equivalent;
- preserve existing technology when switching cost has no offsetting benefit;
- otherwise document the unresolved tradeoff and request the minimum decision needed from the owner.

Do not hide a genuine product/business preference behind technical certainty.
