"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Project } from "@/data/projects";
import { Chip } from "@/components/ui/Chip";
import { ProjectDiagram } from "./diagrams";
import { StatusBadge } from "./ProjectCard";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6">
      <h4 className="mb-2 font-mono text-label font-medium uppercase tracking-widest text-accent-text">{title}</h4>
      {children}
    </section>
  );
}

/** Native <dialog> provides the focus trap, Esc to close, and focus return. */
export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="case-study-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-2xl rounded-card border border-border bg-surface p-0 text-text backdrop:bg-black/70"
    >
      {project && (
        <div className="max-h-[85dvh] overflow-y-auto p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-label text-accent-text">case_study · {project.year}</p>
              <h3 id="case-study-title" className="mt-2 text-h3">
                {project.title}
              </h3>
            </div>
            <button
              type="button"
              aria-label="Close case study"
              onClick={onClose}
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-2 hover:border-accent"
            >
              <X aria-hidden className="size-5" />
            </button>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} />
            <p className="text-sm text-muted">{project.role}</p>
          </div>

          <Block title="Context">
            <p>{project.context}</p>
          </Block>
          <Block title="Problem">
            <p>{project.problem}</p>
          </Block>
          <Block title="What I did">
            <ul className="list-disc space-y-1.5 pl-5 marker:text-accent">
              {project.actions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ul>
          </Block>
          <Block title="Tools">
            <ul className="flex flex-wrap gap-1.5">
              {project.tools.map((tool) => (
                <li key={tool}>
                  <Chip>{tool}</Chip>
                </li>
              ))}
            </ul>
          </Block>
          {project.metric && (
            <Block title="Outcome">
              <p>
                <strong className="font-heading text-2xl">{project.metric.value}</strong> {project.metric.label}
              </p>
            </Block>
          )}
          {project.diagram && project.diagram !== "none" && (
            <Block title="Diagram">
              <div className="rounded-lg border border-border bg-bg/60 p-4">
                <ProjectDiagram project={project} />
              </div>
            </Block>
          )}
        </div>
      )}
    </dialog>
  );
}
