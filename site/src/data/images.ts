/**
 * Local site images in /public/images/.
 * Replace any file to update photos sitewide — filenames match where they're used.
 */
export const images = {
  /** Homepage hero background */
  heroConstruction: "/images/hero-construction.jpg",
  /** Residential card, additions service, whole-home project */
  houseExterior: "/images/house-exterior.jpg",
  /** Before photos for home addition projects */
  houseBefore: "/images/house-before.jpg",
  /** Outdoor living service & outdoor kitchen project */
  outdoorLiving: "/images/outdoor-living.jpg",
  /** Before photos for outdoor projects */
  outdoorBefore: "/images/outdoor-before.jpg",
  /** Kitchen service & kitchen remodel project */
  kitchen: "/images/kitchen.jpg",
  /** Before photos for kitchen remodels */
  kitchenBefore: "/images/kitchen-before.jpg",
  /** Master bath project hero/after */
  bathroom: "/images/bathroom.jpg",
  /** Before photos for bathroom remodels */
  bathroomBefore: "/images/bathroom-before.jpg",
  /** Roofing & exterior service */
  roofing: "/images/roofing-exterior.jpg",
  /** Commercial card, underground utilities, municipal sewer project */
  industrial: "/images/industrial-commercial.jpg",
  /** About page owner portrait */
  contractorPortrait: "/images/contractor-portrait.jpg",
  /** Contact section map */
  mapAtlanta: "/images/map-atlanta.jpg",
  /** News: erosion certification */
  newsSiteWork: "/images/news-site-work.jpg",
  /** News: community ramp build */
  newsCommunity: "/images/news-community.jpg",
  /** News: bilingual service */
  newsTeam: "/images/news-team.jpg",
} as const;

export type SiteImage = (typeof images)[keyof typeof images];
