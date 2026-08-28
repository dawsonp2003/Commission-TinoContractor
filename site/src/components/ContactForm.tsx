"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { getUi } from "@/lib/i18n/ui";

type Props = {
  locale: Locale;
};

export function ContactForm({ locale }: Props) {
  const ui = getUi(locale);
  const contact = ui.contact as Record<string, string>;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center text-green-800">
        {contact.success}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            {contact.name}
          </label>
          <input
            name="name"
            required
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            {contact.phone}
          </label>
          <input
            name="phone"
            type="tel"
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
          />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          {contact.email}
        </label>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          {contact.audience}
        </label>
        <select
          name="audience"
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
        >
          <option value="homeowner">{contact.audienceHome}</option>
          <option value="commercial">{contact.audienceCommercial}</option>
        </select>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          {contact.message}
        </label>
        <textarea
          name="body"
          required
          rows={4}
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600">{contact.error}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-amber-600 py-3 text-sm font-semibold text-white transition hover:bg-amber-700 disabled:opacity-60 sm:w-auto sm:px-8"
      >
        {status === "loading" ? "..." : contact.submit}
      </button>
    </form>
  );
}
