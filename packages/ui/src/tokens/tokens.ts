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
  // EXTEND existing with full color scales:
  green: { 300: "#86EFAC", 400: "#22C55E", 500: "#16A34A" },
  red: { 300: "#FCA5A5", 400: "#F87171", 500: "#DC2626" },
  
  // NEW COLOR FAMILIES:
  orange: { 300: "#FDBA74", 400: "#FB923C", 500: "#F97316", 600: "#EA580C" },
  amber: { 300: "#FCD34D", 400: "#FBBF24", 500: "#F59E0B", 600: "#D97706" },
  yellow: { 300: "#FDE047", 400: "#FACC15", 500: "#EAB308" },
  lime: { 300: "#BEF264", 400: "#A3E635", 500: "#84CC16" },
  cyan: { 300: "#67E8F9", 400: "#22D3EE", 500: "#06B6D4" },
  sky: { 300: "#7DD3FC", 400: "#38BDF8", 500: "#0EA5E9" },
  indigo: { 300: "#A5B4FC", 400: "#818CF8", 500: "#6366F1", 600: "#4F46E5" },
  violet: { 300: "#C4B5FD", 400: "#A78BFA", 500: "#8B5CF6", 600: "#7C3AED" },
  purple: { 300: "#D8B4FE", 400: "#C084FC", 500: "#A855F7" },
  pink: { 300: "#F9A8D4", 400: "#F472B6", 500: "#EC4899" },
  rose: { 300: "#FDA4AF", 400: "#FB7185", 500: "#E11D48" },
  slate: { 50: "#F8FAFC", 100: "#F1F5F9", 200: "#E2E8F0", 300: "#CBD5E1", 400: "#94A3B8", 500: "#64748B", 600: "#475569", 700: "#334155", 800: "#1E293B", 900: "#0F172A", 950: "#020617" },
  gray: { 50: "#F9FAFB", 100: "#F3F4F6", 200: "#E5E7EB", 300: "#D1D5DB", 400: "#9CA3AF", 500: "#6B7280", 600: "#4B5563", 700: "#374151", 800: "#1F2937", 900: "#111827", 950: "#030712" },
  emerald: { 600: "#059669", 700: "#047857", 800: "#065F46" },
  blue: { 400: "#60A5FA", 500: "#2563EB" },
} as const;

// Helper: hex to RGBA
export const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const chartColors = {
  // Primary series colors (distinct for multi-line charts)
  primary: mintColors[400],      // #10C9A0 - Brand/Mint
  secondary: semanticColors.blue[500],   // #2563EB - Blue
  tertiary: semanticColors.purple[400],    // #A78BFA - Purple
  quaternary: "#F97316",                   // Orange-500
  
  // Status colors
  bullish: semanticColors.green[500],      // #16A34A
  bearish: semanticColors.red[500],        // #DC2626
  neutral: neutralColors[400],             // #748A83
  
  // Volume/indicator colors
  volumeUp: "#22C55E",                     // Green-500
  volumeDown: "#EF4444",                   // Red-500
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

export const elevation = {
  none: "none",
  sm: "0 1px 2px 0 rgba(0,0,0,0.05)",
  md: "0 4px 6px -1px rgba(0,0,0,0.1)",
  lg: "0 10px 15px -3px rgba(0,0,0,0.1)",
  xl: "0 20px 25px -5px rgba(0,0,0,0.1)",
  "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.05)",
  // Dark mode variants
  "sm-dark": "0 1px 2px 0 rgba(0,0,0,0.3)",
  "md-dark": "0 4px 6px -1px rgba(0,0,0,0.4)",
} as const;

export const borderWidth = {
  none: "0px",
  thin: "1px",
  medium: "2px",
  thick: "4px",
} as const;

export const zIndex = {
  hide: -1,
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;

export const opacity = {
  0: "0",
  25: "0.25",
  40: "0.4",
  50: "0.5",
  60: "0.6",
  70: "0.7",
  80: "0.8",
  90: "0.9",
  100: "1",
} as const;

export const backdrop = {
  blur: {
    none: "0",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
  },
  opacity: {
    sm: "0.4",
    md: "0.6",
    lg: "0.8",
  },
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

export const animation = {
  fade: {
    in: "fade-in 200ms ease-out",
    out: "fade-out 150ms ease-in",
  },
  slide: {
    up: "slide-up 300ms ease-out",
    down: "slide-down 300ms ease-out",
    left: "slide-left 300ms ease-out",
    right: "slide-right 300ms ease-out",
  },
  scale: {
    in: "scale-in 200ms ease-out",
    out: "scale-out 150ms ease-in",
  },
  spin: "spin 1s linear infinite",
  pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
  bounce: "bounce 1s infinite",
} as const;

export const transition = {
  property: {
    none: "none",
    all: "all",
    colors: "background-color, border-color, color, fill, stroke",
    opacity: "opacity",
    shadow: "box-shadow",
    transform: "transform",
  },
  duration: {
    fast: "120ms",
    base: "200ms",
    slow: "300ms",
    slower: "500ms",
  },
} as const;

export const shadows = {
  sm: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
  md: "0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.05)",
  lg: "0 12px 32px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)",
  xl: "0 24px 48px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.07)",
  brand: "0 4px 16px rgba(0, 179, 138, 0.25)",
} as const;

// Type exports
export type MintShade = keyof typeof mintColors;
export type NeutralShade = keyof typeof neutralColors;
export type SpacingKey = keyof typeof spacing;
export type RadiusKey = keyof typeof radius;
export type TextSizeKey = keyof typeof typography.scale;

// Consolidated token export
export const tokens = {
  colors: {
    mint: mintColors,
    neutral: neutralColors,
    semantic: semanticColors,
    charts: chartColors,
  },
  spacing,
  radius,
  elevation,
  borderWidth,
  zIndex,
  opacity,
  backdrop,
  typography,
  motion,
  animation,
  transition,
  shadows,
} as const;

export type DesignTokens = typeof tokens;
