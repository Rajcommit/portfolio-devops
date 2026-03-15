# portfolio-devops

Personal DevOps portfolio site for **Raj Abhishek** — a static, three-page website showcasing experience, projects, skills, certifications, and education.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home — hero, stats, core skills, contact CTA |
| `about.html` | Experience timeline, skills detail, education, certifications |
| `projects.html` | Project showcase with repo links |

## Run Locally

No build step required — it's plain HTML/CSS/JS.

```bash
# Option 1: Python
python3 -m http.server 8080 --directory .

# Option 2: Node (npx)
npx serve .

# Option 3: Just open in browser
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

Then visit `http://localhost:8080`.

## Deploy

Works on any static hosting:

- **GitHub Pages:** Push to `master`, enable Pages in repo settings → Source: root
- **Netlify/Vercel:** Connect repo, set publish directory to `/` (root)
- **S3 + CloudFront:** Upload files to S3 bucket, enable static website hosting
- **Docker:** Use the config in `docker/` (if populated)

## Project Structure

```
portfolio-devops/
├── index.html          # Home page
├── about.html          # Experience & skills
├── projects.html       # Projects showcase
├── style.css           # All styles
├── script.js           # Animations & interactions
├── resume.pdf          # Downloadable resume
├── construction.md     # Build log & change history
├── .github/workflows/
│   └── ci.yml          # CI pipeline (lint, links, a11y)
├── docker/             # Docker configs (future)
├── k8s/                # Kubernetes manifests (future)
├── terraform/          # Terraform configs (future)
└── scripts/            # Shell scripts (future)
```

## Content Update Guide

### Update personal info (name, email, phone, links)
Edit the navbar, footer, floating actions, and CTA sections in **all 3 HTML files**. Search for the current value and replace globally.

### Update experience / add a new role
Edit `about.html` → find the `<div class="timeline">` section. Copy an existing `tl-item` block and modify the role, company, dates, location, bullets, and award.

### Update projects
Edit `projects.html` → find the `<div class="projects-grid">` section. Copy an existing `project-card` block and update tags, title, description, bullets, and repo link.

### Update skills
Edit `about.html` → find the skills section at the top. Add/remove `skill-tag` spans inside the relevant card.

### Update certifications
Edit `about.html` → find the certifications section. Copy an existing `cert-item` block and update the badge class, icon, title, and date.

### Update resume PDF
Replace `resume.pdf` in the repo root. The download filename is set via the `download` attribute on links — update if the name changes.

## Maintenance

- **Link checking:** CI runs `lychee` on every push to catch broken links
- **Accessibility:** CI runs `pa11y` to catch a11y regressions
- **HTML validation:** CI runs `html-validate` on all pages
- **Manual review:** Periodically verify timeline dates and role descriptions match your latest resume

## License

Personal portfolio — not licensed for redistribution.
