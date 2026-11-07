export type Skill = {
  name: string;
  /** Terms searched in role and project text to find where this skill was used. */
  match: string[];
};

export type SkillTable = { table: string; skills: Skill[] };

export const skillTables: SkillTable[] = [
  {
    table: "mdm_governance",
    skills: [
      { name: "Master Data Management", match: ["MDM"] },
      { name: "Data Governance", match: ["governance"] },
      { name: "Data Quality", match: ["data quality", "data integrity", "data validation"] },
      { name: "Data Profiling", match: ["profiling", "well-profiled"] },
      { name: "Match/Merge Rules", match: ["match rules", "merge"] },
      { name: "Parity Checks", match: ["parity"] },
      { name: "Data Migration", match: ["migration"] },
    ],
  },
  {
    table: "platforms",
    skills: [
      { name: "Informatica", match: ["Informatica"] },
      { name: "Reltio", match: ["Reltio"] },
      { name: "Databricks", match: ["Databricks"] },
      { name: "TOAD Data Point", match: ["TOAD"] },
      { name: "ServiceNow (ticket triage)", match: ["ServiceNow", "SNOW"] },
    ],
  },
  {
    table: "query_and_code",
    skills: [
      { name: "SQL", match: ["SQL"] },
      { name: "Python (pandas, NumPy, SciPy)", match: ["Python"] },
      { name: "DAX", match: ["DAX"] },
      { name: "Web Scraping", match: ["scrap"] },
    ],
  },
  {
    table: "bi_dashboards",
    skills: [
      { name: "Tableau", match: ["Tableau"] },
      { name: "DOMO", match: ["DOMO"] },
      { name: "Power Pivot", match: ["Power Pivot"] },
      { name: "Databricks dashboards", match: ["dashboards on", "dashboards for downstream", "Downstream Dashboards"] },
      { name: "Excel reporting", match: [] },
    ],
  },
  {
    table: "ai_tools",
    skills: [
      { name: "Cursor AI", match: ["Cursor AI"] },
      { name: "Agentic AI design (MDM)", match: ["Agentic"] },
      { name: "AI-assisted data engineering", match: ["Cursor AI"] },
    ],
  },
  {
    table: "business",
    skills: [
      { name: "MBA", match: [] },
      { name: "Stakeholder communication", match: ["bridged", "presented"] },
      { name: "SOP writing", match: ["SOP"] },
      { name: "Training and mentoring", match: ["trained"] },
      { name: "Requirements/business analysis", match: ["Business Analyst", "business analysts"] },
    ],
  },
];
