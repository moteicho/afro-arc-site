# Afro Arc Site

Official repository for the Afro Arc website.

## Purpose
Build a vivid, animated, premium website for Afro Arc that feels cinematic, futuristic, mythic, and franchise-ready.

## Current Goal
Create a homepage-first website experience that communicates Afro Arc as a multimedia universe brand.

## Build Priorities
- Premium visual design
- Strong motion and animation
- Responsive layout
- Clean component structure
- Clear brand positioning
- Easy future expansion

## Run Locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.

## Quality Checks
Before pushing/deploying, run:

```bash
npm run typecheck
npm run lint
npm run build
```

## Environment Notes
- This project is built with Next.js App Router + TypeScript + Tailwind CSS + Framer Motion.
- Production metadata is configured for `https://www.afroarc.com`; update it in `app/layout.tsx` if the canonical domain changes.

## Notes for Codex
Read all project documents in this repository before implementing anything.
