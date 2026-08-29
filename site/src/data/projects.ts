import { images } from "./images";

const en = [
  {
    slug: "dallas-water-main",
    title: "Water Main & Valve Assembly",
    summary:
      "Blue PVC water main installation with gate valves and a manifold tie-in at a new development site in Dallas.",
    audience: "commercial" as const,
    categories: ["Water Main"],
    city: "Dallas, GA",
    year: 2026,
    month: 8,
    heroImage: images.projects.dallasWaterMain,
  },
  {
    slug: "woodstock-pvc-manhole",
    title: "PVC Line to Manhole Connection",
    summary:
      "Sanitary or water service line set in a deep trench with gravel bedding and a manhole connection on Mill Street.",
    audience: "commercial" as const,
    categories: ["Sanitary Sewer · Water"],
    city: "Woodstock, GA",
    year: 2026,
    month: 7,
    heroImage: images.projects.woodstockPvcManhole,
  },
  {
    slug: "atlanta-mlk-utility-vaults",
    title: "Parallel Mains to Concrete Vaults",
    summary:
      "Twin utility mains run through red-clay trenching to precast concrete vault structures along MLK Jr Drive.",
    audience: "municipal" as const,
    categories: ["Storm · Sanitary"],
    city: "Atlanta, GA",
    year: 2026,
    month: 5,
    heroImage: images.projects.atlantaMlkVaultMains,
  },
  {
    slug: "atlanta-mlk-water-main",
    title: "Ductile Iron Water Main",
    summary:
      "Black ductile iron water line with red gate valves, mechanical joints, and a precast flow vault on MLK Jr Drive.",
    audience: "municipal" as const,
    categories: ["Water Main"],
    city: "Atlanta, GA",
    year: 2026,
    month: 5,
    heroImage: images.projects.atlantaMlkWaterMain,
  },
  {
    slug: "atlanta-avondale-cement-pipe",
    title: "Large-Diameter Concrete Pipe Install",
    summary:
      "Reinforced concrete pipe placed in a wide trench for storm or sanitary collection near new townhome construction.",
    audience: "commercial" as const,
    categories: ["Storm Drainage · Sanitary Sewer"],
    city: "Atlanta, GA",
    year: 2024,
    month: 12,
    heroImage: images.projects.atlantaAvondaleCementPipe,
  },
  {
    slug: "oakwood-corrugated-storm",
    title: "Corrugated Metal Storm Line",
    summary:
      "Multiple large CMP storm pipes set on stone bedding with geotextile fabric at a highway corridor job in Oakwood.",
    audience: "commercial" as const,
    categories: ["Storm Drainage"],
    city: "Oakwood, GA",
    year: 2024,
    month: 3,
    heroImage: images.projects.oakwoodCorrugatedStorm,
  },
];

const es = [
  {
    slug: "dallas-water-main",
    title: "Línea de Agua y Válvulas",
    summary:
      "Instalación de línea de agua PVC con válvulas de compuerta y conexión de colector en un nuevo desarrollo en Dallas.",
    audience: "commercial" as const,
    categories: ["Línea de Agua"],
    city: "Dallas, GA",
    year: 2026,
    month: 8,
    heroImage: images.projects.dallasWaterMain,
  },
  {
    slug: "woodstock-pvc-manhole",
    title: "Línea PVC a Pozo de Visita",
    summary:
      "Línea de servicio sanitaria o de agua en zanja profunda con base de grava y conexión a pozo de visita en Mill Street.",
    audience: "commercial" as const,
    categories: ["Alcantarillado · Agua"],
    city: "Woodstock, GA",
    year: 2026,
    month: 7,
    heroImage: images.projects.woodstockPvcManhole,
  },
  {
    slug: "atlanta-mlk-utility-vaults",
    title: "Líneas Paralelas a Bóvedas de Concreto",
    summary:
      "Líneas de servicio gemelas instaladas en zanja de arcilla roja hacia estructuras de concreto prefabricado en MLK Jr Drive.",
    audience: "municipal" as const,
    categories: ["Tormenta · Sanitario"],
    city: "Atlanta, GA",
    year: 2026,
    month: 5,
    heroImage: images.projects.atlantaMlkVaultMains,
  },
  {
    slug: "atlanta-mlk-water-main",
    title: "Línea de Agua de Hierro Dúctil",
    summary:
      "Línea de agua de hierro dúctil con válvulas rojas, juntas mecánicas y bóveda de flujo prefabricada en MLK Jr Drive.",
    audience: "municipal" as const,
    categories: ["Línea de Agua"],
    city: "Atlanta, GA",
    year: 2026,
    month: 5,
    heroImage: images.projects.atlantaMlkWaterMain,
  },
  {
    slug: "atlanta-avondale-cement-pipe",
    title: "Tubería de Concreto de Gran Diámetro",
    summary:
      "Tubería de concreto reforzado colocada en zanja amplia para recolección pluvial o sanitaria cerca de nuevas viviendas.",
    audience: "commercial" as const,
    categories: ["Drenaje Pluvial · Alcantarillado"],
    city: "Atlanta, GA",
    year: 2024,
    month: 12,
    heroImage: images.projects.atlantaAvondaleCementPipe,
  },
  {
    slug: "oakwood-corrugated-storm",
    title: "Línea de Tormenta CMP",
    summary:
      "Múltiples tuberías pluviales CMP de gran tamaño sobre base de piedra con geotextil en un corredor de carretera en Oakwood.",
    audience: "commercial" as const,
    categories: ["Drenaje Pluvial"],
    city: "Oakwood, GA",
    year: 2024,
    month: 3,
    heroImage: images.projects.oakwoodCorrugatedStorm,
  },
];

export const projects = { en, es };
