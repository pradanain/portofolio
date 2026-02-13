export type Training = {
  provider: string;
  program: string;
  year: string;
  skills: string[];
  logo: string;
};

export const trainings: Training[] = [
  {
    provider: "Developer Student Club ITB",
    program: "Web Development Bootcamp",
    year: "2020",
    skills: ["Frontend", "Team Collaboration", "UI Fundamentals"],
    logo: "/logos/dsc-itb.svg"
  },
  {
    provider: "Dicoding",
    program: "Belajar Membangun Aplikasi Web",
    year: "2021",
    skills: ["JavaScript", "REST API", "Deployment"],
    logo: "/logos/dicoding.svg"
  },
  {
    provider: "Laskar AI",
    program: "Data Engineering Track",
    year: "2022",
    skills: ["ETL", "Data Modeling", "Cloud Basics"],
    logo: "/logos/laskar-ai.svg"
  }
];
