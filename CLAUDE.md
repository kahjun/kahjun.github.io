# CLAUDE.md

Personal website for Kah Jun Lim, hosted on GitHub Pages at `kahjun.github.io` (repo is public, deploys from `main`).

## Status

Phase 1 built (hero, about, work, education, contact), not yet committed or deployed. Concept and stack decided, see below. Only `resume/` and `education/` exist, and they are untracked source material that will be deleted. Do not commit them and do not rely on them existing later.

## About the owner (content source of truth)

- **Name:** Kah Jun Lim, FSA, CERA, FRM. Based in Singapore (Malaysian).
- **Positioning:** actuary + programmer moving toward quantitative / systems / data work. Resume tagline: "Actuary, programmer, and versatile team player seeking opportunities in quantitative space."
- **Current:** Investment Specialist, Performance and Risk Analysis (secondment), AIA Singapore, Aug 2026-present. Previously Actuarial Specialist, Insights and Analytics at AIA (Jul 2024-Aug 2026).
- **Earlier roles:** Income Insurance (Actuarial Reporting AM, 2022-24); Central Bank of Malaysia (Associate Actuarial Analyst, 2019-22); Goldman Sachs Securities Strategist summer analyst (2018); UMich tutor/grader (2016-19).
- **Education:**
  - M.S. Computer Science (Computing Systems), Georgia Tech OMSCS, Aug 2025 to expected Aug 2027, GPA 4.00. Done so far: Intro to OS, Intro Quantum Computing, Advanced OS, Network Science, Computer Networks. Fall 2026: Info Sec Lab (Binary Exploitation), High-Dimensional Data Analytics.
  - B.S. Actuarial Mathematics, CS, Data Science, Statistics (minor Complex Systems), University of Michigan 2015-2019, GPA 3.87.
- **Credentials:** FRM (Jun 2025), FSA, Quant Finance & Investment track (Dec 2021), CERA (Jul 2021).
- **Awards:** Otto C. Ritcher Memorial Prize (2019), D.W. Simpson Award (2017), Kijang Scholarship (2014-19).
- **Projects (team, one-off, keep modest):** The Language of Spending Pattern (RHB hackathon 2022, top performer in one challenge), InsureQuest (Asia Young Actuaries board game contest 2021, 2nd place, ReactJS).
- **Skills:** Python (Pandas/Polars), R, C++, C, SQL, Tableau, Power BI, Power Query M, Alteryx, VBA, Prophet, web dev.

Canonical resume text lives in `resume/resume_KJ.tex` (the most current version; the PDFs are older variants). Before that folder is deleted, copy any content needed into the site's own data files, e.g. `src/data/` or `_data/`.

## Privacy rules (public repo)

- Never put phone number, birth date, home address, or transcripts/diplomas/certificate files in the repo or on the site. Email (`kahjun008@gmail.com`) is OK as the contact address.
- Do not commit `resume/` or `education/`. Add them to `.gitignore` until deleted.
- Employer-internal details (AIA / Income systems, data, model specifics) must stay generic. Keep descriptions at resume level.

## Site concept (decided)

**Audience:** recruiters in actuarial, tech and finance (owner is keeping options open), plus non-technical visitors. Content must work for laypeople and for experts in a different field.

**Positioning:** a quantitative professional who builds (maths, finance and code on an actuarial core). Actuarial is the deep, proven core (7+ yrs, FSA, CERA). **Maths & Finance** (not "quant": the owner has heavy coursework and professional exams in maths, statistics and finance, e.g. UMich four-major undergrad, FSA-QFI, FRM, plus yield-curve/risk calibration and AIA investment performance & risk, but only ONE quant internship at Goldman, so never claim quant experience) and Tech (OMSCS 4.00, Polars refactor, binary parser, automation) are real but secondary. Note: actuarial science already overlaps maths + finance, so when building the Venn diagram and emphasis toggle in Phase 2, check that the three labels are distinct enough. The pitch is the *intersection*, which is rare. Do NOT present the three fields as equals, and never claim titles or experience the owner does not have.

**Core ideas:**
1. **Hero:** light generative Monte Carlo visual (tagline lives in `site.ts`; the Monte Carlo imagery stays even though the wording no longer says "price uncertainty". Owner prefers data analysis + automation framing and dislikes "pricing risk"). Canvas/SVG, honour `prefers-reduced-motion`, static fallback, must be fast on phones.
2. **No audience-facing controls.** A "how technical are you?" depth dial and a two-lane study/work chart were both tried and dropped (owner found them weird / awkward). Do not re-propose asking visitors about themselves.
3. **Work and Education are separate sections** (a mixed timeline confused the reading order: recruiters mainly read work). Work experience comes first, newest first. Education is its own section (degrees plus FSA/CERA/FRM) where the owner wants to elaborate. Each entry shows a plain-English line with technical bullets in a "Technical details" dropdown. Avoid repeating the same facts in several places: the owner hates repetitive or redundant information.
5. **Jargon tooltips:** hover/tap on terms like "longevity reinsurance" or "yield curve" gives a plain-English line.
6. **Projects as interactive explainers** (owner likes teaching). No blog. Later ideas: mortality curve, yield curve, OS scheduler visualiser, network-science demo, a small maths/finance project with public code.
7. **Tone:** casual and a bit playful (e.g. a mock "actuarial table" about-me), still credible for recruiters.

