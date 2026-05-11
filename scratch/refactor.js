import fs from "fs";
import path from "path";

const componentsDir = path.join(process.cwd(), "src/components/sections");

const files = fs.readdirSync(componentsDir).filter(f => f.endsWith(".astro"));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, "utf-8");

  // Remove explicit data imports
  content = content.replace(/import \{.*?\} from "@\/data\/.*?";\n/g, "");

  // Replace `const isEn = Astro.url.pathname.includes('/en');`
  // with the new standard header
  const headerReplacement = `import { getLangFromUrl, getPortfolioData } from "@/lib/data";

interface Props {
  lang?: "id" | "en";
}

const lang = Astro.props.lang || getLangFromUrl(Astro.url);
const isEn = lang === "en";
const data = getPortfolioData(lang);
`;

  // We need to inject the import at the top of the script setup.
  if (content.includes("const isEn = Astro.url.pathname.includes('/en');")) {
    content = content.replace("const isEn = Astro.url.pathname.includes('/en');", "");
    content = content.replace("---\n", "---\n" + headerReplacement);
    
    // Replace variable assignments with data access
    content = content.replace(/const experiences = isEn \? experiencesEn : experiencesId;/g, "const { experiences } = data;");
    content = content.replace(/const education = isEn \? educationEn : educationId;/g, "const { education } = data;");
    content = content.replace(/const organizations = isEn \? organizationsEn : organizationsId;/g, "const { organizations } = data;");
    content = content.replace(/const publications = isEn \? publicationsEn : publicationsId;/g, "const { publications } = data;");
    content = content.replace(/const trainings = isEn \? trainingsEn : trainingsId;/g, "const { trainings } = data;");
    content = content.replace(/const featuredProjects = isEn \? featuredProjectsEn : featuredProjectsId;/g, "const { featuredProjects } = data;");
    content = content.replace(/const projects = isEn \? projectsEn : projectsId;/g, "const { projects } = data;");
    
    fs.writeFileSync(filePath, content);
    console.log(`Refactored ${file}`);
  }
}
