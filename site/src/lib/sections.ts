import type { Locale } from "@/lib/i18n/config";

export function sectionHref(locale: Locale, id: string): string {
  return locale === "es" ? `/es#${id}` : `/#${id}`;
}
