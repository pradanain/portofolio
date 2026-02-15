import { withBase } from "@/lib/withBase";

export type OrganizationExperience = {
  organization: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  skills: string[];
  logo: string;
};

export const organizations: OrganizationExperience[] = [
  {
    organization: "Data Science Enthusiast (DESCENT) STIS",
    role: "Ketua",
    period: "Nov 2022 - Okt 2024",
    location: "Politeknik Statistika STIS",
    summary:
      "Menjabat sebagai Ketua, bertanggung jawab mengoordinasikan perencanaan, pelaksanaan, dan evaluasi kegiatan.",
    highlights: [
      "Melakukan koordinasi lintas UKM untuk mendukung promosi kegiatan.",
      "Mendukung pelaksanaan kegiatan agar berjalan sesuai rencana.",
    ],
    skills: ["Leadership", "Manajemen Tim", "Program Development"],
    logo: withBase("logos/logo-descent-stis.jpg"),
  },
  {
    organization: "Praktik Kerja Lapangan (PKL) D-IV STIS 62",
    role: "Koordinator Divisi Sistem Pengumpulan Data (SPD)",
    period: "Okt 2022 - Jul 2023",
    location: "Politeknik Statistika STIS",
    summary:
      "Memimpin pengembangan infrastruktur pengumpulan data digital untuk program praktek kerja lapangan.",
    highlights: [
      "Menyiapkan aplikasi pengumpulan data berbasis Android (CAPI).",
      "Merancang kuesioner yang kompatibel dengan sistem CAPI.",
      "Menyiapkan server dan aplikasi pendukung pengumpulan data.",
      "Mengembangkan sistem monitoring proses pengumpulan data.",
    ],
    skills: ["Koordinasi Teknis", "Sistem Data", "Problem Solving"],
    logo: withBase("logos/logo-pkl-62.png"),
  },
  {
    organization: "Pengurus Angkatan STIS 62",
    role: "Wakil Ketua D-IV Komputasi Statistik",
    period: "Nov 2021 - Nov 2022",
    location: "Politeknik Statistika STIS",
    summary:
      "Mewakili program studi Komputasi Statistik dalam kepengurusan angkatan dan memperkuat keterlibatan akademik.",
    highlights: [
      "Menjembatani kebutuhan akademik dan komunikasi lintas kelas.",
      "Mendorong kolaborasi dan kekompakan angkatan.",
      "Manajemen Divisi IT dalam pembangunan sistem informasi angkatan.",
    ],
    skills: ["Leadership", "Koordinasi", "Komunikasi"],
    logo: withBase("logos/logo-stis-62.jpg"),
  },
  {
    organization:
      "Panitia Dies Natalies ke-63 AIS/STIS/Politeknik Statistika STIS",
    role: "Divisi Umum",
    period: "Sep 2021 - Sep 2022",
    location: "Politeknik Statistika STIS",
    summary:
      "Mendukung kelancaran kegiatan perayaan Dies Natalies melalui pengelolaan administrasi dan logistik.",
    highlights: [
      "Mengelola tugas administratif dan koordinasi lintas divisi.",
      "Menangani logistik dan kebutuhan sumber daya acara.",
      "Mendukung operasional kegiatan sesuai rencana dan jadwal.",
    ],
    skills: ["Administrasi", "Logistik", "Koordinasi"],
    logo: withBase("logos/logo-dn-63.jpg"),
  },
  {
    organization: "Komputasi.net (Komnet) STIS",
    role: "Koordinator Divisi Pelatihan",
    period: "Mei 2021 - Mei 2022",
    location: "Politeknik Statistika STIS",
    summary:
      "Mengelola program pelatihan untuk meningkatkan keterampilan teknis anggota di bidang IT dan data.",
    highlights: [
      "Menyusun agenda pelatihan dan pengembangan skill teknis.",
      "Mengkoordinasikan pelaksanaan kelas dan sesi praktik.",
    ],
    skills: ["Program Pelatihan", "Manajemen Kelas", "Teknis"],
    logo: withBase("logos/logo-komnet.jpg"),
  },
];

