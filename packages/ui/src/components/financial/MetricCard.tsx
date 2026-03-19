import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import type { MetricData } from "../../types";
import { cn } from "../../tokens/cn";
import { PriceChange, getDirection } from "./PriceChange";

const cardVariants = cva(
  "bg-surface border border-neutral-100 rounded-lg p-5",
  {
    variants: {
      compact: {
        true: "p-3 px-4",
        false: "p-5",
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

export const MetricCard: React.FC<MetricCardProps> = ({
  data,
  className,
  compact = false,
}) => {
  const dir =
    data.direction ??
    (data.delta !== undefined ? getDirection(data.delta) : "flat");

  return (
    <div className={cn(cardVariants({ compact }), className)}>
      <div className="text-[11px] text-neutral-400 font-medium uppercase tracking-widest mb-2">
        {data.label}
      </div>
      <div className={cn(
        "font-display font-bold text-neutral-900 leading-none tabular-nums tracking-[-0.5px] mb-2",
        compact ? "text-2xl" : "text-3xl"
      )}>
        {data.prefix && (
          <span className="text-lg text-neutral-600 mr-[1px]">{data.prefix}</span>
        )}
        {typeof data.value === "number"
          ? data.value.toLocaleString("en-IN")
          : data.value}
        {data.suffix && (
          <span className="text-sm font-body text-neutral-400 font-normal ml-[2px]">{data.suffix}</span>
        )}
      </div>
      {data.delta !== undefined && (
        <PriceChange
          value={data.delta}
          percent={undefined}
          direction={dir}
          className="mt-1"
        />
      )}
      {data.deltaLabel && !data.delta && (
        <div className="text-xs text-neutral-400 mt-1">{data.deltaLabel}</div>
      )}
    </div>
  );
};

MetricCard.displayName = "MetricCard";
