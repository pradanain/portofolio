import type { ImageMetadata } from "astro";

import logoDicoding from "@/assets/logos/logo-dicoding.webp";
import logoLaskarAi from "@/assets/logos/logo-laskar-ai.webp";
import logoGdsc from "@/assets/logos/logo-gdsc-itb.webp";
import logoCfds from "@/assets/logos/logo-cfds-progate.webp";

export type Training = {
  provider: string;
  program: string;
  year: string;
  skills: string[];
  logo: ImageMetadata;
  url?: string;
};

export const trainings: Training[] = [
  {
    provider: "Dicoding",
    program: "Dicoding Learning Path",
    year: "2022 - Present",
    skills: ["Frontend", "Backend", "Data Science", "Machine Learning"],
    logo: logoDicoding
  },
  {
    provider: "Laskar AI",
    program: "AI Engineer Path",
    year: "Feb 2025 - Jul 2025",
    skills: [
      "Machine Learning",
      "Data Science",
      "Python",
      "AI Engineering",
      "Data Visualization"
    ],
    logo: logoLaskarAi
  },
  {
    provider: "Google Developer Student Club (GDSC) ITB",
    program: "GDSC Institut Teknologi Bandung Bootcamp",
    year: "2021",
    skills: ["GIT", "Android", "Data Science"],
    logo: logoGdsc
  },
  {
    provider: "Center for Digital Society (CfDS) UGM",
    program: "CfDS Universitas Gajah Mada x Progate Bootcamp",
    year: "2020",
    skills: ["Programming Fundamentals", "HTML", "CSS", "JavaScript"],
    logo: logoCfds
  }
];
