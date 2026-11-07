import { roles } from "@/data/experience";
import { projects } from "@/data/projects";
import type { Skill } from "@/data/skills";

function matches(text: string, terms: string[]) {
  return terms.some((term) => {
    // Short acronyms are case-sensitive whole words, so "SOP" or "SQL" do not match inside other words.
    const isAcronym = term.length <= 5 && term === term.toUpperCase();
    return isAcronym
      ? new RegExp(`\\b${term}\\b`).test(text)
      : text.toLowerCase().includes(term.toLowerCase());
  });
}

export type CrossLinks = { roleIds: string[]; projectSlugs: string[] };

export function linksForSkill(skill: Skill): CrossLinks {
  return {
    roleIds: roles
      .filter((r) => matches([r.title, ...r.bullets, ...r.tools].join(" "), skill.match))
      .map((r) => r.id),
    projectSlugs: projects
      .filter((p) => matches([p.title, p.problem, ...p.actions, ...p.tools, ...p.tags].join(" "), skill.match))
      .map((p) => p.slug),
  };
}
