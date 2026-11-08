import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Pillars } from "./Pillars";
import { QuickFacts } from "./QuickFacts";

export function Summary() {
  return (
    <section id="summary" aria-labelledby="summary-title" className="section">
      <SectionHeader id="summary-title" index="01" label="SUMMARY" title="Many records. One source of truth." />
      <div className="grid gap-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <p className="text-lg leading-relaxed">{profile.summary}</p>
        </Reveal>
        <Reveal index={1} className="lg:col-span-5">
          <QuickFacts />
        </Reveal>
      </div>
      <Pillars />
    </section>
  );
}
