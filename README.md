# Vidriería Champa landing

Static landing page for Vidriería Champa (glazing and construction, Santiago and regions of Chile). Built with Astro, Spanish only.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Serve the built site locally |
| `npm run test` | Run the unit tests (`node:test`) |

## How the contact form works (v1)

The 3-step form never sends data to a server. On submit it opens WhatsApp (`+56 9 6622 2794`) with a prefilled message built by `src/lib/whatsapp-message.ts`. Photos cannot be attached in this version. Without JavaScript the three steps are shown stacked and the button is a plain WhatsApp link.

Phase 2, when the domain and mailbox exist: add email delivery (with photos) on the hosting side, for example a small PHP mail endpoint on shared hosting.

## Pending client data

Every unknown is a visible marker in the page (search for `[` markers such as `PENDIENTE`). Nothing is invented.

- [ ] Real work photos with written customer authorization (`[FOTO OBRA …]`, work sheets in `src/data/works.ts`)
- [ ] Domain and business email (`[CORREO PENDIENTE · DOMINIO]`)
- [ ] Warranty details: what it covers, for how long, what it excludes (`[GARANTÍA PENDIENTE …]`, FAQ answer)
- [ ] Real testimonials with name and authorization (`[TESTIMONIO PENDIENTE …]`)
- [ ] Confirm the process, including the on-site visit and measurement (`[PROCESO A CONFIRMAR …]`)
- [ ] Confirm provisional sealing of the opening as an urgent service (`[POR CONFIRMAR]`)
- [ ] Optional: name of a responsible person to show on the site
- [ ] Optional: the original logo in high resolution (the current mark is a recreation approved by the client, see `design-assets/`)

## Publishing checklist (when the client buys hosting and a domain)

Hosting requirements for the full flow: cPanel or equivalent, PHP 8 or newer, free SSL, mailbox accounts. Domain: `.cl`.

1. Build with `PUBLIC_SITE_URL=https://<domain>` (shell or `.env`). That single variable switches on the canonical and `og:url` tags, `sitemap-index.xml` and the `Sitemap:` line in `robots.txt`.
2. The 1200×630 share image (`public/og-marca.jpg`) is already wired through `ogImagePath` in `src/config/site.ts`; it only emits `og:image` and `twitter:image` once `PUBLIC_SITE_URL` is set.
3. Run `npm run build` and upload `dist/`.
4. Replace the pending markers with real content as it arrives.

## Structure

- `src/components/` page sections, `src/data/` editable content (services, works, FAQ)
- `src/lib/` pure logic with tests, `src/config/site.ts` business constants
- `src/styles/` design tokens and global styles
- `_design/` source files of the approved visual sketch, `design-assets/` original logo (low resolution) and its recreation
- `odd/tasks/` feature plan and progress log
