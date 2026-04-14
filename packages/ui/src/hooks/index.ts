"use client";

export { useTheme } from "../components/shell/ThemeProvider";

// ── usePriceDirection ──────────────────────────────────────
import { useMemo } from "react";
import { type PriceDirection } from "../components/financial/PriceChange";

export function usePriceDirection(value: number): PriceDirection {
  return useMemo(() => {
    if (value > 0) return "up";
    if (value < 0) return "down";
    return "flat";
  }, [value]);
}

// ── useCountUp ─────────────────────────────────────────────
import { useState, useEffect, useRef } from "react";

interface CountUpOptions {
  start?: number;
  end: number;
  duration?: number; // ms
  decimals?: number;
}

export function useCountUp({
  start = 0,
  end,
  duration = 1200,
  decimals = 0,
}: CountUpOptions) {
  const [value, setValue] = useState(start);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    const startVal = start;
    const diff = end - startVal;

    const tick = (now: number) => {
      if (!startTimeRef.current) startTimeRef.current = now;
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out-cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = +(startVal + diff * eased).toFixed(decimals);
      setValue(current);
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    startTimeRef.current = 0;
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [start, end, duration, decimals]);

  return value;
}

// ── useMediaQuery ─────────────────────────────────────────
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

/** Convenience: returns true on mobile viewports (< 768px) */
export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 767px)");
}

// ── useDisclosure ─────────────────────────────────────────
export function useDisclosure(initial = false) {
  const [isOpen, setIsOpen] = useState(initial);
  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((v) => !v),
  };
}

// ── useLocalStorage ───────────────────────────────────────
export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValueState] = useState<T>(() => {
    if (typeof window === "undefined") return defaultValue;
    try {
      const stored = localStorage.getItem(key);
      return stored ? (JSON.parse(stored) as T) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  const setValue = (newValue: T | ((prev: T) => T)) => {
    setValueState((prev) => {
      const next =
        typeof newValue === "function"
          ? (newValue as (prev: T) => T)(prev)
          : newValue;
      localStorage.setItem(key, JSON.stringify(next));
      return next;
    });
  };

  return [value, setValue] as const;
}
