"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export type Stat = { value: number; suffix?: string; label: string };

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(value); // server HTML carries the real number

  useEffect(() => {
    if (reduced) {
      setShown(value);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / 1400, 1);
      setShown(Math.round(value * (1 - (1 - t) ** 3)));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, reduced]);

  return (
    <>
      <span aria-hidden className="tabular-nums">
        {shown}
        {suffix}
      </span>
      <span className="sr-only">
        {value}
        {suffix}
      </span>
    </>
  );
}

export function StatStrip({ stats }: { stats: Stat[] }) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col-reverse justify-end gap-1 border-l-2 border-accent/50 pl-3">
          <dt className="text-label leading-snug text-muted">{stat.label}</dt>
          <dd className="font-heading text-3xl font-bold">
            <Counter value={stat.value} suffix={stat.suffix} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
