# Evidence Collection & Lifecycle Management

**Project Type:** Compliance Operations | **Platform:** SaaS GRC Console
**Scope:** 434 security controls across 12 compliance frameworks

---

## What This Project Does

Every organization that follows security standards (like ISO 27001, SOC 2, or GDPR) must regularly prove that its security measures are actually working. This proof comes in the form of **evidence** -- documents, screenshots, logs, reports, and records that show a security rule is being followed.

This project is a complete system for **collecting, reviewing, scoring, and tracking** that evidence. It ensures nothing falls through the cracks by assigning every piece of evidence to a specific person, automatically checking its quality, and escalating overdue items through a 5-tier notification system.

---

## The Problem It Solves

Before this system existed:

- Evidence was scattered across emails, shared drives, and spreadsheets
- No one knew who was responsible for which evidence
- Evidence often expired (became outdated) without anyone noticing
- Quality varied wildly -- some submissions were thorough, others were incomplete
- Auditors would request evidence during audits, and the team scrambled to find it
- Deadlines were missed because there was no escalation process

---

## How It Works

### Step-by-Step Workflow

```
1. Create Cycle --> 2. Create Requirements --> 3. DRI Notified
       |                     |                        |
       v                     v                        v
  Admin defines          Each evidence item       Assigned person
  quarterly period       linked to a control,     gets a notification
  (e.g., Q1 2026)       assigned to a person      to submit evidence
                                                        |
                                                        v
4. DRI Submits Evidence --> 5. Reviewer Reviews --> 6. Accept or Revise
       |                          |                        |
       v                          v                        v
  Uploads file,            Separate person          Reviewer accepts
  adds description,        reviews (cannot          OR sends back
  metadata attached         review own work)        with comments
```

### Key Concepts Explained

| Term | What It Means |
|------|---------------|
| **DRI** | Directly Responsible Individual -- the one person accountable for submitting a specific piece of evidence |
| **Evidence Cycle** | A defined time period (usually quarterly) during which evidence must be collected |
| **Segregation of Duties** | The person who submits evidence cannot be the same person who reviews it -- this prevents bias |
| **Control** | A specific security rule or safeguard (e.g., "All user passwords must be at least 12 characters") |

---

## Evidence Quality Scoring

Every piece of evidence is automatically scored across **4 dimensions** to determine its quality:

| Dimension | Weight | What It Checks |
|-----------|--------|-----------------|
| **Completeness** | 30% | Are all required fields filled? Is a file attached? Is the description adequate? |
| **Freshness** | 25% | How recent is the evidence relative to the current collection cycle? |
| **Format** | 20% | Is the file in the correct format? Does it follow naming conventions? |
| **Coverage** | 25% | Does the evidence fully address the control it's linked to? |

### Quality Grades

The combined score produces a letter grade:

| Grade | Score Range | What It Means |
|-------|-------------|---------------|
| **A** | 90 -- 100 | Excellent -- fully meets all quality criteria |
| **B** | 80 -- 89 | Good -- minor improvements possible |
| **C** | 70 -- 79 | Adequate -- meets minimum standards but needs attention |
| **D** | 60 -- 69 | Below Standard -- significant gaps in quality |
| **F** | Below 60 | Failing -- does not meet quality requirements |

If evidence quality is poor, the associated control is flagged regardless of what the responsible person claims. This ensures audits are objective, not based on assumptions.

---

## 5-Tier Deadline Escalation System

When evidence is due, the system automatically sends escalating notifications to make sure nothing gets missed:

| Tier | When It Triggers | Who Gets Notified | Tone |
|------|-------------------|-------------------|------|
| **Tier 1** | 21 days before due date | DRI (assigned person) | Friendly reminder |
| **Tier 2** | 7 days before due date | DRI | Urgent reminder |
| **Tier 3** | On the due date | DRI + Team Lead | Alert |
| **Tier 4** | 3 days overdue | Team Lead + Admin | Escalation |
| **Tier 5** | 7 days overdue | All stakeholders | Critical escalation |

The escalation system runs automatically every day at 9:00 AM, checking all evidence items against their due dates.

---

## Evidence Lifecycle

Each piece of evidence moves through a clear lifecycle:

```
Pending --> Submitted --> Under Review --> Accepted
                |                |
                v                v
           (Revision        (Rejected --
            needed)          resubmit)
```

Additionally, an automated daily check (running at 2:00 AM) scans for **expired evidence** -- evidence that was once valid but is now outdated. When stale evidence is found, it triggers re-collection alerts so the responsible person knows to provide fresh proof.

---

## What Each Evidence Record Tracks

Every evidence item in the system contains:

- **Title and Description** -- what the evidence is and what it proves
- **Linked Control and Framework** -- which security rule and standard it satisfies
- **DRI Information** -- who is responsible (name and email)
- **Due Date and Priority** -- when it's needed and how important it is
- **Status** -- where it is in the lifecycle (pending, submitted, under review, accepted, revision needed)
- **Submission Details** -- date submitted, file uploaded, file name
- **Review Details** -- reviewer name, review date, comments
- **Quality Score and Grade** -- automatically calculated quality assessment

---

## AI-Assisted Features During Submission

When a DRI is submitting evidence, the system provides intelligent assistance:

1. **Smart Suggestions** -- recommends what type of evidence would best satisfy the control
2. **Auto-Classification** -- automatically categorizes the uploaded evidence by type
3. **Quality Preview** -- shows a predicted quality score before final submission, so the DRI can improve it before submitting

---

## Integration with Other Systems

| Connected System | What It Does |
|-----------------|--------------|
| **Risk Register** | Controls without evidence automatically flag related risks |
| **Gap Assessment** | Missing or expired evidence creates gap entries |
| **Compliance Scoring** | Evidence quality directly affects the framework's compliance score |
| **Cloud Storage (Zoho WorkDrive)** | Evidence files are stored securely in the cloud with drag-and-drop upload |
| **Notifications (Zoho Cliq)** | All escalation alerts are delivered through the team messaging platform |

---

## Impact

- Every piece of evidence across 434 controls has a named owner, a deadline, and a quality score
- Segregation of duties ensures no single person can both submit and approve evidence
- The 5-tier escalation system prevents evidence from going overdue without leadership awareness
- Auditors receive evidence that has already been quality-checked, reducing audit friction
- Evidence expiry tracking ensures the organization never relies on outdated proof

---

## Key Numbers

| Metric | Value |
|--------|-------|
| Security Controls Covered | 434 |
| Compliance Frameworks | 12 |
| Quality Scoring Dimensions | 4 |
| Quality Grades | 5 (A through F) |
| Escalation Tiers | 5 |
| AI-Assisted Features | 3 (during submission) |
| GRC Analysts Served | 50+ |

---

*This document is confidential and shared on request. For questions, please reach out via the contact form on the portfolio site.*
