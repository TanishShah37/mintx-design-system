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

// ── BUTTON ─────────────────────────────────────────────────
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "danger"
  | "outline-brand"
  | "dark";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: Size;
  loading?: boolean;
  iconOnly?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

// ── BADGE ──────────────────────────────────────────────────
export type BadgeVariant =
  | "mint"
  | "green"
  | "red"
  | "amber"
  | "blue"
  | "purple"
  | "neutral"
  | "outline";

export interface BadgeProps extends BaseProps {
  variant?: BadgeVariant;
  size?: "sm" | "md" | "lg";
  dot?: boolean;
  children: ReactNode;
}

// ── STATUS ─────────────────────────────────────────────────
export type StatusType = "live" | "paused" | "offline" | "error" | "pro";

export interface StatusProps extends BaseProps {
  status: StatusType;
  label?: string;
  pulse?: boolean;
}

// ── CARD ───────────────────────────────────────────────────
export type CardVariant = "flat" | "raised" | "glass" | "outlined";

export interface CardProps extends ChildrenProps {
  variant?: CardVariant;
  hover?: boolean;
  interactive?: boolean;
  padding?: Size | "none";
  onClick?: () => void;
}

// ── INPUT ──────────────────────────────────────────────────
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

export interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  rows?: number;
  fullWidth?: boolean;
}

// ── SELECT ─────────────────────────────────────────────────
export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends BaseProps {
  options: SelectOption[];
  value?: string;
  placeholder?: string;
  label?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  size?: "sm" | "md" | "lg";
}

// ── TOGGLE ─────────────────────────────────────────────────
export interface ToggleProps extends BaseProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  size?: "sm" | "md";
  label?: string;
  onChange?: (checked: boolean) => void;
}

// ── ALERT ──────────────────────────────────────────────────
export type AlertVariant = "info" | "success" | "warning" | "danger" | "brand";

export interface AlertProps extends ChildrenProps {
  variant?: AlertVariant;
  title?: string;
  onDismiss?: () => void;
  icon?: ReactNode;
}

// ── PROGRESS ───────────────────────────────────────────────
export interface ProgressProps extends BaseProps {
  value: number; // 0–100
  max?: number;
  size?: "xs" | "sm" | "md";
  color?: "brand" | "green" | "red" | "amber" | "blue";
  label?: string;
  showValue?: boolean;
  animated?: boolean;
}

// ── TABS ───────────────────────────────────────────────────
export interface TabItem {
  id: string;
  label: string;
  icon?: ReactNode;
  badge?: string | number;
  disabled?: boolean;
}

export interface TabsProps extends BaseProps {
  items: TabItem[];
  activeId?: string;
  defaultActiveId?: string;
  variant?: "default" | "brand" | "pills" | "underline";
  size?: "sm" | "md";
  onChange?: (id: string) => void;
}

// ── SKELETON ───────────────────────────────────────────────
export interface SkeletonProps extends BaseProps {
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
  circle?: boolean;
  lines?: number; // for text skeletons
}

// ── AVATAR ─────────────────────────────────────────────────
export interface AvatarProps extends BaseProps {
  initials?: string;
  src?: string;
  alt?: string;
  size?: Size;
  status?: StatusType;
}

// ── TOOLTIP ────────────────────────────────────────────────
export type TooltipPlacement = "top" | "bottom" | "left" | "right";

export interface TooltipProps extends ChildrenProps {
  content: ReactNode;
  placement?: TooltipPlacement;
  delay?: number;
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
  badges?: Array<{ label: string; variant: BadgeVariant }>;
}

// ── NAVIGATION ─────────────────────────────────────────────
export interface NavItem {
  id: string;
  label: string;
  icon?: ReactNode;
  href?: string;
  badge?: string;
  badgeVariant?: BadgeVariant;
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
