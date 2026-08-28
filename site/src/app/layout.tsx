import type { Metadata } from "next";
import { headers } from "next/headers";
import { DM_Sans, Fraunces } from "next/font/google";
import { isLocale } from "@/lib/i18n/config";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Gutierrez Built LLC | Metro Atlanta Contractor",
    template: "%s | Gutierrez Built LLC",
  },
  description:
    "Licensed metro Atlanta contractor for residential remodels, commercial builds, and underground utility work. Bilingual service.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const h = await headers();
  const localeHeader = h.get("x-locale");
  const lang = localeHeader && isLocale(localeHeader) ? localeHeader : "en";

  return (
    <html lang={lang} className={`${dmSans.variable} ${fraunces.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">{children}</body>
    </html>
  );
}
