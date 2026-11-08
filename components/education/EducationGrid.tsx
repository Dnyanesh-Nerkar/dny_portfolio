import { education } from "@/data/education";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { InProgressBadge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { LearningPath } from "./LearningPath";

export function EducationGrid() {
  return (
    <section id="education" aria-labelledby="education-title" className="section">
      <SectionHeader id="education-title" index="03" label="EDUCATION" title="Still in the pipeline" />
      <LearningPath />
      <ul className="grid gap-5 md:grid-cols-2">
        {education.map((item, i) => (
          <li key={item.id}>
            <Reveal index={i} className="h-full">
              <article className="card card-hover flex h-full flex-col p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-mono text-label text-accent-text">{item.years}</p>
                  {item.inProgress && <InProgressBadge />}
                </div>
                <h3 className="mt-3 text-xl leading-snug">{item.degree}</h3>
                <p className="mt-2 text-muted">
                  {item.school}, {item.location}
                </p>
                {item.gpa && <p className="mt-auto pt-3 font-mono text-label text-muted">gpa: {item.gpa}</p>}
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
