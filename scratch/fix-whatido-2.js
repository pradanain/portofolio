import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/components/sections/WhatIDo.astro");
let content = fs.readFileSync(filePath, "utf-8");

content = content.replace("const { services } = data;", "const services = isEn ? servicesEn : servicesId;");

fs.writeFileSync(filePath, content);
