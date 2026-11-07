export function SectionHeader({
  id,
  index,
  label,
  title,
  intro,
}: {
  id: string;
  index: string;
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="mb-10 max-w-3xl lg:mb-14">
      <p className="mb-3 font-mono text-label tracking-widest text-accent-text">
        {index} / {label}
      </p>
      <h2 id={id} className="text-h2">
        {title}
      </h2>
      {intro && <p className="mt-4 text-muted">{intro}</p>}
    </header>
  );
}
