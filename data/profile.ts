import { basePath } from "@/lib/site";

export const profile = {
  name: "Dnyanesh Vinay Nerkar",
  shortName: "Dnyanesh Nerkar",
  eyebrow: "MDM · DATA GOVERNANCE · ANALYTICS",
  headline: "I turn messy, duplicated data into one source of truth.",
  title: "Data Management Strategy & Governance Advisor",
  company: "The Cigna Group",
  careerStart: "2016-03-01",
  summary:
    "Business professional with a foundation in healthcare, managed mobility services, product lifecycle management and academia. I specialize in Master Data Management: leading producer-side MDM teams, stabilizing enterprise platforms, and making sure the data downstream teams depend on is accurate, governed and trusted. I pair that with strong analytics skills in SQL and dashboard delivery across Tableau, DOMO and Databricks.",
  description:
    "Data Management Strategy & Governance Advisor specializing in Master Data Management, data governance and analytics across healthcare and insurance.",
  // Owner to supply. Any empty link is hidden on the site.
  links: {
    email: "",
    linkedin: "",
    github: "",
    resume: `${basePath}/Dnyanesh_Nerkar_Resume.pdf`,
  },
  industriesTouched: 4,
  platformsLabel: 5,
  degrees: { masters: 3, inProgress: 1 },
  quickFacts: [
    { key: "current_role", value: "Data Management Strategy & Governance Advisor" },
    { key: "employer", value: "The Cigna Group" },
    { key: "focus", value: "MDM, data governance, data quality" },
    { key: "tools", value: "Informatica, Reltio, Databricks, SQL" },
    { key: "now_exploring", value: "Agentic AI for MDM" },
  ],
  pillars: [
    { icon: "shield", title: "Govern", text: "Data quality and governance checks that keep enterprise records trustworthy." },
    { icon: "merge", title: "Unify", text: "Match, merge and MDM migration work that turns duplicates into one record." },
    { icon: "chart", title: "Illuminate", text: "Dashboards and reporting that give downstream teams a clear view of the data." },
  ],
  heroFields: [
    { key: "domain", value: "healthcare" },
    { key: "focus", value: "MDM" },
    { key: "platform", value: "Informatica" },
  ],
  // The messy "duplicates" in the hero. Illustrative, as a nod to match-and-merge.
  heroRecords: [
    { field: "name", value: "D. Nerkar" },
    { field: "title", value: "Data Analyst" },
    { field: "name", value: "Dnyanesh N." },
    { field: "title", value: "MDM Lead" },
    { field: "domain", value: "health_care" },
    { field: "tool", value: "data bricks" },
    { field: "name", value: "NERKAR, DNYANESH" },
    { field: "focus", value: "mdm / gov." },
  ],
  footerJoke: "// merged 8 duplicates, 0 hard feelings",
} as const;

export type Profile = typeof profile;
