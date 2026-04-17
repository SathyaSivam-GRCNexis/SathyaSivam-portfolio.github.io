# Data Protection Impact Assessment (DPIA) Module

**Project Type:** Privacy Compliance | **Platform:** SaaS GRC Console
**Scope:** 4-step DPIA wizard aligned to GDPR, HIPAA, and ISO 27701

---

## What This Project Does

A **Data Protection Impact Assessment (DPIA)** is a formal process required by privacy laws (especially GDPR Article 35) when an organization plans to process sensitive personal data in a way that could pose risks to individuals' privacy.

This project is a structured, 4-step guided workflow (wizard) that walks the compliance team through a DPIA -- from describing what data is being processed, through assessing privacy risks, to documenting protective measures and routing for formal approval by the Data Protection Officer (DPO).

---

## The Problem It Solves

Before this system:

- DPIAs were done informally or inconsistently -- sometimes in documents, sometimes in meetings, sometimes not at all
- There was no standard template or process for conducting DPIAs
- Privacy risks related to data processing weren't linked to the broader risk register
- There was no formal approval workflow involving the DPO
- Auditors couldn't easily verify that DPIAs were being conducted for high-risk data processing activities

---

## Why DPIAs Matter

Privacy regulations like GDPR, HIPAA, and ISO 27701 require organizations to assess the impact of data processing activities on individuals' privacy. A DPIA is not optional -- it's a legal requirement in many cases.

| Regulation | DPIA Requirement |
|------------|------------------|
| **GDPR (Article 35)** | Required when processing is likely to result in a high risk to individuals' rights |
| **HIPAA** | Required for certain activities involving protected health information |
| **ISO 27701** | Requires privacy impact assessments as part of the privacy information management system |

---

## The 4-Step DPIA Process

### Step 1: Describe the Processing

Answer the fundamental questions:
- **What** personal data is being collected or processed?
- **Why** is it being processed? (the legal basis or business purpose)
- **How** is the data flowing through the system? (collection, storage, sharing, deletion)
- **Who** has access to this data?
- **How long** is the data retained?

This step creates a clear picture of the data processing activity being assessed.

### Step 2: Assess Privacy Risks

Identify and evaluate the privacy risks:
- What could go wrong with this data processing? (unauthorized access, data breach, misuse, excessive collection)
- How likely is each risk to occur?
- How severe would the impact be on individuals if it happened?
- Are there any vulnerable populations affected? (children, patients, employees)

Each risk is scored and classified by severity.

### Step 3: Document Protective Measures

For each identified risk, document the safeguards in place:
- What security controls are already protecting this data?
- Are additional controls needed?
- How do these controls map to the organization's existing control library?
- What is the residual risk after protective measures are applied?

This step links directly to the platform's control library and risk register, ensuring consistency.

### Step 4: Route for DPO Approval

The completed DPIA is routed for formal review and approval:
- The Data Protection Officer (DPO) reviews the assessment
- The DPO can approve, request changes, or reject the processing activity
- The approval (or rejection) is logged with timestamps and comments
- Approved DPIAs become part of the compliance record for audit purposes

---

## Integration with Other Systems

| Connected System | How It Connects |
|-----------------|-----------------|
| **Risk Register** | Privacy risks identified in the DPIA are linked to the risk register for ongoing tracking |
| **Control Library** | Protective measures reference existing security controls across 434 controls |
| **Evidence Collection** | DPIA documentation serves as evidence for GDPR, HIPAA, and ISO 27701 controls |
| **Audit Management** | Completed DPIAs are tracked and available for audit review |
| **Gap Assessment** | Missing DPIAs for high-risk processing create compliance gaps |

---

## Who's Involved

| Role | Responsibility |
|------|---------------|
| **Analyst** | Initiates the DPIA, describes processing, identifies risks |
| **Lead** | Reviews the assessment, verifies protective measures |
| **DPO (Data Protection Officer)** | Provides formal approval or rejection |
| **Admin** | Manages DPIA templates and workflows |

---

## Key Numbers

| Metric | Value |
|--------|-------|
| DPIA Steps | 4 |
| Frameworks Aligned | 3 (GDPR, HIPAA, ISO 27701) |
| Connected Systems | 5 (Risk Register, Control Library, Evidence, Audit, Gap Assessment) |

---

*This document is confidential and shared on request. For questions, please reach out via the contact form on the portfolio site.*
