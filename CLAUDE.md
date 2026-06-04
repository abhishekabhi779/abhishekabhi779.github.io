# CLAUDE.md — Abhishek Sattu's Portfolio Site

This file tells Claude Code everything it needs to know about this project.
Read this before touching any file.

---

## Who I Am

**Abhishek Sattu** — AI Agent Builder & Platform Specialist  
CS Graduate (AI & ML), SUNY Polytechnic Institute  
Individual contributor. I build agents because I'm curious, not because I was told to.  
Currently at Ingram Micro (Platform Specialist, Buffalo NY)  
GitHub: https://github.com/abhishekabhi779  
Email: abhi.sat779@gmail.com | Phone: 315-601-6702 | Location: New York, NY  
LinkedIn: https://linkedin.com/in/abhishek-s-462954222

---

## Project Goal

Build a clean, fast, memorable personal portfolio site hosted on GitHub Pages.  
No frameworks, no build steps, no node_modules — pure HTML, CSS, and vanilla JS only.  
Must work as static files (no server-side rendering).

### Pages to build:
1. **index.html** — Resume / About page (already exists, can be improved)
2. **projects.html** — All my GitHub projects, fetched live from the GitHub API
3. *(optional later)* **writing.html** — Research notes and agent design writeups

---

## Brand & Design System

### Colors
```
--navy-dark:  #0f2f55   (header backgrounds, deep accents)
--navy:       #1B4F8A   (primary brand, links, section headers)
--navy-light: #2a6cb8   (hover states, tags)
--accent-bg:  #e8f0fd   (light blue tints, cert badges)
--ink:        #1a1a2e   (body text)
--muted:      #5a6a7e   (secondary text, dates)
--rule:       #c8d8f0   (dividers, borders)
--bg:         #f7f9fe   (page background)
--white:      #ffffff   (card backgrounds)
```

### Typography
- **Display / Name**: `DM Serif Display` (Google Fonts) — italic for stylistic names
- **Body**: `DM Sans` — weights 300, 400, 500, 600
- **Code / Tags / Dates**: `DM Mono` — weights 400, 500
- Google Fonts import:
  ```
  https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap
  ```

### UI Patterns
- Cards: white background, `border-radius: 6px`, subtle `box-shadow`, `1px solid rgba(27,79,138,0.08)`
- Hover: lift with `translateY(-2px)` + deeper shadow
- Section headers: DM Mono, uppercase, 10.5px, letter-spacing 0.18em, navy color, rule line extending to right
- Animations: `fadeUp` on page load, staggered with `animation-delay`
- Left accent border: `3px solid var(--navy)` for summary/highlight blocks
- Bullet style: `▸` triangle in navy-light, no default list-style

---

## Projects Page — GitHub API Integration

Fetch repos from the GitHub API (no auth token needed for public repos):
```
GET https://api.github.com/users/abhishekabhi779/repos?sort=updated&per_page=100
```

