import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
export type PriceDirection = "up" | "down" | "flat";
import { cn } from "../../tokens/cn";

const priceVariants = cva(
  "inline-flex items-center gap-[3px] font-mono text-sm font-medium leading-none",
  {
    variants: {
      direction: {
        up: "text-mint-500",
        down: "text-red-500",
        flat: "text-text-tertiary",
      },
    },
    defaultVariants: {
      direction: "flat",
    },
  }
);

interface PriceChangeProps extends VariantProps<typeof priceVariants> {
  value: number;
  percent?: number;
  showIcon?: boolean;
  className?: string;
}

const ArrowUp = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const ArrowDown = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const Dash = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export function getDirection(value: number): PriceDirection {
  if (value > 0) return "up";
  if (value < 0) return "down";
  return "flat";
}

export const PriceChange: React.FC<PriceChangeProps> = ({
  value,
  percent,
  direction,
  showIcon = true,
  className,
}) => {
  const dir = direction ?? getDirection(value);

  const formatted =
    percent !== undefined
      ? `${value > 0 ? "+" : ""}${value.toFixed(2)} (${Math.abs(percent).toFixed(2)}%)`
      : `${value > 0 ? "+" : ""}${value.toFixed(2)}`;

  return (
    <span
      className={cn(priceVariants({ direction: dir }), className)}
      aria-label={`${dir === "up" ? "Up" : dir === "down" ? "Down" : "Flat"} ${formatted}`}
    >
      {showIcon && (
        <span className="inline-flex items-center shrink-0">
          {dir === "up" ? (
            <ArrowUp />
          ) : dir === "down" ? (
            <ArrowDown />
          ) : (
            <Dash />
          )}
        </span>
      )}
      <span className="tabular-nums">{formatted}</span>
    </span>
  );
};

PriceChange.displayName = "PriceChange";
