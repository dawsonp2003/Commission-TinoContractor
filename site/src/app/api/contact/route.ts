import { NextResponse } from "next/server";
import { z } from "zod";
import { sendContactEmail } from "@/lib/contact-email";

const schema = z.object({
  name: z.string().min(1),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  body: z.string().min(1),
  locale: z.enum(["en", "es"]),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const data = schema.parse(json);
    await sendContactEmail(data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
