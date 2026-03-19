import React from "react";
import type { PriceDirection } from "../../types";
import { cn } from "../../tokens/cn";
import "./PriceChange.css";

interface PriceChangeProps {
  value: number;
  percent?: number;
  direction?: PriceDirection;
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
      className={cn("price-change", `price-change--${dir}`, className)}
      aria-label={`${dir === "up" ? "Up" : dir === "down" ? "Down" : "Flat"} ${formatted}`}
    >
      {showIcon && (
        <span className="price-change__icon">
          {dir === "up" ? (
            <ArrowUp />
          ) : dir === "down" ? (
            <ArrowDown />
          ) : (
            <Dash />
          )}
        </span>
      )}
      <span className="price-change__value">{formatted}</span>
    </span>
  );
};

PriceChange.displayName = "PriceChange";
