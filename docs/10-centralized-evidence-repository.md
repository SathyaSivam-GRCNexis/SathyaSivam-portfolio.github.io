# Centralized Evidence Repository & Cloud Storage

**Project Type:** Infrastructure & Integration | **Platform:** SaaS GRC Console
**Scope:** Cloud storage integration with Zoho WorkDrive, 7 integration endpoints, 12 frameworks

---

## What This Project Does

Compliance evidence -- the documents, screenshots, logs, and records that prove security rules are being followed -- needs to be stored securely, organized systematically, and accessible for audits. This project provides a **cloud-based evidence storage system** integrated directly into the GRC platform, eliminating scattered file storage and giving auditors direct access to supporting documents.

---

## The Problem It Solves

Before this system:

- Evidence files were scattered across personal drives, email attachments, shared folders, and chat messages
- There was no single place where an auditor could find all evidence for a specific control
- File versions were confusing -- multiple copies of the same document with no clear "current" version
- Uploading evidence was cumbersome -- requiring manual copying, linking, and naming
- Evidence couldn't be linked back to specific controls, frameworks, or collection cycles
- File security and access control were inconsistent

---

## How It Works

### Cloud Storage Integration

The system integrates with **Zoho WorkDrive** -- a secure cloud storage platform -- to handle all evidence file operations:

| Capability | How It Works |
|------------|-------------|
| **Upload** | Drag-and-drop file upload directly from the GRC platform |
| **Download** | One-click download of any evidence file |
| **Storage** | Files stored securely in Zoho WorkDrive with encryption at rest |
| **Linking** | Each uploaded file is linked to a specific evidence submission, control, and framework |
| **Versioning** | File versions are tracked -- new uploads create new versions, not replacements |
| **Access Control** | Only authorized users can view, upload, or download evidence files |
| **Deletion** | Controlled deletion with audit trail |

### 7 Integration Endpoints

The system provides 7 dedicated API endpoints for file operations:

| Endpoint | Purpose |
|----------|---------|
| **Upload File** | Accepts a file and stores it in WorkDrive |
| **Download File** | Retrieves a stored file for viewing or download |
| **List Files** | Shows all files associated with a specific evidence submission |
| **Delete File** | Removes a file (with access control and audit logging) |
| **Get File Metadata** | Returns file details (name, size, type, upload date, uploader) |
| **Link File to Submission** | Associates an uploaded file with a specific evidence record |
| **Verify File Exists** | Checks if a file is still available in cloud storage |

---

## Evidence File Lifecycle

```
Upload (Drag & Drop) --> Stored in WorkDrive --> Linked to Control & Framework
        |                       |                         |
        v                       v                         v
   File metadata           Encrypted at rest         Available for
   recorded                 and in transit           audit review
```

When a DRI (Directly Responsible Individual) submits evidence:

1. They drag and drop their file into the submission form
2. The file is uploaded to Zoho WorkDrive via the integration
3. File metadata (name, size, type, upload timestamp) is recorded in the system
4. The file is linked to the specific evidence requirement, control, and framework
5. The file is available for the reviewer to access during the review process
6. During audits, auditors can access the file directly from the compliance platform

---

## How This Helps Different Audiences

| Audience | Benefit |
|----------|---------|
| **Evidence Owners (DRIs)** | Simple drag-and-drop upload; no need to email files or use separate storage |
| **Reviewers** | Direct access to evidence files during review; no searching through shared drives |
| **GRC Analysts** | All evidence for a control is in one place; easy to verify completeness |
| **Auditors** | Self-service access to evidence files; no waiting for the team to find and send documents |
| **Administrators** | Centralized control over file access, storage, and retention policies |

---

## Security and Compliance

| Security Feature | Detail |
|-----------------|--------|
| **Encryption at Rest** | Files are encrypted in Zoho WorkDrive storage |
| **Encryption in Transit** | All file transfers use HTTPS/TLS encryption |
| **Access Control** | Role-based access -- only authorized users can view or manage files |
| **Audit Trail** | Every upload, download, and deletion is logged with timestamp and user identity |
| **Data Residency** | Files stored in the organization's designated data center region |

---

## Integration with Other Systems

| Connected System | How It Connects |
|-----------------|-----------------|
| **Evidence Collection** | Files are uploaded as part of the evidence submission workflow |
| **Evidence Quality Scoring** | File format and completeness are factored into quality scores |
| **Audit Management** | Auditors access evidence files directly from audit records |
| **Compliance Reporting** | Evidence file status is included in compliance reports and the auditor workbook |
| **Gap Assessment** | Missing evidence files trigger "Missing Evidence" gap type |

---

## Key Numbers

| Metric | Value |
|--------|-------|
| Integration Endpoints | 7 |
| Frameworks Served | 12 |
| Cloud Storage Provider | Zoho WorkDrive |
| Upload Method | Drag-and-drop |
| Security | Encrypted at rest and in transit |

---

*This document is confidential and shared on request. For questions, please reach out via the contact form on the portfolio site.*
