import type { Project } from "@/data/projects";

const box = { fill: "var(--surface-2)", stroke: "var(--border)", strokeWidth: 1.5 };
const label = {
  fill: "var(--text)",
  fontFamily: "var(--font-mono), monospace",
  fontSize: 14,
  textAnchor: "middle" as const,
  dominantBaseline: "central" as const,
};
const arrowLine = { stroke: "var(--link)", strokeWidth: 2, fill: "none", markerEnd: "url(#arrow)" };

function ArrowMarker() {
  return (
    <defs>
      <marker id="arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 L8 4 L0 8 Z" fill="var(--link)" />
      </marker>
    </defs>
  );
}

function Migration({ alt }: { alt: string }) {
  return (
    <svg role="img" aria-label={alt} viewBox="0 0 480 130" className="mx-auto w-full max-w-xl">
      <ArrowMarker />
      <rect x="4" y="35" width="120" height="60" rx="8" {...box} />
      <text x="64" y="65" {...label}>Reltio</text>
      <path d="M126 65 H188" {...arrowLine} />
      <path d="M240 13 L292 65 L240 117 L188 65 Z" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth={2} />
      <text x="240" y="57" {...label} fontSize={13}>parity</text>
      <text x="240" y="75" {...label} fontSize={13}>check</text>
      <path d="M292 65 H354" {...arrowLine} />
      <rect x="356" y="35" width="120" height="60" rx="8" {...box} stroke="var(--accent)" />
      <text x="416" y="65" {...label}>Informatica</text>
    </svg>
  );
}

function AgentLoop({ alt }: { alt: string }) {
  const nodes = [
    { x: 200, y: 26, text: "observe" },
    { x: 330, y: 95, text: "match" },
    { x: 200, y: 164, text: "recommend" },
    { x: 70, y: 95, text: "human approve" },
  ];
  return (
    <svg role="img" aria-label={alt} viewBox="0 0 400 190" className="mx-auto w-full max-w-md">
      <ArrowMarker />
      <path d="M272 34 Q320 44 328 72" {...arrowLine} />
      <path d="M328 118 Q320 148 272 156" {...arrowLine} />
      <path d="M128 156 Q80 148 72 118" {...arrowLine} />
      <path d="M72 72 Q80 44 128 34" {...arrowLine} />
      {nodes.map((n) => (
        <g key={n.text}>
          <rect x={n.x - 66} y={n.y - 22} width={132} height={44} rx={8} {...box} stroke={n.text === "human approve" ? "var(--accent)" : box.stroke} />
          <text x={n.x} y={n.y} {...label} fontSize={13}>{n.text}</text>
        </g>
      ))}
    </svg>
  );
}

/** Greedy wrap so labels stay readable when the diagram is scaled down in a small card. */
function wrap(text: string, max = 10) {
  const lines: string[] = [];
  for (const word of text.split(" ")) {
    const last = lines[lines.length - 1];
    if (last && `${last} ${word}`.length <= max) lines[lines.length - 1] = `${last} ${word}`;
    else lines.push(word);
  }
  return lines;
}

function Pipeline({ steps, alt }: { steps: string[]; alt: string }) {
  const w = 112;
  const gap = 28;
  return (
    <svg role="img" aria-label={alt} viewBox={`0 0 ${steps.length * w + (steps.length - 1) * gap + 8} 76`} className="mx-auto w-full max-w-md">
      <ArrowMarker />
      {steps.map((step, i) => {
        const x = 4 + i * (w + gap);
        const last = i === steps.length - 1;
        const lines = wrap(step);
        return (
          <g key={step}>
            <rect x={x} y={6} width={w} height={64} rx={8} {...box} stroke={last ? "var(--accent)" : box.stroke} />
            {lines.map((line, j) => (
              <text key={line} x={x + w / 2} y={38 + (j - (lines.length - 1) / 2) * 21} {...label} fontSize={17}>
                {line}
              </text>
            ))}
            {!last && <path d={`M${x + w + 2} 38 H${x + w + gap - 2}`} {...arrowLine} />}
          </g>
        );
      })}
    </svg>
  );
}

export function ProjectDiagram({ project }: { project: Project }) {
  switch (project.diagram) {
    case "migration":
      return <Migration alt={project.diagramAlt} />;
    case "agent-loop":
      return <AgentLoop alt={project.diagramAlt} />;
    case "pipeline":
      return <Pipeline steps={project.diagramSteps ?? []} alt={project.diagramAlt} />;
    default:
      return null;
  }
}
