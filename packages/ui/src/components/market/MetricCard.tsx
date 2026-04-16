import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../tokens/cn";
import { PriceChange, getDirection, type PriceDirection } from "./PriceChange";

export interface MetricData {
  label: string;
  value: string | number;
  delta?: number;
  deltaLabel?: string;
  direction?: PriceDirection;
  prefix?: string;
  suffix?: string;
}

const cardVariants = cva(
  "bg-surface border border-border-subtle rounded-lg p-5",
  {
    variants: {
      compact: {
        true: "p-sp-3 px-sp-4",
        false: "p-sp-5",
      },
    },
    defaultVariants: {
      compact: false,
    },
  }
);

interface MetricCardProps extends VariantProps<typeof cardVariants> {
  data: MetricData;
  className?: string;
}

export function MetricCard({
  data,
  className,
  compact = false,
}: MetricCardProps): React.JSX.Element {
  const dir =
    data.direction ??
    (data.delta !== undefined ? getDirection(data.delta) : "flat");

  return (
    <div className={cn(cardVariants({ compact }), className)}>
      <div className="text-[11px] text-text-tertiary font-medium uppercase tracking-widest mb-sp-2">
        {data.label}
      </div>
      <div className={cn(
        "font-display font-bold text-text-primary leading-none tabular-nums tracking-[-0.5px] mb-sp-2",
        compact ? "text-2xl" : "text-3xl"
      )}>
        {data.prefix && (
          <span className="text-lg text-text-secondary mr-[1px]">{data.prefix}</span>
        )}
        {typeof data.value === "number"
          ? data.value.toLocaleString("en-IN")
          : data.value}
        {data.suffix && (
          <span className="text-sm font-body text-text-tertiary font-normal ml-[2px]">{data.suffix}</span>
        )}
      </div>
      {data.delta !== undefined && (
        <PriceChange
          value={data.delta}
          percent={undefined}
          direction={dir}
          className="mt-sp-1"
        />
      )}
      {data.deltaLabel && !data.delta && (
        <div className="text-xs text-text-tertiary mt-sp-1">{data.deltaLabel}</div>
      )}
    </div>
  );
}

MetricCard.displayName = "MetricCard";
