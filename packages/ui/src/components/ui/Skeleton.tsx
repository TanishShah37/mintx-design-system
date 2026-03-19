import React from "react";
import type { SkeletonProps } from "../../types";
import { cn } from "../../tokens/cn";

export const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  rounded = false,
  circle = false,
  lines,
  className,
  style,
}) => {
  const baseClasses = "relative overflow-hidden bg-neutral-200/50 dark:bg-neutral-800/50 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 dark:before:via-white/5 before:to-transparent";

  // Multi-line text skeleton
  if (lines && lines > 1) {
    return (
      <div className={cn("flex flex-col gap-sp-2", className)} style={style}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(baseClasses, "rounded-sm")}
            style={{
              height: 14,
              width: i === lines - 1 ? "70%" : "100%",
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(baseClasses, className)}
      style={{
        width,
        height: height ?? (circle ? width : 16),
        borderRadius: circle ? "50%" : rounded ? 9999 : undefined,
        ...style,
      }}
      aria-hidden="true"
    />
  );
};

Skeleton.displayName = "Skeleton";
