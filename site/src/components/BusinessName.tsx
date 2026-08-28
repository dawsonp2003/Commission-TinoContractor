import { cn } from "@/lib/cn";
import { formatBusinessName } from "@/lib/format";

type Props = {
  name: string;
  className?: string;
};

/** Renders business name with LLC always shown in caps (no text-transform — avoids small-caps fonts). */
export function BusinessName({ name, className }: Props) {
  const base = formatBusinessName(name).replace(/\s*\bLLC\b\s*$/i, "").trim();

  return (
    <span className={cn(className, "whitespace-nowrap normal-case")}>
      {base} LLC
    </span>
  );
}
