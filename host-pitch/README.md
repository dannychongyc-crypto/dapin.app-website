# Dap IN — Host Features Pitch

Single-page marketing/landing page for the Dap IN host pitch, built with
**React + Vite + Tailwind CSS v4**.

This is a separate app from the static marketing site in the repo root; it has
its own build step and dependencies.

## Develop

```bash
cd host-pitch
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

- `src/App.jsx` — composes the page.
- `src/components/` — `Nav`, `Hero`, `Problem`, `Features`, `Stats`, `CTA`,
  `Footer`, plus `Section` (shared shell) and `Reveal` (scroll-in animation).
- `src/index.css` — Tailwind entry + design tokens (`@theme`): warm off-white
  background, deep-green accent, Plus Jakarta Sans (body/headings) and Azeret
  Mono (small labels/tags/numbers).

Section content is intentionally placeholder for now; the shell, palette,
sticky nav, smooth scrolling, and scroll animations are in place.
