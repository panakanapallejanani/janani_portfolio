# Project memory

## Product intent & audience

- Personal portfolio website for Janani, recreated from a Framer reference site into a Vite + React codebase.
- Audience: recruiters, peers, potential employers viewing work, education, skills, projects, experience, certifications, and contact info.
- Deployment target: Netlify (not Vercel or Framer).

## Brand personality & voice

- Professional, clean, minimal personal-brand presentation.
- Dark, modern aesthetic with a soft purple accent — calm, polished, not flashy.

## Visual design & UX direction

- Dark charcoal background with purple accent palette (`#8060d8`, `#b7a0f8`).
- Inter font family throughout.
- Fixed top nav header; becomes solid on scroll; mobile hamburger menu included.
- Smooth scrolling to all sections (Home, About, Education, Skills, Projects, Experience, Certifications, Contact + footer).
- Section structure mirrors the reference: hero fades in on load; project cards have expandable "key contributions" panels; certificate images enlarge slightly on hover.
- Fully responsive from mobile to desktop.
- All images (profile photo, 3 project previews, 5 certificate images) stored locally in the project — no external hosting dependency.
- Uses Tailwind CSS utility classes inside React components (not separate .css files); this is a deliberate deviation from the user's "HTML and CSS" ask, documented as a tradeoff for consistency with the template.

## Decisions, constraints & rationale

- Framework: Vite + React with JSX and Tailwind CSS.
- Icons via `lucide-react` only; no additional UI packages installed.
- Path alias `@/` maps to `src/` for imports.
- Netlify-ready: publish config and `_redirects` included; `npm run build` verified clean.
- Reusable React components preferred (e.g. section wrappers, project cards, certificate cards).
- Real content and links (GitHub, LinkedIn, email) preserved from the reference site.
- Deployment: `npm run build` produces `dist/`; drag-deploy or connect GitHub repo.

## Open questions & assumptions

- Whether the user accepts Tailwind-based styling instead of separate `.css` files (communicated as a note; no explicit confirmation yet).
- Content accuracy is assumed correct as-is from the reference site; no further updates requested.
- No analytics, SEO metadata, or contact form backend were requested or added.