type Props = {
  cities: string[];
};

export function ServiceAreaTags({ cities }: Props) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {cities.map((city) => (
        <span
          key={city}
          className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
        >
          {city}, GA
        </span>
      ))}
    </div>
  );
}
