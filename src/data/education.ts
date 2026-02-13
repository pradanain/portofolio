export type Education = {
  school: string;
  program: string;
  period: string;
  description: string;
  logo: string;
};

export const education: Education[] = [
  {
    school: "SMAN 1 Kendal",
    program: "MIPA",
    period: "2016 - 2019",
    description: "Fokus pada matematika, sains, dan penguatan dasar analitis.",
    logo: "/logos/sma1-kendal.svg"
  },
  {
    school: "Politeknik Statistika STIS",
    program: "D-IV Komputasi Statistik",
    period: "2020 - 2024",
    description: "Konsentrasi pada data engineering, statistik terapan, dan pengembangan aplikasi.",
    logo: "/logos/stis.svg"
  }
];
