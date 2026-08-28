import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/config";
import { getUi } from "@/lib/i18n/ui";
import type { SiteConfig } from "@/lib/content";

type Props = {
  locale: Locale;
  config: SiteConfig;
};

export function Footer({ locale, config }: Props) {
  const ui = getUi(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <div>
          <p className="text-lg font-bold text-white">{config.businessName}</p>
          <p className="mt-2 text-sm">{config.tagline}</p>
          <p className="mt-4 text-xs text-amber-400/90">{ui.footer.demo}</p>
        </div>
        <div>
          <p className="font-semibold text-white">{ui.footer.hours}</p>
          <p className="mt-2 text-sm">{config.hours}</p>
          <p className="mt-4 font-semibold text-white">License</p>
          <p className="text-sm">{config.licenseNumber}</p>
          <p className="text-sm">{config.licenseClassifications.join(" · ")}</p>
        </div>
        <div>
          <p className="font-semibold text-white">{ui.footer.serviceArea}</p>
          <p className="mt-2 text-sm leading-relaxed">
            {config.serviceAreaCities.slice(0, 8).join(" · ")} · …
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Contact</p>
          <a href={`tel:${config.phone}`} className="mt-2 block text-sm hover:text-white">
            {config.phoneDisplay}
          </a>
          <a href={`mailto:${config.email}`} className="mt-1 block text-sm hover:text-white">
            {config.email}
          </a>
          <p className="mt-2 text-sm">{config.address}</p>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-500">
        © {year} {config.businessName}. {ui.footer.rights}
      </div>
    </footer>
  );
}

export function MobileCallBar({ locale, config }: Props) {
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
      <Link
        href={localePath(locale, "/contact")}
        className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-amber-700"
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-[10px] text-white">
          ✓
        </span>
        {ui.cta.quote}
      </Link>
    </div>
  );
}
