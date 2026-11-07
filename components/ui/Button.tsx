import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-accent text-on-accent border-accent hover:brightness-110",
  secondary: "border-border bg-surface text-text hover:border-accent",
  ghost: "border-transparent text-text hover:bg-surface-2",
};

export function Button({
  href,
  variant = "secondary",
  children,
  className,
  external,
}: {
  href: string;
  variant?: keyof typeof variants;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-5 py-2 font-medium transition",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
