"use client";

import { ArrowUp } from "lucide-react";
import { Fragment, useRef } from "react";
import { roles, type Role } from "@/data/experience";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { formatRange } from "@/lib/utils";
import { LineageLine } from "./LineageLine";
import { RoleCard } from "./RoleCard";

function Node({ parent }: { parent?: boolean }) {
  return (
    <span
      aria-hidden
      className={
        parent
          ? "absolute -left-6 top-1 size-4 rounded-sm border-2 border-accent bg-bg sm:-left-8"
          : "absolute -left-6 top-1 size-4 rounded-full border-2 border-link bg-bg sm:-left-8"
      }
    />
  );
}

function Dates({ role }: { role: Role }) {
  return <p className="mb-2 font-mono text-label text-muted">{formatRange(role.start, role.end)}</p>;
}

function InfosysGroup({ group }: { group: Role[] }) {
  const first = group[group.length - 1];
  const last = group[0];
  return (
    <li className="relative">
      <Node parent />
      <Reveal>
        <p className="mb-1 font-mono text-label text-muted">
          {formatRange(first.start, last.end)}
        </p>
        <h3 className="text-h3">{last.company}</h3>
        <p className="mb-5 mt-1 text-muted">
          {last.location} · {group.length} roles, promoted twice
        </p>
      </Reveal>
      <ol className="space-y-3 border-l border-dashed border-border pl-4 sm:pl-6">
        {group.map((role, i) => (
          <Fragment key={role.id}>
            <li id={`role-${role.id}`} className="scroll-mt-24">
              <Reveal>
                <Dates role={role} />
                <RoleCard role={role} compact />
              </Reveal>
            </li>
            {i < group.length - 1 && (
              <li className="flex items-center gap-2 py-1 font-mono text-label text-success">
                <ArrowUp aria-hidden className="size-4" />
                Promoted
              </li>
            )}
          </Fragment>
        ))}
      </ol>
    </li>
  );
}

export function Timeline() {
  const ref = useRef<HTMLOListElement>(null);
  const infosys = roles.filter((r) => r.group === "infosys");

  return (
    <section id="experience" aria-labelledby="experience-title" className="section">
      <SectionHeader
        id="experience-title"
        index="02"
        label="EXPERIENCE"
        title="Data lineage of a career"
        intro="Each role feeds the next: from analyst to MDM strategy advisor. Newest first."
      />
      <div className="relative mx-auto max-w-4xl">
        <LineageLine target={ref} />
        <ol ref={ref} className="space-y-10 pl-6 sm:pl-8">
          {roles.map((role) => {
            if (role.group === "infosys") {
              return role.id === infosys[0].id ? <InfosysGroup key="infosys" group={infosys} /> : null;
            }
            return (
              <li key={role.id} id={`role-${role.id}`} className="relative scroll-mt-24">
                <Node />
                <Reveal>
                  <Dates role={role} />
                  <RoleCard role={role} />
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
