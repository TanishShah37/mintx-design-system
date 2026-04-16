import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
export interface StockData {
  ticker: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  open?: number;
  high?: number;
  low?: number;
  volume?: string;
  sparkline?: number[];
}
import { cn } from "../../tokens/cn";
import { PriceChange, getDirection } from "./PriceChange";
import { Sparkline } from "./Sparkline";

interface StockCardProps {
  data: StockData;
  onClick?: () => void;
  className?: string;
}

const priceVariants = cva(
  "font-display text-2xl font-bold tabular-nums tracking-tighter",
  {
    variants: {
      direction: {
        up: "text-mint-500",
        down: "text-red-500",
        flat: "text-text-primary",
      },
    },
    defaultVariants: {
      direction: "flat",
    },
  }
);

export function StockCard({
  data,
  onClick,
  className,
}: StockCardProps): React.JSX.Element {
  const direction = getDirection(data.change);

  return (
    <div
      className={cn(
        "bg-surface border border-border-subtle rounded-lg p-sp-4 transition-all duration-300 ease-out",
        onClick && "cursor-pointer hover:border-mint-400 hover:shadow-[0_4px_16px_rgba(0,179,138,0.25)] hover:-translate-y-[2px] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-mint-400 focus-visible:outline-offset-2",
        className,
      )}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") onClick();
            }
          : undefined
      }
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-sp-3">
        <div>
          <div className="font-display text-xl font-bold text-text-primary tracking-tight">{data.ticker}</div>
          <div className="text-xs text-text-tertiary mt-0.5">{data.name}</div>
        </div>
        <div className="text-right flex flex-col items-end gap-0.5">
          <div className={cn(priceVariants({ direction }))}>
            ₹{data.price.toLocaleString("en-IN")}
          </div>
          <PriceChange
            value={data.change}
            percent={data.changePercent}
            direction={direction}
          />
        </div>
      </div>

      {/* Sparkline */}
      {data.sparkline && (
        <div className="my-sp-3 rounded-sm overflow-hidden">
          <Sparkline data={data.sparkline} direction={direction} height={40} />
        </div>
      )}

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-sp-2 pt-sp-3 border-t border-border-subtle">
        {data.open !== undefined && (
          <div>
            <div className="text-[10px] text-text-tertiary uppercase tracking-wider mb-0.5">Open</div>
            <div className="font-mono text-sm font-semibold text-text-primary tabular-nums">
              {data.open.toLocaleString("en-IN")}
            </div>
          </div>
        )}
        {data.high !== undefined && (
          <div>
            <div className="text-[10px] text-text-tertiary uppercase tracking-wider mb-0.5">
              {direction === "down" ? "Low" : "High"}
            </div>
            <div className="font-mono text-sm font-semibold text-text-primary tabular-nums">
              {(direction === "down" ? data.low : data.high)?.toLocaleString(
                "en-IN",
              )}
            </div>
          </div>
        )}
        {data.volume && (
          <div>
            <div className="text-[10px] text-text-tertiary uppercase tracking-wider mb-0.5">Vol</div>
            <div className="font-mono text-sm font-semibold text-text-primary tabular-nums">{data.volume}</div>
          </div>
        )}
      </div>
    </div>
  );
}

StockCard.displayName = "StockCard";
