import { images } from "@/data/images";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/config";
import { getUi } from "@/lib/i18n/ui";
import {
  getSiteConfig,
  getProjects,
  getServices,
  getTestimonials,
} from "@/lib/content";
import { whyItems, processSteps } from "@/data/news";
import { TrustStrip } from "@/components/TrustStrip";
import { BeforeAfterPair } from "@/components/BeforeAfterPair";
import { ContactSection } from "@/components/ContactSection";
import { projectHref } from "@/lib/projects";
import { ArrowRight, Shield, Users, Wrench, Globe } from "lucide-react";

export async function HomePage({ locale }: { locale: Locale }) {
  const ui = getUi(locale);
  const home = ui.home as Record<string, string>;
  const config = await getSiteConfig(locale);
  const projects = (await getProjects(locale)).slice(0, 3);
  const services = await getServices(locale);
  const testimonials = (await getTestimonials(locale)).slice(0, 2);
  const why = whyItems[locale];
  const steps = processSteps[locale];
  const icons = [Wrench, Shield, Globe, Users];

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <Image
            src={images.heroConstruction}
            alt=""
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-6 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            {config.tagline}
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            {home.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">{home.heroSubtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`tel:${config.phone}`}
              className="rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-500"
            >
              {ui.cta.call} · {config.phoneDisplay}
            </a>
            <Link
              href={localePath(locale, "/contact")}
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold transition hover:bg-white/20"
            >
              {ui.cta.quote}
            </Link>
          </div>
        </div>
      </section>

      <TrustStrip config={config} locale={locale} />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href={localePath(locale, "/residential")}
            className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
          >
            <Image
              src={images.houseExterior}
              alt=""
              width={800}
              height={500}
              className="absolute inset-0 h-full w-full object-cover opacity-20 transition group-hover:opacity-30"
            />
            <div className="relative">
              <h2 className="font-display text-2xl font-semibold text-slate-900">
                {home.audienceHome}
              </h2>
              <p className="mt-2 text-slate-600">{home.audienceHomeDesc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-700">
                {locale === "en" ? "Explore" : "Explorar"} <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
          <Link
            href={localePath(locale, "/commercial")}
            className="group relative overflow-hidden rounded-2xl bg-slate-900 p-8 text-white shadow-sm ring-1 ring-slate-800 transition duration-300 hover:bg-slate-800 hover:shadow-lg hover:ring-amber-500/50"
          >
            <Image
              src={images.industrial}
              alt=""
              width={800}
              height={500}
              className="absolute inset-0 h-full w-full object-cover opacity-25 transition duration-300 group-hover:scale-105 group-hover:opacity-45"
            />
            <div className="absolute inset-0 bg-slate-900/50 transition duration-300 group-hover:bg-slate-900/30" />
            <div className="relative">
              <h2 className="font-display text-2xl font-semibold transition group-hover:text-amber-50">
                {home.audienceCommercial}
              </h2>
              <p className="mt-2 text-slate-300 transition group-hover:text-slate-200">
                {home.audienceCommercialDesc}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-400 transition group-hover:text-amber-300">
                {locale === "en" ? "Learn more" : "Más información"}{" "}
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h2 className="font-display text-center text-3xl font-semibold text-slate-900">
            {home.projectsTitle}
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={projectHref(locale, project.slug, "home")}
                className="group overflow-hidden rounded-xl bg-slate-50 ring-1 ring-slate-200 transition hover:shadow-lg"
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {"beforeImage" in projects[0] && projects[0].beforeImage && (
        <section className="mx-auto max-w-5xl px-4 py-16 lg:px-6">
          <h2 className="font-display text-center text-3xl font-semibold">
            {locale === "en" ? "Before & After" : "Antes y Después"}
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-slate-600">
            {projects[0].title} — {projects[0].city}
          </p>
          <div className="mt-8">
            <BeforeAfterPair
              before={projects[0].beforeImage!}
              after={projects[0].afterImage!}
              alt={projects[0].title}
              beforeLabel={locale === "es" ? "Antes" : "Before"}
              afterLabel={locale === "es" ? "Después" : "After"}
            />
          </div>
        </section>
      )}

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h2 className="font-display text-center text-3xl font-semibold">{home.servicesTitle}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.slug}
                className="rounded-xl bg-white shadow-sm ring-1 ring-slate-200"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt=""
                  width={600}
                  height={160}
                  className="h-40 w-full rounded-t-xl object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900">{service.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{service.shortDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h2 className="font-display text-center text-3xl font-semibold">{home.whyTitle}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((item, i) => {
              const Icon = icons[i] ?? Wrench;
              return (
                <div key={item.title} className="rounded-xl border border-slate-200 p-6">
                  <Icon className="h-8 w-8 text-amber-600" />
                  <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h2 className="font-display text-center text-3xl font-semibold">{home.processTitle}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.step} className="rounded-xl bg-white/5 p-6">
                <span className="text-3xl font-bold text-amber-400">{step.step}</span>
                <h3 className="mt-2 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h2 className="font-display text-center text-3xl font-semibold">
            {home.testimonialsTitle}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote
                key={t.authorName}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-slate-700">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 text-sm font-semibold text-slate-900">
                  {t.authorName}
                  <span className="font-normal text-slate-500"> — {t.city}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber-50 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h2 className="font-display text-center text-3xl font-semibold">{home.areaTitle}</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {config.serviceAreaCities.map((city) => (
              <span
                key={city}
                className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm"
              >
                {city}
              </span>
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
