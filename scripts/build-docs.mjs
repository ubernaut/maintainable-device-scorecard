import { copyFileSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const docs = join(root, "docs");

rmSync(docs, { recursive: true, force: true });
mkdirSync(docs, { recursive: true });

for (const file of ["index.html", "questions.js"]) {
  copyFileSync(join(root, file), join(docs, file));
}

writeFileSync(join(docs, ".nojekyll"), "");

console.log("Built static site into docs/");
