"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      type="button"
      aria-label="Toggle light and dark theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-surface text-text transition hover:border-accent"
    >
      {/* Icon choice is CSS-driven so server and client markup always agree. */}
      <Sun aria-hidden className="hidden size-5 dark:block" />
      <Moon aria-hidden className="block size-5 dark:hidden" />
    </button>
  );
}
