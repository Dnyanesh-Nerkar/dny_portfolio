export type Education = {
  id: string;
  school: string;
  location: string;
  degree: string;
  years: string;
  pathYear: string;
  gpa?: string;
  inProgress?: boolean;
};

export const education: Education[] = [
  {
    id: "cu-data-modeling",
    school: "Campbellsville University",
    location: "Louisville, KY",
    degree: "M.S. Data Modeling / Warehousing and Database Administration",
    years: "2026 – 2028 (expected)",
    pathYear: "2028",
    inProgress: true,
  },
  {
    id: "cu-it",
    school: "Campbellsville University",
    location: "Louisville, KY",
    degree: "Master's in Computer / Information Technology Services Administration and Management",
    years: "2025 – 2026",
    pathYear: "2026",
  },
  {
    id: "cu-mba",
    school: "Campbellsville University",
    location: "Louisville, KY",
    degree: "Professional MBA",
    years: "2025",
    pathYear: "2025",
    gpa: "3.9",
  },
  {
    id: "csu-ms",
    school: "Cleveland State University",
    location: "Cleveland, OH",
    degree: "M.S. in Information Systems",
    years: "2020",
    pathYear: "2020",
    gpa: "3.35",
  },
  {
    id: "sppu-bs",
    school: "Savitribai Phule Pune University",
    location: "Pune, India",
    degree: "B.S. in Electronics and Telecommunication",
    years: "2015",
    pathYear: "2015",
    gpa: "3.3",
  },
];
