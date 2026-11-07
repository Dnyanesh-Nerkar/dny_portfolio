"use client";

import { m, useScroll, useSpring, useTransform } from "framer-motion";
import type { RefObject } from "react";

/** The glowing lineage line: draws in as the timeline scrolls through the viewport. */
export function LineageLine({ target }: { target: RefObject<HTMLElement | null> }) {
  const { scrollYProgress } = useScroll({ target, offset: ["start 75%", "end 75%"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const pathLength = useTransform(smooth, [0, 1], [0.02, 1]);

  return (
    <svg
      aria-hidden
      className="absolute bottom-0 left-[7px] top-0 h-full w-0.5 overflow-visible"
      viewBox="0 0 2 100"
      preserveAspectRatio="none"
    >
      <path d="M1 0 V100" stroke="var(--border)" strokeWidth={2} fill="none" />
      <m.path
        d="M1 0 V100"
        stroke="var(--link)"
        strokeWidth={2}
        fill="none"
        style={{ pathLength, filter: "drop-shadow(0 0 4px var(--link))" }}
      />
    </svg>
  );
}
