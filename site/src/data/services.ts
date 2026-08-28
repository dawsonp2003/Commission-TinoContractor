export const services = {
  en: [
    {
      slug: "additions-new-builds",
      name: "Additions & New Builds",
      shortDescription: "Expand your home with seamless additions tied to your existing structure.",
      group: "residential",
      icon: "home",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    },
    {
      slug: "kitchens-baths",
      name: "Kitchens & Baths",
      shortDescription: "Full remodels from refresh to down-to-the-studs transformations.",
      group: "residential",
      icon: "bath",
      image: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=600&h=400&fit=crop",
    },
    {
      slug: "outdoor-living",
      name: "Outdoor Living",
      shortDescription: "Kitchens, carports, decks, and covered entertaining spaces.",
      group: "residential",
      icon: "tree",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
    },
    {
      slug: "roofing-exterior",
      name: "Roofing & Exterior",
      shortDescription: "Roof repairs, siding, gutters, and exterior refreshes.",
      group: "residential",
      icon: "roof",
      image: "https://images.unsplash.com/photo-1632775245160-791bacdc4f54?w=600&h=400&fit=crop",
    },
    {
      slug: "repairs-maintenance",
      name: "Repairs & Maintenance",
      shortDescription: "Drywall, painting, small repairs — no job too small to do right.",
      group: "residential",
      icon: "wrench",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    },
    {
      slug: "underground-utilities",
      name: "Underground Utilities",
      shortDescription: "Sanitary sewer, storm drainage, and water main — commercial and municipal.",
      group: "commercial",
      icon: "pipe",
      image: "https://images.unsplash.com/photo-1581094271901-ef2a9acb7a2e?w=600&h=400&fit=crop",
    },
  ],
  es: [
    {
      slug: "additions-new-builds",
      name: "Ampliaciones y Construcción Nueva",
      shortDescription: "Amplíe su hogar con adiciones integradas a su estructura existente.",
      group: "residential",
      icon: "home",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    },
    {
      slug: "kitchens-baths",
      name: "Cocinas y Baños",
      shortDescription: "Remodelaciones completas desde actualización hasta transformación total.",
      group: "residential",
      icon: "bath",
      image: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=600&h=400&fit=crop",
    },
    {
      slug: "outdoor-living",
      name: "Espacios Exteriores",
      shortDescription: "Cocinas exteriores, cocheras, terrazas y espacios cubiertos.",
      group: "residential",
      icon: "tree",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
    },
    {
      slug: "roofing-exterior",
      name: "Techos y Exterior",
      shortDescription: "Reparación de techos, revestimiento, canaletas y renovación exterior.",
      group: "residential",
      icon: "roof",
      image: "https://images.unsplash.com/photo-1632775245160-791bacdc4f54?w=600&h=400&fit=crop",
    },
    {
      slug: "repairs-maintenance",
      name: "Reparaciones y Mantenimiento",
      shortDescription: "Drywall, pintura, reparaciones menores — ningún trabajo es muy pequeño.",
      group: "residential",
      icon: "wrench",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    },
    {
      slug: "underground-utilities",
      name: "Servicios Subterráneos",
      shortDescription: "Alcantarillado sanitario, drenaje pluvial y líneas de agua — comercial y municipal.",
      group: "commercial",
      icon: "pipe",
      image: "https://images.unsplash.com/photo-1581094271901-ef2a9acb7a2e?w=600&h=400&fit=crop",
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
