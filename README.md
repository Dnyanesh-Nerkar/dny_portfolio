# dny_portfolio

Personal portfolio for Dnyanesh Nerkar, built around the "Golden Record" concept with Next.js, TypeScript, Tailwind CSS and Framer Motion.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
```

## Edit content

All content lives in `/data`, so no component changes are needed:

- `profile.ts`: summary, quick facts, contact links (empty links stay hidden)
- `experience.ts`, `education.ts`, `skills.ts`
- `projects.ts`: set `metric` to show a real outcome, and `status` to show a confirmed badge

## Branches and deploys

- `release` is staging. Pushing to it does not deploy anything.
- `main` is production. Merging into `main` runs `.github/workflows/deploy.yml`, which publishes the static export to GitHub Pages.

The workflow sets `NEXT_PUBLIC_BASE_PATH` and `NEXT_PUBLIC_SITE_URL` from the repository's Pages settings.

One-time setup: in the repository settings under **Pages**, set Source to **GitHub Actions**.
