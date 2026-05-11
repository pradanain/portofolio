import fs from "fs";
import path from "path";

const componentsDir = path.join(process.cwd(), "src/components/sections");
const files = [
  "Education.astro",
  "Experience.astro",
  "Hero.astro",
  "Organizations.astro",
  "Projects.astro",
  "Publications.astro",
  "Trainings.astro",
  "WhatIDo.astro" // WhatIDo was slightly fixed but let's just make sure.
];

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, "utf-8");

  // Remove any remaining data imports
  content = content.replace(/import \{.*?\} from "@\/data\/.*?";\r?\n/g, "");

  // Insert the header correctly right after the imports (or specifically after the ui import)
  if (!content.includes('import { getLangFromUrl, getPortfolioData }')) {
    const replacement = `import { getLangFromUrl, getPortfolioData } from "@/lib/data";

interface Props {
  lang?: "id" | "en";
}

const lang = Astro.props.lang || getLangFromUrl(Astro.url);
const isEn = lang === "en";
const data = getPortfolioData(lang);
`;
    // Find `import { ... } from "@/lib/ui";`
    content = content.replace(/import \{[\s\S]*?\} from "@\/lib\/ui";\r?\n/, match => match + "\n" + replacement);
    // If not found (e.g. Hero doesn't import from ui), replace `import { Image } from "astro:assets";`
    if (!content.includes('import { getLangFromUrl, getPortfolioData }')) {
      content = content.replace(/import \{ Image \} from "astro:assets";\r?\n/, match => match + "\n" + replacement);
    }
  }

  // Double check that { services } = data is correct for WhatIDo
  if (file === "WhatIDo.astro" && !content.includes("const { services } = data;")) {
    content = content.replace(/const services = isEn \? servicesEn : servicesId;/g, "const { services } = data;");
  }

  fs.writeFileSync(filePath, content);
  console.log("Fixed " + file);
}
