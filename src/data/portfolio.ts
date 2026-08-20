import {
  BarChart3,
  BookOpen,
  Calculator,
  FileCheck2,
  FileSpreadsheet,
  Gauge,
  Handshake,
  Landmark,
  Receipt,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Bongekile Modutwane",
  title: "Junior Financial Accountant | Aspiring SAIPA Professional",
  tagline:
    "I'm a finance professional with hands-on experience across five accounting functions, gained through a rotational programme at Harmony Gold Mining Company. I combine strong technical grounding with an adaptable, fast-learning approach to new systems and environments.",
  summary: [
    "I'm a Junior Financial Accountant based in Johannesburg, currently completing an Advanced Diploma in Accounting Sciences (NQF Level 7) through UNISA and working toward SAIPA professional accreditation.",
    "Between April 2024 and April 2026, I completed a two-year rotational graduate programme at Harmony Gold Mining Company's Randfontein Head Office, moving through Management Accounting, Cost and Management Accounting, Internal Audit (SOX compliance), Taxation, Petty Cash, and SLP reporting within the Sustainability department. This exposure gave me a broad, practical understanding of how finance functions connect across an organisation — from day-to-day cost control to compliance and regulatory reporting.",
    "What I bring to a team is adaptability: in two years I learned five different sets of systems, processes, and stakeholder relationships, and delivered accurate, compliant work in each. I'm now looking for a role where I can apply that foundation, continue building toward my SAIPA accreditation, and grow into a fully qualified accountant.",
  ],
  email: "bmodutwane@outlook.com",
  phone: "068 029 7058",
  location: "Johannesburg, South Africa",
  github: "https://github.com/BongekileF",
  githubHandle: "BongekileF",
  linkedin:
    "https://www.linkedin.com/in/bongekile-modutwane-56923b418?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  cvUrl: "/Bongekile_Modutwane_cv.pdf",
};

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Junior Financial Accountant (Rotational Graduate Programme)",
    company: "Harmony Gold Mining Company",
    period: "Apr 2024 — Apr 2026",
    location: "Randfontein Head Office",
    description:
      "Completed a two-year rotation across five finance functions and Sustainability reporting, building practical experience across operational finance, compliance, and regulatory reporting.",
    highlights: [
      "Management Accounting: assisted with monthly management accounts, budget variance analysis, cost centre reporting, and decision-making packs.",
      "Cost and Management Accounting: tracked production costs, supported cost allocation, and assisted with month-end cost reporting and reconciliations.",
      "Internal Audit (SOX Compliance): supported control testing, reviewed documentation, and helped identify and report control gaps.",
      "Taxation: supported tax documentation, SARS eFiling processes, and compliance with South African tax regulations.",
      "Petty Cash: managed reconciliations and controls, verified transactions, and maintained accurate records for audit purposes.",
      "SLP Reporting: captured and verified Social and Labour Plan data against regulatory requirements and supported mining-sector reporting deadlines.",
      "Successfully transitioned across five departments in two years and built working knowledge of Oracle ERP across multiple finance functions.",
    ],
  },
  {
    role: "Secure Chat Agent",
    company: "First National Bank (FNB)",
    period: "Feb 2023 — Jun 2023",
    location: "South Africa",
    description:
      "Worked in a regulated banking environment, combining customer-facing communication with accuracy and financial information security.",
    highlights: [
      "Handled customer queries through secure digital channels.",
      "Ensured accuracy and compliance when handling sensitive financial and personal information.",
      "Worked to service-level targets for response time and query resolution.",
    ],
  },
  {
    role: "Trainee Manager",
    company: "Shoprite USave",
    period: "Jul 2022 — Dec 2022",
    location: "South Africa",
    description:
      "Gained operational management experience in a high-volume retail environment with a focus on stock, reporting, and store-level controls.",
    highlights: [
      "Gained exposure to retail operations, stock management, and store-level financial controls.",
      "Used SAP ERP for inventory and operational reporting.",
      "Supervised day-to-day store activities as part of management training.",
      "Developed foundational experience in operational cost control.",
    ],
  },
  {
    role: "Finance Intern",
    company: "NUMSA",
    period: "May 2022 — Jun 2022",
    location: "South Africa",
    description:
      "Supported the finance department with general administrative, reporting, and record-keeping tasks.",
    highlights: [
      "Supported general finance administration and reporting tasks.",
      "Gained early exposure to a professional finance office environment.",
      "Assisted with basic financial record-keeping.",
    ],
  },
];

