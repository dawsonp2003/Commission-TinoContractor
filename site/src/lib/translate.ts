import type { Locale } from "./i18n/config";

const PAIRS: Record<string, string> = {
  hello: "hola",
  "thank you": "gracias",
  project: "proyecto",
  kitchen: "cocina",
  bathroom: "baño",
  estimate: "presupuesto",
  quote: "cotización",
  repair: "reparación",
  remodel: "remodelación",
  home: "casa",
  commercial: "comercial",
  residential: "residencial",
  emergency: "emergencia",
  water: "agua",
  sewer: "alcantarillado",
  storm: "tormenta",
  drain: "drenaje",
  permit: "permiso",
  license: "licencia",
  warranty: "garantía",
  schedule: "programar",
  call: "llamar",
  contact: "contacto",
  message: "mensaje",
  "as soon as possible": "lo antes posible",
  "when can you start": "cuándo puede empezar",
  "how much": "cuánto cuesta",
  "interested in": "interesado en",
  "looking for": "busco",
  "need help with": "necesito ayuda con",
  "thank you for reaching out": "gracias por comunicarse",
  "we will get back to you": "nos pondremos en contacto pronto",
  yes: "sí",
  no: "no",
};

function swapDirection(text: string, to: Locale): string {
  const lower = text.toLowerCase();
  if (to === "es") {
    for (const [en, es] of Object.entries(PAIRS)) {
      if (lower.includes(en)) {
        return text.replace(new RegExp(en, "gi"), (m) =>
          m[0] === m[0].toUpperCase()
            ? es.charAt(0).toUpperCase() + es.slice(1)
            : es,
        );
      }
    }
    return `[ES] ${text}`;
  }
  for (const [en, es] of Object.entries(PAIRS)) {
    if (lower.includes(es)) {
      return text.replace(new RegExp(es, "gi"), (m) =>
        m[0] === m[0].toUpperCase()
          ? en.charAt(0).toUpperCase() + en.slice(1)
          : en,
      );
    }
  }
  return `[EN] ${text}`;
}

export async function translateText(
  text: string,
  from: Locale,
  to: Locale,
): Promise<string> {
  if (from === to) return text;

  const libreUrl = process.env.LIBRETRANSLATE_URL;
  if (libreUrl) {
    try {
      const res = await fetch(`${libreUrl}/translate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          q: text,
          source: from,
          target: to,
          format: "text",
        }),
      });
      if (res.ok) {
        const data = (await res.json()) as { translatedText?: string };
        if (data.translatedText) return data.translatedText;
      }
    } catch {
      // fall through to demo translator
    }
  }

  return swapDirection(text, to);
}
