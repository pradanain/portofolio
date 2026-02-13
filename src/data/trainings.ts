export type Training = {
  provider: string;
  program: string;
  year: string;
  skills: string[];
  logo: string;
  url?: string;
};

export const trainings: Training[] = [
  {
    provider: "Google Developer Student Club ITB",
    program: "Bootcamp GDSC ITB",
    year: "2020",
    skills: ["GIT", "Android", "Data Science"],
    logo: "/logos/logo-gdsc-itb.png"
  },
  {
    provider: "Dicoding",
    program: "Learning Path Dicoding",
    year: "2022 - Sekarang",
    skills: ["Frontend", "Backend", "Data Science", "Machine Learning"],
    logo: "/logos/logo-dicoding.png"
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
    logo: "/logos/logo-laskar-ai.png"
  }
];
