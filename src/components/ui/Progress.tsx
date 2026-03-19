import React from "react";
import type { ProgressProps } from "../../types";
import { cn } from "../../tokens/cn";
import "./Progress.css";

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
    <div className={cn("progress-root", className)} style={style}>
      {(label || showValue) && (
        <div className="progress-header">
          {label && <span className="progress-label">{label}</span>}
          {showValue && (
            <span className="progress-value">{Math.round(pct)}%</span>
          )}
        </div>
      )}
      <div
        className={cn("progress-track", `progress-track--${size}`)}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
      >
        <div
          className={cn(
            "progress-fill",
            `progress-fill--${color}`,
            animated && "progress-fill--animated",
          )}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};

Progress.displayName = "Progress";
