import { Header } from "@/components/Header";
import { Footer, MobileCallBar } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LanguageProvider />
      <Header />
      <main className="flex-1 pb-safe">{children}</main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
