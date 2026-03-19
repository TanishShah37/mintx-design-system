import React from "react";
import type { MetricData } from "../../types";
import { cn } from "../../tokens/cn";
import { PriceChange, getDirection } from "./PriceChange";
import "./MetricCard.css";

interface MetricCardProps {
  data: MetricData;
  className?: string;
  compact?: boolean;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  data,
  className,
  compact = false,
}) => {
  const dir =
    data.direction ??
    (data.delta !== undefined ? getDirection(data.delta) : "flat");

  return (
    <div
      className={cn(
        "metric-card",
        compact && "metric-card--compact",
        className,
      )}
    >
      <div className="metric-card__label">{data.label}</div>
      <div className="metric-card__value">
        {data.prefix && (
          <span className="metric-card__prefix">{data.prefix}</span>
        )}
        {typeof data.value === "number"
          ? data.value.toLocaleString("en-IN")
          : data.value}
        {data.suffix && (
          <span className="metric-card__suffix">{data.suffix}</span>
        )}
      </div>
      {data.delta !== undefined && (
        <PriceChange
          value={data.delta}
          percent={undefined}
          direction={dir}
          className="metric-card__delta"
        />
      )}
      {data.deltaLabel && !data.delta && (
        <div className="metric-card__delta-label">{data.deltaLabel}</div>
      )}
    </div>
  );
};

MetricCard.displayName = "MetricCard";
