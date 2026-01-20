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

_Last updated: January 17, 2025_
_Theme: Warm Teal v3.0 (Quartz)_
