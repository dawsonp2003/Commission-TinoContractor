import type { Locale } from "@/lib/i18n/config";
import { siteConfig as seedConfig } from "@/data/site-config";
import { projects as seedProjects } from "@/data/projects";

export type SiteConfig = (typeof seedConfig)["en"];
export type Project = (typeof seedProjects)["en"][number];

export function getSiteConfig(locale: Locale): SiteConfig {
  return seedConfig[locale];
}

export function getProjects(locale: Locale): Project[] {
  return seedProjects[locale];
}
