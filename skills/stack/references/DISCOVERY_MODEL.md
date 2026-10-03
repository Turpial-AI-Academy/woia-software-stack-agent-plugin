# Stack Discovery Model

## 1. Goal

Build a constraint map before comparing technologies.

~~~text
REQUIREMENTS
+ CONSTRAINTS
+ EXISTING STATE (when present)
= DECISION BOUNDARY
~~~

## 2. Requirements inventory

Capture only requirements that can affect technology choice.

| Dimension | Questions |
|---|---|
| Product behavior | What capabilities must the product provide? |
| Quality attributes | What latency, throughput, availability, durability, startup, footprint, or UX properties matter? |
| Data | What data volume, consistency, query, retention, offline, sync, or residency behavior matters? |
| Integrations | Which protocols, SDKs, APIs, identity systems, devices, or external services are mandatory? |
| Distribution | Browser, package, binary, mobile store, desktop installer, container, embedded, server, edge, other? |
| Scale | What is known about users, requests, jobs, storage, concurrency, or growth? |
| Operability | What operational burden is acceptable? |

Do not invent numerical requirements that were never provided.

## 3. Constraint inventory

Classify each constraint.

~~~text
HARD
SOFT
PREFERENCE
ASSUMPTION
UNKNOWN
~~~

Useful categories:

- target OS and architecture;
- browser/device/runtime versions;
- deployment or hosting restrictions;
- network/offline constraints;
- compliance/privacy/data residency;
- required or forbidden vendors;
- licensing/commercial terms;
- budget/cost ceiling;
- team/language capability;
- delivery timeline;
- interoperability with existing systems;
- security boundary;
- support/lifecycle horizon;
- build/package/distribution constraints.

A preference should never masquerade as a hard constraint.

## 4. Existing repository evidence

When a repository exists, inspect:

- language/runtime declarations;
- package/application manifests;
- lockfiles;
- framework and SDK versions;
- database clients and migration tooling;
- build/bundling config;
- generated clients/schemas;
- infrastructure/deployment manifests;
- tests/build logs relevant to compatibility;
- existing ADRs or stack documentation.

Construct:

~~~text
role
-> technology
-> declared version/range
-> resolved version when visible
-> consumers
-> target environment
-> evidence of health/problem
~~~

Do not infer that an unused-looking package is essential without tracing its role.

## 5. Constraint conflicts

Record contradictions before selecting technology.

Examples:

- required platform is unsupported by an otherwise preferred runtime;
- an integration requires a version incompatible with an existing framework;
- a licensing restriction excludes a candidate;
- an offline product requirement conflicts with a mandatory hosted dependency;
- a target environment cannot run the proposed runtime.

A conflict is a decision blocker until the underlying requirement/constraint is changed or a compatible alternative is found.

## 6. Unknowns

Unknowns that could alter the stack decision must be explicit.

For each unknown state:

- why it matters;
- what decision it blocks;
- evidence needed;
- cheapest useful experiment or source;
- owner/next action when known.

Do not convert an unknown into an assumption merely to finish the document.

## 7. Discovery output

Before `DECIDE`, be able to state:

1. the essential technology roles that need decisions;
2. hard constraints;
3. soft constraints/preferences;
4. existing choices that should be preserved or reviewed;
5. material compatibility unknowns;
6. decision forces relevant to this product.
