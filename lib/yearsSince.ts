/** Whole years elapsed since an ISO date. */
export function yearsSince(isoDate: string, now: Date = new Date()) {
  const start = new Date(isoDate);
  let years = now.getFullYear() - start.getFullYear();
  const anniversary = new Date(start);
  anniversary.setFullYear(now.getFullYear());
  if (now < anniversary) years -= 1;
  return years;
}
