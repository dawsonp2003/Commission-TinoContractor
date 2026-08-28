"use client";

import { usePathname } from "next/navigation";
import { stripLocale, type Locale } from "./config";

export function useLocale(): { locale: Locale; path: string } {
  const pathname = usePathname() ?? "/";
  return stripLocale(pathname);
}
