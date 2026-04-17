# Risk Treatment, KRI Monitoring & Escalation

**Project Type:** Risk Governance | **Platform:** SaaS GRC Console
**Scope:** 4 treatment options, 6-state lifecycle, 5 KRIs, 3-level auto-escalation

---

## What This Project Does

Identifying risks is only the first step. This project handles what happens **after** a risk is found -- how it's treated, how it's monitored over time, and how the organization ensures Critical and High risks get the attention they deserve.

It provides a structured treatment workflow, ongoing monitoring through Key Risk Indicators (KRIs), and an automatic escalation engine that ensures no serious risk goes unnoticed by leadership.

---

## The Problem It Solves

Before this system:

- Risks were identified but had no formal process for deciding what to do about them
- There was no way to track whether a risk treatment was actually working
- Critical risks could sit unaddressed for weeks without anyone noticing
- Leadership had no automatic alerts when serious risks emerged
- There was no ongoing measurement of risk health -- just periodic manual reviews
- Accepted risks had no documented justification for why they were accepted

---

## The 4 Treatment Options

When a risk is identified and scored, the organization must decide how to handle it. There are four options:

| Option | What It Means | When to Use It | Example |
|--------|---------------|----------------|---------|
| **Mitigate** | Implement controls to reduce the likelihood or impact | When the risk can be reduced to an acceptable level | Installing a firewall to reduce the risk of unauthorized access |
| **Accept** | Acknowledge the risk and document why it's acceptable | When the cost of treatment exceeds the potential damage | A very low-likelihood risk that would cost more to fix than the potential loss |
| **Transfer** | Shift the risk to a third party | When someone else can handle the risk better | Purchasing cyber insurance to cover potential data breach costs |
| **Avoid** | Eliminate the activity that creates the risk | When no treatment can reduce the risk adequately | Discontinuing a feature that creates unacceptable privacy exposure |

---

## The 6-State Risk Lifecycle

Every risk moves through six defined states, creating a complete audit trail:

```
Identified --> Assessed --> Treatment Selected --> Treatment Approved --> Monitoring --> Closed
```

| State | What Happens | Who's Involved |
|-------|-------------|----------------|
| **Identified** | Risk is discovered and logged | Anyone (Analyst, Lead, Auto-generated) |
| **Assessed** | Likelihood and impact are scored on the 5x5 matrix | Risk Owner, Lead |
| **Treatment Selected** | One of the 4 options is chosen with a documented plan | Risk Owner |
| **Treatment Approved** | The plan is reviewed and approved | Lead or Admin (required for Critical/High) |
| **Monitoring** | Treatment is being implemented; progress is tracked | Risk Owner |
| **Closed** | Risk has been adequately addressed or is no longer relevant | Lead or Admin verifies |

### Approval Requirements

- **Critical and High risks**: Treatment plans **must** be approved by a Lead or Admin before moving to the Monitoring state
- **Medium and Low risks**: Can proceed with standard approval
- All approvals are logged with timestamps and the approver's identity

---

## Residual Risk Tracking

After treatment is applied, the risk doesn't disappear -- it's **reduced**. The remaining risk is called **residual risk**.

The system tracks:

- **Residual Likelihood** -- how likely the risk is after treatment
- **Residual Impact** -- how much damage it could cause after treatment
- **Residual Score** -- the recalculated risk level (Residual Likelihood x Residual Impact)

This allows the organization to verify that treatment actions actually reduced the risk to an acceptable level.

---

## 5 Key Risk Indicators (KRIs)

KRIs are ongoing measurements that show whether the organization's risk posture is healthy or deteriorating. Each KRI has **Green / Amber / Red** thresholds:

| # | KRI | What It Measures | Why It Matters |
|---|-----|------------------|----------------|
| 1 | **Overdue Evidence Rate** | Percentage of evidence items past their due date | High overdue rates mean the organization can't prove its controls work |
| 2 | **Critical/High Open Risks** | Count of unresolved Critical and High severity risks | Too many open serious risks means the organization is exposed |
| 3 | **Gap Remediation Rate** | Percentage of compliance gaps fixed on time | Low remediation rates mean gaps are growing, not shrinking |
| 4 | **Control Effectiveness** | Percentage of controls rated as effective | Low effectiveness means security measures aren't working as intended |
| 5 | **Treatment Plan Completion** | Percentage of risk treatment plans that have been executed | Incomplete treatment means risks remain unmitigated despite plans |

### How KRI Thresholds Work

Each KRI is measured against predefined thresholds:

| Status | What It Means |
|--------|---------------|
| **Green** | Within acceptable range -- no action needed |
| **Amber** | Approaching the danger zone -- monitor closely |
| **Red** | Outside acceptable range -- immediate attention required |

---

## 3-Level Auto-Escalation Engine

The system automatically escalates risks that remain unaddressed, ensuring leadership is aware of serious issues:

### Escalation Timeline

| Risk Level | Day 7 | Day 14 | Day 21 | Day 30 |
|------------|-------|--------|--------|--------|
| **Critical** | Level 1 (Lead) | Level 2 (Admin) | Level 3 (Executive) | -- |
| **High** | -- | Level 1 (Lead) | Level 2 (Admin) | Level 3 (Executive) |

### How It Works

1. When a Critical or High risk remains in an unresolved state, the escalation clock starts
2. At each escalation point, the system automatically sends notifications to the next level of authority
3. The notification includes: risk details, how long it has been open, current treatment status, and the assigned owner
4. Escalation is automatic -- no one needs to manually flag the issue
5. Once the risk moves to a resolved state, the escalation clock stops

This ensures that even if a risk owner is unresponsive, leadership will be alerted within a defined timeframe.

---

## Automated Risk Reassessment

A weekly automated process runs every **Monday at 4:00 AM** to:

- Check all risks against their scheduled review dates
- Flag any risks that are overdue for reassessment
- Recalculate risk scores if underlying data has changed
- Send notifications to risk owners when reviews are due
- Update KRI measurements

This prevents risks from becoming "stale" -- sitting in the register without anyone reviewing whether they're still accurate.

---

## Integration with Other Systems

| Connected System | How It Connects |
|-----------------|-----------------|
| **Risk Register** | Treatment options and lifecycle states are managed here |
| **Gap Assessment** | Auto-generated risks from Critical/High gaps flow into the treatment workflow |
| **Evidence Collection** | Overdue evidence rate feeds the KRI monitoring system |
| **Compliance Scoring** | KRI health affects overall compliance posture |
| **Notifications (Zoho Cliq)** | All escalation alerts delivered through team messaging |

---

## Key Numbers

| Metric | Value |
|--------|-------|
| Treatment Options | 4 (Mitigate, Accept, Transfer, Avoid) |
| Lifecycle States | 6 |
| Key Risk Indicators | 5 |
| Escalation Levels | 3 |
| Risks Pre-Loaded | 18 |
| Automated Reassessment | Weekly (Monday 4:00 AM) |
| KRI Threshold Levels | 3 (Green, Amber, Red) |

---

*This document is confidential and shared on request. For questions, please reach out via the contact form on the portfolio site.*
