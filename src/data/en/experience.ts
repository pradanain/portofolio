import type { ImageMetadata } from "astro";

import logoBps from "@/assets/logos/logo-bps.webp";
import logoIclass from "@/assets/logos/logo-iclass.webp";
import logoPilihJurusan from "@/assets/logos/logo-pilih-jurusan.webp";

export type Experience = {
  company: string;
  role: string;
  employmentType: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tech: string[];
  logo: ImageMetadata;
};

export const experiences: Experience[] = [
  {
    company: "Badan Pusat Statistik (BPS)",
    role: "First Expert Computer Administrator",
    employmentType: "Full-time",
    period: "Dec 2024 - Present",
    location: "Bulungan, North Kalimantan, Indonesia · On-site",
    summary:
      "Appointed as CPNS as of December 1, 2024 (PNS as of December 1, 2025) and joined the IPDS (Statistical Data Processing and Dissemination Integration) team.",
    highlights: [
      "Maintaining and supporting office IT infrastructure.",
      "Compiling and publishing statistical reports based on processed data.",
      "Providing technical assistance and Sectoral Statistics guidance to external stakeholders.",
      "Collaborating with ministries/agencies and local governments to ensure accurate and coordinated data dissemination."
    ],
    tech: [
      "Data Engineering",
      "Public Speaking",
      "IT Support",
      "Sectoral Statistics"
    ],
    logo: logoBps
  },
  {
    company: "iClass",
    role: "Full-stack Developer",
    employmentType: "Part-time",
    period: "Feb 2023 - Jul 2023",
    location: "Remote",
    summary:
      "Contributed to the development of an online learning platform for Polstat STIS selection preparation, including learning features, quizzes, and class management.",
    highlights: [
      "Developed frontend and backend features using Laravel and Tailwind CSS.",
      "Fixed bugs and improved performance for a more stable learning experience.",
      "Maintained code quality and assisted user support regarding technical issues."
    ],
    tech: ["Laravel", "Tailwind CSS", "Full-stack"],
    logo: logoIclass
  },
  {
    company: "Pilih Jurusan",
    role: "Software Engineer in Test",
    employmentType: "Internship",
    period: "Feb 2021 - May 2021",
    location: "Remote",
    summary:
      "Focused on test automation to ensure the pilihjurusan.id website features run smoothly and according to user flow.",
    highlights: [
      "Created scenarios and test cases based on user flows.",
      "Built automated testing scripts using Selenium Python.",
      "Documented bugs and collaborated with the development team for fixes.",
      "Optimized scripts to be more stable and efficient."
    ],
    tech: ["Selenium", "Python", "Automation Testing"],
    logo: logoPilihJurusan
  }
];
