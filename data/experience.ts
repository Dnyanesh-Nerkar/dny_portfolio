export type Role = {
  id: string;
  title: string;
  company: string;
  location: string;
  start: string;
  end: string | "Present";
  group?: "infosys";
  category: ("MDM" | "Analytics" | "Research")[];
  bullets: string[];
  tools: string[];
};

export const roles: Role[] = [
  {
    id: "cigna-advisor",
    title: "Data Management Strategy and Governance Advisor",
    company: "The Cigna Group",
    location: "Bloomfield, CT",
    start: "2026-03",
    end: "Present",
    category: ["MDM"],
    bullets: [
      "Leading MDM teams on the producer side and working with the Client MDM platform.",
      "Leading the Reltio to Informatica migration to build enterprise-level MDM systems.",
      "Stabilizing the Informatica platform for producer data and running parity checks across all attributes.",
      "Setting up dashboards for downstream consumers on the Databricks platform.",
      "Using Cursor AI to join complex data to producer and restore functionality from Reltio in the new MDM.",
      "Working with AI teams to set up an Agentic AI solution for the entire MDM.",
    ],
    tools: ["Informatica", "Reltio", "Databricks", "Cursor AI", "Agentic AI"],
  },
  {
    id: "infosys-senior",
    title: "Senior Associate Consultant",
    company: "Infosys Ltd",
    location: "Hartford, CT",
    start: "2025-01",
    end: "2026-03",
    group: "infosys",
    category: ["MDM"],
    bullets: [
      "Trained beginners on MDM producer and customer projects.",
      "Led MDM producer work: data quality, governance checks, weekly and monthly reports.",
      "Evaluated Informatica as a new MDM tool from an operations perspective.",
      "Ran parity checks for Individual and Organization profiles and configured match rules in Informatica.",
    ],
    tools: ["Informatica", "MDM", "Data Governance"],
  },
  {
    id: "infosys-associate",
    title: "Associate Consultant",
    company: "Infosys Ltd",
    location: "Hartford, CT",
    start: "2024-01",
    end: "2024-12",
    group: "infosys",
    category: ["MDM"],
    bullets: [
      "Used TOAD Data Point and Databricks for queries, data quality checks and data profiling.",
      "Ran data integrity checks through reports in the Reltio MDM tool.",
    ],
    tools: ["TOAD Data Point", "Databricks", "Reltio"],
  },
  {
    id: "infosys-analyst",
    title: "Associate Business Analyst",
    company: "Infosys Ltd",
    location: "Hartford, CT",
    start: "2021-11",
    end: "2023-12",
    group: "infosys",
    category: ["MDM"],
    bullets: [
      "Worked across MDM producer, MDM client and customer domains, analyzing ServiceNow (SNOW) tickets and acting on them.",
      "Performed merge and unmerge operations on customer and insurance profiles.",
      "Used the Domino tool to triage SNOW tickets and resolve data validation issues in Claims MDM.",
      "Queried medical insurance coverage data in Databricks and fixed pipeline discrepancies.",
    ],
    tools: ["ServiceNow", "Domino", "Databricks"],
  },
  {
    id: "vetro",
    title: "Data Analyst",
    company: "Vetro Technologies",
    location: "Ohio",
    start: "2021-05",
    end: "2021-11",
    category: ["Analytics"],
    bullets: [
      "Built Tableau reports for senior management covering internal and external data.",
      "Wrote SOPs for reports to maintain data quality and well-profiled data.",
      "Used SQL extensively to join and retrieve data for reporting.",
    ],
    tools: ["Tableau", "SQL"],
  },
  {
    id: "dmi",
    title: "Data Analyst",
    company: "DMI",
    location: "Cincinnati, Ohio",
    start: "2021-02",
    end: "2021-05",
    category: ["Analytics"],
    bullets: [
      "Designed and maintained customer dashboards in DOMO.",
      "Produced detailed inbound/outbound call reports for a customer data center.",
      "Bridged business analysts and the customer team with dashboard-based insights.",
    ],
    tools: ["DOMO"],
  },
  {
    id: "csu",
    title: "Research Associate",
    company: "Cleveland State University",
    location: "Cleveland, OH",
    start: "2020-06",
    end: "2021-02",
    category: ["Research"],
    bullets: [
      "Scraped web data and queried it with SQL.",
      "Cleaned data in Python with NumPy, pandas and SciPy.",
      "Worked on flight review data from TripAdvisor.",
    ],
    tools: ["Python", "SQL", "Web Scraping"],
  },
  {
    id: "flex",
    title: "Junior Engineer (Data Analyst)",
    company: "Flex",
    location: "India",
    start: "2016-03",
    end: "2018-06",
    category: ["Analytics"],
    bullets: [
      "Produced periodic customized insights for management.",
      "Analyzed product data to design Bills of Material (BOM) and built data models with Power Pivot and DAX.",
      "Delivered timely, accurate reports and presented dashboards to departments.",
    ],
    tools: ["Power Pivot", "DAX"],
  },
];
