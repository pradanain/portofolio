import type { ImageMetadata } from "astro";

import dirgcGui from "@/assets/screenshots/dirgc-gui.webp";
import sigapScreenshot from "@/assets/screenshots/sigap-6502.webp";
import tlBpkScreenshot from "@/assets/screenshots/tl-bpk.webp";
import spbeScreenshot from "@/assets/screenshots/spbe-bps.webp";
import spmbScreenshot from "@/assets/screenshots/spmb-stis.webp";
import sigmaScreenshot from "@/assets/screenshots/sigma-stis.webp";

export type ProjectCategory = "Web" | "Data" | "Automation" | "Mobile";

export type Project = {
  title: string;
  description: string;
  impact?: string;
  category: ProjectCategory;
  stack: string[];
  image?: ImageMetadata;
  demoUrl?: string;
  repoUrl?: string;
};

export const featuredProjects: Project[] = [
  {
    title: "DIRGC - GC Form Automation",
    description:
      "Playwright-based CLI for automating GC field inputs from Excel, equipped with monitoring logs. PyQt5 + QFluentWidgets GUI is available for non-terminal users.",
    impact:
      "Reduces manual input with Excel-based automation and centralized logging.",
    category: "Automation",
    stack: ["BPS", "Playwright", "Python", "Excel", "PyQt5", "QFluentWidgets"],
    image: dirgcGui,
    repoUrl: "https://github.com/bpskabbulungan/otomatisasidirgc-6502"
  },
  {
    title: "SIGAP - Attendance Reminder Information System",
    description:
      "Facilitates BPS Bulungan Regency in monitoring and managing WhatsApp Bot attendance reminders through a centralized dashboard, complete with automated scheduling, manual adjustments, and bot connection monitoring.",
    impact:
      "Bot control and automated scheduling in a centralized dashboard.",
    category: "Automation",
    stack: ["BPS", "Web Dashboard", "WhatsApp Bot", "Scheduling"],
    image: sigapScreenshot,
    repoUrl: "https://github.com/bpskabbulungan/sigap-6502"
  },
  {
    title: "TL BPK - BPK Recommendation Follow-up Information System",
    description:
      "A system to manage the BPK recommendation follow-up process end-to-end with controlled access and centralized documentation. Evaluated using black box testing and CSUQ.",
    impact:
      "Organizes recommendation tracking with centralized documentation and controlled access.",
    category: "Web",
    stack: ["BPS", "BPK", "Information System", "Workflow", "Audit", "Laravel"],
    image: tlBpkScreenshot,
    repoUrl: "https://github.com/pradanain/tl-bpk-bps"
  },
  {
    title: "SPBE BPS - IT Change Management System",
    description:
      "An integrated information system for planning, proposing, managing, and evaluating SPBE activities according to the Ministry of PAN-RB's change directives, complete with centralized documentation and team collaboration.",
    impact: "Managing IT changes end-to-end according to PAN-RB directives.",
    category: "Web",
    stack: ["BPS", "Information System", "SPBE", "Documentation", "Laravel"],
    image: spbeScreenshot,
    repoUrl: "https://github.com/pradanain/spbe-bps"
  }
];

export const projects: Project[] = [
  {
    title: "SPMB STIS - New Student Admission Selection",
    description:
      "A web application supporting SPMB STIS (hybrid) for participant verification, attendance, uploading invigilator reports, and committee monitoring through search and report downloads.",
    impact:
      "Accelerates verification and SPMB invigilation reporting in a centralized platform.",
    category: "Web",
    stack: ["STIS", "Java", "Spring Boot", "Web", "Entrance Exam"],
    image: spmbScreenshot,
    repoUrl: "https://github.com/pradanain/SPMB-STIS-Java-SpringBoot"
  },
  {
    title: "SIGMA STIS - Student Activity Information System",
    description:
      "An information application for student activities at Politeknik Statistika STIS, covering internal and external activities to increase participation.",
    impact:
      "Facilitates access to activity information and encourages student participation.",
    category: "Mobile",
    stack: ["STIS", "Java", "Android", "Student Activities"],
    image: sigmaScreenshot,
    repoUrl: "https://github.com/pradanain/SIGMA-STIS-AndroidApp"
  }
];
