/** Path prefix when hosted under a subfolder, such as GitHub Pages project sites. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Canonical URL of the site, without a trailing slash. The deploy workflow sets this. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
