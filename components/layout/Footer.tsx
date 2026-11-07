import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.shortName}. Built with Next.js.
        </p>
        <p className="font-mono text-label">{profile.footerJoke}</p>
      </div>
    </footer>
  );
}
