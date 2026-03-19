import React from "react";
import type { SkeletonProps } from "../../types";
import { cn } from "../../tokens/cn";
import "./Skeleton.css";

export const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  rounded = false,
  circle = false,
  lines,
  className,
  style,
}) => {
  // Multi-line text skeleton
  if (lines && lines > 1) {
    return (
      <div className={cn("skeleton-lines", className)} style={style}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="skeleton"
            style={{
              height: 14,
              width: i === lines - 1 ? "70%" : "100%",
              borderRadius: 4,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn("skeleton", className)}
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