**Ideas tried and dropped (do not re-propose):** Monte Carlo hero (cliche), Venn diagram and emphasis toggle, "how technical are you?" depth dial, two-lane study/work chart, route-on-a-map hero (owner only has 3 locations: Malaysia, Singapore, US). Owner's bottom line: the site must not look like a generic LLM-generated site, so prefer specific, personal content (own voice, own artwork) over layout tricks, and ask for the owner's references and stories.

**Honesty guardrails:**
- The RHB hackathon (2022) and InsureQuest (2021) were **team, one-off** efforts. Describe them modestly as such ("with a team", "a one-off contest"). Do not present them as signature solo work or imply seniority.
- Do not inflate Tech or Maths & Finance experience (no "quant" claims). Let public code and explainers build that credibility over time.

## Stack and conventions

**Chosen: Astro + Tailwind CSS**, static output deployed to GitHub Pages via GitHub Actions. Interactive pieces use small islands (Svelte or React, TBD) and D3 only where needed. Owner is new to web dev and wants to learn: explain new concepts briefly as they are introduced, prefer simple solutions, and add dependencies sparingly.

- Node.js is **not installed yet** on the owner's machine (checked 2026-11-09). Install an LTS version first.
- Keep it fast, accessible, responsive, light/dark aware, with no trackers.
- Keep content (jobs, courses, projects, jargon definitions) in data/markdown files separate from layout so updates don't touch templates.
- A downloadable resume PDF built from `resume_KJ.tex` (strip the phone number before publishing). Lens-specific variants are a later idea.
- Use `main` as the deploy branch. Small, focused commits.

## Build phases

1. **Phase 1:** single-page site: hero, about, work, education, contact. Deployed to GitHub Pages.
2. **Phase 2:** to be decided (the dial/chart idea was dropped). Candidates: a more distinctive hero or visual identity, then the first project explainer.
3. **Phase 3:** first explainer/project page (a maths/finance project likely highest value).
4. **Phase 4:** polish: visual identity, dark mode, resume PDF variants.

## Writing style for site copy

First person, concise, factual, no buzzwords or inflated claims. Use only facts from the resume. Ask before adding achievements or metrics that are not in the source material.

## Commands

- `npm install`: install dependencies (once, or after `package.json` changes)
- `npm run dev`: dev server with live reload at http://localhost:4321
- `npm run build`: production build into `dist/` (run this before pushing to catch errors)
- `npm run preview`: serve the built `dist/` locally
- Deploy: currently MANUAL ONLY (the push trigger in `.github/workflows/deploy.yml` is commented out on purpose; owner wants to review before going live). Run it from the repo Actions tab, or re-enable the push trigger. The workflow builds and publishes to GitHub Pages. One-time setup: repo Settings > Pages > Source = "GitHub Actions".
- Windows: if `node` is not found in a shell, open a new terminal (the installer updates PATH).

## Visual checks (no browser tool in the session)

- Headless Edge can screenshot pages: `msedge.exe --headless=new --disable-gpu --hide-scrollbars --force-prefers-reduced-motion --window-size=W,H --virtual-time-budget=4000 --screenshot=out.png URL`, then Read the PNG. Phone width needs at least 500px (headless minimum).
- The dev server can serve stale Tailwind classes for brand-new files. If styling looks wrong, restart with `npx astro dev --force`, or screenshot `npm run build` + `npx astro preview`.
- Headless Edge follows the OS colour scheme (dark here). To check light mode, copy `dist/`, replace `prefers-color-scheme: dark` with `prefers-color-scheme: none` in the CSS, and serve that copy.
- Dark and light modes were both checked on 2026-11-09.
- Never run one huge multi-heredoc shell command: it failed to parse twice. Use separate Write/Edit calls.

## Layout

- **Content lives in `src/data/`, never in components.** `site.ts` holds hero/about/section/contact wording, links and email. `work.ts` and `education.ts` hold the entries (shape in `types.ts`: org, role, place, period, plain line, technical details). New sections should follow this pattern: wording in a data file, markup in a component.
- **Colours live in `src/styles/global.css` as tokens** (`text-muted`, `border-line`, `text-accent`, `bg-work`, `bg-study`). They switch for dark mode automatically. Do not hardcode Tailwind palette colours or inline `style="color: ..."` in components.
- `src/components/`: `Hero` (Monte Carlo canvas + avatar, owner is still looking for a more distinctive hero), `Nav` (slim sticky bar under the hero), `About` (two paragraphs), `Overview` (two to-scale vertical timelines, Work left and Education right, names + years only, labels link to the entries below; deliberately minimal to avoid repetition; data in `site.ts`), `Work`, `Education`, `EntryList` (shared list used by both), `Contact`.
- `src/layouts/Layout.astro`: page shell. `src/styles/global.css`: colour tokens (light/dark) and Tailwind theme.
- `src/pages/index.astro`: the single page, composed from components.
