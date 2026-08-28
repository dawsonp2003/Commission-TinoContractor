"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import {
  backHref,
  backLabel,
  type ProjectFrom,
} from "@/lib/projects";

const VALID_FROM = new Set<ProjectFrom>(["home", "residential", "commercial"]);

function parseFrom(value: string | null): ProjectFrom | null {
  if (value && VALID_FROM.has(value as ProjectFrom)) {
    return value as ProjectFrom;
  }
  return null;
}

export function ProjectBackLink({ locale }: { locale: Locale }) {
  const searchParams = useSearchParams();
  const from = parseFrom(searchParams.get("from"));

  if (from) {
    return (
      <Link
        href={backHref(locale, from)}
        className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-800"
      >
        <ArrowLeft className="h-4 w-4" />
        {backLabel(locale, from)}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={() => window.history.back()}
      className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-800"
    >
      <ArrowLeft className="h-4 w-4" />
      {backLabel(locale, null)}
    </button>
  );
}
