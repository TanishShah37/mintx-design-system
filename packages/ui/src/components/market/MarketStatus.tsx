import React from "react";
import { cn } from "../../tokens/cn";

interface MarketStatusProps {
  status: "open" | "closed" | "closing-soon";
  market?: string;
  className?: string;
}

export const MarketStatus: React.FC<MarketStatusProps> = ({
  status,
  market = "Global Market",
  className,
}) => {
  const config = {
    open: {
      color: "bg-mint-500",
      text: "Market Open",
      pulse: "bg-mint-500/50",
    },
    closed: {
      color: "bg-red-500",
      text: "Market Closed",
      pulse: "bg-red-500/50",
    },
    "closing-soon": {
      color: "bg-amber-500",
      text: "Closing Soon",
      pulse: "bg-amber-500/50",
    },
  };

  const current = config[status];

  return (
    <div className={cn("flex items-center gap-sp-3 px-sp-4 py-sp-2 rounded-full bg-surface/40 border border-neutral-150 w-fit", className)}>
      <div className="relative flex h-2.5 w-2.5">
        <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", current.pulse)}></span>
        <span className={cn("relative inline-flex rounded-full h-2.5 w-2.5", current.color)}></span>
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-wider font-bold opacity-50 leading-none">
          {market}
        </span>
        <span className="text-sm font-semibold leading-tight">{current.text}</span>
      </div>
    </div>
  );
};
