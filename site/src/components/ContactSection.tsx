import type { Locale } from "@/lib/i18n/config";
import type { SiteConfig } from "@/lib/content";
import { ContactForm } from "@/components/ContactForm";

type Props = {
  locale: Locale;
  config: SiteConfig;
  title?: string;
  subtitle?: string;
};

export function ContactSection({ locale, config, title, subtitle }: Props) {
  const isEs = locale === "es";

  return (
    <section id="contact" className="scroll-mt-20 bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {(title || subtitle) && (
          <div className="mb-10 text-center">
            {title && (
              <h2 className="font-display text-3xl font-semibold text-slate-900">{title}</h2>
            )}
            {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
          </div>
        )}
        <div className="grid gap-12 lg:grid-cols-2">
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
                {isEs ? "Correo" : "Email"}
              </h3>
              <a href={`mailto:${config.email}`} className="mt-2 block text-amber-700 hover:underline">
                {config.email}
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">
                {isEs ? "Área de Servicio" : "Service Area"}
              </h3>
              <ul className="mt-3 space-y-2 text-slate-600">
                {config.serviceAreaCities.map((city) => (
                  <li key={city} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                    {city}, GA
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              {isEs ? "Formulario Rápido" : "Quick Form"}
            </h3>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
