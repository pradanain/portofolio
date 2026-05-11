import fs from "fs";
import path from "path";

const componentsDir = path.join(process.cwd(), "src/components/sections");
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith(".astro"));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, "utf-8");

  // Remove the old data imports manually
  const importsToRemove = [
    "import { experiences as experiencesId } from \"@/data/experience\";",
    "import { experiences as experiencesEn } from \"@/data/en/experience\";",
    "import { education as educationId } from \"@/data/education\";",
    "import { education as educationEn } from \"@/data/en/education\";",
    "import { organizations as organizationsId } from \"@/data/organizations\";",
    "import { organizations as organizationsEn } from \"@/data/en/organizations\";",
    "import { publications as publicationsId } from \"@/data/publications\";",
    "import { publications as publicationsEn } from \"@/data/en/publications\";",
    "import { trainings as trainingsId } from \"@/data/trainings\";",
    "import { trainings as trainingsEn } from \"@/data/en/trainings\";",
    "import { featuredProjects as featuredProjectsId } from \"@/data/projects\";",
    "import { featuredProjects as featuredProjectsEn } from \"@/data/en/projects\";",
    "import { projects as projectsId } from \"@/data/projects\";",
    "import { projects as projectsEn } from \"@/data/en/projects\";",
    "import { services as servicesId } from \"@/data/what-i-do\";",
    "import { services as servicesEn } from \"@/data/en/what-i-do\";"
  ];
  
  for (const imp of importsToRemove) {
    content = content.replace(imp + "\n", "");
    content = content.replace(imp + "\r\n", "");
  }

  // Insert headerReplacement if not already present
  if (!content.includes("getLangFromUrl") && !content.includes("data = getPortfolioData")) {
    const headerReplacement = `import { getLangFromUrl, getPortfolioData } from "@/lib/data";

interface Props {
  lang?: "id" | "en";
}

const lang = Astro.props.lang || getLangFromUrl(Astro.url);
const isEn = lang === "en";
const data = getPortfolioData(lang);
`;
    content = content.replace("---\n", "---\n" + headerReplacement);
    content = content.replace("---\r\n", "---\r\n" + headerReplacement);
  }
  
  // WhatIDo has services which I didn't add to getPortfolioData
  // Let's add WhatIDo logic in data.ts later.
  content = content.replace(/const services = isEn \? servicesEn : servicesId;/g, "const { services } = data;");

  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${file}`);
}
