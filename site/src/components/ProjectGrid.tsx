import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Project } from "@/lib/content";
import { projectHref, type ProjectFrom } from "@/lib/projects";

type Props = {
  projects: Project[];
  locale: Locale;
  from: ProjectFrom;
};

export function ProjectGrid({ projects, locale, from }: Props) {
  if (projects.length === 0) return null;

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={projectHref(locale, project.slug, from)}
          className="group overflow-hidden rounded-xl bg-white ring-1 ring-slate-200 transition hover:shadow-lg"
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
            <h3 className="mt-1 font-semibold text-slate-900 group-hover:text-amber-700">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{project.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
