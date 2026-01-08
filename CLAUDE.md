# Jake's Job Search Command Center

> **Operator Instructions for AI Coding Agents**

---

## Overview

This is a Quartz-powered site with full Git-based auto-deployment.

| Property | Value |
|----------|-------|
| Live URL | `https://jake0lawrence.github.io/jake-job-search/` |
| Deploy Trigger | Push to `main` branch |
| Build Time | ~2 minutes |
| Theme | "Warm Teal" v3.0 (Quartz) |

---

## Repository Structure

```
jake-job-search/
├── content/                     # All markdown content here
│   ├── index.md                 # Welcome / landing page
│   ├── what-im-looking-for.md
│   ├── target-companies.md
│   ├── how-you-can-help.md
│   ├── my-superpowers.md
│   ├── what-ive-done.md
│   ├── career-vault-dashboard.md
│   ├── projects.md
│   ├── Projects/                # 18 project case studies
│   ├── Skills/                  # 23 skill pages
│   ├── Targets/
│   │   ├── Companies/
│   │   ├── Industries/
│   │   └── Roles/
│   ├── Applications/
│   └── Resumes/
│
├── quartz.config.ts            # Site configuration (colors, theme)
├── quartz/styles/custom.scss   # Custom Warm Teal theme
├── .github/workflows/deploy.yml # Auto-deploy workflow
│
├── CLAUDE.md                   # ← You are here
├── CONTENT_GUIDE.md            # Content standards
└── KNOWLEDGE_TRANSFER.md       # Technical documentation
```

## Making Changes

### Content Updates

All content files are in `content/` directory:

```bash
# Edit any file
vim content/index.md

# Commit and push (triggers auto-deploy)
git add content/
git commit -m "Updated welcome page"
git push origin main

# Wait ~2 minutes, site is live
```

### Theme Updates

Edit colors in `quartz.config.ts`:

```typescript
colors: {
  lightMode: {
    secondary: "#0d9488",  // Teal accent
  },
  darkMode: {
    secondary: "#2dd4bf",  // Bright teal
  }
}
```

Edit styles in `quartz/styles/custom.scss`:

```scss
// Table headers, blockquotes, H3 styling
```

## Markdown Conventions

| Element | Usage | Styling |
|---------|-------|---------|
| H1 (#) | Page title (one per file) | Teal underline |
| H2 (##) | Major sections | Normal |
| H3 (###) | Subsections | Teal accent color |
| Tables | Data (companies, skills, tracker) | Teal headers |
| Blockquotes (>) | Emphasis, callouts | Teal left border |
| [[links]] | Internal links | Auto-resolved by Quartz |

### Internal Links

Use Obsidian-style wiki links:

```markdown
See [[what-im-looking-for]] for my criteria.
Check out [[my-superpowers]] for skills.
Link to [[projects]] page.
```

For files with spaces in `Projects/` or `Skills/` folders:

```markdown
[[API & Integrations]]
[[100+ Municipal Court Implementations]]
[[Customer Health Dashboard System]]
```

### Frontmatter Schema

Every markdown file should have:

```yaml
---
title: Human-Readable Page Title
date: 2025-01-08
tags:
  - job-search
  - relevant-tag
---
```

## Common Tasks

### Add a Target Company

Edit `content/target-companies.md`, add row to table

### Update Application Status

Edit `content/career-vault-dashboard.md` or tracker page

### Create New Page

```bash
cat > content/new-page.md << 'EOF'
---
title: New Page
date: 2025-01-08
tags:
  - job-search
---

# New Page

Content here
EOF
```

### Add New Project Case Study

```bash
cat > content/Projects/new-project.md << 'EOF'
---
title: New Project Name
date: 2025-01-08
tags:
  - projects
  - relevant-skill
---

# New Project Name

## Context
[Background information]

## Action
[What I did]

## Result
[Outcomes and impact]
EOF
```

### Test Locally Before Pushing

```bash
npx quartz build --serve
# Visit http://localhost:8080
# Press Ctrl+C to stop server
```

---

## Auto-Deploy Workflow

Every push to `main` triggers:
1. GitHub Actions workflow (`.github/workflows/deploy.yml`)
2. Builds site with Quartz
3. Deploys to GitHub Pages
4. Live at https://jake0lawrence.github.io/jake-job-search/ in ~2 minutes

Check deploy status: https://github.com/jake0lawrence/jake-job-search/actions

---

## Working with AI Agents

### When Starting a Task
1. Read this file first (CLAUDE.md)
2. Read CONTENT_GUIDE.md for content standards
3. Check current state of files you'll modify
4. Make changes following conventions
5. Test build locally if possible
6. Provide clear commit message

### Example Workflow
```
Agent: "I'll add a new company to target-companies.md"
1. Read content/target-companies.md
2. Add new row to table following existing format
3. Update frontmatter date to today
4. Commit: "Add [Company] to target companies"
```

---

## File Naming Conventions

- **Use lowercase with hyphens:** `what-im-looking-for.md`
- **No spaces in filenames** (except in Projects/ and Skills/ folders where they already exist)
- **Descriptive names:** `customer-health-monitoring.md` not `chm.md`

---

## Important: Theme Safety Rules

**⚠️ CRITICAL - DO NOT MODIFY:**
- Layout properties in any CSS (width, flex, display on containers)
- Structural elements in quartz/ core files
- Package versions without testing

**✅ SAFE TO MODIFY:**
- Colors in `quartz.config.ts`
- Styles in `quartz/styles/custom.scss`
- Content in `content/` directory
- Frontmatter in markdown files

See KNOWLEDGE_TRANSFER.md for full technical details.

---

## Quick Reference

**Add content:** Edit files in `content/`
**Change theme:** Edit `quartz.config.ts` or `custom.scss`
**Deploy:** `git push origin main`
**Test:** `npx quartz build --serve`
**Check status:** https://github.com/jake0lawrence/jake-job-search/actions

---

*Last updated: January 2025*
*Theme: Warm Teal v3.0 (Quartz)*
