export function Chip({ children }: { children: string }) {
  return (
    <span className="inline-block rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-label text-muted">
      {children}
    </span>
  );
}
