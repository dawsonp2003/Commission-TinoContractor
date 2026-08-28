"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { LanguageBanner, LanguageToggleButton } from "./LanguageBanner";

export function LanguageProvider({
  locale,
  path,
}: {
  locale: Locale;
  path: string;
}) {
  const [forceBanner, setForceBanner] = useState(false);

  return (
    <>
      <div className="fixed bottom-20 right-4 z-[99] md:bottom-6">
        <LanguageToggleButton onClick={() => setForceBanner(true)} />
      </div>
      <LanguageBanner
        locale={locale}
        path={path}
        forceOpen={forceBanner}
        onForceClose={() => setForceBanner(false)}
      />
    </>
  );
}
