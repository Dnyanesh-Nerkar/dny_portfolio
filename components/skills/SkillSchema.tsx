"use client";

import { roles } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillTables } from "@/data/skills";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { useSkillLinks } from "./SkillLinks";
import { SkillTable } from "./SkillTable";

/** Decorative relationship lines, visible in the gaps between the opaque table cards. */
function Connectors() {
  const lines = [
    "M15.65 25 H84.35",
    "M15.65 75 H84.35",
    "M15.65 25 V75",
    "M50 25 V75",
    "M84.35 25 V75",
  ];
  return (
    <svg aria-hidden className="pointer-events-none absolute inset-0 hidden size-full lg:block" viewBox="0 0 100 100" preserveAspectRatio="none">
      {lines.map((d) => (
        <path key={d} d={d} fill="none" stroke="var(--link)" strokeDasharray="4 4" strokeWidth={1.5} vectorEffect="non-scaling-stroke" opacity={0.7} />
      ))}
    </svg>
  );
}

function UsedIn() {
  const { active, links } = useSkillLinks();
  const usedRoles = roles.filter((r) => links?.roleIds.includes(r.id));
  const usedProjects = projects.filter((p) => links?.projectSlugs.includes(p.slug));
  const none = usedRoles.length + usedProjects.length === 0;

  return (
    <div aria-live="polite" className="card mt-6 min-h-[92px] p-5 text-sm">
      {!active ? (
        <p className="text-muted">
          <span className="font-mono text-label text-accent-text">SELECT</span> a skill above to see the roles and projects that used it.
        </p>
      ) : (
        <>
          <p className="font-mono text-label text-accent-text">
            used_in(&apos;{active.name}&apos;)
          </p>
          {none ? (
            <p className="mt-2 text-muted">Not tied to one specific role or project.</p>
          ) : (
            <ul className="mt-2 flex flex-wrap gap-2">
              {usedRoles.map((role) => (
                <li key={role.id}>
                  <a href={`#role-${role.id}`} className="inline-flex min-h-11 items-center rounded-full border border-border px-3 py-1 hover:border-accent">
                    {role.title}
                    <span className="sr-only"> at </span>
                    <span aria-hidden className="mx-1 text-muted">·</span>
                    <span className="text-muted">{role.company}</span>
                  </a>
                </li>
              ))}
              {usedProjects.map((project) => (
                <li key={project.slug}>
                  <a href={`#project-${project.slug}`} className="inline-flex min-h-11 items-center rounded-full border border-accent/50 bg-accent-soft px-3 py-1 hover:border-accent">
                    {project.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export function SkillSchema() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section">
      <SectionHeader id="skills-title" index="04" label="SKILLS" title="The schema behind the work" />
      <div className="relative">
        <Connectors />
        <ul className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {skillTables.map((table, i) => (
            <li key={table.table}>
              <Reveal index={i} className="h-full">
                <SkillTable table={table} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
      <UsedIn />
    </section>
  );
}
