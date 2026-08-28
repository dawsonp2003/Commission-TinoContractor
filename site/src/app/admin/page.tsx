import Link from "next/link";
import { redirect } from "next/navigation";
import { verifyAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { LogoutButton } from "@/components/admin/LogoutButton";

export default async function AdminDashboard() {
  if (!(await verifyAdminSession())) redirect("/admin/login");

  const messageCount = await prisma.message.count();
  const newCount = await prisma.message.count({ where: { status: "new" } });

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b border-slate-200 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h1 className="text-lg font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-amber-700 hover:underline">
              View Site
            </Link>
            <LogoutButton />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/admin/messages"
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
          >
            <h2 className="text-lg font-semibold">Messages</h2>
            <p className="mt-2 text-3xl font-bold text-amber-700">{messageCount}</p>
            <p className="text-sm text-slate-500">{newCount} new</p>
          </Link>
          <Link
            href="/admin/content"
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
          >
            <h2 className="text-lg font-semibold">Edit Content</h2>
            <p className="mt-2 text-sm text-slate-600">
              Update site config, projects, testimonials, and more.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
