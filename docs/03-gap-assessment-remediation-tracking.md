# Gap Assessment & Remediation Tracking

**Project Type:** Compliance Assessment | **Platform:** SaaS GRC Console
**Scope:** 6 gap types across 12 compliance frameworks, 434 security controls

---

## What This Project Does

A **gap assessment** is a systematic check that finds what's missing or incomplete in an organization's security posture. Think of it as a health checkup for compliance -- it examines every security rule the organization is supposed to follow and identifies where reality doesn't match the requirement.

This project is an automated gap detection and remediation tracking system that scans 434 security controls across 12 compliance frameworks, identifies 6 distinct types of gaps, classifies each by severity, and tracks the fix from discovery to closure.

---

## The Problem It Solves

Before this system:

- Security practices existed informally, but gaps were discovered inconsistently
- Some controls were marked "implemented" without any supporting evidence
- Others had expired evidence or no one assigned to maintain them
- These problems only surfaced during audits -- when it was too late to fix them efficiently
- There was no systematic way to detect gaps, rank their urgency, or track fixes
- The organization couldn't answer: *"How compliant are we right now?"*

---

## The 6 Gap Types

The system detects six distinct types of compliance gaps:

| # | Gap Type | What It Means | Example |
|---|----------|---------------|---------|
| 1 | **Missing Implementation** | The security rule exists on paper but hasn't been put into practice | A policy says "encrypt all data at rest" but no encryption is actually configured |
| 2 | **Missing Evidence** | The security measure may be working, but there's no proof | Access controls exist but no one has documented or recorded them |
| 3 | **Partial Coverage** | The control is partly implemented but doesn't fully satisfy the requirement | Password policy requires 12 characters, but only enforced on some systems |
| 4 | **Expired Evidence** | Evidence was collected once but is now outdated | A security scan from 18 months ago is being used as current proof |
| 5 | **No Owner** | No one is formally responsible for maintaining this control | An important security rule exists but nobody is assigned to ensure it stays working |
| 6 | **No Documentation** | The control may be working but lacks written procedures | A process is followed informally but has never been documented |

---

## How Gaps Are Classified

Every gap is ranked by severity to ensure the most critical issues are addressed first:

| Severity | What It Means | Priority |
|----------|---------------|----------|
| **Critical** | A missing safeguard that directly exposes sensitive data or creates regulatory risk | Fix immediately |
| **High** | A significant weakness that could lead to audit failure or security incidents | Fix within defined timeline |
| **Medium** | An important gap that should be addressed but doesn't pose immediate danger | Plan and schedule |
| **Low** | A minor documentation or process gap | Address when possible |

### Prioritization Principle

Not all gaps are equally urgent. A missing security safeguard protecting customer data is **Critical**. A missing documentation link is **Low**. Resources go where the risk is highest.

The system also calculates a **Gap Priority Score** = Risk Score x Control Criticality, which is used to determine the order in which gaps should be fixed.

---

## Gap Remediation Workflow

Every gap follows a structured fix process with tracked deadlines:

```
Open --> In Progress --> Remediated --> Closed
```

| State | What Happens |
|-------|-------------|
| **Open** | Gap has been identified and assigned to someone |
| **In Progress** | The assigned person is actively working on the fix |
| **Remediated** | The fix has been implemented and is awaiting verification |
| **Closed** | The gap has been verified as resolved |

Each transition is tracked with timestamps, and automated notifications are sent when gap status changes -- to both the assigned person and their manager.

---

## Automated Gap Detection

The system includes an automated analyzer that scans controls against evidence records and identifies gaps automatically. It can:

- Run automatically across all 12 frameworks
- Be triggered manually for a specific framework
- Detect all 6 gap types in a single scan
- Link each gap back to the specific control and framework it affects

This means the organization doesn't have to manually check 434 controls for compliance -- the system does it continuously.

---

## Connection to Risk Management

Critical and High severity gaps don't just get tracked -- they automatically create entries in the **Risk Register** (see Risk Register documentation):

- The system creates a risk entry linked to the gap
- The risk inherits the gap's severity and affected control information
- If the gap is later resolved, the linked risk is updated accordingly

This ensures that every serious compliance gap is also tracked as a business risk.

---

## What Each Gap Record Contains

Every gap in the system tracks:

- **Control ID and Framework** -- which security rule and standard is affected
- **Gap Type** -- which of the 6 types it is
- **Severity** -- how critical the gap is
- **Description** -- details about what's missing or incomplete
- **Remediation Plan** -- the specific steps to fix it
- **Remediation Owner** -- who is responsible for the fix
- **Target Date** -- when the fix should be completed
- **Actual Close Date** -- when it was actually resolved
- **Status** -- where it is in the workflow (Open, In Progress, Remediated, Closed)
- **Linked Risk ID** -- if an auto-generated risk was created
- **Notes** -- additional context or comments

---

## Real-World Results

### Initial Assessment Findings

When the system was first run against the SaaS platform's 434 controls:

| Status | Count | What It Means |
|--------|-------|---------------|
| **Fully Implemented** | 99 | Controls working correctly with proper evidence |
| **Partially Implemented** | 163 | Controls partly in place, needing additional work or evidence |
| **Not Implemented** | 165 | Controls not yet put into practice -- requiring prioritized action |
| **Not Applicable** | 7 | Controls that don't apply to this platform |

### Framework-Specific Baseline Assessments

- **ISO 27001**: 42 gaps found -- baseline established for tracking improvement
- **SOC 2**: 17 gaps found -- used for targeted remediation planning

These baselines allow the organization to measure improvement over time through comparative assessments.

---

## Trend Tracking

The system doesn't just find gaps -- it tracks how the organization's gap posture changes over time:

- Gap counts by severity are captured at each assessment
- Comparative analysis shows whether gaps are increasing or decreasing
- Framework-by-framework trend data shows which areas are improving
- This data feeds into the compliance scoring system for overall health tracking

---

## Integration with Other Systems

| Connected System | How It Connects |
|-----------------|-----------------|
| **Risk Register** | Critical/High gaps auto-create risk entries |
| **Evidence Collection** | Missing or expired evidence triggers gap detection |
| **Compliance Scoring** | Gap counts directly affect framework compliance scores |
| **Remediation Tracking** | Deadline monitoring with automated notifications |
| **Audit Readiness** | Gap status reports are included in auditor workbooks |

---

## Key Numbers

| Metric | Value |
|--------|-------|
| Gap Types Detected | 6 |
| Frameworks Assessed | 12 |
| Controls Scanned | 434 |
| Severity Levels | 4 (Critical, High, Medium, Low) |
| Remediation Workflow States | 4 |
| Initial Gaps Identified | 328 (163 partial + 165 not implemented) |

---

*This document is confidential and shared on request. For questions, please reach out via the contact form on the portfolio site.*
