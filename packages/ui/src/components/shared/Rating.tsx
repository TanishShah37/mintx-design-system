"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "../../tokens/cn";

export interface RatingProps {
  value?: number;
  max?: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

const sizeClasses = {
  sm: "h-3.5 w-3.5",
  md: "h-5 w-5",
  lg: "h-7 w-7",
};

export function Rating({
  value = 0,
  max = 5,
  onChange,
  readonly = false,
  size = "md",
  className,
  label,
}: RatingProps): React.JSX.Element {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const displayValue = hoverValue !== null ? hoverValue : value;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <span className="text-sm font-semibold text-neutral-400 font-body">
          {label}
        </span>
      )}
      <div className="flex items-center gap-1">
        {Array.from({ length: max }).map((_, i) => {
          const starValue = i + 1;
          const isFull = displayValue >= starValue;
          const isHalf = !isFull && displayValue >= starValue - 0.5;

          return (
            <button
              key={i}
              type="button"
              disabled={readonly}
              onMouseEnter={() => !readonly && setHoverValue(starValue)}
              onMouseLeave={() => !readonly && setHoverValue(null)}
              onClick={() => !readonly && onChange?.(starValue)}
              className={cn(
                "flex items-center justify-center p-0 bg-transparent border-none transition-transform duration-150 outline-none",
                readonly ? "cursor-default" : "cursor-pointer hover:scale-110 active:scale-90"
              )}
            >
              <Star
                className={cn(
                  sizeClasses[size],
                  "transition-all duration-150",
                  isFull || isHalf ? "text-amber-500" : "text-border/20",
                  isFull && "fill-amber-500"
                )}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

Rating.displayName = "Rating";
