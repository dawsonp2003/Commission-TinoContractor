"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { localePath } from "@/lib/i18n/config";
import { sectionHref } from "@/lib/sections";
import { useLocale } from "@/lib/i18n/use-locale";
import { getUi } from "@/lib/i18n/ui";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/cn";
import { BusinessName } from "@/components/BusinessName";

export function Header() {
  const { locale } = useLocale();
  const config = siteConfig[locale];
  const ui = getUi(locale);
  const [open, setOpen] = useState(false);

  const links = [
    { id: "home", label: ui.nav.home },
    { id: "projects", label: ui.nav.projects },
    { id: "about", label: ui.nav.about },
    { id: "contact", label: ui.nav.contact },
  ];

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="relative mx-auto max-w-7xl px-4 py-3 lg:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href={localePath(locale, "/")} className="flex flex-col">
            <BusinessName
              name={config.businessName}
              className="text-lg font-bold tracking-tight text-slate-900"
            />
            <span className="text-xs text-amber-700">{config.ownerName}</span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <a
                key={link.id}
                href={sectionHref(locale, link.id)}
                className="text-sm font-medium text-slate-600 transition hover:text-amber-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${config.phone}`}
              className="hidden items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 sm:flex"
            >
              <Phone className="h-4 w-4" />
              {config.phoneDisplay}
            </a>
            <a
              href={sectionHref(locale, "contact")}
              className="hidden rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-700 md:inline-flex"
            >
              {ui.cta.contact}
            </a>
            <button
              type="button"
              className="rounded-lg p-2 text-slate-700 lg:hidden"
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              aria-label="Menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "absolute left-0 right-0 top-full overflow-hidden border-t border-slate-100 bg-white shadow-lg transition-[max-height,opacity] duration-300 ease-out lg:hidden",
            open ? "max-h-80 opacity-100" : "max-h-0 opacity-0 pointer-events-none",
          )}
        >
          <nav className="flex flex-col px-4 py-3">
            {links.map((link) => (
              <a
                key={link.id}
                href={sectionHref(locale, link.id)}
                className="border-b border-slate-50 py-3 text-sm font-medium text-slate-700"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
