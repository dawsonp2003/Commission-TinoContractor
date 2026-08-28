"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/config";
import { getUi } from "@/lib/i18n/ui";
import { cn } from "@/lib/cn";

const COOKIE_LOCALE = "preferred_locale";
const COOKIE_BANNER = "lang_banner_dismissed";

function setCookie(name: string, value: string, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/;SameSite=Lax`;
}

type Props = {
  locale: Locale;
  path: string;
  forceOpen?: boolean;
  onForceClose?: () => void;
};

export function LanguageBanner({ locale, path, forceOpen, onForceClose }: Props) {
  const router = useRouter();
  const ui = getUi(locale);
  const targetLocale: Locale = locale === "en" ? "es" : "en";
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  const dismiss = useCallback(
    (switched: boolean) => {
      setClosing(true);
      setCookie(COOKIE_BANNER, switched ? `switched-to-${targetLocale}` : `dismissed-${locale}`);
      setTimeout(() => {
        setVisible(false);
        setClosing(false);
        onForceClose?.();
      }, 400);
    },
    [locale, targetLocale, onForceClose],
  );

  useEffect(() => {
    if (forceOpen) {
      setVisible(true);
      setClosing(false);
      return;
    }
    const bannerCookie = document.cookie
      .split("; ")
      .find((c) => c.startsWith(`${COOKIE_BANNER}=`))
      ?.split("=")[1];
    if (bannerCookie) return;

    const timer = setTimeout(() => setVisible(true), 300);
    const autoClose = setTimeout(() => dismiss(false), 5300);
    return () => {
      clearTimeout(timer);
      clearTimeout(autoClose);
    };
  }, [forceOpen, dismiss]);

  const switchLanguage = () => {
    setCookie(COOKIE_LOCALE, targetLocale);
    setCookie(COOKIE_BANNER, `switched-to-${targetLocale}`);
    router.push(localePath(targetLocale, path));
  };

  if (!visible && !forceOpen) return null;

  const message = locale === "en" ? ui.lang.bannerEn : ui.lang.bannerEs;
  const yesLabel = locale === "en" ? ui.lang.yes : ui.lang.yesEn;

  return (
    <div
      className={cn(
        "fixed top-4 right-4 z-[100] max-w-xs transition-all duration-400 ease-in-out",
        closing ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100",
      )}
      role="dialog"
      aria-label="Language preference"
    >
      <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg shadow-slate-900/10">
        <p className="flex-1 text-sm font-medium text-slate-800">{message}</p>
        <button
          type="button"
          onClick={switchLanguage}
          className="rounded-lg bg-amber-600 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-amber-700"
        >
          {yesLabel}
        </button>
        <button
          type="button"
          onClick={() => dismiss(false)}
          className="rounded-lg p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export function LanguageToggleButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-sm font-bold text-slate-700 shadow-sm backdrop-blur transition hover:border-amber-400 hover:text-amber-700"
      aria-label="Change language"
      title="Language / Idioma"
    >
      EN/ES
    </button>
  );
}
