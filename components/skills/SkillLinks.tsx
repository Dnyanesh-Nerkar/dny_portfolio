"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { linksForSkill, type CrossLinks } from "@/lib/crossLinks";
import type { Skill } from "@/data/skills";

type Value = {
  active: Skill | null;
  links: CrossLinks | null;
  setActive: (skill: Skill | null) => void;
};

const Context = createContext<Value>({ active: null, links: null, setActive: () => {} });

export function SkillLinksProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<Skill | null>(null);
  const value = useMemo(
    () => ({ active, links: active ? linksForSkill(active) : null, setActive }),
    [active],
  );
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export const useSkillLinks = () => useContext(Context);
