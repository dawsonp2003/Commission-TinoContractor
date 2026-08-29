"use client";

import Image from "next/image";
import { useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Project } from "@/lib/content";
import { getUi } from "@/lib/i18n/ui";

const MOBILE_INITIAL = 3;

type Props = {
  locale: Locale;
  projects: Project[];
};

export function ProjectGrid({ locale, projects }: Props) {
  const [expanded, setExpanded] = useState(false);
  const home = getUi(locale).home as Record<string, string>;
  const hasMore = projects.length > MOBILE_INITIAL;

  return (
    <>
      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className={`overflow-hidden rounded-xl bg-slate-50 ring-1 ring-slate-200 ${
              !expanded && index >= MOBILE_INITIAL ? "hidden lg:block" : ""
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                {project.city} · {project.year}
              </p>
              <h3 className="mt-1 font-semibold text-slate-900">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{project.summary}</p>
            </div>
          </article>
        ))}
      </div>
      {hasMore && (
        <div className="mt-8 text-center lg:hidden">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-amber-500 hover:text-amber-700"
          >
            {expanded ? home.projectsShowLess : home.projectsShowMore}
          </button>
        </div>
      )}
    </>
  );
}
