# Jake's Job Search Command Center

> **Operator Instructions for AI Coding Agents**

---

## Overview

This is a **Quartz-powered site** with full Git-based auto-deployment.

| Property       | Value                                              |
| -------------- | -------------------------------------------------- |
| Live URL       | `https://jake0lawrence.github.io/jake-job-search/` |
| Deploy Trigger | Push to `main` branch                              |
| Build Time     | ~2 minutes                                         |
| Theme          | "Warm Teal" v3.0 (Quartz)                          |

---

## Workflow

```
Edit file in content/ → git push → Auto-deploys
```

No manual publish step needed!

---

## Repository Structure

```
jake-job-search/
├── .github/
│   └── workflows/
│       └── deploy.yml           # Auto-deploy action
│
├── content/                     # All markdown files here
│   ├── index.md
│   ├── what-im-looking-for.md
│   ├── target-companies.md
│   ├── how-you-can-help.md
│   ├── my-superpowers.md
│   ├── resume-variants.md
│   ├── what-ive-done.md
│   ├── application-tracker.md
│   ├── career-vault-dashboard.md
│   └── assets/
│       ├── images/
│       └── resumes/
│
├── quartz/                      # Quartz framework
│   ├── styles/
│   │   └── custom.scss         # Warm Teal theme
│   └── ...
│
├── quartz.config.ts            # Site configuration
├── package.json
└── CLAUDE.md                   # ← You are here
```

---

## For AI Agents (Claude Code, etc.)

### ⚠️ IMPORTANT: Run Prettier Before Committing

**CI will fail if you don't format your files!** This repo uses Prettier for code style enforcement.

```bash
# ALWAYS run this before committing markdown changes:
npx prettier --write "content/**/*.md"

# Or for specific files:
npx prettier --write "content/path/to/file.md"
```

> **Past Mistake:** CI failed multiple times because Prettier wasn't run before pushing. Don't repeat this error!

### Making Content Changes

1. **Edit any file in `content/`**

```bash
   # Example: Update application tracker
   vim content/application-tracker.md
```

2. **Run Prettier to format** (required!)

```bash
   npx prettier --write content/application-tracker.md
```

3. **Commit and push**

```bash
   git add content/application-tracker.md
   git commit -m "Updated application status for Company X"
   git push
```

4. **Wait ~2 minutes** - site auto-deploys via GitHub Actions

### Frontmatter Schema

All content files should have:

```yaml
---
title: Human-Readable Page Title
date: 2025-01-08
tags:
  - job-search
  - relevant-tag
---
```

### Markdown Conventions

| Element     | Usage                     | Styling          |
| ----------- | ------------------------- | ---------------- |
| H1 (`#`)    | Page title (one per file) | Teal underline   |
| H2 (`##`)   | Major sections            | Normal           |
| H3 (`###`)  | Subsections               | Teal color       |
| Tables      | Data (companies, tracker) | Teal headers     |
| Blockquotes | Callouts, emphasis        | Teal left border |
| `[[Links]]` | Internal links            | Auto-resolved    |

---

## SOP: Adding a New Job Application

When the user provides new resume/cover letter files and wants to update the site:

### Step 1: Gather Required Information

Ask the user for:

- **Job source** (LinkedIn, company website, referral, etc.)
- **Job URL** (if available)
- **Salary range** (if known)
- **Location** (Remote/Hybrid/On-site)
- **Job description** (can be provided later)

### Step 2: Verify File Naming

Check PDF filenames follow the convention:

```
Jake_Lawrence_Resume_{Company}_{Role}_{MMDDYYYY}.pdf
Jake_Lawrence_CoverLetter_{Company}_{Role}_{MMDDYYYY}.pdf
```

Fix any typos (e.g., wrong dates) by renaming files.

### Step 3: Create Application Log Entry

Create `content/Applications/{Company} - {Role}.md` with:

- YAML frontmatter (type, company, role, applied_date, status, source, job_link, salary_range, location)
- Application Overview table
- Job Description section (with links to posting)
- Why This Role section
- Resume Used section
- Cover Letter section (placeholder or full text)
- Application Materials table with PDF links
- Interview Tracking section
- Status History table
- Outcome section

Use existing application logs as reference (e.g., `ExtraHop - CSM I Public Sector.md`).

### Step 4: Update resume-variants.md

1. Add variant to the appropriate **Role Cluster** table (e.g., Implementation & Professional Services)
2. Add to **Latest Application Packages** table
3. Update the application count and date
4. Update "Last updated" date

### Step 5: Update application-tracker.md

1. Add row to **Active Applications** table
2. Update **Quick Stats** counts (Total Applications, Active Applications)
3. Update "Last updated" date

### Step 6: Finalize

```bash
# Run Prettier on all modified files
npx prettier --write "content/Applications/{Company} - {Role}.md" \
  "content/resume-variants.md" \
  "content/application-tracker.md"

# Commit and push
git add .
git commit -m "Add {Company} {Role} application"
git push
```

### PDF Asset Location

All resume/cover letter PDFs go in: `content/Applications/Assets/`

### Link Formats

- **Wiki links** for navigation: `[[Applications/Company - Role|Company]]`
- **Markdown links** for PDFs: `[📄 Resume](Applications/Assets/filename.pdf)`

---

## Testing Your Changes

```bash
# Build locally before pushing
npx quartz build --serve

# Visit http://localhost:8080
# Check your changes
# Then git push when satisfied
```

---

## Theme Customization

Edit `quartz/styles/custom.scss` for:

- Colors
- Table styling
- Blockquote appearance
- Typography adjustments

Main color variables are in `quartz.config.ts` under `theme.colors`.

---

_Last updated: January 20, 2025_
_Theme: Warm Teal v3.0 (Quartz)_
