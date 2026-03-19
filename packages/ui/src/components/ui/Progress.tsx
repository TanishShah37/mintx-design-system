import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import type { ProgressProps } from "../../types";
import { cn } from "../../tokens/cn";

const trackVariants = cva(
  "w-full bg-neutral-100 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        xs: "h-[3px]",
        sm: "h-[6px]",
        md: "h-[10px]",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

const fillVariants = cva(
  "h-full rounded-full transition-[width] duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]",
  {
    variants: {
      color: {
        brand: "bg-brand",
        green: "bg-green-500",
        red: "bg-red-500",
        amber: "bg-amber-500",
        blue: "bg-blue-500",
      },
      animated: {
        true: "animate-shimmer bg-[length:200%_100%] bg-gradient-to-r from-transparent via-white/25 to-transparent",
      },
    },
    defaultVariants: {
      color: "brand",
      animated: false,
    },
  }
);

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  size = "sm",
  color = "brand",
  label,
  showValue = false,
  animated = false,
  className,
  style,
}) => {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={cn("flex flex-col gap-sp-1 w-full", className)} style={style}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-1">
          {label && <span className="text-xs font-medium text-neutral-600">{label}</span>}
          {showValue && (
            <span className="text-xs font-mono text-neutral-400">{Math.round(pct)}%</span>
          )}
        </div>
      )}
      <div
        className={trackVariants({ size })}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
      >
        <div
          className={fillVariants({ color, animated })}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};

Progress.displayName = "Progress";
