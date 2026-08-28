import { headers } from "next/headers";
import { Header } from "@/components/Header";
import { Footer, MobileCallBar } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import { getSiteConfig } from "@/lib/content";
import type { Locale } from "@/lib/i18n/config";
import { defaultLocale, isLocale } from "@/lib/i18n/config";

async function getLocaleAndPath(): Promise<{ locale: Locale; path: string }> {
  const h = await headers();
  const localeHeader = h.get("x-locale");
  const pathHeader = h.get("x-path") ?? "/";
  const locale = localeHeader && isLocale(localeHeader) ? localeHeader : defaultLocale;
  return { locale, path: pathHeader };
}

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locale, path } = await getLocaleAndPath();
  const config = await getSiteConfig(locale);

  return (
    <>
      <LanguageProvider locale={locale} path={path} />
      <Header locale={locale} config={config} path={path} />
      <main className="flex-1 pb-safe">{children}</main>
      <Footer locale={locale} config={config} />
      <MobileCallBar locale={locale} config={config} />
    </>
  );
}
