// ═══════════════════════════════════════════════════════════
// MINTX DESIGN SYSTEM — CORE TYPES
// ═══════════════════════════════════════════════════════════

import type {
  ReactNode,
  CSSProperties,
} from "react";

// ── SHARED BASE ────────────────────────────────────────────
export type Elevation = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "inner" | "sm-dark" | "md-dark";
export type BorderWidth = "none" | "thin" | "medium" | "thick";
export type ZIndex = 
  | "hide" | "base" | "docked" | "dropdown" | "sticky" 
  | "banner" | "overlay" | "modal" | "popover" 
  | "skipLink" | "toast" | "tooltip";
export type Opacity = 0 | 25 | 40 | 50 | 60 | 70 | 80 | 90 | 100;

export interface BaseProps {
  className?: string;
  style?: CSSProperties;
  elevation?: Elevation;
  borderWidth?: BorderWidth;
  zIndex?: ZIndex;
  opacity?: Opacity;
}

export interface ChildrenProps extends BaseProps {
  children?: ReactNode;
}

// ── SIZE VARIANTS ──────────────────────────────────────────
export type Size = "2xs" | "xs" | "sm" | "md" | "lg" | "xl";

// Note: Component-specific types (Props, Data shapes) are handled 
// in their respective component files to ensure clean modularity 
// and avoid barrel export circularity.
