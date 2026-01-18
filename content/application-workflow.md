---
title: Application Workflow
date: 2025-01-17
tags:
  - job-search
  - workflow
  - process
---

# Application Workflow

> **Quick Reference:** How to log job applications systematically

---

## When You Apply to a Job

Complete these steps each time you submit an application:

### Step 1: Create Application Log Entry

Create a new file in `content/Applications/` named after the company and role:

```
content/Applications/ExtraHop - CSM Public Sector.md
```

Use the [[Application Log Entry Template]] and fill in:

- Company details
- Job description (copy full JD)
- Resume variant used
- Cover letter content
- Application date
- Source (LinkedIn, company site, referral, etc.)

### Step 2: Store Application Materials

Save your resume and cover letter files in `content/Applications/Assets/`:

```
content/Applications/Assets/
├── ExtraHop_CSM_PublicSector_Resume_2025-01-17.pdf
├── ExtraHop_CSM_PublicSector_CoverLetter_2025-01-17.pdf
└── ...
```

**Naming Convention:** `{Company}_{Role}_{DocType}_{Date}.pdf`

### Step 3: Update Application Tracker

Add a row to the Active Applications table in [[Application Tracker]]:

| Company  | Role                  | Applied Date | Status  | Next Step         | Notes             |
| -------- | --------------------- | ------------ | ------- | ----------------- | ----------------- |
| ExtraHop | CSM I - Public Sector | 2025-01-17   | Applied | Wait for response | NDR/cybersecurity |

### Step 4: Update Quick Stats

Increment the counters in [[Application Tracker]]:

- Total Applications +1
- Active Applications +1

### Step 5: Update Dashboard (Optional)

Add to the Active Applications table in [[Career Vault Dashboard]] for high-priority applications.

---

## Application Log Entry Contents

Each application log should capture:

### Required Information

| Field        | Description                            |
| ------------ | -------------------------------------- |
| Company      | Company name                           |
| Role         | Job title                              |
| Applied Date | YYYY-MM-DD                             |
| Status       | Applied, Phone Screen, Interview, etc. |
| Resume Used  | Link to variant note                   |
| Source       | Where you found the job                |
| Job Link     | URL to posting (may expire)            |

### Job Description (Full Copy)

Always paste the complete job description. Postings get taken down and you'll need this for interview prep.

### Resume Variant

Link to or note which resume variant you used. If you created a new one, document:

- What you customized
- Why those customizations matter for this role

### Cover Letter

Paste the full cover letter text. This helps you:

- Remember your positioning for interviews
- Reuse good language for similar roles
- Track what messaging works

### Application Materials

Note the filenames of the PDFs you submitted:

- Resume file
- Cover letter file

### Company Research Notes

- What does the company do?
- Why are you interested?
- Key themes from the JD
- Questions you have

---

## Status Progression

Track applications through these stages:

```
Applied → Phone Screen → Interview → Offer/Rejected/Withdrawn
           ↓
      No Response (after 2+ weeks)
```

### Status Definitions

| Status       | Meaning                                    |
| ------------ | ------------------------------------------ |
| Applied      | Submitted application                      |
| Phone Screen | Initial recruiter call scheduled/completed |
| Interview    | In active interview process                |
| Offer        | Received offer                             |
| Rejected     | They declined                              |
| Withdrawn    | You declined                               |
| No Response  | 2+ weeks, no reply                         |

### When Status Changes

1. Update the [[Application Tracker]] table
2. Update the application log note
3. If interviewing, add interview prep notes
4. If offer/rejected/withdrawn, move to Archived table

---

## Interview Prep (When You Advance)

Add these sections to your application log:

### Interview Schedule

| Round | Date | With      | Format | Notes          |
| ----- | ---- | --------- | ------ | -------------- |
| Phone | TBD  | Recruiter | 30min  | Initial screen |

### Questions They Asked

Document questions after each interview for future reference.

### Questions to Ask

Prepare role-specific questions based on:

- The job description
- Company research
- Your genuine curiosities

### Post-Interview Notes

After each round, document:

- How it went
- What you learned
- Red/green flags
- Next steps

---

## Folder Structure

```
content/
├── Applications/
│   ├── Assets/
│   │   ├── {Company}_{Role}_Resume_{Date}.pdf
│   │   └── {Company}_{Role}_CoverLetter_{Date}.pdf
│   ├── ExtraHop - CSM Public Sector.md
│   └── ...
├── application-tracker.md
├── career-vault-dashboard.md
└── ...
```

---

## Weekly Maintenance

- [ ] Review applications with no response (2+ weeks)
- [ ] Update statuses for any changes
- [ ] Follow up on pending applications
- [ ] Archive closed applications

---

## Metrics to Track

Over time, these patterns emerge:

| Metric                 | What It Tells You       |
| ---------------------- | ----------------------- |
| Response rate          | Are you targeting well? |
| Time to first contact  | Market temperature      |
| Interview conversion   | Resume effectiveness    |
| Which variants perform | What positioning works  |
| Sources that convert   | Where to focus effort   |

---

_Last updated: January 2025_
