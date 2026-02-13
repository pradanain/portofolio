export type Experience = {
  company: string;
  role: string;
  employmentType: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tech: string[];
  logo: string;
};

export const experiences: Experience[] = [
  {
    company: "Badan Pusat Statistik (BPS)",
    role: "Pranata Komputer Ahli Pertama",
    employmentType: "Purnawaktu",
    period: "Des 2024 - Saat ini",
    location: "Bulungan, Kalimantan Utara, Indonesia · Di lokasi",
    summary:
      "Diangkat sebagai PNS per 1 Desember 2024 (ikatan dinas 4 tahun Politeknik Statistika STIS) dan bergabung dalam tim IPDS (Integration of Processing and Disseminating Statistics).",
    highlights: [
      "Menjaga dan mendukung infrastruktur TI kantor.",
      "Menyusun dan mempublikasikan laporan statistik berbasis data yang telah diproses.",
      "Memberikan asistensi teknis dan pendampingan Statistik Sektoral kepada stakeholder eksternal.",
      "Kolaborasi dengan K/L dan pemda untuk memastikan diseminasi data yang akurat dan terkoordinasi."
    ],
    tech: ["Data Engineering", "Public Speaking", "IT Support", "Sectoral Statistics"],
    logo: "/logos/bps.svg"
  },
  {
    company: "iClass",
    role: "Full-stack Developer",
    employmentType: "Paruh Waktu",
    period: "Feb 2023 - Jul 2023",
    location: "Jarak jauh",
    summary:
      "Berkontribusi pada pengembangan platform pembelajaran online untuk persiapan seleksi Polstat STIS, mencakup fitur pembelajaran, kuis, dan manajemen kelas.",
    highlights: [
      "Mengembangkan fitur frontend dan backend menggunakan Laravel dan Tailwind CSS.",
      "Memperbaiki bug dan meningkatkan performa untuk pengalaman belajar yang lebih stabil.",
      "Menjaga kualitas kode dan membantu dukungan pengguna terkait isu teknis."
    ],
    tech: ["Laravel", "Tailwind CSS", "Full-stack"],
    logo: "/logos/iclass.svg"
  },
  {
    company: "Pilih Jurusan",
    role: "Software Engineer in Test",
    employmentType: "Magang",
    period: "Feb 2021 - Mei 2021",
    location: "Jarak jauh",
    summary:
      "Fokus pada otomasi pengujian untuk memastikan fitur website pilihjurusan.id berjalan stabil dan sesuai alur pengguna.",
    highlights: [
      "Menyusun skenario dan test case berdasarkan flow pengguna.",
      "Membangun script pengujian otomatis menggunakan Selenium + Python.",
      "Menjalankan regression test untuk fitur baru serta memantau hasil eksekusi.",
      "Mendokumentasikan bug dan berkolaborasi dengan tim dev untuk perbaikan.",
      "Mengoptimalkan script agar lebih stabil, efisien, dan mudah dirawat."
    ],
    tech: ["Selenium", "Python", "Automation Testing"],
    logo: "/logos/pilih-jurusan.svg"
  }
];
