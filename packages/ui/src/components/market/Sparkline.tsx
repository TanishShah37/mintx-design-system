import React from "react";
import { type PriceDirection } from "./PriceChange";
import { cn } from "../../tokens/cn";

interface SparklineProps {
  data: number[];
  direction?: PriceDirection;
  width?: number;
  height?: number;
  className?: string;
}

function normalise(data: number[], h: number): string {
  if (data.length < 2) return "";
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const step = 200 / (data.length - 1);

  return data
    .map((v, i) => {
      const x = i * step;
      const y = h - ((v - min) / range) * (h - 4) - 2;
      return `${x},${y}`;
    })
    .join(" ");
}

const colorMap = {
  up: { stroke: "#00B38A", fill: "rgba(0,179,138,0.1)" },
  down: { stroke: "var(--chart-bearish, var(--chart-bearish, #EF4444))", fill: "rgba(239,68,68,0.1)" },
  flat: { stroke: "var(--text-secondary, #9BACA6)", fill: "rgba(155,172,166,0.1)" },
};

export function Sparkline({
  data,
  direction = "up",
  width = 200,
  height = 40,
  className,
}: SparklineProps): React.JSX.Element | null {
  if (!data || data.length < 2) return null;

  const pts = normalise(data, height);
  const colors = colorMap[direction as keyof typeof colorMap] ?? colorMap.up;
  const closedPts = `0,${height} ${pts} 200,${height}`;

  return (
    <svg
      className={cn("block w-full", className)}
      viewBox={`0 0 200 ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ height }}
    >
      {/* Fill area */}
      <polygon points={closedPts} fill={colors.fill} stroke="none" />
      {/* Line */}
      <polyline
        points={pts}
        fill="none"
        stroke={colors.stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Sparkline.displayName = "Sparkline";
