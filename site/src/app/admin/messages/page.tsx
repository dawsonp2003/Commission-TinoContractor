"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeftRight } from "lucide-react";

type Reply = {
  id: string;
  body: string;
  bodyTranslated: string | null;
  fromLocale: string;
  createdAt: string;
};

type Message = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  locale: string;
  audience: string | null;
  body: string;
  status: string;
  createdAt: string;
  replies: Reply[];
};

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selected, setSelected] = useState<Message | null>(null);
  const [reply, setReply] = useState("");
  const [translated, setTranslated] = useState("");
  const [fromLocale, setFromLocale] = useState<"en" | "es">("en");

  const load = useCallback(async () => {
    const res = await fetch("/api/admin/messages");
    if (res.status === 401) {
      window.location.href = "/admin/login";
      return;
    }
    const data = await res.json();
    setMessages(data.messages);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    if (selected) {
      setFromLocale(selected.locale === "es" ? "es" : "en");
    }
  }, [selected]);

  async function translateReply() {
    if (!reply.trim()) return;
    const to = fromLocale === "en" ? "es" : "en";
    const res = await fetch("/api/admin/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: reply, from: fromLocale, to }),
    });
    const data = await res.json();
    setTranslated(data.translated);
  }

  async function sendReply() {
    if (!selected || !reply.trim()) return;
    await fetch("/api/admin/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messageId: selected.id,
        body: reply,
        fromLocale,
      }),
    });
    setReply("");
    setTranslated("");
    load();
    setSelected(null);
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b border-slate-200 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center gap-4">
          <Link href="/admin" className="text-sm text-amber-700 hover:underline">
            ← Dashboard
          </Link>
          <h1 className="text-lg font-bold">Messages</h1>
        </div>
      </header>
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 lg:grid-cols-2">
        <div className="space-y-3">
          {messages.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setSelected(m)}
              className={`w-full rounded-xl border p-4 text-left transition ${
                selected?.id === m.id
                  ? "border-amber-400 bg-amber-50"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">{m.name}</span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs uppercase">
                  {m.locale}
                </span>
              </div>
              <p className="mt-1 truncate text-sm text-slate-600">{m.body}</p>
              <p className="mt-1 text-xs text-slate-400">
                {new Date(m.createdAt).toLocaleString()} · {m.status}
              </p>
            </button>
          ))}
          {messages.length === 0 && (
            <p className="text-center text-slate-500">No messages yet.</p>
          )}
        </div>

        {selected && (
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="font-semibold">{selected.name}</h2>
            <p className="text-sm text-slate-500">
              {selected.email} · {selected.phone ?? "no phone"}
            </p>
            <div className="mt-4 rounded-lg bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase text-slate-400">
                Customer message ({selected.locale})
              </p>
              <p className="mt-2 text-slate-800">{selected.body}</p>
            </div>

            {selected.replies.map((r) => (
              <div key={r.id} className="mt-4 rounded-lg bg-amber-50 p-4">
                <p className="text-xs font-semibold uppercase text-amber-700">Your reply</p>
                <p className="mt-1 text-sm">{r.body}</p>
                {r.bodyTranslated && (
                  <p className="mt-2 border-t border-amber-200 pt-2 text-sm text-slate-600">
                    <ArrowLeftRight className="mr-1 inline h-3 w-3" />
                    {r.bodyTranslated}
                  </p>
                )}
              </div>
            ))}

            <div className="mt-6">
              <label className="text-sm font-medium text-slate-700">
                Reply ({fromLocale === "en" ? "English" : "Spanish"})
              </label>
              <textarea
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                rows={4}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              />
              <div className="mt-2 flex gap-2">
                <button
                  type="button"
                  onClick={translateReply}
                  className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50"
                >
                  Translate preview
                </button>
                <button
                  type="button"
                  onClick={sendReply}
                  className="rounded-lg bg-amber-600 px-4 py-1.5 text-sm font-semibold text-white hover:bg-amber-700"
                >
                  Send Reply
                </button>
              </div>
              {translated && (
                <div className="mt-3 rounded-lg bg-slate-50 p-3 text-sm text-slate-700">
                  <span className="font-semibold">Translation preview: </span>
                  {translated}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
