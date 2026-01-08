# Content Guide

> Writing standards, frontmatter schema, and content patterns for Jake's Job Search Command Center

---

## Purpose

This guide ensures consistency across all content in the job search command center. It's designed for both human editors and AI agents.

**Target audience:** Friends, family, recruiters — assume non-technical readers who want to help Jake find a great role.

---

## Frontmatter Schema

Every markdown file in `content/` must begin with YAML frontmatter:

```yaml
---
title: Page Title Here
date: 2025-01-08
tags:
  - tag-one
  - tag-two
---
```

### Required Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `title` | string | Human-readable page title | `"What I'm Looking For"` |
| `date` | date | Last modification (YYYY-MM-DD) | `2025-01-08` |

### Optional Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `tags` | array | Topic tags for organization | `[job-search, priorities]` |
| `aliases` | array | Alternative titles for linking | `[WILF, Criteria]` |

---

## Markdown Conventions

### Heading Hierarchy

```markdown
# Page Title
Only one H1 per page. Should match frontmatter `title`.
Receives teal underline accent in theme.

## Major Section
Use for top-level content divisions.
Examples: "Role Preferences", "Location", "Compensation"

### Subsection
Use for breakdowns within sections.
Styled with teal accent color.
Examples: "Remote Work", "Bay Area", "Startup vs Enterprise"

#### Minor Heading
Rarely needed. Use for detailed breakdowns.
```

### Tables

Tables are well-styled in this theme (teal headers). Use them for:
- Company lists
- Skill inventories
- Application tracking
- Comparisons

