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
    provider: "Dicoding",
    program: "Learning Path Dicoding",
    year: "2022 - Sekarang",
    skills: ["Frontend", "Backend", "Data Science", "Machine Learning"],
    logo: "/logos/logo-dicoding.jpg",
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
      "Data Visualization",
    ],
    logo: "/logos/logo-laskar-ai.jpg",
  },
  {
    provider: "Google Developer Student Club (GDSC) ITB",
    program: "GDSC Institut Teknologi Bandung Bootcamp",
    year: "2021",
    skills: ["GIT", "Android", "Data Science"],
    logo: "/logos/logo-gdsc-itb.png",
  },
  {
    provider: "Center for Digital Society (CfDS) UGM",
    program: "CfDS Universitas Gajah Mada x Progate Bootcamp",
    year: "2020",
    skills: ["Programming Fundamentals", "HTML", "CSS", "JavaScript"],
    logo: "/logos/logo-cfds-progate.jpg",
  },
];
