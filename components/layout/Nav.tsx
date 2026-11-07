"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { id: "summary", label: "Summary" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const { id } of links) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    closeButton.current?.focus();
    const trigger = menuButton.current;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-content items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          aria-label={`${profile.shortName}, back to top`}
          className="flex size-11 items-center justify-center rounded-lg border-2 border-accent font-mono text-sm font-medium text-accent-text"
        >
          DN
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={cn(
                    "inline-flex min-h-11 items-center rounded-md px-3 text-sm transition hover:text-text",
                    active === id ? "font-medium text-accent-text" : "text-muted",
                  )}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.links.resume}
            download
            className="hidden min-h-11 items-center gap-2 rounded-lg border border-border bg-surface px-4 text-sm font-medium transition hover:border-accent sm:inline-flex"
          >
            <Download aria-hidden className="size-4" />
            Download Résumé
          </a>
          <button
            ref={menuButton}
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-surface lg:hidden"
          >
            <Menu aria-hidden className="size-5" />
          </button>
        </div>
      </div>

      {open && (
        <div role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-50 h-dvh bg-bg lg:hidden">
          <div className="flex h-[72px] items-center justify-end px-5 sm:px-8">
            <button
              ref={closeButton}
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-surface"
            >
              <X aria-hidden className="size-5" />
            </button>
          </div>
          <nav aria-label="Mobile" className="px-5 sm:px-8">
            <ul className="flex flex-col gap-1">
              {links.map(({ id, label }, i) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className="flex min-h-14 items-center gap-4 border-b border-border font-heading text-2xl font-semibold"
                  >
                    <span aria-hidden className="font-mono text-label text-accent-text">
                      0{i + 1}
                    </span>
                    {label}
                  </a>
                </li>
              ))}
              <li className="mt-6">
                <a
                  href={profile.links.resume}
                  download
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-accent px-5 font-medium text-on-accent"
                >
                  <Download aria-hidden className="size-4" />
                  Download Résumé
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
