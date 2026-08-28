import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/images");

/** Filename → Unsplash photo ID */
const assets = {
  "hero-construction.jpg": "photo-1504307651254-35680f356dfd",
  "house-exterior.jpg": "photo-1600585154340-be6161a56a0c",
  "house-before.jpg": "photo-1564013799919-ab600027ffc6",
  "outdoor-living.jpg": "photo-1600607687939-ce8a6c25118c",
  "outdoor-before.jpg": "photo-1600607687644-c7171b42498f",
  "kitchen.jpg": "photo-1556912173-46c336c7fd55",
  "kitchen-before.jpg": "photo-1507089947368-19c1da9775ae",
  "bathroom.jpg": "photo-1620626011761-996317b8d101",
  "bathroom-before.jpg": "photo-1616486338812-3dadae4b4ace",
  "roofing-exterior.jpg": "photo-1600585154526-990dced4db0d",
  "industrial-commercial.jpg": "photo-1581094794329-c8112a89af12",
  "contractor-portrait.jpg": "photo-1621905252507-b35492cc74b4",
  "map-atlanta.jpg": "photo-1524661135-423995f22d0b",
  "news-site-work.jpg": "photo-1541888946425-d81bb19240f5",
  "news-community.jpg": "photo-1503387762-592deb58ef4e",
  "news-team.jpg": "photo-1521737711867-e3b97375f902",
};

await mkdir(outDir, { recursive: true });

for (const [filename, id] of Object.entries(assets)) {
  const url = `https://images.unsplash.com/${id}?w=1600&q=85&fit=max&auto=format`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to download ${filename}: ${res.status}`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  await writeFile(path.join(outDir, filename), buffer);
  console.log(`Saved ${filename} (${(buffer.length / 1024).toFixed(0)} KB)`);
}

console.log(`\nDownloaded ${Object.keys(assets).length} images to public/images/`);
