import { Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  const { email, linkedin, github, resume } = profile.links;
  return (
    <section id="contact" aria-labelledby="contact-title" className="section">
      <Reveal>
        <SectionHeader id="contact-title" index="06" label="CONTACT" title="Let's build something trustworthy." />
        <div className="flex flex-wrap gap-3">
          {email && (
            <Button href={`mailto:${email}`} variant="primary">
              <Mail aria-hidden className="size-4" /> Email
            </Button>
          )}
          {linkedin && (
            <Button href={linkedin} external>
              <Linkedin aria-hidden className="size-4" /> LinkedIn
            </Button>
          )}
          {github && (
            <Button href={github} external>
              <Github aria-hidden className="size-4" /> GitHub
            </Button>
          )}
          <a
            href={resume}
            download
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2 font-medium transition hover:border-accent"
          >
            <Download aria-hidden className="size-4" /> Download Résumé
          </a>
        </div>
      </Reveal>
    </section>
  );
}
