import { experiences as experiencesId } from "@/data/experience";
import { experiences as experiencesEn } from "@/data/en/experience";
import { projects as projectsId, featuredProjects as featuredProjectsId } from "@/data/projects";
import { projects as projectsEn, featuredProjects as featuredProjectsEn } from "@/data/en/projects";
import { education as educationId } from "@/data/education";
import { education as educationEn } from "@/data/en/education";
import { organizations as organizationsId } from "@/data/organizations";
import { organizations as organizationsEn } from "@/data/en/organizations";
import { publications as publicationsId } from "@/data/publications";
import { publications as publicationsEn } from "@/data/en/publications";
import { trainings as trainingsId } from "@/data/trainings";
import { trainings as trainingsEn } from "@/data/en/trainings";

export type Lang = "id" | "en";

export function getLangFromUrl(url: URL): Lang {
  return url.pathname.includes('/en') ? 'en' : 'id';
}

export function getPortfolioData(lang: Lang) {
  const isEn = lang === "en";
  return {
    experiences: isEn ? experiencesEn : experiencesId,
    projects: isEn ? projectsEn : projectsId,
    featuredProjects: isEn ? featuredProjectsEn : featuredProjectsId,
    education: isEn ? educationEn : educationId,
    organizations: isEn ? organizationsEn : organizationsId,
    publications: isEn ? publicationsEn : publicationsId,
    trainings: isEn ? trainingsEn : trainingsId,
  };
}
