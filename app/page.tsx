import { Contact } from "@/components/contact/Contact";
import { EducationGrid } from "@/components/education/EducationGrid";
import { Timeline } from "@/components/experience/Timeline";
import { Hero } from "@/components/hero/Hero";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { SkillLinksProvider } from "@/components/skills/SkillLinks";
import { SkillSchema } from "@/components/skills/SkillSchema";
import { Summary } from "@/components/summary/Summary";
import { education } from "@/data/education";
import { profile } from "@/data/profile";
import { skillTables } from "@/data/skills";
import { siteUrl } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: profile.title,
  worksFor: { "@type": "Organization", name: profile.company },
  alumniOf: [...new Set(education.map((e) => e.school))].map((name) => ({ "@type": "CollegeOrUniversity", name })),
  knowsAbout: skillTables[0].skills.map((s) => s.name),
};

export default function Home() {
  return (
    <SkillLinksProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <Summary />
      <Timeline />
      <EducationGrid />
      <SkillSchema />
      <ProjectGrid />
      <Contact />
    </SkillLinksProvider>
  );
}
