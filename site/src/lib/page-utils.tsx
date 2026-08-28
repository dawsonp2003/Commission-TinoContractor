import type { Locale } from "@/lib/i18n/config";

export function pageMeta(locale: Locale, en: string, es: string) {
  return locale === "en" ? en : es;
}

export function makeLocalePages<T extends Record<string, unknown>>(
  View: React.ComponentType<{ locale: Locale } & T>,
  extraProps?: T,
) {
  return {
    En: function EnPage() {
      return <View locale="en" {...(extraProps as T)} />;
    },
    Es: function EsPage() {
      return <View locale="es" {...(extraProps as T)} />;
    },
  };
}
