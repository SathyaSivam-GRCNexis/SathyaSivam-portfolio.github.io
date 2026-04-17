# Enterprise Risk Register & Assessment

**Project Type:** Risk Management | **Platform:** SaaS GRC Console
**Scope:** 5 risk categories, 5x5 scoring matrix, 18 identified risks

---

## What This Project Does

A **risk register** is a structured inventory of all known security threats facing an organization. Think of it as a master list that answers: *"What could go wrong, how bad would it be, and what are we doing about it?"*

This project is a complete risk assessment system that identifies, scores, tracks, and manages security risks for a SaaS platform certified across 12 compliance frameworks. It replaces reactive, ad-hoc risk handling with a proactive, scored, and continuously monitored approach.

---

## The Problem It Solves

Before this system:

- No formal list of risks existed anywhere
- Risk decisions were **reactive** -- the team only dealt with risks when auditors pointed them out
- There was no consistent way to score how serious a risk was
- No one was formally assigned as the owner of each risk
- There was no way to track whether actions taken were actually reducing danger over time
- Leadership had no visibility into the organization's overall risk posture

---

## How Risks Are Organized

### 5 Risk Categories

Every risk is classified into one of five categories, covering the full spectrum of organizational threats:

| Category | What It Covers | Example |
|----------|----------------|---------|
| **Engineering** | Code vulnerabilities, architecture flaws, technical debt | An unpatched server could be exploited by attackers |
| **Operational** | Process failures, human error, resource gaps | An employee accidentally deletes critical data |
| **Vendor** | Third-party dependencies, supply chain risks | A cloud provider experiences an outage affecting your platform |
| **Legal & Regulatory** | Non-compliance, regulatory changes, contractual obligations | A new privacy law requires changes to data handling |
| **Business** | Market risks, reputation damage, financial impact | A data breach causes customers to lose trust |

---

## How Risks Are Scored

### The 5x5 Risk Matrix

Every risk is scored on two dimensions:

- **Likelihood** -- How probable is it that this risk will actually happen? (1 = Very Unlikely, 5 = Almost Certain)
- **Impact** -- If it does happen, how much damage would it cause? (1 = Negligible, 5 = Catastrophic)

The **Risk Score** = Likelihood x Impact, giving a score from 1 to 25.

```
                        IMPACT
                 1     2     3     4     5
              +-----+-----+-----+-----+-----+
         5    |  5  | 10  | 15  | 20  | 25  |   Almost Certain
              +-----+-----+-----+-----+-----+
         4    |  4  |  8  | 12  | 16  | 20  |   Likely
  L      +-----+-----+-----+-----+-----+
  I  3   |  3  |  6  |  9  | 12  | 15  |   Possible
  K      +-----+-----+-----+-----+-----+
  E  2   |  2  |  4  |  6  |  8  | 10  |   Unlikely
  L      +-----+-----+-----+-----+-----+
  I  1   |  1  |  2  |  3  |  4  |  5  |   Rare
  H      +-----+-----+-----+-----+-----+
  O
  O
  D
```

### Risk Severity Levels

Based on the score, each risk is classified into a severity level:

| Severity | Score Range | Color | What It Means |
|----------|-------------|-------|---------------|
| **Critical** | 20 -- 25 | Red | Immediate action required; executive attention needed |
| **High** | 12 -- 19 | Orange | Urgent; must be addressed within defined timeline |
| **Medium** | 6 -- 11 | Yellow | Important; should be planned for and monitored |
| **Low** | 2 -- 5 | Green | Acceptable; monitor and review periodically |
| **Negligible** | 1 | Gray | Minimal concern; document and move on |

---

## Risk Lifecycle

Every risk moves through a structured lifecycle from discovery to resolution:

```
Identified --> Assessed --> Treatment Selected --> Treatment Approved
                                                         |
                                                         v
                                                    Monitoring --> Closed
```

| State | What Happens |
|-------|-------------|
| **Identified** | Risk is discovered and logged with basic details |
| **Assessed** | Likelihood and impact are scored, category is assigned |
| **Treatment Selected** | A plan is chosen (Mitigate, Accept, Transfer, or Avoid) |
| **Treatment Approved** | Lead/Admin approves the plan (required for Critical and High risks) |
| **Monitoring** | Treatment is being implemented; progress is tracked |
| **Closed** | Risk has been adequately addressed or is no longer relevant |

