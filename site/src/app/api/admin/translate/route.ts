import { NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/auth";
import { translateText } from "@/lib/translate";
import type { Locale } from "@/lib/i18n/config";

export async function POST(request: Request) {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { text, from, to } = (await request.json()) as {
    text: string;
    from: Locale;
    to: Locale;
  };
  const translated = await translateText(text, from, to);
  return NextResponse.json({ translated });
}
