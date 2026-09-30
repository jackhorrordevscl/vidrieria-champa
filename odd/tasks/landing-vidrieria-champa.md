# Feature: landing-vidrieria-champa

## Objective
Build the Vidriería Champa landing page (Spanish, Chile) locally, following the approved canvas sketch.
Design source: https://claude.ai/artifact/QyTQGPZVsudBvqTSqzwhtW (files in `_design/project/`).

## Problem and why
Client is a glazing (vidriería) and construction business. Sector sites are generic catalogs with no proof of work, no warranty, no honest lead time. The landing must stand out through real work sheets, transparent process, 24/7 urgencies without promised lead times, and a guided contact flow.

## Decisions (from memory, project `vidrieria-champa`)
- Business model: buys material and works it to each customer's requirement; NOT a manufacturer. No "fabricante" claims.
- Roster: all 19 services in 4 groups plus urgencies (24/7, no promised lead time).
- Coverage: Santiago and regions ("llego donde sea"); no absolute "todo Chile".
- Identity: dark base, accent aqua `#5FD3C2`. Logo is a low-res JPG; wordmark is provisional text.
- Typography: Barlow Condensed (headings), Barlow (text), JetBrains Mono (plan details). Self-hosted.
- Stack: Astro static, Spanish only, vanilla JS for the 3-step contact form. Local only until client buys hosting and domain.
- Contact: WhatsApp +56 9 6622 2794. Form v1 builds a prefilled wa.me message (no backend, no photo attachment). Email delivery is phase 2 (domain pending).
- Chosen contact variant: B (guided 3 steps). A and C discarded.
- No invented metrics, lead times, years of experience or testimonials.

## Constraints
- Artifacts (code, comments, docs, commits) in English. Site copy in neutral Spanish (tuteo).
- Conventional Commits, no AI attribution and no Co-Authored-By.
- Pending client data uses visible markers such as `[FOTO OBRA]`, `[GARANTÍA PENDIENTE]`, `[CORREO PENDIENTE · DOMINIO]`.
- About 400 authored changed lines per task is a planning heuristic only, not a cap.
- Push, PR creation and merge stay the user's decisions. No remote exists yet.

## Test mode
TDD: disabled (no project or session configuration, user did not choose it). Source: default. Runner: none configured.
Functional checks per task: `npm run build` (Astro, type check where available) and manual structural readback.

## Delivery
Strategy: local-only for now (no remote, no PR). Slice boundaries are recorded per task below.
Forecast: about 1,800 authored changed lines (additions plus deletions, generated files excluded).
Native review (RDD): off (decided by global switch), so no review preflight runs.

## Authorized scope
Implement the landing locally in this repository, create a git repo and a feature branch, and commit per task. Nothing outside this folder. No push, no deploy, no purchases.

## Tasks
- [ ] T1 Scaffold Astro project, design tokens, self-hosted fonts, base layout. Route: delegated (writer, multiple files).
- [ ] T2 Portada: nav, hero, footer. Route: delegated.
- [ ] T3 Servicios and Urgencias sections. Route: delegated.
- [ ] T4 Proceso, Obras, Garantía and FAQ sections. Route: delegated.
- [ ] T5 Contacto por pasos: 3-step form, WhatsApp message builder. Route: delegated.
- [ ] T6 SEO (meta, JSON-LD LocalBusiness, sitemap, robots), accessibility and performance pass. Route: delegated.
- [ ] T7 README with pending client data checklist and hosting requirements; final build check. Route: inline.

## Acceptance criteria
- `npm run build` succeeds and `dist/` contains a working static site.
- All sections match the approved sketch order: Portada, 01 Servicios, 02 Urgencias, 03 Proceso, 04 Obras, 05 Garantía y preguntas, 06 Contacto, footer.
- Form completes 3 steps and opens WhatsApp with a prefilled message including service, place, details and name.
- Every pending client datum is a visible marker, never invented content.
- Text contrast meets WCAG AA; interactive elements are keyboard reachable; mobile layout works from 360 px.

## Route declaration and trigger evidence
Writer trigger fires on every task except T7 (2+ non-trivial files). Route per task recorded above.

## Progress
Repo initialized on `main`; feature branch and T1 pending.

## Verification evidence
(none yet)

## Next step
Create branch `feat/landing`, then T1.
