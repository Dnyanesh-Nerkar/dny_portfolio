"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

/** Fade and rise on scroll. MotionConfig strips the transform for reduced-motion users. */
export function Reveal({
  children,
  index = 0,
  className,
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  return (
    <m.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: Math.min(index, 8) * 0.06 }}
    >
      {children}
    </m.div>
  );
}
