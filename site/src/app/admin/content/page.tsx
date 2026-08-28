"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const CONTENT_KEYS = [
  "siteConfig",
  "projects",
  "services",
  "testimonials",
  "news",
] as const;

export default function AdminContentPage() {
  const [key, setKey] = useState<(typeof CONTENT_KEYS)[number]>("siteConfig");
  const [locale, setLocale] = useState<"en" | "es">("en");
  const [json, setJson] = useState("");
  const [status, setStatus] = useState<"idle" | "saved" | "error">("idle");

  const load = useCallback(async () => {
    const res = await fetch("/api/admin/content");
    if (res.status === 401) {
      window.location.href = "/admin/login";
      return;
    }
    const detail = await fetch(`/api/admin/content?key=${key}&locale=${locale}`);
    const data = await detail.json();
    setJson(JSON.stringify(data.content, null, 2));
  }, [key, locale]);

  useEffect(() => {
    load();
  }, [load]);

  async function save() {
    try {
      const parsed = JSON.parse(json);
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, locale, data: parsed }),
      });
      if (!res.ok) throw new Error("Save failed");
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b border-slate-200 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center gap-4">
          <Link href="/admin" className="text-sm text-amber-700 hover:underline">
            ← Dashboard
          </Link>
          <h1 className="text-lg font-bold">Edit Content</h1>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-4 flex flex-wrap gap-3">
          <select
            value={key}
            onChange={(e) => setKey(e.target.value as (typeof CONTENT_KEYS)[number])}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
          >
            {CONTENT_KEYS.map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value as "en" | "es")}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>
          <button
            type="button"
            onClick={save}
            className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700"
          >
            Save Changes
          </button>
          {status === "saved" && (
            <span className="self-center text-sm text-green-600">Saved!</span>
          )}
          {status === "error" && (
            <span className="self-center text-sm text-red-600">Invalid JSON or save failed</span>
          )}
        </div>
        <textarea
          value={json}
          onChange={(e) => setJson(e.target.value)}
          className="h-[70vh] w-full rounded-xl border border-slate-300 bg-white p-4 font-mono text-sm"
          spellCheck={false}
        />
        <p className="mt-2 text-xs text-slate-500">
          Edit JSON directly. Changes persist in the database and override seed content.
        </p>
      </main>
    </div>
  );
}
