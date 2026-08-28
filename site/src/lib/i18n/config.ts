export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale, path = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return clean === "/" ? "/" : clean;
  return clean === "/" ? "/es" : `/es${clean}`;
}

export function stripLocale(pathname: string): { locale: Locale; path: string } {
  if (pathname.startsWith("/es")) {
    const path = pathname.slice(3) || "/";
    return { locale: "es", path: path.startsWith("/") ? path : `/${path}` };
  }
  return { locale: "en", path: pathname || "/" };
}
