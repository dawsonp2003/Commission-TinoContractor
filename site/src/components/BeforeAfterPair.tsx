type Props = {
  before: string;
  after: string;
  alt: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export function BeforeAfterPair({
  before,
  after,
  alt,
  beforeLabel = "Before",
  afterLabel = "After",
}: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <figure className="rounded-xl ring-1 ring-slate-200">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={before}
          alt={`${alt} — ${beforeLabel}`}
          width={800}
          height={600}
          className="aspect-[4/3] w-full rounded-t-xl object-cover"
          loading="lazy"
          decoding="async"
        />
        <figcaption className="rounded-b-xl bg-slate-100 px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide text-slate-600">
          {beforeLabel}
        </figcaption>
      </figure>
      <figure className="rounded-xl ring-1 ring-slate-200">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={after}
          alt={`${alt} — ${afterLabel}`}
          width={800}
          height={600}
          className="aspect-[4/3] w-full rounded-t-xl object-cover"
          loading="lazy"
          decoding="async"
        />
        <figcaption className="rounded-b-xl bg-slate-100 px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide text-slate-600">
          {afterLabel}
        </figcaption>
      </figure>
    </div>
  );
}
