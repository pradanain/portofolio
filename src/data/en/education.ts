import type { ImageMetadata } from "astro";

import logoStis from "@/assets/logos/logo-stis.webp";
import logoSman from "@/assets/logos/logo-sman-1-kendal.webp";

export type Education = {
  school: string;
  program: string;
  period: string;
  description: string;
  gpa?: string;
  logo: ImageMetadata;
  url?: string;
};

export const education: Education[] = [
  {
    school: "Politeknik Statistika STIS",
    program: "D-IV Statistical Computing",
    period: "2020 - 2024",
    description:
      "Concentrated on data engineering, applied statistics, and application development.",
    gpa: "GPA: 3.71 (Cum Laude)",
    logo: logoStis
  },
  {
    school: "SMA Negeri 1 Kendal",
    program: "Science and Mathematics",
    period: "2016 - 2019",
    description: "Focused on mathematics, science, and strengthening analytical foundations.",
    logo: logoSman
  }
];
