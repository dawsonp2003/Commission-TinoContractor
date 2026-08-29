import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/images/stock");

/** Hero background — excavator and utility trench (Unsplash) */
const heroUrl =
  "https://unsplash.com/photos/GK3GYxaFc-8/download?force=true&w=1920";

await mkdir(outDir, { recursive: true });

const res = await fetch(heroUrl);
if (!res.ok) {
  throw new Error(`Failed to download hero image: ${res.status}`);
}
const buffer = Buffer.from(await res.arrayBuffer());
await writeFile(path.join(outDir, "hero-construction.jpg"), buffer);
console.log(`Saved hero-construction.jpg (${(buffer.length / 1024).toFixed(0)} KB)`);
