import { profile } from "@/data/profile";

export function QuickFacts() {
  return (
    <aside aria-label="Quick facts" className="card p-6">
      <p className="mb-4 font-mono text-label text-accent-text">quick_facts</p>
      <dl className="space-y-3 font-mono text-label">
        {profile.quickFacts.map(({ key, value }) => (
          <div key={key}>
            <dt className="text-muted">{key}:</dt>
            <dd className="mt-0.5">{value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
