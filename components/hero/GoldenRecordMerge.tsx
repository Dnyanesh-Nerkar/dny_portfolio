"use client";

import { m } from "framer-motion";
import { profile } from "@/data/profile";
import { VerifiedBadge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

// Scattered start positions, as % of the stage. The first three also render on mobile.
const scatter = [
  { left: "2%", top: "6%", rotate: -6 },
  { left: "52%", top: "2%", rotate: 4 },
  { left: "30%", top: "78%", rotate: 3 },
  { left: "62%", top: "32%", rotate: -3 },
  { left: "0%", top: "36%", rotate: 5 },
  { left: "58%", top: "62%", rotate: 6 },
  { left: "26%", top: "20%", rotate: -2 },
  { left: "4%", top: "68%", rotate: -5 },
];

// Starts when in view, so phone users, who see this below the fold, still get the merge.
const BEAT = 0.7; // hold the mess on screen
const MERGE = 1.1;
const EASE = [0.65, 0, 0.35, 1] as const;

export function GoldenRecordMerge() {
  return (
    <div className="relative mx-auto h-[380px] w-full max-w-[460px] sm:h-[430px]">
      {profile.heroRecords.map((record, i) => {
        const pos = scatter[i];
        return (
          <m.div
            key={`${record.field}-${record.value}`}
            aria-hidden
            className={cn(
              "merge-record absolute z-10 rounded-lg border border-border bg-surface-2 px-3 py-2 font-mono text-label whitespace-nowrap",
              i > 2 && "hidden sm:block",
            )}
            initial={{ left: pos.left, top: pos.top, x: "0%", y: "0%", opacity: 1, rotate: pos.rotate, scale: 1 }}
            whileInView={{ left: "50%", top: "50%", x: "-50%", y: "-50%", opacity: 0, rotate: 0, scale: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: BEAT + i * 0.04, duration: MERGE, ease: EASE }}
          >
            <span className="text-muted">{record.field}: </span>
            <span className="text-text">{record.value}</span>
          </m.div>
        );
      })}

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <m.div
          className="merge-final w-full max-w-[380px]"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: BEAT + MERGE - 0.15, duration: 0.65, ease: "easeOut" }}
        >
        <div className="rounded-card border-2 border-accent bg-surface p-6 shadow-[0_0_48px_var(--accent-soft)]">
          <div className="flex items-start justify-between gap-3">
            <p className="font-mono text-label text-accent-text">golden_record</p>
            <VerifiedBadge />
          </div>
          <p className="mt-4 font-heading text-2xl font-bold">{profile.shortName}</p>
          <p className="mt-1 text-sm text-muted">{profile.title}</p>
          <dl className="mt-5 space-y-1.5 border-t border-border pt-4 font-mono text-label">
            {profile.heroFields.map(({ key, value }) => (
              <div key={key} className="flex gap-2">
                <dt className="text-muted">{key}:</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        </m.div>
      </div>
    </div>
  );
}
