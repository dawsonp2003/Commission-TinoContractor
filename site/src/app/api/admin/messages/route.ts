import { NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { translateText } from "@/lib/translate";
import type { Locale } from "@/lib/i18n/config";

export async function GET() {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const messages = await prisma.message.findMany({
    include: { replies: true },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ messages });
}

export async function POST(request: Request) {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { messageId, body, fromLocale } = (await request.json()) as {
    messageId: string;
    body: string;
    fromLocale: Locale;
  };

  const message = await prisma.message.findUnique({ where: { id: messageId } });
  if (!message) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const targetLocale: Locale = message.locale === "en" ? "es" : "en";
  const bodyTranslated = await translateText(body, fromLocale, targetLocale);

  const reply = await prisma.reply.create({
    data: {
      messageId,
      body,
      bodyTranslated,
      fromLocale,
    },
  });

  await prisma.message.update({
    where: { id: messageId },
    data: { status: "replied" },
  });

  return NextResponse.json({ reply });
}
