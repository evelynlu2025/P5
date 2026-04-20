# GrocerEase marketing site

Static landing page for **GrocerEase**, the Pittsburgh-focused neighborhood grocery discovery web app ([source code](https://github.com/gsha22/GrocerEase)).

## Quick start

```bash
npm install
cp .env.example .env
# Defaults to https://grocerease-topaz.vercel.app if unset. Override for local Next.js on another port.
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `VITE_APP_ORIGIN` | No | Origin of the live Next.js app (defaults to `https://grocerease-topaz.vercel.app`). Used for app, sign-up, sign-in (`/sign-in`), map, and deals links. |
| `VITE_SITE_URL` | No | Canonical URL of this marketing site (footer). Defaults to `window.location.origin` in the browser. |
| `VITE_CONTACT_EMAIL` | No | When set, adds an “Email the team” link in the footer. |

## Build & preview

```bash
npm run build
npm run preview
```

Deploy `dist/` to Netlify, Vercel static hosting, GitHub Pages, or any static file host.

## Media

- **Hero / section photos** live under `public/images/` (sourced from Unsplash / Picsum during setup). Swap them for your own photography any time—keep filenames or update `src/App.tsx`.
- **Team portraits** are under `public/team/` and listed in the `team` array in `src/App.tsx` (names, roles, bios, image paths).

## App routes (deployed)

Shopper sign-up uses `/shopper/signup?callbackUrl=/shopper/account`. Sign-in for everyone uses `/sign-in`. Store owner registration uses `/signup`.

## Branding

The product repo mixes strings (“PGH Local Grocers”, “LocalGrocer”). This site standardizes on **GrocerEase** for customer-facing copy; align the Next.js `layout.tsx` / nav when you are ready.
