"use client";

import type { SkillTable as Table } from "@/data/skills";
import { cn } from "@/lib/utils";
import { useSkillLinks } from "./SkillLinks";

export function SkillTable({ table }: { table: Table }) {
  const { active, setActive } = useSkillLinks();
  return (
    <article className="card relative h-full overflow-hidden">
      <h3 className="border-b border-border bg-surface-2 px-4 py-3 font-mono text-sm font-medium text-accent-text">
        {table.table}
      </h3>
      <ul>
        {table.skills.map((skill) => (
          <li key={skill.name} className="border-b border-border last:border-b-0">
            <button
              type="button"
              aria-pressed={active?.name === skill.name}
              onMouseEnter={() => setActive(skill)}
              onFocus={() => setActive(skill)}
              onClick={() => setActive(skill)}
              className={cn(
                "flex min-h-11 w-full items-center px-4 py-2 text-left text-sm transition-colors hover:bg-accent-soft",
                active?.name === skill.name && "bg-accent-soft",
              )}
            >
              {skill.name}
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}
