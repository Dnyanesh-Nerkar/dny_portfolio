"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import type { Role } from "@/data/experience";
import { Chip } from "@/components/ui/Chip";
import { useSkillLinks } from "@/components/skills/SkillLinks";
import { cn, formatRange } from "@/lib/utils";

const HIGHLIGHTS = 4;

export function RoleCard({ role, compact }: { role: Role; compact?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();
  const { links } = useSkillLinks();
  const linked = links?.roleIds.includes(role.id);
  const visible = expanded ? role.bullets : role.bullets.slice(0, HIGHLIGHTS);
  const hidden = role.bullets.length - HIGHLIGHTS;

  return (
    <article className={cn("card card-hover p-5 sm:p-6", linked && "is-linked")}>
      <h3 className={compact ? "text-xl leading-snug" : "text-h3"}>{role.title}</h3>
      {!compact && (
        <p className="mt-1 text-muted">
          {role.company} · {role.location}
        </p>
      )}
      <ul id={panelId} className="mt-4 list-disc space-y-2 pl-5 marker:text-accent">
        {visible.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      {hidden > 0 && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-link"
        >
          {expanded ? "Show less" : `Show more (${hidden})`}
          <ChevronDown aria-hidden className={cn("size-4 transition-transform", expanded && "rotate-180")} />
        </button>
      )}
      <ul aria-label="Tools" className="mt-4 flex flex-wrap gap-1.5">
        {role.tools.map((tool) => (
          <li key={tool}>
            <Chip>{tool}</Chip>
          </li>
        ))}
      </ul>
      <p className="sr-only">{formatRange(role.start, role.end)}</p>
    </article>
  );
}
