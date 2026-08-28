import type { Locale } from "@/lib/i18n/config";
import { prisma } from "@/lib/db";
import { siteConfig as seedConfig } from "@/data/site-config";
import { projects as seedProjects } from "@/data/projects";
import { services as seedServices } from "@/data/services";
import { testimonials as seedTestimonials } from "@/data/testimonials";
import { news as seedNews } from "@/data/news";

export type SiteConfig = typeof seedConfig.en;
export type Project = (typeof seedProjects.en)[number];
export type Service = (typeof seedServices.en)[number];
export type Testimonial = (typeof seedTestimonials.en)[number];
export type NewsItem = (typeof seedNews.en)[number];

const seeds = {
  siteConfig: seedConfig,
  projects: seedProjects,
  services: seedServices,
  testimonials: seedTestimonials,
  news: seedNews,
} as const;

type SeedKey = keyof typeof seeds;

async function getOverride<T>(key: SeedKey, locale: Locale): Promise<T | null> {
  try {
    const block = await prisma.contentBlock.findUnique({
      where: { key_locale: { key, locale } },
    });
    if (block) return JSON.parse(block.data) as T;
  } catch {
    // DB may not be ready during build
  }
  return null;
}

export async function getSiteConfig(locale: Locale): Promise<SiteConfig> {
  const override = await getOverride<SiteConfig>("siteConfig", locale);
  return override ?? seeds.siteConfig[locale];
}

export async function getProjects(locale: Locale): Promise<Project[]> {
  const override = await getOverride<Project[]>("projects", locale);
  return override ?? seeds.projects[locale];
}

export async function getProject(locale: Locale, slug: string): Promise<Project | undefined> {
  const projects = await getProjects(locale);
  return projects.find((p) => p.slug === slug);
}

export async function getServices(locale: Locale): Promise<Service[]> {
  const override = await getOverride<Service[]>("services", locale);
  return override ?? seeds.services[locale];
}

export async function getTestimonials(locale: Locale): Promise<Testimonial[]> {
  const override = await getOverride<Testimonial[]>("testimonials", locale);
  return override ?? seeds.testimonials[locale];
}

export async function getNews(locale: Locale): Promise<NewsItem[]> {
  const override = await getOverride<NewsItem[]>("news", locale);
  return override ?? seeds.news[locale];
}

export async function saveContentBlock(
  key: SeedKey,
  locale: Locale,
  data: unknown,
): Promise<void> {
  await prisma.contentBlock.upsert({
    where: { key_locale: { key, locale } },
    create: { key, locale, data: JSON.stringify(data) },
    update: { data: JSON.stringify(data) },
  });
}

export { seeds };