export interface EducationItem {
  qualification: string;
  institution: string;
  period: string;
  status: string;
}

export const education: EducationItem[] = [
  {
    qualification: "Advanced Diploma in Accounting Sciences (NQF Level 7)",
    institution: "University of South Africa (UNISA)",
    period: "Current",
    status: "In Progress",
  },
  {
    qualification: "National Diploma in Financial Management (NQF Level 6)",
    institution: "Tshwane South TVET College",
    period: "Completed",
    status: "Completed",
  },
  {
    qualification: "Introduction to Project Management",
    institution: "National School of Government",
    period: "Completed",
    status: "Completed",
  },
];

export interface CertificationItem {
  name: string;
  status: string;
}

export const certifications: CertificationItem[] = [
  { name: "Google AI Essentials Professional Certificate", status: "Completed" },
  { name: "Unit Standard 114050 — Workplace Training Assessment", status: "Completed" },
  { name: "SAIPA Professional Accreditation", status: "In Progress" },
];

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export const technicalSkills: Skill[] = [
  { name: "Oracle ERP (Harmony Gold)", icon: Landmark },
  { name: "SAP ERP (Shoprite)", icon: Gauge },
  { name: "Advanced Microsoft Excel", icon: FileSpreadsheet },
  { name: "SARS eFiling", icon: Calculator },
  { name: "Financial reporting & reconciliations", icon: BarChart3 },
  { name: "Cost and management accounting", icon: Receipt },
  { name: "SOX internal audit compliance", icon: ShieldCheck },
  { name: "Budgeting & variance analysis", icon: FileCheck2 },
  { name: "Petty cash & internal controls", icon: BookOpen },
];

export const softSkills: Skill[] = [
  { name: "Fast adaptability across five finance functions", icon: Gauge },
  { name: "Attention to detail under deadline pressure", icon: ShieldCheck },
  { name: "Clear stakeholder communication", icon: Handshake },
  { name: "Time management across competing priorities", icon: BarChart3 },
  { name: "Problem-solving in regulatory contexts", icon: Users },
];

export interface ProjectItem {
  title: string;
  description: string;
  tools: string[];
}

export const projects: ProjectItem[] = [
  {
    title: "SLP Reporting — Sustainability Department",
    description:
      "Contributed to Social and Labour Plan reporting for Harmony Gold's Sustainability department, ensuring compliance data was accurately captured and reported in line with regulatory requirements.",
    tools: ["Microsoft Excel", "Oracle ERP"],
  },
  {
    title: "Youth Skills & Enterprise Bridge Programme",
    description:
      "Authored a corporate social investment project proposal designed to bridge youth skills gaps and support small enterprise development, formatted to professional funding-proposal standards.",
    tools: ["Business writing", "Project planning", "Budgeting"],
  },
  {
    title: "SOX Internal Audit Compliance Review",
    description:
      "Supported internal audit processes during the Harmony Gold rotation, assisting with SOX compliance testing and documentation to ensure financial controls met regulatory standards.",
    tools: ["Oracle ERP", "Excel", "Internal audit frameworks"],
  },
  {
    title: "Rand Smart — Personal Finance Content Concept",
    description:
      "Developing a personal finance content concept aimed at improving financial literacy among South Africans through accessible guidance on budgeting, saving, and basic investing.",
    tools: ["Financial literacy communication", "Content planning"],
  },
];

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