### What to show per repo:
- Repo name (formatted nicely — replace hyphens/underscores with spaces, title case)
- Description (from GitHub, or "No description yet" if empty)
- Primary language (with a color dot matching GitHub's language colors)
- Topics/tags (from repo.topics array)
- Star count and fork count
- Last updated date (relative: "2 months ago")
- Link to the repo on GitHub
- Link to live demo if `homepage` field is set in the repo

### Filtering & UX:
- Filter buttons by language (All, Python, JavaScript, etc.) — generated dynamically from actual repos
- Search bar to filter by name or description
- Sort options: Most Recent, Most Stars, Alphabetical
- Show a loading skeleton while fetching
- Handle API errors gracefully (rate limit message, retry button)

### Special repo callouts:
Pin these repos at the top as "Featured Projects" with a larger card:
- `abhishekabhi779.github.io` — this site itself
- Any repo with "agent" or "ai" or "automation" in the name or description

---

## Navigation

Shared nav across all pages:
```
[AS logo/monogram]    Home    Projects    [GitHub icon]  [LinkedIn icon]
```
- Active page highlighted in navy
- Mobile: hamburger menu or simple stacked links
- Sticky on scroll with slight backdrop blur

---

## Resume Data (for index.html)

### Work Experience

**Platform Specialist | Ingram Micro | Buffalo, NY | Apr 2025 – Present**
- Built guardrail-enforced AI agent for Microsoft Copilot automating platform ops and ETL workflows using deterministic code-based extraction over predictive inference for reliable, auditable outputs
- Designed multi-agent AI automation system (MCP + n8n) eliminating repetitive DevOps and project management tasks; architected for observability and safe handoff to non-engineering stakeholders
- Integrated Azure OpenAI APIs into Python-based automation workflows enabling LLM-driven decision-making for exception handling, intelligent routing, and dynamic response generation
- Built Power Automate and Python hybrid RPA framework with LLM-based decision-making enabling smart routing and self-healing workflows that reduced escalations to senior staff
- Assessed and mapped high-friction workflows across 15-member ops team converting repetitive processes into rule-based automations
- Owned product backlog tasks, writing user stories, epics, and workflow specs; documented prompt strategies and agent configurations for team reuse

**Graduate Assistant | SUNY Polytechnic Institute | Utica, NY | Jan 2024 – Dec 2024**
- Redesigned academic evaluation workflows using Python scripting and Selenium automation, reducing grading cycle time by 33%
- Built interactive Power BI dashboards visualizing student engagement metrics, increasing participation by 25%

**Associate Data Analyst | Fosterate Inc | Hyderabad, India | Nov 2021 – Dec 2022**
- Developed Power BI dashboards connected to Amazon Athena via ODBC with DirectQuery delivering real-time insights
- Authored optimized SQL queries with custom DAX calculations and interactive filters

### Projects
- **AI-Driven Workflow Automation System** (MCP + n8n): Multi-agent system using MCP servers + n8n; researched open-source LLMs 9B–12B for agentic reliability; authored research on deterministic agent architectures
- **Intelligent Car Recommendation System** (Capstone): RAG + reinforcement learning, 25% accuracy improvement, full lifecycle from data pipeline to deployment
- **SBA Lead Sourcing Machine**: 1.87M SBA PPP records → searchable lead database; PostgreSQL + pgvector (HNSW index), Flask API, semantic search via sentence-transformers, contact enrichment via Google Places + BeautifulSoup4 scraper with 4 fallback strategies, CSV export for outreach

### Skills
- AI & Agents: Prompt Engineering, Agent Design, Multi-Agent Orchestration, MCP Servers, OpenAI/Azure OpenAI, Anthropic, LangChain, Hugging Face, Open-Source LLMs (9B–12B), RAG, Vector Embeddings, TensorFlow
- Automation & Backend: Python, JavaScript, TypeScript, Power Automate, n8n, UiPath, Selenium, RESTful APIs, ETL Pipelines, SQL, PostgreSQL
- Platforms & Tools: Azure, AWS, GCP, Power BI, Dynamics 365, GitHub Actions, Jira, Agile/Scrum

### Education
- M.S. Computer Science (AI & ML) — SUNY Polytechnic Institute, 2023–2024
- B.S. Electronics Engineering

### Certifications
- Microsoft Certified: Azure Fundamentals (AZ-900)
- UiPath Specialized AI Professional Certificate
- Building Data Pipelines with Delta Live Tables, Databricks

---

## Technical Constraints

- **Static only** — no Node, no build tools, no package.json, no frameworks
- **No external CSS frameworks** — no Bootstrap, no Tailwind (write custom CSS)
- **GitHub Pages compatible** — all paths must be relative, no trailing slash issues
- **Performance** — lazy load images, minimize render-blocking resources
- **Accessibility** — semantic HTML, proper aria labels, keyboard navigable
- **Mobile first** — breakpoint at 600px minimum

---

## File Structure

```
abhishekabhi779.github.io/
├── index.html          # Resume / About
├── projects.html       # GitHub projects gallery
├── css/
│   └── style.css       # Shared styles (nav, footer, variables, utilities)
├── js/
│   └── projects.js     # GitHub API fetch + render logic
├── CLAUDE.md           # This file
└── README.md           # Brief description for GitHub
```

---

## Tone & Writing Style

- Direct, confident, no corporate fluff
- "I build agents because I'm curious" energy — maker, not just practitioner
- Technical but approachable
- Short sentences. Active voice.
- Never say "passionate about" or "results-driven"

---

## Things NOT to do

- Don't add unnecessary dependencies
- Don't use placeholder lorem ipsum text — use real content from this file
- Don't add a dark mode toggle (navy theme works as-is)
- Don't add a contact form (just show email/links)
- Don't over-animate — subtle and purposeful only
- Don't use emoji in the UI
- Don't hardcode the GitHub repo list — always fetch live from the API
