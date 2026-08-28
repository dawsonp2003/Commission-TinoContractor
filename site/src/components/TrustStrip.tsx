"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import type { SiteConfig } from "@/lib/content";

type Props = {
  before: string;
  after: string;
  alt: string;
};

export function BeforeAfterSlider({ before, after, alt }: Props) {
  return (
    <div className="overflow-hidden rounded-xl shadow-lg">
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={before} alt={`${alt} before`} />}
        itemTwo={<ReactCompareSliderImage src={after} alt={`${alt} after`} />}
        className="aspect-[4/3] w-full"
      />
    </div>
  );
}

export function TrustStrip({ config }: { config: SiteConfig }) {
  const items = [
    `${config.googleRating} ★ Google · ${config.googleReviewCount} Reviews`,
    `${config.projectCount}+ Projects`,
    `GA Lic. ${config.licenseNumber}`,
    `${config.yearsExperience} Years`,
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
