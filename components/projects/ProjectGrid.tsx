"use client";

import { useState } from "react";
import { projects, type Project, type ProjectGroup } from "@/data/projects";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

const filters: ("All" | ProjectGroup)[] = ["All", "MDM", "Dashboards", "Research", "AI"];

export function ProjectGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<Project | null>(null);
  const shown = filter === "All" ? projects : projects.filter((p) => p.groups.includes(filter));

  return (
    <section id="projects" aria-labelledby="projects-title" className="section">
      <SectionHeader
        id="projects-title"
        index="05"
        label="PROJECTS"
        title="Featured case studies"
        intro="Diagrams are simplified on purpose, and no confidential data appears on this site. Before and after lines are illustrative."
      />

      <div role="group" aria-label="Filter projects by tag" className="mb-8 flex flex-wrap gap-2">
        {filters.map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={filter === name}
            onClick={() => setFilter(name)}
            className={cn(
              "min-h-11 rounded-full border px-4 font-mono text-label transition",
              filter === name ? "border-accent bg-accent text-on-accent" : "border-border bg-surface text-muted hover:border-accent",
            )}
          >
            {name}
          </button>
        ))}
      </div>

      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((project, i) => (
          <li key={project.slug} className={cn(
              project.featured && "md:col-span-2",
              // Closes the bento grid: 2+1, 1+1+1, then this card and one spanning two.
              filter === "All" && i === shown.length - 1 && "lg:col-span-2",
            )}>
            <Reveal index={i} className="h-full">
              <ProjectCard project={project} onOpen={setOpen} />
            </Reveal>
          </li>
        ))}
      </ul>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
