import { BarChart3, GitMerge, ShieldCheck } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";

const icons = { shield: ShieldCheck, merge: GitMerge, chart: BarChart3 };

export function Pillars() {
  return (
    <ul className="mt-8 grid gap-5 md:grid-cols-3">
      {profile.pillars.map((pillar, i) => {
        const Icon = icons[pillar.icon];
        return (
          <li key={pillar.title}>
            <Reveal index={i} className="h-full">
              <div className="card card-hover h-full p-6">
                <Icon aria-hidden className="size-6 text-accent-text" />
                <h3 className="mt-4 text-h3">{pillar.title}</h3>
                <p className="mt-2 text-muted">{pillar.text}</p>
              </div>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
