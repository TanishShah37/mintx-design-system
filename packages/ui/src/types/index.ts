// ═══════════════════════════════════════════════════════════
// MINTX DESIGN SYSTEM — COMPONENT TYPES
// ═══════════════════════════════════════════════════════════

import type {
  ReactNode,
  CSSProperties,
  HTMLAttributes,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
} from "react";

// ── THEME ──────────────────────────────────────────────────
export type Theme = "light" | "dark";

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

// ── SHARED BASE ────────────────────────────────────────────
export interface BaseProps {
  className?: string;
  style?: CSSProperties;
}

export interface ChildrenProps extends BaseProps {
  children?: ReactNode;
}

// ── SIZE VARIANTS ──────────────────────────────────────────
export type Size = "xs" | "sm" | "md" | "lg" | "xl";

// Component types are now handled in their respective files to avoid conflicts.
// Shared or Global Types:

export type GlobalBadgeVariant =
  | "mint"
  | "green"
  | "red"
  | "amber"
  | "blue"
  | "purple"
  | "neutral"
  | "outline";

export interface GlobalBadgeProps extends BaseProps {
  variant?: GlobalBadgeVariant;
  size?: "sm" | "md" | "lg";
  dot?: boolean;
  children: ReactNode;
}

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  label?: string;
  hint?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

// ── FINANCIAL DATA TYPES ───────────────────────────────────
export type PriceDirection = "up" | "down" | "flat";

export interface StockData {
  ticker: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  open?: number;
  high?: number;
  low?: number;
  volume?: string;
  sparkline?: number[];
}

export interface MetricData {
  label: string;
  value: string | number;
  delta?: number;
  deltaLabel?: string;
  direction?: PriceDirection;
  prefix?: string;
  suffix?: string;
}

export interface InsightData {
  tag: string;
  title: string;
  body: string;
  badges?: Array<{ label: string; variant: any }>; 
}

// ── NAVIGATION ─────────────────────────────────────────────
export interface NavItem {
  id: string;
  label: string;
  icon?: ReactNode;
  href?: string;
  badge?: string;
  badgeVariant?: GlobalBadgeVariant;
  children?: NavItem[];
}

export interface BottomNavItem {
  id: string;
  label: string;
  icon: ReactNode;
  activeIcon?: ReactNode;
  href?: string;
}

// ── MARKET STATUS ──────────────────────────────────────────
export type MarketSession = "pre-open" | "open" | "closed" | "post-close";

export interface MarketStatusData {
  session: MarketSession;
  label: string;
  nextEvent?: string;
  nextEventTime?: string;
}
