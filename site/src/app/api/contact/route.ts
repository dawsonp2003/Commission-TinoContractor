import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  audience: z.string().optional(),
  body: z.string().min(1),
  locale: z.enum(["en", "es"]),
});

export async function POST(request: Request) {
  try {
    const data = schema.parse(await request.json());
    await prisma.message.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone ?? null,
        audience: data.audience ?? null,
        body: data.body,
        locale: data.locale,
      },
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
