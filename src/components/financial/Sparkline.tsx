import React from "react";
import type { PriceDirection } from "../../types";
import "./Sparkline.css";

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

const colorMap: Record<string, { stroke: string; fill: string }> = {
  up: { stroke: "#22C55E", fill: "rgba(34,197,94,0.08)" },
  down: { stroke: "#F87171", fill: "rgba(248,113,113,0.08)" },
  flat: { stroke: "#748A83", fill: "rgba(116,138,131,0.06)" },
};

export const Sparkline: React.FC<SparklineProps> = ({
  data,
  direction = "up",
  width = 200,
  height = 40,
  className,
}) => {
  if (!data || data.length < 2) return null;

  const pts = normalise(data, height);
  const { stroke, fill } = colorMap[direction] ?? colorMap.up;
  const closedPts = `${pts} ${width},${height} 0,${height}`;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ display: "block", width: "100%", height }}
    >
      {/* Fill area */}
      <polygon points={closedPts} fill={fill} stroke="none" />
      {/* Line */}
      <polyline
        points={pts}
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Sparkline.displayName = "Sparkline";
