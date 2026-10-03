# Version and Compatibility

## 1. Why version scope matters

"Compatible with the product" is incomplete when compatibility depends on a version, environment, architecture, browser, protocol, SDK, or release channel.

Every material compatibility claim should identify its scope.

## 2. Version constraint forms

Use the form that matches the real contract.

| Form | Use when |
|---|---|
| Exact pin | Reproducibility or a known compatibility boundary requires one exact version |
| Closed/open range | Upstream or integration support is expressed as a range |
| Minimum | A required feature exists from a known version onward and newer supported versions remain acceptable |
| Maximum | A downstream component is not compatible beyond a known boundary |
| Major/minor policy | Compatibility is governed at that release granularity |
| Release channel | Stable/LTS/ESR/etc. is itself a support constraint |
| Unresolved | Evidence is not yet sufficient to set the constraint |

Do not write `latest` as a durable constraint.

## 3. Declared vs resolved versions

For existing repositories, distinguish:

~~~text
declared constraint
resolved/locked version
runtime-observed version
supported upstream range
~~~

These values may differ without being contradictory.

Do not rewrite a healthy dependency policy merely because a lockfile resolves a newer patch.

## 4. Compatibility claim states

Use explicit status:

~~~text
VERIFIED
CONDITIONAL
UNVERIFIED
INCOMPATIBLE
UNKNOWN
~~~

- `VERIFIED`: evidence directly covers the claimed versions/environment.
- `CONDITIONAL`: supported only when stated conditions are satisfied.
- `UNVERIFIED`: plausible but not yet proven for the target combination.
- `INCOMPATIBLE`: evidence establishes a conflict.
- `UNKNOWN`: insufficient evidence to make even a bounded claim.

Never report `UNVERIFIED` or `UNKNOWN` as supported.

## 5. Evidence hierarchy

Prefer, in order appropriate to the question:

1. authoritative upstream support/compatibility/lifecycle documentation;
2. official release notes or migration guides;
3. actual repository manifest/lock/runtime evidence;
4. controlled install/build/test/spike on the target environment;
5. reproducible benchmark or compatibility report for the relevant workload;
6. secondary/community evidence as discovery input, not sole proof of a material claim.

For changing facts, verify freshness rather than relying on model memory.

## 6. Pairwise and transitive compatibility

Check relationships that can break the stack, for example:

~~~text
runtime <-> framework
framework <-> language/compiler
framework <-> database/client
runtime <-> native dependency
SDK <-> external API/service
build tool <-> language/runtime
package <-> target OS/architecture
deployment runtime <-> artifact format
~~~

Do not assume that because A supports B and B supports C, A/B/C is a verified combination.

## 7. Platform claims

A platform claim should be scoped where relevant by:

- OS family/version;
- CPU architecture;
- browser/device;
- filesystem or native-system dependency;
- container/serverless/edge runtime;
- package/binary distribution mode;
- network/offline condition.

Only claim a support tier that the evidence actually proves.

## 8. Lifecycle

Record when lifecycle is material:

- stable vs preview/experimental;
- LTS/ESR/support window where applicable;
- end-of-life or deprecation;
- maintenance status;
- upgrade cadence and expected burden.

Do not upgrade merely because a newer version exists. Upgrade when the product/lifecycle/compatibility decision justifies it.

## 9. Uncertainty protocol

When compatibility remains uncertain:

1. state the exact unknown;
2. state the decision it blocks;
3. identify the authoritative source or experiment that can resolve it;
4. run the smallest useful probe when authorized;
5. keep the stack decision conditional until the result exists.

A concise `UNKNOWN` is preferable to a fabricated exact version.
