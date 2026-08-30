export async function translateText(
  text: string,
  from: "en" | "es",
  to: "en" | "es",
): Promise<string> {
  if (!text.trim() || from === to) return text;

  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`;
    const res = await fetch(url);
    if (!res.ok) return text;
    const data = (await res.json()) as { responseData?: { translatedText?: string } };
    return data.responseData?.translatedText ?? text;
  } catch {
    return text;
  }
}

export type ContactPayload = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  body: string;
  locale: "en" | "es";
};

export async function buildBilingualEmail(payload: ContactPayload): Promise<string> {
  const fromLang = payload.locale;
  const toLang = fromLang === "en" ? "es" : "en";
  const translatedMessage = await translateText(payload.body, fromLang, toLang);

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
  const transLabels = fromLang === "en" ? esLabels : enLabels;

  return [
    "New contact form submission from tgr-utility-subcontractor.com",
    "",
    `--- ${labels.name} / ${transLabels.name} ---`,
    `Name / Nombre: ${payload.name}`,
    `Company / Empresa: ${payload.company || "—"}`,
    `Email / Correo: ${payload.email}`,
    `Phone / Teléfono: ${payload.phone || "—"}`,
    "",
    `--- ${labels.message} ---`,
    payload.body,
    "",
    `--- ${labels.translation} ---`,
    translatedMessage,
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
