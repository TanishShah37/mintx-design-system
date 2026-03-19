import React from "react";
import type { ProgressProps } from "../../types";

const colorMap: Record<string, string> = {
  brand: "#00B38A",
  green: "#22C55E",
  red: "#EF4444",
  amber: "#F59E0B",
  blue: "#3B82F6",
};

const sizeMap: Record<string, number> = {
  xs: 3,
  sm: 6,
  md: 10,
};

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
  const trackHeight = sizeMap[size] ?? 6;
  const fillColor = colorMap[color] ?? "#00B38A";

  return (
    <div
      className={className}
      style={{ display: "flex", flexDirection: "column", gap: 4, width: "100%", ...style }}
    >
      {(label || showValue) && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
          {label && (
            <span style={{ fontSize: 12, fontWeight: 500, color: "var(--text-secondary, #9BACA6)" }}>
              {label}
            </span>
          )}
          {showValue && (
            <span style={{ fontSize: 12, fontFamily: "monospace", color: "var(--text-tertiary, #5A706A)" }}>
              {Math.round(pct)}%
            </span>
          )}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
        style={{
          width: "100%",
          height: trackHeight,
          background: "rgba(255,255,255,0.08)",
          borderRadius: 9999,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            background: fillColor,
            borderRadius: 9999,
            transition: "width 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            boxShadow: `0 0 8px ${fillColor}66`,
          }}
        />
      </div>
    </div>
  );
};

Progress.displayName = "Progress";
