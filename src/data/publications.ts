export type Publication = {
  title: string;
  platform: string;
  year: string;
  link: string;
  summary?: string;
};

export const publications: Publication[] = [
  {
    title:
      "Improving the Capability of BPK Recommendation Follow-up by the Main Inspectorate of BPS RI through Information System Development",
    platform: "Seminar Nasional Official Statistics · 8 Nov 2024",
    year: "2024",
    link: "https://prosiding.stis.ac.id/index.php/semnasoffstat/article/view/2241",
    summary:
      "Membahas pengembangan sistem informasi untuk menutup celah proses tindak lanjut rekomendasi BPK, termasuk akses terkontrol dan dokumentasi terpusat. Evaluasi dilakukan menggunakan black box testing dan Computer System Usability Questionnaire (CSUQ) dengan hasil kepuasan pengguna yang tinggi.",
  },
  {
    title: "Sistem Informasi Tindak Lanjut Rekomendasi BPK Inspektorat Utama",
    platform: "Hak Cipta · EC00202430537 · Diterbitkan 4 Mar 2024",
    year: "2024",
    link: "https://e-hakcipta.dgip.go.id/legal/c/MWMyNWM4OTM4M2ZlYWM1N2MzZDZjYTE4NmNkYWMwODQK",
    summary:
      "Sistem informasi untuk mendukung tindak lanjut rekomendasi BPK di Inspektorat Utama BPS, karena dashboard lama tidak mencakup proses end-to-end, akses terbatas, dan belum memiliki penyimpanan dokumentasi terpusat. Dikembangkan dengan metode iteratif, diuji black box, dan dievaluasi CSUQ dengan hasil fungsi sesuai serta kepuasan pengguna tinggi.",
  },
];
