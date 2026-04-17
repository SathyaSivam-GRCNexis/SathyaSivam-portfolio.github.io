# GRC Scoring & Control Maturity Systems

**Project Type:** Measurement & Analytics | **Platform:** SaaS GRC Console
**Scope:** 6 scoring systems, 5-level maturity model, 434 controls across 3 tiers

---

## What This Project Does

You can't improve what you can't measure. This project provides **6 interconnected scoring systems** that automatically measure every aspect of compliance health -- from individual evidence quality to overall organizational maturity. It also classifies all 434 security controls into tiers based on their scope, making it clear who is responsible for what.

These scoring systems power the dashboards, reports, and decision-making across the entire GRC platform.

---

## The Problem It Solves

Before this system:

- Compliance was binary -- either "compliant" or "not compliant" -- with no nuance
- There was no way to measure *how well* a control was implemented
- Evidence quality varied, but there was no scoring system to quantify this
- Leadership couldn't tell if the organization was improving or declining
- Different frameworks were assessed differently, making comparison impossible
- Maturity was a vague concept, not a measurable scale

---

## The 6 Scoring Systems

### 1. Risk Scoring (5x5 Matrix)

Measures how serious each identified risk is.

- **Inputs**: Likelihood (1-5) x Impact (1-5)
- **Output**: Risk Score (1-25)
- **Levels**: Critical (20-25), High (12-19), Medium (6-11), Low (2-5), Negligible (1)
- **Used by**: Risk Register, Risk Treatment, KRI Monitoring

### 2. Evidence Quality Scoring (4 Dimensions)

Measures the quality of each submitted piece of compliance evidence.

| Dimension | Weight | What It Checks |
|-----------|--------|----------------|
| Completeness | 30% | All fields filled, file attached, adequate description |
| Freshness | 25% | How recent the evidence is relative to the cycle |
| Format | 20% | Correct file type and naming conventions |
| Coverage | 25% | Fully addresses the linked control |

- **Output**: Score (0-100) and Grade (A through F)
- **Used by**: Evidence Collection, Compliance Scoring, Dashboard

### 3. Control Health Score

Measures how well each individual security control is performing.

**Control Health** = (Evidence Score + Test Score + Automation Score) / 3

| Component | What It Measures |
|-----------|-----------------|
| Evidence Score | Quality of evidence supporting this control |
| Test Score | Results of control testing and verification |
| Automation Score | Degree of automation in control operation |

- **Used by**: Framework Scoring, Gap Assessment, Audit Readiness

### 4. Gap Priority Score

Determines which compliance gaps should be fixed first.

**Gap Priority** = Risk Score x Control Criticality

- Higher priority = fix first
- Ensures resources are directed toward the most impactful gaps
- **Used by**: Gap Assessment, Remediation Planning

### 5. Compliance Score

Measures overall compliance at the framework level.

**Compliance Score** = (Effective Controls / Total Controls) x 100

- Also has a weighted variant factoring in control criticality
- Calculated per framework and as an overall aggregate
- Captured daily for trend analysis
- **Used by**: Dashboard, Reports, Auditor Workbook

### 6. Maturity Model (5 Levels)

Measures how mature each control's implementation is on a progressive scale.

| Level | Name | What It Means |
|-------|------|---------------|
| **1** | Initial | Ad-hoc processes; no formal structure; depends on individual effort |
| **2** | Developing | Partially documented; some consistency but still informal |
| **3** | Defined | Fully documented, consistently followed across the organization |
| **4** | Managed | Measured and monitored; performance data is collected and reviewed |
| **5** | Optimized | Continuous improvement; processes are regularly refined based on data |

Most organizations start at Level 1-2 for most controls. The goal is to progressively move controls toward Level 4-5.

---

## Control Tier Classification

All 434 security controls are classified into three tiers based on their scope:

| Tier | Count | What It Covers | Who's Responsible |
|------|-------|----------------|-------------------|
| **Product** | 171 | Controls specific to the CRM product itself -- features, data handling, user-facing security | Product/Engineering teams |
| **Platform** | 91 | Controls related to infrastructure, hosting, networking, and platform services | Platform/DevOps teams |
| **Organizational** | 165 | Controls related to people, processes, policies, and governance | GRC/HR/Management teams |
| **Not Applicable** | 7 | Controls explicitly excluded as not relevant to this platform | -- |

This classification helps the organization understand who is accountable for each control and ensures remediation efforts are directed to the right teams.

---

## How the Scoring Systems Work Together

```
Evidence Quality Score
        |
        v
Control Health Score ----> Compliance Score ----> Dashboard & Reports
        |                        |
        v                        v
Gap Priority Score          Daily Snapshots ----> Trend Analysis
        |
        v
Risk Score ----> KRI Monitoring ----> Escalation
```

All six systems are interconnected. A poor evidence quality score reduces the control health score, which lowers the compliance score, which shows up in dashboards and reports. Simultaneously, the gap priority score identifies where to focus remediation, and the risk score feeds KRI monitoring.

---

## Key Numbers

| Metric | Value |
|--------|-------|
| Scoring Systems | 6 |
| Maturity Levels | 5 |
| Total Controls | 434 |
| Product Tier Controls | 171 |
| Platform Tier Controls | 91 |
| Organizational Tier Controls | 165 |
| Evidence Quality Dimensions | 4 |
| Quality Grade Levels | 5 (A through F) |
| Risk Matrix | 5x5 (scores 1-25) |

---

*This document is confidential and shared on request. For questions, please reach out via the contact form on the portfolio site.*
