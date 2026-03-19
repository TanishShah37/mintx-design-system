// ═══════════════════════════════════════════════════════════
// MINTX — cn() utility (classnames merger)
// ═══════════════════════════════════════════════════════════

type ClassValue = string | undefined | null | false | ClassValue[];

export function cn(...args: ClassValue[]): string {
  return args
    .flat(Infinity as 0)
    .filter(Boolean)
    .join(" ");
}

// Variant builder helper
export function cv<V extends Record<string, string>>(
  base: string,
  variants: V,
  variant: keyof V,
): string {
  return cn(base, variants[variant]);
}
