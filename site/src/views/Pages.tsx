import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/config";
import { getSiteConfig, getServices, getProjects } from "@/lib/content";
import { ContactSection } from "@/components/ContactSection";
import { TrustStrip } from "@/components/TrustStrip";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ProjectBackLink } from "@/components/ProjectBackLink";

export async function ContactPageView({ locale }: { locale: Locale }) {
  const config = await getSiteConfig(locale);
  const isEs = locale === "es";

  return (
    <>
      <section className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h1 className="font-display text-4xl font-semibold">
            {isEs ? "Contáctenos" : "Get in Touch"}
          </h1>
          <p className="mt-2 max-w-xl text-slate-300">
            {isEs
              ? "Llame, envíe un mensaje de texto o complete el formulario. Respondemos en 24 horas."
              : "Call, text, or fill out the form. We respond within 24 hours."}
          </p>
        </div>
      </section>
      <TrustStrip config={config} locale={locale} />
      <ContactSection locale={locale} config={config} />
    </>
  );
}

export async function AboutPageView({ locale }: { locale: Locale }) {
  const config = await getSiteConfig(locale);
  const isEs = locale === "es";

  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h1 className="font-display text-4xl font-semibold md:text-5xl">
            {isEs ? "Sobre Nosotros" : "About Gutierrez Built"}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">{config.bilingualNote}</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=1000&fit=crop"
              alt={config.ownerName}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold">{config.ownerName}</h2>
            <p className="mt-1 text-amber-700">{config.ownerTitle}</p>
            <div className="mt-6 space-y-4 text-slate-600">
              {isEs ? (
                <>
                  <p>
                    Tino Gutierrez lleva más de 22 años construyendo en el área metropolitana de Atlanta
                    — desde ampliaciones residenciales hasta rehabilitación de alcantarillado municipal a
                    gran escala.
                  </p>
                  <p>
                    Antes de fundar Gutierrez Built, pasó años en sistemas de alcantarillado sanitario,
                    drenaje pluvial y líneas de agua para autoridades de agua y contratistas generales
                    comerciales. Esa experiencia subterránea informa cómo abordamos cimientos, drenaje y
                    trabajo de sitio en cada proyecto residencial.
                  </p>
                  <p>
                    Hoy, Tino está en el sitio — no es un vendedor que desaparece. Habla inglés y español
                    con fluidez, y el servicio bilingüe está integrado en cómo trabajamos, no como un
                    extra.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Tino Gutierrez has spent 22+ years building across metro Atlanta — from residential
                    additions to large-scale municipal sewer rehabilitation.
                  </p>
                  <p>
                    Before founding Gutierrez Built, he spent years on sanitary sewer, storm drainage, and
                    water main systems for water authorities and commercial general contractors. That
                    underground experience informs how we approach foundations, drainage, and site work on
                    every residential project.
                  </p>
                  <p>
                    Today, Tino is on site — not a salesman who disappears. He speaks English and Spanish
                    fluently, and bilingual service is built into how we work, not bolted on.
                  </p>
                </>
              )}
            </div>
            <Link
              href={localePath(locale, "/contact")}
              className="mt-8 inline-block rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white"
            >
              {isEs ? "Hablemos" : "Let's Talk"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export async function ProjectDetailView({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const { getProject } = await import("@/lib/content");
  const project = await getProject(locale, slug);
  const isEs = locale === "es";
  if (!project) {
    return <p className="p-16 text-center">Project not found</p>;
  }

  const { BeforeAfterPair } = await import("@/components/BeforeAfterPair");

  return (
    <article>
      <div className="mx-auto max-w-4xl px-4 pt-6 lg:px-6">
        <Suspense fallback={null}>
          <ProjectBackLink locale={locale} />
        </Suspense>
      </div>
      <div className="relative h-64 md:h-96">
        <Image src={project.heroImage} alt={project.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <p className="text-sm font-semibold uppercase text-amber-400">
            {project.city} · {project.year}
          </p>
          <h1 className="font-display text-3xl font-semibold md:text-4xl">{project.title}</h1>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-4 py-12 lg:px-6">
        <p className="text-lg text-slate-700">{project.summary}</p>
        {project.valueRange && (
          <p className="mt-4 text-sm font-semibold text-amber-700">
            {isEs ? "Rango estimado" : "Estimated range"}: {project.valueRange}
          </p>
        )}
        {"beforeImage" in project && project.beforeImage && (
          <div className="mt-10">
            <h2 className="font-display text-2xl font-semibold">
              {isEs ? "Antes y Después" : "Before & After"}
            </h2>
            <div className="mt-4">
              <BeforeAfterPair
                before={project.beforeImage}
                after={project.afterImage!}
                alt={project.title}
                beforeLabel={isEs ? "Antes" : "Before"}
                afterLabel={isEs ? "Después" : "After"}
              />
            </div>
          </div>
        )}
        <h2 className="font-display mt-10 text-2xl font-semibold">
          {isEs ? "Alcance del Trabajo" : "Scope of Work"}
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-slate-700">
          {project.scopeOfWork.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {project.challenge && (
          <>
            <h2 className="font-display mt-10 text-2xl font-semibold">
              {isEs ? "El Desafío" : "The Challenge"}
            </h2>
            <p className="mt-4 text-slate-700">{project.challenge}</p>
          </>
        )}
        {project.solution && (
          <>
            <h2 className="font-display mt-10 text-2xl font-semibold">
              {isEs ? "La Solución" : "The Solution"}
            </h2>
            <p className="mt-4 text-slate-700">{project.solution}</p>
          </>
        )}
      </div>
    </article>
  );
}

export async function ResidentialPageView({ locale }: { locale: Locale }) {
  const services = (await getServices(locale)).filter((s) => s.group === "residential");
  const projects = (await getProjects(locale)).filter((p) => p.audience === "residential");
  const config = await getSiteConfig(locale);
  const isEs = locale === "es";

  return (
    <>
      <section className="relative bg-navy py-20 text-white">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=600&fit=crop"
          alt=""
          fill
          className="object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
          <h1 className="font-display text-4xl font-semibold md:text-5xl">
            {isEs ? "Servicios Residenciales" : "Residential Services"}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            {isEs
              ? "Un equipo, un contacto — cocinas, baños, ampliaciones, espacios exteriores y reparaciones."
              : "One crew, one point of contact — kitchens, baths, additions, outdoor living, and repairs."}
          </p>
        </div>
      </section>
      <TrustStrip config={config} locale={locale} />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="mb-10">
          <h2 className="font-display text-3xl font-semibold">
            {isEs ? "Nuestros Servicios Residenciales" : "Our Residential Services"}
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            {isEs
              ? "Remodelaciones, ampliaciones y espacios exteriores — todo con un solo equipo y un solo contacto."
              : "Remodels, additions, and outdoor living — all with one crew and one point of contact."}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.slug} className="overflow-hidden rounded-xl ring-1 ring-slate-200">
              <div className="relative h-48">
                <Image src={s.image} alt="" fill className="object-cover" />
              </div>
              <div className="p-5">
                <h2 className="font-semibold">{s.name}</h2>
                <p className="mt-2 text-sm text-slate-600">{s.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href={localePath(locale, "/pricing")}
            className="text-amber-700 font-semibold hover:underline"
          >
            {isEs ? "Ver guía de precios →" : "See pricing guide →"}
          </Link>
        </div>
      </section>
      {projects.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-6">
            <h2 className="font-display text-3xl font-semibold">
              {isEs ? "Proyectos Residenciales" : "Residential Projects"}
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              {isEs
                ? "Trabajo real en hogares del área metropolitana de Atlanta."
                : "Real work in homes across metro Atlanta."}
            </p>
            <div className="mt-10">
              <ProjectGrid projects={projects} locale={locale} from="residential" />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export async function CommercialPageView({ locale }: { locale: Locale }) {
  const { commercialStats } = await import("@/data/news");
  const projects = (await getProjects(locale)).filter(
    (p) => p.audience === "commercial" || p.audience === "municipal",
  );
  const config = await getSiteConfig(locale);
  const isEs = locale === "es";
  const stats = commercialStats[locale];

  return (
    <>
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h1 className="font-display text-4xl font-semibold md:text-5xl">
            {isEs ? "Comercial y Municipal" : "Commercial & Municipal"}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            {isEs
              ? "Experiencia en alcantarillado sanitario, drenaje pluvial y líneas de agua — con vocabulario de adquisiciones y entrega de seguridad primero."
              : "Sanitary sewer, storm drainage, and water main experience — with procurement vocabulary and safety-first delivery."}
          </p>
        </div>
      </section>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-10 md:grid-cols-4 lg:px-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-amber-700">{s.value}</p>
              <p className="mt-1 text-sm text-slate-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold">
              {isEs ? "Capacidades" : "Core Capabilities"}
            </h2>
            <ul className="mt-6 space-y-3 text-slate-700">
              {(isEs
                ? [
                    "Rehabilitación de alcantarillado sanitario y tormenta",
                    "Reemplazo de líneas de agua y servicios",
                    "Instalación de servicios húmedos en sitios comerciales",
                    "Respuesta de emergencia 24/7",
                    "Control de calidad y documentación as-built",
                  ]
                : [
                    "Sanitary and storm sewer rehabilitation",
                    "Water line and service replacement",
                    "Commercial pad site wet utility installation",
                    "24/7 emergency response",
                    "QA/QC and as-built documentation",
                  ]
              ).map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-amber-600">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-50 p-8">
            <h2 className="font-display text-2xl font-semibold">
              {isEs ? "Credenciales" : "Credentials"}
            </h2>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-slate-900">License</dt>
                <dd className="text-slate-600">{config.licenseNumber}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">GL Insurance</dt>
                <dd className="text-slate-600">
                  {config.insurance.glPerOccurrence} per occurrence ·{" "}
                  {config.insurance.glAggregate} aggregate
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Workers&apos; Comp</dt>
                <dd className="text-slate-600">{config.insurance.workersComp}</dd>
              </div>
            </dl>
            <a
              href="#"
              className="mt-6 inline-block rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white"
            >
              {isEs ? "Descargar Hoja de Capacidades (PDF)" : "Download Capability Statement (PDF)"}
            </a>
          </div>
        </div>
      </section>
      {projects.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-6">
            <h2 className="font-display text-3xl font-semibold">
              {isEs ? "Proyectos Comerciales y Municipales" : "Commercial & Municipal Projects"}
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              {isEs
                ? "Experiencia documentada en servicios subterráneos y sitios comerciales."
                : "Documented experience on underground utility and commercial site work."}
            </p>
            <div className="mt-10">
              <ProjectGrid projects={projects} locale={locale} from="commercial" />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export async function PricingPageView({ locale }: { locale: Locale }) {
  const { pricingTiers } = await import("@/data/services");
  const data = pricingTiers[locale];
  const isEs = locale === "es";

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 lg:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
        {isEs ? "Última actualización" : "Last updated"}: {data.lastUpdated}
      </p>
      <h1 className="font-display mt-2 text-4xl font-semibold">
        {isEs ? "Guía de Precios" : "Pricing Guide"}
      </h1>
      <p className="mt-4 text-lg text-slate-600">{data.intro}</p>
      <div className="mt-12 space-y-12">
        {data.tiers.map((tier) => (
          <div key={tier.service} className="rounded-2xl border border-slate-200 overflow-hidden">
            <h2 className="bg-navy px-6 py-4 text-lg font-semibold text-white">{tier.service}</h2>
            <div className="grid md:grid-cols-3">
              {(["refresh", "mid", "custom"] as const).map((level) => (
                <div key={level} className="border-t md:border-t-0 md:border-l border-slate-100 p-6">
                  <p className="text-xs font-bold uppercase tracking-wide text-amber-700">
                    {level === "refresh"
                      ? isEs
                        ? "Actualización"
                        : "Refresh"
                      : level === "mid"
                        ? isEs
                          ? "Rango Medio"
                          : "Mid-Range"
                        : isEs
                          ? "Personalizado"
                          : "Custom"}
                  </p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">{tier[level].range}</p>
                  <p className="mt-1 text-sm text-slate-500">{tier[level].timeline}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 rounded-xl bg-amber-50 p-4 text-sm text-slate-700">{data.note}</p>
    </section>
  );
}

export async function ReviewsPageView({ locale }: { locale: Locale }) {
  const testimonials = await import("@/lib/content").then((m) => m.getTestimonials(locale));
  const isEs = locale === "es";

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 lg:px-6">
      <h1 className="font-display text-4xl font-semibold">
        {isEs ? "Reseñas de Clientes" : "Client Reviews"}
      </h1>
      <div className="mt-10 space-y-8">
        {testimonials.map((t) => (
          <blockquote key={t.authorName} className="rounded-xl border border-slate-200 p-6">
            <div className="text-amber-500">{"★".repeat(t.rating)}</div>
            <p className="mt-4 text-slate-700">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-4">
              <p className="font-semibold">{t.authorName}</p>
              {"authorRole" in t && t.authorRole && (
                <p className="text-sm text-slate-500">
                  {t.authorRole}
                  {"authorOrg" in t && t.authorOrg ? `, ${t.authorOrg}` : ""}
                </p>
              )}
              <p className="text-sm text-slate-500">
                {t.projectType} · {t.city}
              </p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

export async function NewsPageView({ locale }: { locale: Locale }) {
  const news = await import("@/lib/content").then((m) => m.getNews(locale));
  const isEs = locale === "es";

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
      <h1 className="font-display text-4xl font-semibold">
        {isEs ? "Noticias y Actualizaciones" : "News & Updates"}
      </h1>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {news.map((item) => (
          <article key={item.slug} className="overflow-hidden rounded-xl ring-1 ring-slate-200">
            <div className="relative h-48">
              <Image src={item.image} alt="" fill className="object-cover" />
            </div>
            <div className="p-5">
              <time className="text-xs text-slate-500">{item.date}</time>
              <h2 className="mt-1 font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{item.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export async function ProcessPageView({ locale }: { locale: Locale }) {
  const { processSteps } = await import("@/data/news");
  const steps = processSteps[locale];
  const isEs = locale === "es";

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 lg:px-6">
      <h1 className="font-display text-4xl font-semibold">
        {isEs ? "Nuestro Proceso" : "Our Process"}
      </h1>
      <p className="mt-4 text-slate-600">
        {isEs
          ? "Desde la primera llamada hasta la entrega final — sin sorpresas."
          : "From the first call to final walkthrough — no surprises."}
      </p>
      <ol className="mt-12 space-y-8">
        {steps.map((step) => (
          <li key={step.step} className="flex gap-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-600 text-lg font-bold text-white">
              {step.step}
            </span>
            <div>
              <h2 className="text-xl font-semibold">{step.title}</h2>
              <p className="mt-2 text-slate-600">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
