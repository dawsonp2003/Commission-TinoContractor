type Lang = "en" | "es";

async function translateWithMyMemory(text: string, from: Lang, to: Lang): Promise<string | null> {
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = (await res.json()) as {
      responseData?: { translatedText?: string };
      responseStatus?: number;
      responseDetails?: string;
    };
    if (data.responseStatus !== 200) return null;
    if (data.responseDetails?.includes("MYMEMORY WARNING")) return null;
    const translated = data.responseData?.translatedText?.trim();
    if (!translated) return null;
    return translated;
  } catch {
    return null;
  }
}

async function translateWithGoogle(text: string, from: Lang, to: Lang): Promise<string | null> {
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(text)}`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = (await res.json()) as [Array<[string]>, ...unknown[]];
    const translated = data[0]?.map((part) => part[0]).join("").trim();
    return translated || null;
  } catch {
    return null;
  }
}

function isSameTranslation(source: string, translated: string): boolean {
  return source.trim().toLowerCase() === translated.trim().toLowerCase();
}

export async function translateText(text: string, from: Lang, to: Lang): Promise<string> {
  if (!text.trim() || from === to) return text;

  const providers = [
    () => translateWithMyMemory(text, from, to),
    () => translateWithGoogle(text, from, to),
  ];

  for (const provider of providers) {
    const translated = await provider();
    if (translated && !isSameTranslation(text, translated)) {
      return translated;
    }
  }

  return text;
}

export type ContactPayload = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  body: string;
  locale: Lang;
};

export async function buildBilingualEmail(payload: ContactPayload): Promise<string> {
  const fromLang = payload.locale;
  const toLang = fromLang === "en" ? "es" : "en";
  const translatedMessage = await translateText(payload.body, fromLang, toLang);
  const translationNote = isSameTranslation(payload.body, translatedMessage)
    ? "(Auto-translation unavailable)"
    : translatedMessage;

  const enLabels = {
    name: "Name",
    company: "Company / GC",
    email: "Email",
    phone: "Phone",
    message: "Message",
    translation: "Translation (Spanish)",
  };
  const esLabels = {
    name: "Nombre",
    company: "Empresa / CG",
    email: "Correo",
    phone: "Teléfono",
    message: "Mensaje",
    translation: "Traducción (Inglés)",
  };

  const labels = fromLang === "en" ? enLabels : esLabels;

  return [
    "New contact form submission from tgr-utility-subcontractor.com",
    "",
    `--- ${labels.name} / ${esLabels.name} ---`,
    `Name / Nombre: ${payload.name}`,
    `Company / Empresa: ${payload.company || "—"}`,
    `Email / Correo: ${payload.email}`,
    `Phone / Teléfono: ${payload.phone || "—"}`,
    "",
    `--- ${labels.message} ---`,
    payload.body,
    "",
    `--- ${labels.translation} ---`,
    translationNote,
    "",
    `Submitted in: ${fromLang === "en" ? "English" : "Spanish"}`,
  ].join("\n");
}

export async function submitContactForm(payload: ContactPayload): Promise<void> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    throw new Error("NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not configured");
  }

  const message = await buildBilingualEmail(payload);
  const subject = `Job Inquiry from ${payload.name}${payload.company ? ` (${payload.company})` : ""}`;

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject,
      from_name: payload.name,
      email: payload.email,
      message,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to send email");
  }

  const data = (await res.json()) as { success?: boolean };
  if (!data.success) {
    throw new Error("Email provider rejected the request");
  }
}
