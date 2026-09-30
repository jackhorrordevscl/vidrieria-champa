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
- [x] T1 Scaffold Astro project, design tokens, self-hosted fonts, base layout. Route: delegated (writer, multiple files).
- [x] T2 Portada: nav, hero, footer. Route: delegated. Commit d143594.
- [x] T3 Servicios and Urgencias sections. Route: delegated. Commit a133de6.
- [x] T4 Proceso, Obras, Garantía and FAQ sections. Route: delegated. Commit 968f052.
- [x] T5 Contacto por pasos: 3-step form, WhatsApp message builder. Route: delegated. Commit 083c1b2.
- [x] T6 SEO (meta, JSON-LD LocalBusiness, sitemap, robots), accessibility and performance pass. Route: delegated. Commit 68ae5e3.
- [x] T7 README with pending client data checklist and hosting requirements; final build check. Route: inline (single mechanical file).

## Acceptance criteria
- `npm run build` succeeds and `dist/` contains a working static site.
- All sections match the approved sketch order: Portada, 01 Servicios, 02 Urgencias, 03 Proceso, 04 Obras, 05 Garantía y preguntas, 06 Contacto, footer.
- Form completes 3 steps and opens WhatsApp with a prefilled message including service, place, details and name.
- Every pending client datum is a visible marker, never invented content.
- Text contrast meets WCAG AA; interactive elements are keyboard reachable; mobile layout works from 360 px.

## Route declaration and trigger evidence
Writer trigger fires on every task except T7 (2+ non-trivial files). Route per task recorded above.

## Progress
T1 done (commit 36e7e95). Remote `origin` added (no push yet). Next: T2.

## Verification evidence
T1: `npm install` ok (0 vulnerabilities); `npm run build` ok (1 page built, re-run by parent); `dist/index.html` exists; no fonts.googleapis.com references in dist. Commit 36e7e95. Route: delegated writer. Note: T1 commit accidentally included `.atl/`; untracked and gitignored in the follow-up chore commit.

T2: `npm run build` ok (writer). T3: `npm run build` ok; built HTML contains "Un vidrio roto no espera", `[POR CONFIRMAR]` and all 19 service names plus 4 group titles (writer); parent re-ran build ok and confirmed the urgencies headline in `dist/index.html`. Contrast ratios computed by hand (not tool-checked). Layout not yet checked in a browser at 360px.

T4: `npm run build` ok; built HTML contains the four section headlines, `[GARANTÍA PENDIENTE` and 5 `<details` (writer). T5: `npm run test` 8 pass / 0 fail and `npm run build` ok (parent re-ran both); built HTML has "Tres pasos, cero vueltas", `[CORREO PENDIENTE`, no file input. NOT yet verified: wizard DOM behavior in a browser and layout at 360px and 1440px (T6 must cover it).

T6 (Chromium, built preview, Playwright and axe run from a temp folder, not in the repo): no horizontal overflow at 1440 and 360; no console errors; one h1; mobile menu opens, closes with Escape and returns focus; wizard step validation, empty-submit errors, and `window.open` URL `https://wa.me/56966222794?text=…` with decoded "Urgencia: sí" observed; no-JS shows all 3 steps and a WhatsApp link; axe: 0 violations at both viewports; dist 626,255 bytes. Parent re-ran test (8 pass) and build, and viewed the 1440px full-page screenshot: sections render in sketch order. Not verified: Firefox/Safari, real devices, the 360px screenshot was not viewed by the parent, favicon and og:image do not exist yet (pending client data).

## Next step
Push is pending the user's explicit authorization: publish to `main` and set it as default on remote and local. Then the client-data checklist in README.md.
