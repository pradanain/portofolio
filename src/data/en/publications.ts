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
    platform: "Seminar Nasional Official Statistics · Nov 8, 2024",
    year: "2024",
    link: "https://prosiding.stis.ac.id/index.php/semnasoffstat/article/view/2241",
    summary:
      "Discusses the development of an information system to close gaps in the BPK recommendation follow-up process, including controlled access and centralized documentation. Evaluated using black box testing and the Computer System Usability Questionnaire (CSUQ) with high user satisfaction results.",
  },
  {
    title: "Information System for Follow-up on BPK Recommendations of the Main Inspectorate",
    platform: "Copyright · EC00202430537 · Published Mar 4, 2024",
    year: "2024",
    link: "https://e-hakcipta.dgip.go.id/legal/c/MWMyNWM4OTM4M2ZlYWM1N2MzZDZjYTE4NmNkYWMwODQK",
    summary:
      "An information system to support BPK recommendation follow-ups at the Main Inspectorate of BPS, as the old dashboard did not cover end-to-end processes, had limited access, and lacked centralized documentation storage. Developed iteratively, tested via black box, and evaluated with CSUQ, resulting in proper functionality and high user satisfaction.",
  },
];
