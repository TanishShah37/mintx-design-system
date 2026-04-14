// ═══════════════════════════════════════════════════════════
// MINTX DESIGN SYSTEM — CORE TYPES
// ═══════════════════════════════════════════════════════════

import type {
  ReactNode,
  CSSProperties,
} from "react";

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

// Note: Component-specific types (Props, Data shapes) are handled 
// in their respective component files to ensure clean modularity 
// and avoid barrel export circularity.
