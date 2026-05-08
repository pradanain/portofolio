import type { ImageMetadata } from "astro";

import logoDescent from "@/assets/logos/logo-descent-stis.webp";
import logoPkl from "@/assets/logos/logo-pkl-62.webp";
import logoStis62 from "@/assets/logos/logo-stis-62.webp";
import logoDn63 from "@/assets/logos/logo-dn-63.webp";
import logoKomnet from "@/assets/logos/logo-komnet.webp";

export type OrganizationExperience = {
  organization: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  skills: string[];
  logo: ImageMetadata;
};

export const organizations: OrganizationExperience[] = [
  {
    organization: "Data Science Enthusiast (DESCENT) STIS",
    role: "Chairman",
    period: "Nov 2022 - Oct 2024",
    location: "Politeknik Statistika STIS",
    summary:
      "Served as Chairman, responsible for coordinating the planning, execution, and evaluation of activities.",
    highlights: [
      "Coordinated across student organizations to support activity promotion.",
      "Supported the execution of activities to ensure they run as planned."
    ],
    skills: ["Leadership", "Team Management", "Program Development"],
    logo: logoDescent
  },
  {
    organization: "Field Work Practice (PKL) D-IV STIS 62",
    role: "Coordinator of Data Collection System Division",
    period: "Oct 2022 - Jul 2023",
    location: "Politeknik Statistika STIS",
    summary:
      "Led the development of digital data collection infrastructure for the field work practice program.",
    highlights: [
      "Prepared an Android-based data collection application (CAPI).",
      "Designed questionnaires compatible with the CAPI system.",
      "Prepared servers and supporting applications for data collection.",
      "Developed a monitoring system for the data collection process."
    ],
    skills: ["Technical Coordination", "Data Systems", "Problem Solving"],
    logo: logoPkl
  },
  {
    organization: "Batch Management STIS 62",
    role: "Vice Chairman of D-IV Statistical Computing",
    period: "Nov 2021 - Nov 2022",
    location: "Politeknik Statistika STIS",
    summary:
      "Represented the Statistical Computing study program in the batch management and strengthened academic involvement.",
    highlights: [
      "Bridged academic needs and cross-class communication.",
      "Encouraged batch collaboration and cohesion.",
      "Managed the IT Division in building the batch information system."
    ],
    skills: ["Leadership", "Coordination", "Communication"],
    logo: logoStis62
  },
  {
    organization:
      "63rd Anniversary Committee of AIS/STIS/Politeknik Statistika STIS",
    role: "General Affairs Division",
    period: "Sep 2021 - Sep 2022",
    location: "Politeknik Statistika STIS",
    summary:
      "Supported the smooth running of the Anniversary celebration through administration and logistics management.",
    highlights: [
      "Managed administrative tasks and cross-division coordination.",
      "Handled logistics and event resource needs.",
      "Supported activity operations according to plan and schedule."
    ],
    skills: ["Administration", "Logistics", "Coordination"],
    logo: logoDn63
  },
  {
    organization: "Komputasi.net (Komnet) STIS",
    role: "Coordinator of Training Division",
    period: "May 2021 - May 2022",
    location: "Politeknik Statistika STIS",
    summary:
      "Managed training programs to improve members' technical skills in IT and data.",
    highlights: [
      "Compiled training agendas and technical skill development.",
      "Coordinated the execution of classes and practice sessions."
    ],
    skills: ["Training Programs", "Class Management", "Technical"],
    logo: logoKomnet
  }
];
