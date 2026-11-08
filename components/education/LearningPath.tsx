import { education } from "@/data/education";

/** Five dots from 2015 to 2028; the last segment is dashed because it is still ahead. */
export function LearningPath() {
  const stops = [...education].reverse();
  const x = (i: number) => 4 + (i * 92) / (stops.length - 1);
  return (
    <div className="mb-10">
      <svg aria-hidden className="h-4 w-full" viewBox="0 0 100 4" preserveAspectRatio="none">
        <line x1={x(0)} x2={x(stops.length - 2)} y1="2" y2="2" stroke="var(--link)" strokeWidth="0.6" vectorEffect="non-scaling-stroke" style={{ strokeWidth: 2 }} />
        <line x1={x(stops.length - 2)} x2={x(stops.length - 1)} y1="2" y2="2" stroke="var(--link)" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" style={{ strokeWidth: 2 }} />
      </svg>
      <ol aria-label="Learning path by year" className="relative -mt-4 h-12">
        {stops.map((stop, i) => (
          <li
            key={stop.id}
            className="absolute flex -translate-x-1/2 flex-col items-center"
            style={{ left: `${x(i)}%` }}
          >
            <span
              aria-hidden
              className={
                stop.inProgress
                  ? "size-4 rounded-full border-2 border-dashed border-accent bg-bg"
                  : "size-4 rounded-full border-2 border-link bg-bg"
              }
            />
            <span className="mt-2 font-mono text-label text-muted">{stop.pathYear}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
