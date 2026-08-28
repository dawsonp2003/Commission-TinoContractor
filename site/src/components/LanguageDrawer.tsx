"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/config";
import { useLocale } from "@/lib/i18n/use-locale";
import { cn } from "@/lib/cn";

const COOKIE_LOCALE = "preferred_locale";
const COOKIE_BANNER = "lang_banner_dismissed";

/** Prompt is written in the language being offered, not the current site language. */
const SWITCH_PROMPT: Record<Locale, string> = {
  en: "¿Prefiere español?",
  es: "Prefer English?",
};

const SWITCH_CONFIRM: Record<Locale, string> = {
  es: "Sí",
  en: "Yes",
};

/** Dismiss label matches the language of the prompt. */
const SWITCH_DISMISS: Record<Locale, string> = {
  en: "No",
  es: "No",
};

function setCookie(name: string, value: string, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/;SameSite=Lax`;
}

function getBannerDismissed(): boolean {
  return document.cookie
    .split("; ")
    .some((c) => c.startsWith(`${COOKIE_BANNER}=`));
}

export function LanguageDrawer() {
  const router = useRouter();
  const { locale, path } = useLocale();
  const targetLocale: Locale = locale === "en" ? "es" : "en";
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const toggle = useCallback(() => {
    setOpen((prev) => {
      const next = !prev;
      if (!next) {
        setCookie(COOKIE_BANNER, `dismissed-${locale}`);
      }
      return next;
    });
  }, [locale]);

  const dismiss = useCallback(() => {
    setOpen(false);
    setCookie(COOKIE_BANNER, `dismissed-${locale}`);
  }, [locale]);

  useEffect(() => {
    setMounted(true);
    if (getBannerDismissed()) return;

    const openTimer = setTimeout(() => setOpen(true), 400);
    const closeTimer = setTimeout(() => {
      setOpen(false);
      setCookie(COOKIE_BANNER, `dismissed-${locale}`);
    }, 5400);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    };
  }, [locale]);

  const switchLanguage = () => {
    setCookie(COOKIE_LOCALE, targetLocale);
    setCookie(COOKIE_BANNER, `switched-to-${targetLocale}`);
    setOpen(false);
    router.push(localePath(targetLocale, path));
    router.refresh();
  };

  if (!mounted) return null;

  const message = SWITCH_PROMPT[locale];
  const yesLabel = SWITCH_CONFIRM[targetLocale];
  const noLabel = SWITCH_DISMISS[locale];

  return (
    <div
      className="fixed right-0 top-[30%] z-[100] flex items-center"
      role="region"
      aria-label="Language preference"
    >
      <div
        className={cn(
          "transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none",
          open ? "translate-x-0" : "translate-x-full pointer-events-none",
        )}
      >
        <div className="flex items-center gap-2.5 rounded-l-2xl border border-r-0 border-slate-200/90 bg-white py-2 pl-3.5 pr-2 shadow-xl shadow-slate-900/10">
          <p className="max-w-[10rem] text-xs font-medium leading-snug text-slate-800 sm:max-w-[11rem] sm:text-sm">
            {message}
          </p>
          <div className="flex shrink-0 items-center gap-1.5">
            <button
              type="button"
              onClick={dismiss}
              className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-100"
            >
              {noLabel}
            </button>
            <button
              type="button"
              onClick={switchLanguage}
              className="rounded-md bg-amber-600 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-amber-700"
            >
              {yesLabel}
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-label={open ? "Hide language options" : "Show language options"}
        title="Language / Idioma"
        className={cn(
          "relative -ml-px flex h-[4.75rem] w-[1.125rem] shrink-0 items-center justify-center",
          "rounded-l-full bg-amber-600 shadow-lg shadow-amber-900/20",
          "transition-colors hover:bg-amber-700 active:bg-amber-800",
          open && "bg-amber-700",
        )}
      >
        <span
          className="flex flex-col items-center gap-1 text-[8px] font-bold leading-none tracking-wide"
          aria-hidden
        >
          <span className={cn(locale === "en" ? "text-white" : "text-white/35")}>EN</span>
          <span className="h-px w-2.5 bg-white/40" />
          <span className={cn(locale === "es" ? "text-white" : "text-white/35")}>ES</span>
        </span>
      </button>
    </div>
  );
}
