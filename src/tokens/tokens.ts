// ═══════════════════════════════════════════════════════════
// MINTX DESIGN SYSTEM — TOKEN CONSTANTS (TypeScript)
// ═══════════════════════════════════════════════════════════

export const mintColors = {
  50: "#E6FBF5",
  100: "#BFFAE9",
  200: "#7DEFD2",
  300: "#3DDCBA",
  400: "#10C9A0", // ★ Primary
  500: "#00B38A",
  600: "#008F6E",
  700: "#006B52",
  800: "#004736",
  900: "#00231A",
} as const;

export const neutralColors = {
  0: "#FFFFFF",
  50: "#F5F8F7",
  100: "#EBF0EE",
  150: "#D8E0DE",
  200: "#C2CECA",
  300: "#9BACA6",
  400: "#748A83",
  500: "#55706A",
  600: "#3A524D",
  700: "#253733",
  800: "#141F1D",
  850: "#0D1614",
  900: "#080E0D",
  950: "#040807",
} as const;

export const semanticColors = {
  green: { 400: "#22C55E", 500: "#16A34A" },
  red: { 400: "#F87171", 500: "#DC2626" },
  amber: { 400: "#FBBF24", 500: "#D97706" },
  blue: { 400: "#60A5FA", 500: "#2563EB" },
  purple: { 400: "#A78BFA" },
} as const;

export const spacing = {
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
  20: "80px",
} as const;

export const radius = {
  xs: "4px",
  sm: "6px",
  md: "10px",
  lg: "14px",
  xl: "20px",
  "2xl": "28px",
  full: "9999px",
} as const;

export const typography = {
  fontDisplay: "'Syne', sans-serif",
  fontBody: "'DM Sans', sans-serif",
  fontMono: "'DM Mono', monospace",
  scale: {
    xs: "11px",
    sm: "13px",
    base: "15px",
    lg: "17px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "38px",
    "5xl": "48px",
    "6xl": "60px",
  },
} as const;

export const motion = {
  easeOut: "cubic-bezier(0.16, 1, 0.3, 1)",
  easeSpring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  easeSmooth: "cubic-bezier(0.4, 0, 0.2, 1)",
  fast: "120ms",
  base: "200ms",
  slow: "350ms",
  page: "600ms",
} as const;

// Type exports
export type MintShade = keyof typeof mintColors;
export type NeutralShade = keyof typeof neutralColors;
export type SpacingKey = keyof typeof spacing;
export type RadiusKey = keyof typeof radius;
export type TextSizeKey = keyof typeof typography.scale;