---

## Auto-Risk Generation

One of the most powerful features: **risks are automatically created from gap assessments**.

When the gap assessment system finds a **Critical or High severity gap** (see Gap Assessment documentation), the system automatically:

1. Creates a new risk entry in the register
2. Sets the source as "gap_assessment" with a link back to the specific gap
3. Pre-populates the risk details based on the gap's severity and affected control
4. Notifies the relevant risk owner

This means the risk register stays current without manual effort -- every serious compliance gap automatically becomes a tracked risk.

If the underlying gap is later closed, the linked risk is updated accordingly.

---

## Risk Appetite Settings

The system allows the organization to define its **risk appetite** -- how much risk it is willing to accept -- for each of the 5 categories:

| Setting | What It Controls |
|---------|-----------------|
| **Acceptable Threshold** | Risks scoring below this are auto-accepted |
| **Tolerance Threshold** | Risks scoring above this require formal treatment |
| **Approval Required Threshold** | Risks above this need Lead/Admin sign-off |
| **Auto-Escalate Threshold** | Risks above this trigger immediate escalation to leadership |
| **Review Frequency** | How often (in days) each risk must be reviewed |

This ensures the organization's risk tolerance is consistently applied, not left to individual judgment.

---

## What Each Risk Record Contains

Every risk in the register tracks:

- **Title and Description** -- what the risk is and why it matters
- **Category** -- which of the 5 categories it falls under
- **Likelihood and Impact** -- the scores that produce the risk level
- **Risk Score and Level** -- the calculated severity
- **Owner** -- the person responsible for managing this risk (name and email)
- **Treatment Option and Plan** -- how the risk is being addressed
- **Treatment Justification** -- why this approach was chosen
- **Residual Likelihood and Impact** -- the remaining risk after treatment is applied
- **Residual Score** -- the recalculated severity post-treatment
- **Source** -- where the risk came from (manual entry, gap assessment, etc.)
- **Related Controls and Frameworks** -- which security rules and standards are affected
- **Next Review Date** -- when this risk must be reassessed
- **Review History** -- a log of all past reviews

---

## Visual Risk Heat Map

The system includes a visual **5x5 heat map** that displays all risks by their severity on a color-coded grid. This gives:

- **Analysts** a clear view of which risks need immediate attention
- **Leadership** a quick snapshot of the organization's overall risk posture
- **Auditors** evidence that risks are being systematically identified and managed

The heat map is not just for display -- it updates in real time as risks are added, scored, or resolved.

---

## Automated Risk Reviews

A weekly automated process (running every Monday at 4:00 AM) checks all risks against their review dates:

- Flags risks that are overdue for review
- Recalculates scores if underlying data has changed
- Sends notifications to risk owners when reviews are due
- Ensures no risk goes stale or forgotten

---

## Integration with Other Systems

| Connected System | How It Connects |
|-----------------|-----------------|
| **Gap Assessment** | Critical/High gaps auto-generate risks |
| **Evidence Collection** | Missing evidence triggers risk entries |
| **KRI Monitoring** | Key Risk Indicators track risk trends over time |
| **Compliance Scoring** | Risk levels affect overall compliance posture |
| **Escalation Engine** | Critical and High risks auto-escalate to leadership |

---

## Impact

- 18 risks identified and tracked across all 5 categories during initial assessment
- Every risk has a named owner, documented action plan, and residual risk tracking
- Auto-risk generation ensures no serious gap goes untracked
- The visual heat map gives auditors and leadership clear visibility into risk posture
- Risk management shifted from reactive audit findings to proactive, scored governance

---

## Key Numbers

| Metric | Value |
|--------|-------|
| Risk Categories | 5 |
| Scoring Matrix | 5x5 (scores 1-25) |
| Severity Levels | 5 (Critical to Negligible) |
| Lifecycle States | 6 |
| Risks Identified | 18 (initial assessment) |
| Treatment Options | 4 |
| Automated Review Cycle | Weekly |

---

*This document is confidential and shared on request. For questions, please reach out via the contact form on the portfolio site.*
