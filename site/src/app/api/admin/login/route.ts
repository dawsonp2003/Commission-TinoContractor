import { NextResponse } from "next/server";
import { createAdminSession, verifyPassword } from "@/lib/auth";

export async function POST(request: Request) {
  const { password } = (await request.json()) as { password?: string };
  if (!password || !verifyPassword(password)) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }
  await createAdminSession();
  return NextResponse.json({ ok: true });
}
