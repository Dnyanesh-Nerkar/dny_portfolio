import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function VerifiedBadge({ label = "Verified" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-success/40 px-2.5 py-0.5 font-mono text-label text-success">
      <CheckCircle2 aria-hidden className="size-3.5" />
      {label}
    </span>
  );
}

export function InProgressBadge({ pulse = true, className }: { pulse?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent-soft px-2.5 py-0.5 font-mono text-label text-accent-text",
        className,
      )}
    >
      <span aria-hidden className={cn("size-2 rounded-full bg-accent", pulse && "pulse-dot")} />
      In progress
    </span>
  );
}