```markdown
| Column A | Column B | Column C |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

**Table guidelines:**
- Keep columns to 3-5 for readability
- Use concise cell content
- Align data logically (status columns together, dates together)
- Header row should be clear and scannable

### Blockquotes

Styled with teal left border and subtle background. Use for:
- Key quotes or testimonials
- Important callouts
- Emphasized takeaways

```markdown
> This is a blockquote. It stands out visually and draws attention
> to important information.
```

### Links

**Internal links** (preferred):

```markdown
See [[what-im-looking-for]] for details.
Check out my [[my-superpowers]] page.
Link to a [[projects]] overview.
```

**With custom display text:**

```markdown
Read about my [[my-superpowers|key skills]].
```

**For files with spaces:**

```markdown
[[API & Integrations]]
[[Customer Health Dashboard System]]
```

**External links:**

```markdown
Visit [Company Website](https://example.com) for more.
```

### Lists

Use lists for actual lists, not as a substitute for prose.

**Bulleted lists:**

```markdown
- First item
- Second item
- Third item
```

**Numbered lists:**

```markdown
1. First priority
2. Second priority
3. Third priority
```

### Emphasis

```markdown
**Bold** — Use sparingly for key terms or critical info
*Italic* — Use for titles, emphasis, or introducing terms
`Code` — Use for technical terms, filenames, commands
```

---

## Content Patterns by Page Type

### Main Navigation Pages

#### index.md (Welcome)

**Purpose:** First impression, orient the visitor, drive action

**Structure:**

```markdown
# Hey, thanks for being here 👋

Brief, warm introduction (2-3 sentences)

## The Short Version
What Jake is looking for in 3-4 bullet points

## Quick Links
- [[what-im-looking-for]]
- [[target-companies]]
- [[how-you-can-help]]
```

**Tone:** Warm, confident, appreciative

---

#### what-im-looking-for.md

**Purpose:** Define ideal role criteria

**Structure:**

```markdown
# What I'm Looking For

## Role Type
What kind of work, level, function

## Company Criteria
Size, stage, industry, culture

## Location
Geographic preferences, remote policy

## Compensation
Salary range, equity considerations
```

**Tone:** Clear, specific, honest

---

#### target-companies.md

**Purpose:** Show specific companies of interest, enable warm intros

**Structure:**

```markdown
# Target Companies

| Company | Why Interested | Status | Notes |
|---------|----------------|--------|-------|
| Company A | Reason | Researching | Any notes |
| Company B | Reason | Applied | Date |
```

**Status values:** Researching, Applied, Interviewing, Offer, Rejected, Passed

---

#### how-you-can-help.md

**Purpose:** Give visitors concrete, actionable ways to assist

**Structure:**

```markdown
# How You Can Help

## Quick Wins (5 minutes)
- Share this site
- Forward to recruiters
- Connect on LinkedIn

## Warm Introductions
If you know someone at [[target-companies]]...

## Job Leads
Know of a role? Here's [[what-im-looking-for]]
```

**Tone:** Grateful, specific, low-pressure

---

#### my-superpowers.md

**Purpose:** Showcase skills with evidence

**Structure:**

```markdown
# My Superpowers

## [Skill Category 1]
Narrative explanation with specific examples.
Link to relevant [[projects]] or case studies.

## [Skill Category 2]
...

## Tools & Technologies
List or table of specific tools
```

**Guidelines:**
- Show, don't just tell — include metrics, outcomes, examples
- Link to Projects/ for evidence
- 3-5 superpowers is ideal

---

### Project Case Studies (Projects/ folder)

**Structure:**

```markdown
---
title: Project Name
date: 2025-01-08
tags:
  - projects
  - relevant-skill
---

# Project Name

## Context
What was the situation, challenge, or need

## Action
What I specifically did (my role, approach, methods)

## Result
Measurable outcomes, impact, what was achieved

## Skills Demonstrated
- [[Customer Success]]
- [[Implementation]]
- [[Change Management]]
```

**Guidelines:**
- Use CAR (Context, Action, Result) format
- Lead with most impressive/relevant details
- Include metrics wherever possible
- Link to Skills/ pages for demonstrated capabilities

---

### Skill Pages (Skills/ folder)

**Structure:**

```markdown
---
title: Skill Name
date: 2025-01-08
tags:
  - skills
  - category
---

# Skill Name

Brief description of the skill and why it matters.

## Experience Level
Years of experience, contexts where used

## Key Capabilities
- Specific thing 1
- Specific thing 2
- Specific thing 3

## Projects & Examples
- [[Project Name 1]]
- [[Project Name 2]]

## Related Skills
- [[Related Skill 1]]
- [[Related Skill 2]]
```

---

## Voice & Tone Guidelines

### Overall Tone

- **Warm** — This is shared with friends and family first
- **Confident** — Jake knows his value, without arrogance
- **Clear** — No jargon unless necessary, then explain it
- **Appreciative** — Visitors are taking time to help
- **Professional** — Recruiters will see this too

### Word Choice

| Instead of... | Use... |
|---------------|--------|
| "I need a job" | "I'm looking for my next role" |
| "Please help me" | "Here's how you can help" |
| "I'm good at..." | "I've delivered..." |
| "Responsibilities included..." | "I led/built/delivered..." |

### Sentence Structure

- Lead with the most important information
- Keep sentences under 25 words when possible
- Use active voice ("I built" not "was built by me")
- One idea per paragraph

---

## File Naming Conventions

| Pattern | Example | Notes |
|---------|---------|-------|
| Lowercase with hyphens | `what-im-looking-for.md` | Main pages |
| Spaces allowed | `Customer Success.md` | Skills/ and Projects/ folders |
| Descriptive names | `application-tracker.md` | Not `tracker.md` |

---

## Update Checklist

### For new pages:

- [ ] Frontmatter is complete (title, date)
- [ ] Title matches H1 heading
- [ ] Internal links use `[[page-name]]` syntax
- [ ] Tables have header rows
- [ ] No broken links
- [ ] Tone matches guidelines
- [ ] Spelling and grammar checked

### For updates:

- [ ] `date:` field in frontmatter updated to today
- [ ] Changes consistent with existing content
- [ ] Related pages updated if needed
- [ ] No orphaned links created

---

## Quick Reference

### Frontmatter template:

```yaml
---
title:
date: 2025-01-08
tags: []
---
```

### Common internal links:

```markdown
[[index]]
[[what-im-looking-for]]
[[target-companies]]
[[how-you-can-help]]
[[my-superpowers]]
[[what-ive-done]]
[[projects]]
```

---

*Last updated: January 2025*
