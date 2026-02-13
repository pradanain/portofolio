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
      "Membahas pengembangan sistem informasi untuk menutup celah proses tindak lanjut rekomendasi BPK, termasuk akses terkontrol dan dokumentasi terpusat. Evaluasi dilakukan menggunakan black box testing dan Computer System Usability Questionnaire (CSUQ) dengan hasil kepuasan pengguna yang tinggi."
  }
];
