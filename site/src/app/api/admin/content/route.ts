import { NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/auth";
import { seeds, saveContentBlock } from "@/lib/content";
import { getSiteConfig, getProjects, getServices, getTestimonials, getNews } from "@/lib/content";
import type { Locale } from "@/lib/i18n/config";
import { isLocale } from "@/lib/i18n/config";

async function getEffectiveContent(key: keyof typeof seeds, locale: Locale) {
  switch (key) {
    case "siteConfig":
      return getSiteConfig(locale);
    case "projects":
      return getProjects(locale);
    case "services":
      return getServices(locale);
    case "testimonials":
      return getTestimonials(locale);
    case "news":
      return getNews(locale);
  }
}

export async function GET(request: Request) {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key") as keyof typeof seeds | null;
  const locale = searchParams.get("locale");

  if (key && locale && isLocale(locale)) {
    const content = await getEffectiveContent(key, locale);
    return NextResponse.json({ content });
  }

  return NextResponse.json({ seeds });
}

export async function PUT(request: Request) {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = (await request.json()) as {
    key: keyof typeof seeds;
    locale: Locale;
    data: unknown;
  };
  if (!body.key || !isLocale(body.locale)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
  await saveContentBlock(body.key, body.locale, body.data);
  return NextResponse.json({ ok: true });
}
