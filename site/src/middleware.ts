import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale, stripLocale } from "@/lib/i18n/config";

const COOKIE_LOCALE = "preferred_locale";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const preferred = request.cookies.get(COOKIE_LOCALE)?.value;
  const { locale, path } = stripLocale(pathname);

  if (preferred && isLocale(preferred) && preferred !== locale) {
    const url = request.nextUrl.clone();
    url.pathname =
      preferred === defaultLocale
        ? path
        : path === "/"
          ? "/es"
          : `/es${path}`;
    return NextResponse.redirect(url);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);
  requestHeaders.set("x-path", path);
  requestHeaders.set("x-pathname", pathname);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
