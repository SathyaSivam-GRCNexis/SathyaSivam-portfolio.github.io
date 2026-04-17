# Cross-Framework Control Mapping

**Project Type:** Compliance Architecture | **Platform:** SaaS GRC Console
**Scope:** 175 mappings across 12 frameworks, 434 controls, 3 relationship types

---

## What This Project Does

When an organization is certified across multiple security standards (like ISO 27001, SOC 2, GDPR, and HIPAA), many of the security rules overlap. A requirement like "control who can access the system" appears in almost every standard -- but each standard describes it slightly differently.

This project creates **cross-framework control mappings** that identify where these overlaps exist, so the organization can satisfy multiple standards with a single implementation and a single piece of evidence -- instead of doing the same work separately for each standard.

---

## The Problem It Solves

Before this system:

- A single security requirement appeared as separate tasks for ISO 27001, SOC 2, GDPR, and HIPAA
- Evidence was being collected multiple times for what was essentially the same rule
- Audit preparation was slow because nothing was cross-referenced
- Teams didn't know which controls overlapped across frameworks
- Static spreadsheet tracking caused version conflicts and outdated information
- A change to one control's evidence had to be manually updated across multiple framework trackers

---

## The Scale

### 12 Frameworks, 434 Controls

| Framework | Controls | Focus Area |
|-----------|----------|------------|
| **ISO 27001** | 93 | Information security management |
| **NIST 800-53** | 64 | US federal security standards |
| **SOC 2 Type II** | 61 | Service organization trust criteria |
| **ISO 27701** | 56 | Privacy information management |
| **HIPAA** | 53 | US healthcare data protection |
| **GDPR** | 42 | EU data protection regulation |
| **CSA STAR** | 16 | Cloud security assurance |
| **ISO 9001** | 13 | Quality management |
| **ENS** | 11 | Spanish national security scheme |
| **ISO 27017** | 9 | Cloud-specific security controls |
| **ISO 27018** | 8 | Cloud privacy controls |
| **ISO 22301** | 8 | Business continuity management |

---

## How Mappings Work

### 3 Relationship Types

Not all control overlaps are the same. The system classifies each mapping into one of three types:

| Relationship | What It Means | Example |
|-------------|---------------|---------|
| **Equivalent** | Controls are essentially the same -- satisfying one fully satisfies the other | ISO 27001 A.9.2.1 (User Access) = SOC 2 CC6.1 (Logical Access) |
| **Partial Overlap** | Controls cover similar ground but with different scope or depth | GDPR Art. 32 (Security of Processing) ~ HIPAA 164.312 (Technical Safeguards) |
| **Related** | Controls address the same topic but have different specific requirements | ISO 27001 A.12.4 (Logging) ~ SOC 2 CC7.2 (Monitoring Activities) |

### 175 Bidirectional Mappings

All mappings are **bidirectional** -- if ISO 27001 A.9.2.1 maps to SOC 2 CC6.1, then SOC 2 CC6.1 also maps back to ISO 27001 A.9.2.1. This creates a complete relationship web across all frameworks.

---

## Benefits of Cross-Framework Mapping

### 1. Reduced Duplicate Work

When a DRI submits access control evidence for ISO 27001, the system identifies that the same evidence can satisfy SOC 2, HIPAA, and GDPR requirements. **Submit once, satisfy many.**

### 2. Consistent Coverage

If a control is mapped as "Equivalent" across three frameworks, an issue found in one framework automatically flags the related controls in the other frameworks.

### 3. Faster Audit Preparation

Auditors can see cross-framework coverage in a single view. When an ISO 27001 auditor asks about access control, the compliance team can show that the same control also passes SOC 2 and HIPAA requirements -- demonstrating a mature, integrated approach.

### 4. Framework-Pair Analysis

A **framework-pair matrix** shows where frameworks overlap most and least. This helps the organization:
- Prioritize which frameworks to certify next (choosing frameworks with high overlap with existing certifications reduces effort)
- Understand which areas of compliance are unique to specific standards
- Plan resource allocation for multi-framework compliance

---

## What Each Control Record Contains

Every control in the unified library tracks:

| Field | What It Contains |
|-------|-----------------|
| **Control ID** | Unique identifier |
| **Title** | Short name of the control |
| **Description** | What the control requires |
| **Framework IDs** | Which frameworks this control maps to |
| **Tier** | Product (171), Platform (91), or Organizational (165) |
| **Category** | Functional grouping |
| **Owner** | Person or team responsible |
| **Implementation Status** | Not Implemented, Partially Implemented, Fully Implemented |
| **Effectiveness** | How well the control is working |
| **Test Results** | Latest control testing outcomes |
| **Maturity Level** | 1 (Initial) through 5 (Optimized) |
| **Mapped Controls** | Related controls in other frameworks with relationship type |

---

## Real-World Example

Consider a security requirement: **"Restrict access to systems based on user roles."**

This requirement appears in multiple frameworks:

| Framework | Control ID | How It's Described |
|-----------|------------|-------------------|
| ISO 27001 | A.9.2.1 | User access provisioning |
| SOC 2 | CC6.1 | Logical and physical access controls |
| GDPR | Art. 32 | Security of processing (access restrictions) |
| HIPAA | 164.312(a)(1) | Access control |
| NIST 800-53 | AC-2 | Account management |

Without mapping: the team collects separate evidence for each, managed by potentially different people, with separate deadlines.

With mapping: one evidence submission (like an access control policy + audit log) is linked across all five frameworks. One person owns it. One deadline. Five frameworks satisfied.

---

## Integration with Other Systems

| Connected System | How It Connects |
|-----------------|-----------------|
| **Evidence Collection** | Cross-framework evidence reuse recommendations |
| **Gap Assessment** | Gaps in one framework surface related gaps in mapped frameworks |
| **Risk Register** | Risks are linked to controls that span multiple frameworks |
| **Compliance Scoring** | Per-framework scoring while sharing common control data |
| **AI Engine** | AI suggests additional mappings based on control descriptions |

---

## Key Numbers

| Metric | Value |
|--------|-------|
| Cross-Framework Mappings | 175 |
| Total Controls | 434 |
| Frameworks Covered | 12 |
| Relationship Types | 3 (Equivalent, Partial Overlap, Related) |
| Primary Mapping Frameworks | 5 (SOC 2, ISO 27001, GDPR, HIPAA, ISO 27701) |

---

*This document is confidential and shared on request. For questions, please reach out via the contact form on the portfolio site.*
