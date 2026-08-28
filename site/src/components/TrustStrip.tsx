import type { SiteConfig } from "@/lib/content";
import type { Locale } from "@/lib/i18n/config";
import { getUi } from "@/lib/i18n/ui";

export function TrustStrip({
  config,
  locale,
}: {
  config: SiteConfig;
  locale: Locale;
}) {
  const t = getUi(locale).trust as Record<string, string>;

  const items = [
    `${config.googleRating} ★ Google · ${config.googleReviewCount} ${t.reviews}`,
    `${config.projectCount}+ ${t.projects}`,
    `${t.licensePrefix} ${config.licenseNumber}`,
    `${config.yearsExperience} ${t.years}`,
    config.warrantyTerm,
  ];

  return (
    <div className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-3 text-center text-xs font-semibold tracking-wide text-slate-700 sm:text-sm">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-6">
            {i > 0 && <span className="hidden text-slate-300 sm:inline">·</span>}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
