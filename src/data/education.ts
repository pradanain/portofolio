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
    program: "D-IV Komputasi Statistik",
    period: "2020 - 2024",
    description:
      "Konsentrasi pada data engineering, statistik terapan, dan pengembangan aplikasi.",
    gpa: "IPK: 3.71 (Cum Laude)",
    logo: logoStis
  },
  {
    school: "SMA Negeri 1 Kendal",
    program: "MIPA",
    period: "2016 - 2019",
    description: "Fokus pada matematika, sains, dan penguatan dasar analitis.",
    logo: logoSman
  }
];
