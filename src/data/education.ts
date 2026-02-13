export type Education = {
  school: string;
  program: string;
  period: string;
  description: string;
  logo: string;
  url?: string;
};

export const education: Education[] = [
  {
    school: "SMA Negeri 1 Kendal",
    program: "MIPA",
    period: "2016 - 2019",
    description: "Fokus pada matematika, sains, dan penguatan dasar analitis.",
    logo: "/logos/logo-sman-1-kendal.jpg",
  },
  {
    school: "Politeknik Statistika STIS",
    program: "D-IV Komputasi Statistik",
    period: "2020 - 2024",
    description:
      "Konsentrasi pada data engineering, statistik terapan, dan pengembangan aplikasi.",
    logo: "/logos/logo-stis.png",
  },
];
