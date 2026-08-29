import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { SetHtmlLang } from "@/components/SetHtmlLang";
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
    default: "TGR Utility Subcontractor LLC | Underground Utility Subcontractor",
    template: "%s | TGR Utility Subcontractor LLC",
  },
  description:
    "Tino Gutierrez — Underground utility subcontractor for general contractors in west Georgia and metro Atlanta. Sanitary, storm, and water. Bilingual EN/ES.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <SetHtmlLang />
        {children}
      </body>
    </html>
  );
}
