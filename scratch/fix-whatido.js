import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/components/sections/WhatIDo.astro");
let content = fs.readFileSync(filePath, "utf-8");

// Add bentoCardClass
content = content.replace("  cardClass,", "  bentoCardClass,\n  cardClass,");

// Update cardClass to bentoCardClass
content = content.replace(/class=\{cardClass\([\s\S]*?"group h-full overflow-hidden border-border\/60 bg-card\/70 transition-all duration-300 hover:-translate-y-2 hover:bg-card hover:shadow-\[0_8px_30px_rgb\(0,0,0,0.12\)\] dark:hover:shadow-\[0_8px_30px_rgba\(255,255,255,0.05\)\] reveal-on-scroll"[\s\S]*?\)\}/, 'class={bentoCardClass("h-full")}');

// Setup i18n
const headerReplacement = `import { getLangFromUrl, getPortfolioData } from "@/lib/data";

interface Props {
  lang?: "id" | "en";
}

const lang = Astro.props.lang || getLangFromUrl(Astro.url);
const isEn = lang === "en";
const data = getPortfolioData(lang);
`;
content = content.replace("const isEn = Astro.url.pathname.includes('/en');", headerReplacement);

content = content.replace(/const services = isEn \? servicesEn : servicesId;/g, "const { services } = data;");

fs.writeFileSync(filePath, content);
console.log("Fixed WhatIDo.astro");
