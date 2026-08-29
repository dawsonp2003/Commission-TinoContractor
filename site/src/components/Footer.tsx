"use client";

import { Phone, MessageCircle } from "lucide-react";
import { sectionHref } from "@/lib/sections";
import { useLocale } from "@/lib/i18n/use-locale";
import { getUi } from "@/lib/i18n/ui";
import { siteConfig } from "@/data/site-config";
import { BusinessName } from "@/components/BusinessName";

export function Footer() {
  const { locale } = useLocale();
  const config = siteConfig[locale];
  const ui = getUi(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 lg:px-6">
        <div>
          <p className="text-lg font-bold text-white">
            <BusinessName name={config.businessName} />
          </p>
          <p className="mt-2 text-sm">{config.tagline}</p>
          <p className="mt-1 text-sm text-slate-400">{config.mission}</p>
        </div>
        <div>
          <p className="font-semibold text-white">{ui.footer.serviceArea}</p>
          <ul className="mt-2 space-y-1 text-sm">
            {config.serviceAreaCities.map((city) => (
              <li key={city}>{city}, GA</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">{ui.footer.contact}</p>
          <p className="mt-2 text-sm text-white">{config.ownerName}</p>
          <a href={`tel:${config.phone}`} className="mt-1 block text-sm hover:text-white">
            {config.phoneDisplay}
          </a>
          <a href={`mailto:${config.email}`} className="mt-1 block text-sm hover:text-white">
            {config.email}
          </a>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-500">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <span>
            © {year} <BusinessName name={config.businessName} />. {ui.footer.rights}
          </span>
          <span className="text-slate-700" aria-hidden="true">
            ·
          </span>
          <a
            href="https://dawsonpent.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition hover:text-slate-300"
          >
            Built by Dawson Pent
          </a>
        </div>
      </div>
    </footer>
  );
}

export function MobileCallBar() {
  const { locale } = useLocale();
  const config = siteConfig[locale];
  const ui = getUi(locale);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-3 border-t border-slate-200 bg-white shadow-lg md:hidden">
      <a
        href={`tel:${config.phone}`}
        className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-slate-800"
      >
        <Phone className="h-5 w-5 text-amber-600" />
        {ui.cta.call}
      </a>
      <a
        href={`sms:${config.sms}`}
        className="flex flex-col items-center gap-1 border-x border-slate-100 py-3 text-xs font-semibold text-slate-800"
      >
        <MessageCircle className="h-5 w-5 text-amber-600" />
        {ui.cta.text}
      </a>
      <a
        href={sectionHref(locale, "contact")}
        className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-amber-700"
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-[10px] text-white">
          ✉
        </span>
        {ui.cta.contact}
      </a>
    </div>
  );
}
