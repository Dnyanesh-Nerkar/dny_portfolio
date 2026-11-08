import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { yearsSince } from "@/lib/yearsSince";
import { Button } from "@/components/ui/Button";
import { StatStrip, type Stat } from "./StatStrip";

export function Hero() {
  const stats: Stat[] = [
    { value: yearsSince(profile.careerStart), suffix: "+", label: "Years in data" },
    { value: profile.industriesTouched, label: "Industries touched" },
    { value: profile.degrees.masters, label: `Master's + MBA (${profile.degrees.inProgress} in progress)` },
    { value: profile.platformsLabel, suffix: "+", label: "Platforms" },
  ];

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden className="hero-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-content items-center gap-10 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-20">
        <div className="lg:col-span-12">
          <p className="mb-4 font-mono text-label tracking-widest text-accent-text">{profile.eyebrow}</p>
          <h1 id="hero-title" className="text-hero">
            {profile.shortName}
          </h1>
          <p className="mt-3 font-heading text-lg font-bold sm:text-xl">
            {profile.title} at {profile.company}
          </p>
          <p className="mt-5 max-w-2xl font-heading text-xl font-medium leading-snug sm:text-2xl">{profile.headline}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="#projects" variant="primary">
              View Projects <ArrowRight aria-hidden className="size-4" />
            </Button>
            <a
              href={profile.links.resume}
              download
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2 font-medium transition hover:border-accent"
            >
              <Download aria-hidden className="size-4" /> Download Résumé
            </a>
            <Button href="#contact" variant="ghost">
              Contact
            </Button>
          </div>

          <div className="mt-10">
            <StatStrip stats={stats} />
          </div>
        </div>

        <nav aria-label="Featured work" className="lg:col-span-12">
          <p className="mb-3 font-mono text-label text-muted">featured_work:</p>
          <ul className="flex flex-wrap gap-2">
            {projects.slice(0, 3).map((project) => (
              <li key={project.slug}>
                <a
                  href={`#project-${project.slug}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm transition hover:border-accent"
                >
                  {project.title}
                  <ArrowRight aria-hidden className="size-3.5 text-accent-text" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
