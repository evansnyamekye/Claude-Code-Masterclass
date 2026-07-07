# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Pocket Heist — a starter project for the Claude Code Masterclass. A Next.js (App Router) app where users create "heists" (pranks) and assign them to coworkers. Currently a UI skeleton: routes and layouts exist but pages mostly render placeholder content, and there is no backend/auth/data layer wired up yet.

## Commands

```bash
npm run dev       # start dev server (http://localhost:3000)
npm run build     # production build
npm run start     # run production build
npm run lint      # eslint
npm test          # run vitest test suite (watch mode by default)
npx vitest run     # run tests once, non-interactively
npx vitest run tests/components/Navbar.test.tsx   # run a single test file
```

## Architecture

- **Next.js App Router with route groups**: `app/(public)/` (splash, login, signup, preview — no shared nav) and `app/(dashboard)/` (heists list, heist detail, create heist — wrapped with `Navbar` via `app/(dashboard)/layout.tsx`). Route groups only affect layout nesting, not URLs (e.g. `app/(dashboard)/heists/page.tsx` → `/heists`).
- **`app/(public)/page.tsx` (`/`) is a splash/router page**: per its own comment, it's meant to redirect to `/heists` when logged in or `/login` when not — that redirect logic doesn't exist yet and is a likely next task.
- **Components live in their own folder with a barrel file**: e.g. `components/Navbar/{Navbar.tsx, Navbar.module.css, index.ts}`, where `index.ts` re-exports the default. Follow this structure for new components. Styling mixes Tailwind utility classes (global styles/theme) with CSS Modules for component-scoped styles.
- **Tailwind v4 theme** is defined in `app/globals.css` via `@theme` (colors: primary/secondary/dark/light/lighter/success/error/heading/body, font-sans: Inter). Reusable layout classes (`.page-content`, `.center-content`, `.form-title`) are defined there rather than repeated per-page — reuse them instead of ad hoc utility stacks.
- **Path alias**: `@/*` maps to the repo root (see `tsconfig.json`), e.g. `@/components/Navbar`, `@/app/globals.css`.
- **Tests** use Vitest + jsdom + Testing Library, mirroring `app`/`components` structure under `tests/` (e.g. `tests/components/Navbar.test.tsx`). `vitest.config.mts` wires up `vite-tsconfig-paths` (so `@/` imports work in tests) and loads `vitest.setup.ts` (jest-dom matchers). Vitest globals (`describe`/`it`/`expect`) are enabled — no need to import them, though existing tests do import explicitly.
- **`@anthropic-ai/sdk`** is a listed dependency but not yet used anywhere in the codebase — expect AI-feature work to introduce its first usage.
