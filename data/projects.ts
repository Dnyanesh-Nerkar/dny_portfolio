export type ProjectGroup = "MDM" | "Dashboards" | "Research" | "AI";

export type Project = {
  slug: string;
  title: string;
  year: string;
  featured?: boolean;
  role: string;
  context: string;
  problem: string;
  actions: string[];
  tools: string[];
  tags: string[];
  groups: ProjectGroup[];
  // Only set a status the owner has confirmed.
  status?: "in-production" | "in-progress" | "completed";
  // Real outcome for the owner to fill in. Hidden while null.
  metric?: { label: string; value: string } | null;
  diagram?: "migration" | "agent-loop" | "pipeline" | "none";
  diagramSteps?: string[];
  diagramAlt: string;
  // Illustrative wording only, never figures.
  before: string;
  after: string;
};

export const projects: Project[] = [
  {
    slug: "reltio-to-informatica-migration",
    title: "Reltio to Informatica MDM Migration",
    year: "2026",
    featured: true,
    role: "The Cigna Group · Data Management Strategy and Governance Advisor",
    context: "Enterprise-level MDM for producer data, moving from Reltio to Informatica.",
    problem: "Move an enterprise MDM from one platform to another without losing functionality or data trust.",
    actions: [
      "Led the migration to build enterprise-level MDM systems.",
      "Stabilized the Informatica platform for producer data.",
      "Ran attribute-level parity checks.",
      "Restored Reltio functionality using Cursor AI to join complex data to producer.",
    ],
    tools: ["Informatica", "Reltio", "Cursor AI"],
    tags: ["Informatica", "Reltio", "MDM", "Data Migration", "Cursor AI"],
    groups: ["MDM", "AI"],
    metric: null,
    diagram: "migration",
    diagramAlt: "Diagram: records flow from Reltio through a parity check gate into Informatica.",
    before: "two platforms, one question of trust",
    after: "attributes checked for parity",
  },
  {
    slug: "agentic-ai-for-enterprise-mdm",
    title: "Agentic AI for Enterprise MDM",
    year: "2026",
    role: "The Cigna Group · Data Management Strategy and Governance Advisor",
    context: "A cross-team effort to bring agentic AI to the MDM landscape.",
    problem: "Manual MDM operations are repetitive and slow to scale.",
    actions: ["Partnering with AI teams to design an agentic solution across the MDM landscape."],
    tools: ["Agentic AI"],
    tags: ["Agentic AI", "MDM", "Automation"],
    groups: ["MDM", "AI"],
    status: "in-progress",
    metric: null,
    diagram: "agent-loop",
    diagramAlt: "Diagram: an agent loop that moves from observe, to match, to recommend, to human approve, then repeats.",
    before: "repetitive manual steps",
    after: "agent recommends, human approves",
  },
  {
    slug: "downstream-dashboards-on-databricks",
    title: "Downstream Dashboards on Databricks",
    year: "2026",
    role: "The Cigna Group · Data Management Strategy and Governance Advisor",
    context: "Reporting for the teams that consume producer MDM data.",
    problem: "Downstream consumers needed visibility into producer MDM data.",
    actions: ["Built dashboards on Databricks for those consumers."],
    tools: ["Databricks", "SQL"],
    tags: ["Databricks", "SQL", "Dashboards"],
    groups: ["Dashboards", "MDM"],
    metric: null,
    diagram: "pipeline",
    diagramSteps: ["Producer MDM", "Databricks", "Dashboards"],
    diagramAlt: "Diagram: producer MDM data flows into Databricks and out to dashboards.",
    before: "limited downstream visibility",
    after: "dashboards for consumers",
  },
  {
    slug: "claims-mdm-validation-merge-unmerge",
    title: "Claims MDM Data Validation and Profile Merge/Unmerge",
    year: "2021 – 2023",
    role: "Infosys Ltd · Associate Business Analyst",
    context: "MDM producer, client and customer domains, including Claims MDM.",
    problem: "Insurance profile duplicates and validation issues were creating bad data in Claims MDM.",
    actions: [
      "Triaged SNOW tickets with the Domino tool.",
      "Performed merge and unmerge operations on profiles.",
      "Queried coverage data in Databricks and fixed pipeline discrepancies.",
    ],
    tools: ["ServiceNow", "Domino", "Databricks"],
    tags: ["MDM", "Databricks", "ServiceNow", "Data Quality"],
    groups: ["MDM"],
    metric: null,
    diagram: "pipeline",
    diagramSteps: ["SNOW ticket", "Merge / unmerge", "Clean profile"],
    diagramAlt: "Diagram: a SNOW ticket leads to a merge or unmerge operation, which produces a clean profile.",
    before: "duplicate profiles",
    after: "1 golden record",
  },
  {
    slug: "airline-review-mining",
    title: "Airline Review Mining (TripAdvisor)",
    year: "2020 – 2021",
    role: "Cleveland State University · Research Associate",
    context: "Academic research using flight review data from TripAdvisor.",
    problem: "Understand flight review patterns from unstructured web data.",
    actions: [
      "Scraped TripAdvisor flight reviews.",
      "Stored and queried the data with SQL.",
      "Cleaned and analyzed it with Python (pandas, NumPy, SciPy).",
    ],
    tools: ["Python", "SQL", "Web Scraping"],
    tags: ["Python", "Web Scraping", "SQL", "Research"],
    groups: ["Research"],
    metric: null,
    diagram: "pipeline",
    diagramSteps: ["Scrape", "SQL", "Python"],
    diagramAlt: "Diagram: reviews are scraped from the web, queried with SQL, then cleaned and analyzed in Python.",
    before: "unstructured web reviews",
    after: "clean, queryable data",
  },
  {
    slug: "customer-dashboards-call-analytics-domo",
    title: "Customer Dashboards and Call Analytics in DOMO",
    year: "2021",
    role: "DMI · Data Analyst",
    context: "Dashboards and reporting for a customer data center.",
    problem: "Business analysts and the customer team needed shared insight into call data.",
    actions: ["Designed customer-facing DOMO dashboards.", "Built detailed inbound/outbound call reports."],
    tools: ["DOMO"],
    tags: ["DOMO", "Dashboards", "Analytics"],
    groups: ["Dashboards"],
    metric: null,
    diagram: "pipeline",
    diagramSteps: ["Call data", "DOMO", "Insights"],
    diagramAlt: "Diagram: inbound and outbound call data flows into DOMO and comes out as customer insights.",
    before: "raw call logs",
    after: "customer dashboards",
  },
  {
    slug: "bill-of-materials-product-data-models",
    title: "Bill of Materials and Product Data Models",
    year: "2016 – 2018",
    role: "Flex · Junior Engineer (Data Analyst)",
    context: "Product data analysis in a manufacturing setting.",
    problem: "Departments needed reliable product data to design Bills of Material.",
    actions: [
      "Analyzed product data to design BOMs.",
      "Built data models with Power Pivot and DAX.",
      "Presented dashboards to departments.",
    ],
    tools: ["Power Pivot", "DAX"],
    tags: ["Power Pivot", "DAX", "Data Modeling"],
    groups: [],
    metric: null,
    diagram: "pipeline",
    diagramSteps: ["Product data", "Data model", "BOM"],
    diagramAlt: "Diagram: product data feeds a data model, which supports the bill of materials.",
    before: "scattered product data",
    after: "modeled BOM data",
  },
];
