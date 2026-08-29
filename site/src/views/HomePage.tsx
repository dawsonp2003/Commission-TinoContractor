import { images } from "@/data/images";
import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import { getUi } from "@/lib/i18n/ui";
import { getSiteConfig, getProjects } from "@/lib/content";
import { experienceStats } from "@/data/experience";
import { ContactSection } from "@/components/ContactSection";
import { sectionHref } from "@/lib/sections";

export function HomePage({ locale }: { locale: Locale }) {
  const ui = getUi(locale);
  const home = ui.home as Record<string, string>;
  const about = ui.about as Record<string, string>;
  const config = getSiteConfig(locale);
  const projects = getProjects(locale);
  const stats = experienceStats[locale];

  return (
    <>
      <section id="home" className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <Image
            src={images.heroConstruction}
            alt=""
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-20 lg:px-6 lg:pb-12 lg:pt-24">
          <div>
            <h1 className="font-display max-w-4xl text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
              {config.tagline}
            </h1>
            <p className="mt-4 max-w-2xl text-lg font-medium text-amber-400">{config.mission}</p>
            <p className="mt-4 max-w-2xl text-lg text-slate-200">{home.heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${config.phone}`}
                className="rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-500"
              >
                {ui.cta.call} · {config.phoneDisplay}
              </a>
              <a
                href={sectionHref(locale, "contact")}
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold transition hover:bg-white/20"
              >
                {ui.cta.contact}
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/20 pt-8 md:grid-cols-4 lg:mt-20 lg:pt-10">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-amber-400 md:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm text-slate-300">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 lg:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src={images.contractorPortrait}
              alt={config.ownerName}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold text-slate-900">{about.title}</h2>
            <div className="mt-6 space-y-4 text-slate-600">
              <p>{about.p1}</p>
              <p>{about.p2}</p>
              <p>{about.p3}</p>
              <p>{about.p4}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-20 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h2 className="font-display text-3xl font-semibold text-slate-900">
            {home.projectsTitle}
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">{home.projectsNote}</p>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="overflow-hidden rounded-xl bg-slate-50 ring-1 ring-slate-200"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                    {project.city} · {project.year}
                  </p>
                  <h3 className="mt-1 font-semibold text-slate-900">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{project.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactSection
        locale={locale}
        config={config}
        title={home.ctaTitle}
        subtitle={home.ctaSubtitle}
      />
    </>
  );
}
