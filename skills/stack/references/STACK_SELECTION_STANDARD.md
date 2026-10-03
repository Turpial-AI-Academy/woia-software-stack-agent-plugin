# Stack Selection Standard

## 1. Objective

Choose the minimum sufficient technology set that satisfies the product's actual requirements and constraints, and make every essential choice reviewable from evidence.

The standard is technology-neutral. It does not rank languages, frameworks, clouds, databases, package managers, runtimes, or architecture styles in the abstract.

## 2. Governing invariant

For every essential technology:

~~~text
ESSENTIAL TECHNOLOGY
= ROLE
+ CHOICE
+ VERSION OR CONSTRAINT
+ RATIONALE
+ EVIDENCE
+ COMPATIBILITY
~~~

If one of these fields is materially unknown, record the unknown rather than inventing certainty.

## 3. Inputs

The minimum decision inputs are:

~~~text
requirements
constraints
~~~

Repository evidence is an additional input when a system already exists.

Requirements explain what the product must accomplish. Constraints delimit acceptable solutions. Stack selection consumes those inputs; it does not silently redefine them.

## 4. What counts as an essential technology

A technology is essential when product implementation, execution, persistence, integration, build/distribution, or operation materially depends on it.

Typical roles may include:

- implementation language;
- runtime;
- application framework;
- UI framework or native UI toolkit;
- data store;
- cache/search/queue when genuinely required;
- externally significant SDK/client;
- build/bundling technology;
- deployment runtime or platform technology;
- infrastructure component that is part of the product's execution contract.

Do not inflate the stack document with every transitive library. Record technologies whose choice changes compatibility, lifecycle, delivery, or product constraints.

## 5. Decision hierarchy

Evaluate in this order:

1. hard requirements and constraints;
2. compatibility with target environments;
3. interoperability with already selected or preserved essential technologies;
4. lifecycle/support viability;
5. product-relevant tradeoffs;
6. migration and operational cost;
7. preferences only after the above are satisfied.

A preference cannot override a hard constraint without an explicit requirement change.

## 6. Existing repositories: preserve first

For an existing system:

~~~text
current technology
-> actual role
-> current version/constraint
-> evidence of health or problem
-> preserve / review / replace-candidate / unknown
~~~

Preserve a healthy existing choice when it satisfies the requirements and target environment.

Do not migrate because:

- another technology is newer;
- a different framework is fashionable;
- the agent is more familiar with another ecosystem;
- a benchmark from another workload looks better;
- a greenfield preference is mistaken for a migration requirement.

Replacement needs a concrete reason such as an unmet requirement, incompatibility, unsupported lifecycle state, unacceptable risk/cost, or material simplification supported by evidence.

## 7. Greenfield decisions

Greenfield does not mean "choose the most modern stack".

Prefer:

- fewer essential technologies;
- well-understood compatibility boundaries;
- lifecycle appropriate to the expected product horizon;
- operational complexity proportional to the product;
- direct support for target platforms and distribution needs;
- enough ecosystem maturity for required integrations;
- clear ownership of version constraints.

Avoid introducing a database, queue, cache, container layer, separate runtime, or cloud service before a requirement justifies the role.

## 8. Evidence quality

Evidence may include:

- authoritative vendor/project compatibility and support documentation;
- official release or lifecycle documentation;
- repository manifests and lockfiles;
- source/build/runtime evidence from the actual project;
- controlled compatibility probes or spikes;
- reproducible benchmark results for the product-relevant workload;
- contractual platform/environment requirements supplied by the user.

Community posts, popularity, download counts, generic benchmarks, and model memory can inform discovery but should not be the sole basis of a material compatibility claim.

For time-sensitive facts, record the source and its version/date scope.

## 9. Decision forces

Use only forces that matter to the product:

- capability/feature fit;
- target platform support;
- performance and resource limits;
- data consistency/query/storage needs;
- portability and vendor coupling;
- security and supply-chain exposure;
- compliance/licensing;
- support horizon and upgrade burden;
- ecosystem/integration maturity;
- developer/team capability;
- operations and deployment complexity;
- observability/debugging;
- testability;
- local-development implications;
- cost;
- migration impact.

Do not add arbitrary weights merely to manufacture an objective-looking winner.

## 10. Stack boundaries

Stack selection decides **what technology fulfils a role and under what material version/compatibility constraint**.

It does not own:

- product requirements;
- architecture boundaries/topology;
- developer-machine setup and reproducibility;
- detailed component design;
- test strategy;
- security control design;
- CI/CD policy;
- deployment procedure.

Those concerns can constrain or validate the stack decision.

## 11. Minimal decision record

A stack artifact must contain:

- decision status and scope;
- requirements/constraints used;
- current-state evidence when applicable;
- selected technologies table;
- version/constraint rationale;
- compatibility evidence;
- alternatives;
- consequences and risks;
- validation performed;
- assumptions/open questions;
- review triggers.

The record may be concise for a small product. Minimum-sufficient evidence is preferred to ceremony.

### Amend a healthy record

A local rationale or traceability clarification can amend the affected technology row without rebuilding the entire stack artifact. Establish that choices, versions/constraints, target environment, manifests/lockfiles, and compatibility claims remain unchanged; preserve unrelated decisions and valid evidence. Revalidate the affected rationale plus the essential-technology invariant. Do not replay discovery, candidate comparison, or templates merely because a new session started.

Keep evidence with source and scope: reusable evidence still covers unchanged inputs; invalidated evidence no longer covers changed inputs or a failed invariant; fresh evidence is actually observed or executed for the changed claim. Assumptions/inferences are not evidence. Check the freshness of upstream lifecycle, compatibility, security, and licensing facts even when local files are stable. Missing evidence or a material technology/version/environment/migration/security/deployment change requires the deep path for affected relationships.

## 12. Review triggers

Revisit a stack decision when:

- a target platform or distribution model changes;
- an essential dependency reaches an unsupported state;
- a compatibility claim becomes false;
- a product requirement materially changes;
- an integration introduces a new hard constraint;
- measured behavior contradicts a key assumption;
- security/licensing/compliance constraints change;
- migration cost or operational burden becomes materially different.
