/**
 * Site images in /public/images/.
 * - stock/: placeholder photos for hero background
 * - tino/: real photos — headshot and project shots
 */
export const images = {
  heroConstruction: "/images/stock/hero-construction.jpg",
  contractorPortrait: "/images/tino/temp_headshot.jpg",
  projects: {
    dallasWaterMain: "/images/tino/08052026_DallasGA_PVC.jpg",
    woodstockPvcManhole: "/images/tino/07232026_WoodstockGA_PVC.jpg",
    atlantaMlkVaultMains: "/images/tino/05282026_AtlantaGA_MetalPipes.jpg",
    atlantaMlkWaterMain: "/images/tino/05192026_AtlantaGA_MetalPipes.jpg",
    atlantaAvondaleCementPipe: "/images/tino/12172024_AtlantaGa_CementPipe.jpg",
    oakwoodCorrugatedStorm: "/images/tino/03122024_OakwoodGA_CorregatedPipe.jpg",
  },
} as const;

export type SiteImage = (typeof images)[keyof typeof images];
