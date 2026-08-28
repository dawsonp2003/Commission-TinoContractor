/** Ensures LLC always displays in caps regardless of source data. */
export function formatBusinessName(name: string): string {
  return name
    .replace(/L\.?\s*L\.?\s*C\.?/gi, "LLC")
    .replace(/\bllc\b/gi, "LLC");
}
