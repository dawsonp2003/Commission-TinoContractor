import { images } from "./images";

export const services = {
  en: [
    {
      slug: "additions-new-builds",
      name: "Additions & New Builds",
      shortDescription: "Expand your home with seamless additions tied to your existing structure.",
      group: "residential",
      icon: "home",
      image: images.houseExterior,
    },
    {
      slug: "kitchens-baths",
      name: "Kitchens & Baths",
      shortDescription: "Full remodels from refresh to down-to-the-studs transformations.",
      group: "residential",
      icon: "bath",
      image: images.kitchen,
    },
    {
      slug: "outdoor-living",
      name: "Outdoor Living",
      shortDescription: "Kitchens, carports, decks, and covered entertaining spaces.",
      group: "residential",
      icon: "tree",
      image: images.outdoorLiving,
    },
    {
      slug: "roofing-exterior",
      name: "Roofing & Exterior",
      shortDescription: "Roof repairs, siding, gutters, and exterior refreshes.",
      group: "residential",
      icon: "roof",
      image: images.roofing,
    },
    {
      slug: "repairs-maintenance",
      name: "Repairs & Maintenance",
      shortDescription: "Drywall, painting, small repairs — no job too small to do right.",
      group: "residential",
      icon: "wrench",
      image: images.heroConstruction,
    },
    {
      slug: "underground-utilities",
      name: "Underground Utilities",
      shortDescription: "Sanitary sewer, storm drainage, and water main — commercial and municipal.",
      group: "commercial",
      icon: "pipe",
      image: images.industrial,
    },
  ],
  es: [
    {
      slug: "additions-new-builds",
      name: "Ampliaciones y Construcción Nueva",
      shortDescription: "Amplíe su hogar con adiciones integradas a su estructura existente.",
      group: "residential",
      icon: "home",
      image: images.houseExterior,
    },
    {
      slug: "kitchens-baths",
      name: "Cocinas y Baños",
      shortDescription: "Remodelaciones completas desde actualización hasta transformación total.",
      group: "residential",
      icon: "bath",
      image: images.kitchen,
    },
    {
      slug: "outdoor-living",
      name: "Espacios Exteriores",
      shortDescription: "Cocinas exteriores, cocheras, terrazas y espacios cubiertos.",
      group: "residential",
      icon: "tree",
      image: images.outdoorLiving,
    },
    {
      slug: "roofing-exterior",
      name: "Techos y Exterior",
      shortDescription: "Reparación de techos, revestimiento, canaletas y renovación exterior.",
      group: "residential",
      icon: "roof",
      image: images.roofing,
    },
    {
      slug: "repairs-maintenance",
      name: "Reparaciones y Mantenimiento",
      shortDescription: "Drywall, pintura, reparaciones menores — ningún trabajo es muy pequeño.",
      group: "residential",
      icon: "wrench",
      image: images.heroConstruction,
    },
    {
      slug: "underground-utilities",
      name: "Servicios Subterráneos",
      shortDescription: "Alcantarillado sanitario, drenaje pluvial y líneas de agua — comercial y municipal.",
      group: "commercial",
      icon: "pipe",
      image: images.industrial,
    },
  ],
};

export const pricingTiers = {
  en: {
    lastUpdated: "August 2026",
    intro:
      "Honest ballpark ranges so you know what you're getting into — every project is different, but these tiers reflect real jobs in metro Atlanta.",
    tiers: [
      {
        service: "Kitchen Remodel",
        refresh: { range: "$18K – $32K", timeline: "3–4 weeks" },
        mid: { range: "$32K – $58K", timeline: "5–7 weeks" },
        custom: { range: "$58K – $90K+", timeline: "8–12 weeks" },
      },
      {
        service: "Bathroom Remodel",
        refresh: { range: "$10K – $18K", timeline: "2–3 weeks" },
        mid: { range: "$18K – $35K", timeline: "3–5 weeks" },
        custom: { range: "$35K – $65K+", timeline: "5–8 weeks" },
      },
      {
        service: "Home Addition",
        refresh: { range: "$60K – $95K", timeline: "8–12 weeks" },
        mid: { range: "$95K – $150K", timeline: "12–18 weeks" },
        custom: { range: "$150K – $250K+", timeline: "18–26 weeks" },
      },
    ],
    note: "All ranges include permits where required. Electrical and plumbing work is performed by separately licensed Georgia trade contractors.",
  },
  es: {
    lastUpdated: "Agosto 2026",
    intro:
      "Rangos honestos para que sepa en qué se está metiendo — cada proyecto es diferente, pero estos niveles reflejan trabajos reales en el área metropolitana de Atlanta.",
    tiers: [
      {
        service: "Remodelación de Cocina",
        refresh: { range: "$18K – $32K", timeline: "3–4 semanas" },
        mid: { range: "$32K – $58K", timeline: "5–7 semanas" },
        custom: { range: "$58K – $90K+", timeline: "8–12 semanas" },
      },
      {
        service: "Remodelación de Baño",
        refresh: { range: "$10K – $18K", timeline: "2–3 semanas" },
        mid: { range: "$18K – $35K", timeline: "3–5 semanas" },
        custom: { range: "$35K – $65K+", timeline: "5–8 semanas" },
      },
      {
        service: "Ampliación de Vivienda",
        refresh: { range: "$60K – $95K", timeline: "8–12 semanas" },
        mid: { range: "$95K – $150K", timeline: "12–18 semanas" },
        custom: { range: "$150K – $250K+", timeline: "18–26 semanas" },
      },
    ],
    note: "Todos los rangos incluyen permisos cuando se requieren. El trabajo eléctrico y de plomería lo realizan contratistas con licencia separada en Georgia.",
  },
};
