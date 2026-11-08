"use client";

import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { useSkillLinks } from "@/components/skills/SkillLinks";
import { InProgressBadge, VerifiedBadge } from "@/components/ui/Badge";
import { Chip } from "@/components/ui/Chip";
import { cn } from "@/lib/utils";
import { ProjectDiagram } from "./diagrams";

export function StatusBadge({ status }: { status: Project["status"] }) {
  if (status === "in-progress") return <InProgressBadge pulse={false} />;
  if (status === "in-production") return <VerifiedBadge label="In production" />;
  if (status === "completed") return <VerifiedBadge label="Completed" />;
  return null;
}

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  const { links } = useSkillLinks();
  const linked = links?.projectSlugs.includes(project.slug);

  return (
    <article
      id={`project-${project.slug}`}
      className={cn("card card-hover group relative flex h-full scroll-mt-24 flex-col p-5 sm:p-6", linked && "is-linked")}
    >
      <div className="rounded-lg border border-border bg-bg/60 p-3">
        <ProjectDiagram project={project} />
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-label text-accent-text">{project.year}</p>
        <StatusBadge status={project.status} />
      </div>
      <h3 className={cn("mt-2 leading-snug", project.featured ? "text-h3" : "text-xl")}>
        {/* The stretched button makes the whole card the click target. */}
        <button
          type="button"
          onClick={() => onOpen(project)}
          aria-haspopup="dialog"
          className="text-left after:absolute after:inset-0 after:rounded-card after:content-['']"
        >
          {project.title}
          <ArrowUpRight aria-hidden className="ml-1 inline size-4 text-muted transition group-hover:text-accent-text" />
        </button>
      </h3>
      <p className="mt-2 text-muted">{project.problem}</p>
      <p className="mt-2 text-sm text-muted">{project.role}</p>

      <dl className="mt-4 space-y-0.5 border-l-2 border-accent/50 pl-3 font-mono text-label">
        <div className="flex gap-2">
          <dt className="text-muted">before:</dt>
          <dd>{project.before}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="text-success">after:</dt>
          <dd>{project.after}</dd>
        </div>
      </dl>

      <ul aria-label="Tools" className="mt-auto flex flex-wrap gap-1.5 pt-4">
        {project.tools.map((tool) => (
          <li key={tool}>
            <Chip>{tool}</Chip>
          </li>
        ))}
      </ul>
    </article>
  );
}
