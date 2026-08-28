import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/config";

export type ProjectFrom = "home" | "residential" | "commercial";

export function projectHref(locale: Locale, slug: string, from: ProjectFrom): string {
  return `${localePath(locale, `/projects/${slug}`)}?from=${from}`;
}

export function backHref(locale: Locale, from: ProjectFrom | null): string {
  switch (from) {
    case "residential":
      return localePath(locale, "/residential");
    case "commercial":
      return localePath(locale, "/commercial");
    case "home":
    default:
      return localePath(locale, "/");
  }
}

export function backLabel(locale: Locale, from: ProjectFrom | null): string {
  const isEs = locale === "es";
  switch (from) {
    case "residential":
      return isEs ? "Volver a Residencial" : "Back to Residential";
    case "commercial":
      return isEs ? "Volver a Comercial" : "Back to Commercial";
    case "home":
      return isEs ? "Volver al inicio" : "Back to Home";
    default:
      return isEs ? "Volver" : "Back";
  }
}
