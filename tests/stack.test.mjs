import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const ROOT = path.resolve(import.meta.dirname, "..");

const skillRoot = path.join(ROOT, "skills", "stack");

test("stack artifact supports conventional output and preserves alternate repository paths", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  assert.match(skill, /docs\/project\/05-STACK\.md/);
  assert.match(skill, /Otherwise use the repository's existing decision-document location/);
});

test("stack selection preserves architecture and repository environment ownership", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  assert.match(skill, /Keep stack selection distinct from architecture, repository environment/i);
});

test("stack flow discovers requirements and constraints before deciding", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  const discover = skill.indexOf("## Discover");
  const decide = skill.indexOf("## Decide");
  const implement = skill.indexOf("## Implement");
  const validate = skill.indexOf("## Validate");
  const report = skill.indexOf("## Report");
  assert.ok(discover >= 0 && decide > discover && implement > decide && validate > implement && report > validate);
  assert.match(skill, /Start from two explicit inputs:[\s\S]*requirements[\s\S]*constraints/i);
});

test("every essential technology requires rationale, evidence, version constraint and compatibility", async () => {
  const standard = await readFile(path.join(skillRoot, "references", "STACK_SELECTION_STANDARD.md"), "utf8");
  assert.match(standard, /ESSENTIAL TECHNOLOGY[\s\S]*ROLE[\s\S]*CHOICE[\s\S]*VERSION OR CONSTRAINT[\s\S]*RATIONALE[\s\S]*EVIDENCE[\s\S]*COMPATIBILITY/);
  assert.match(standard, /If one of these fields is materially unknown, record the unknown rather than inventing certainty/i);
});

test("existing stacks are preserve-first rather than fashion-driven", async () => {
  const standard = await readFile(path.join(skillRoot, "references", "STACK_SELECTION_STANDARD.md"), "utf8");
  const matrix = await readFile(path.join(skillRoot, "references", "DECISION_MATRIX.md"), "utf8");
  assert.match(standard, /Preserve a healthy existing choice/i);
  assert.match(standard, /Do not migrate because:[\s\S]*fashionable/i);
  assert.match(matrix, /Existing technology satisfies requirements.*`PRESERVE`/s);
  assert.match(matrix, /Do not migrate solely for aesthetic consistency/i);
});

test("version guidance rejects latest as policy and scopes compatibility claims", async () => {
  const guide = await readFile(path.join(skillRoot, "references", "VERSION_AND_COMPATIBILITY.md"), "utf8");
  assert.match(guide, /Do not write `latest` as a durable constraint/i);
  assert.match(guide, /VERIFIED[\s\S]*CONDITIONAL[\s\S]*UNVERIFIED[\s\S]*INCOMPATIBLE[\s\S]*UNKNOWN/);
  assert.match(guide, /Never report `UNVERIFIED` or `UNKNOWN` as supported/i);
  assert.match(guide, /Do not assume that because A supports B and B supports C, A\/B\/C is a verified combination/i);
});

test("discovery distinguishes hard constraints, preferences, assumptions and unknowns", async () => {
  const discovery = await readFile(path.join(skillRoot, "references", "DISCOVERY_MODEL.md"), "utf8");
  assert.match(discovery, /HARD[\s\S]*SOFT[\s\S]*PREFERENCE[\s\S]*ASSUMPTION[\s\S]*UNKNOWN/);
  assert.match(discovery, /A preference should never masquerade as a hard constraint/i);
  assert.match(discovery, /Do not convert an unknown into an assumption merely to finish the document/i);
});

test("stack report template satisfies the technology rationale and compatibility gate", async () => {
  const report = await readFile(path.join(skillRoot, "assets", "stack-report.template.md"), "utf8");
  assert.match(report, /# Stack/);
  assert.match(report, /Role \| Technology \| Version \/ constraint \| Rationale \| Evidence \| Compatibility \| Status/);
  assert.match(report, /Every essential row needs a verifiable reason/i);
  assert.match(report, /PASS requires a verifiable reason for every essential technology\/material version constraint/i);
});

test("compatibility matrix prevents unsupported transitive claims", async () => {
  const matrix = await readFile(path.join(skillRoot, "assets", "compatibility-matrix.template.md"), "utf8");
  assert.match(matrix, /Technology relationships/);
  assert.match(matrix, /VERIFIED \/ CONDITIONAL \/ UNVERIFIED \/ INCOMPATIBLE \/ UNKNOWN/);
  assert.match(matrix, /Do not infer transitive compatibility/i);
});

test("validation fails when essential rationale or material compatibility is missing", async () => {
  const checklist = await readFile(path.join(skillRoot, "references", "VALIDATION_CHECKLIST.md"), "utf8");
  assert.match(checklist, /If any essential technology lacks a verifiable reason, the gate fails/i);
  assert.match(checklist, /material compatibility unknown.*conditional or blocked/is);
  assert.match(checklist, /Every essential technology and every material version\/constraint has a verifiable reason/i);
});

test("a bounded stack amendment preserves unchanged decision inputs and artifacts", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  const bounded = skill.split("### Bounded amendment")[1]?.split("### Deep path")[0];
  assert.ok(bounded, "the skill must define a bounded amendment path");
  for (const obligation of [/healthy existing stack/i, /rationale|traceability/i, /version constraints/i,
    /OS\/architecture\/runtime/i, /manifests.*lockfiles/i, /compatibility.*unchanged/i,
    /authoritative existing.*record/i, /smallest affected section/i, /preserve unrelated.*valid evidence/is,
    /revalidate.*mandatory invariants/is]) assert.match(bounded, obligation);
});

test("material stack changes and uncertain evidence keep the deep path", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  const deep = skill.split("### Deep path and evidence freshness")[1]?.split("## Discover")[0];
  assert.ok(deep);
  for (const trigger of [/new stack decision/i, /contradictory.*missing durable evidence/i,
    /technology.*versions\/ranges.*target environment/is, /public contracts/i, /persisted data/i,
    /migration/i, /security\/licensing/i, /deployment\/rollback/i]) assert.match(deep, trigger);
});

test("stack evidence distinguishes reuse, invalidation, fresh proof and expiring facts", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  for (const obligation of [/reused evidence.*provenance/i, /evidence invalidated/i,
    /fresh observations\/probes/i, /assumptions\/inferences separately/i, /not evidence/i,
    /source.*date\/version.*target environment.*freshness/is, /invalidate evidence.*inputs or scope change/is,
    /failed invariant/i, /fresh authoritative evidence/i]) assert.match(skill, obligation);
});

test("stack references and templates load for the decision trigger", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  const standard = await readFile(path.join(skillRoot, "references", "STACK_SELECTION_STANDARD.md"), "utf8");
  const report = await readFile(path.join(skillRoot, "assets", "stack-report.template.md"), "utf8");
  assert.match(skill, /references by trigger/i);
  assert.match(skill, /templates only for missing artifacts|structurally incomplete artifact/i);
  assert.match(standard, /amend the affected technology row/i);
  assert.match(report, /amend only affected rows\/sections/i);
  assert.match(report, /reused evidence.*invalidated evidence.*fresh observations.*assumptions/is);
});
