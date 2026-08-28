import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { SiteConfig } from "@/lib/content";
import { ContactForm } from "@/components/ContactForm";
import { images } from "@/data/images";

type Props = {
  locale: Locale;
  config: SiteConfig;
  title?: string;
  subtitle?: string;
};

export function ContactSection({ locale, config, title, subtitle }: Props) {
  const isEs = locale === "es";

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
      {(title || subtitle) && (
        <div className="mb-10 text-center">
          {title && (
            <h2 className="font-display text-3xl font-semibold text-slate-900">{title}</h2>
          )}
          {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
        </div>
      )}
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold">
            {isEs ? "Formulario Rápido" : "Quick Form"}
          </h3>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <ContactForm locale={locale} />
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-slate-900">
              {isEs ? "Llámenos" : "Call Us"}
            </h3>
            <a
              href={`tel:${config.phone}`}
              className="mt-2 block text-2xl font-bold text-amber-700"
            >
              {config.phoneDisplay}
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">
              {isEs ? "Envíe un Mensaje" : "Text or WhatsApp"}
            </h3>
            <div className="mt-2 flex gap-4">
              <a href={`sms:${config.sms}`} className="text-amber-700 hover:underline">
                SMS
              </a>
              <a
                href={`https://wa.me/${config.whatsapp.replace(/\D/g, "")}`}
                className="text-amber-700 hover:underline"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">
              {isEs ? "Ubicación" : "Location"}
            </h3>
            <p className="mt-2 text-slate-600">{config.address}</p>
            <p className="mt-1 text-slate-600">{config.hours}</p>
          </div>
          <div className="relative h-48 overflow-hidden rounded-xl">
            <Image
              src={images.mapAtlanta}
              alt="Metro Atlanta service area"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
