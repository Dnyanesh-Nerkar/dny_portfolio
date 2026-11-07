# dny_portfolio

Personal portfolio for Dnyanesh Nerkar, built around the "Golden Record" concept with Next.js, TypeScript, Tailwind CSS and Framer Motion.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Edit content

All content lives in `/data`, so no component changes are needed:

- `profile.ts`: summary, quick facts, contact links (empty links stay hidden)
- `experience.ts`, `education.ts`, `skills.ts`
- `projects.ts`: set `metric` to show a real outcome, and `status` to show a confirmed badge

Set `NEXT_PUBLIC_SITE_URL` to the production domain so canonical, sitemap and Open Graph URLs are correct.
