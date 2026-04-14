import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
export type MarketSession = "pre-open" | "open" | "closed" | "post-close";

export interface MarketStatusData {
  session: MarketSession;
  label: string;
  nextEvent?: string;
  nextEventTime?: string;
}
import { cn } from "../../tokens/cn";

interface SupportLiveBarProps {
  marketStatus?: MarketStatusData;
  onSupportClick?: () => void;
  className?: string;
}

const dotVariants = cva(
  "w-[7px] h-[7px] rounded-full shrink-0",
  {
    variants: {
      color: {
        green: "bg-green-500",
        amber: "bg-amber-500",
        neutral: "bg-neutral-300",
      },
      pulse: {
        true: "animate-pulse-live",
        false: "",
      },
    },
    defaultVariants: {
      color: "neutral",
      pulse: false,
    },
  }
);

const sessionConfig: Record<
  MarketStatusData["session"],
  {
    color: "amber" | "green" | "neutral";
    label: string;
    pulse: boolean;
  }
> = {
  "pre-open": { color: "amber", label: "Pre-open", pulse: false },
  open: { color: "green", label: "Market Open", pulse: true },
  closed: { color: "neutral", label: "Closed", pulse: false },
  "post-close": { color: "neutral", label: "Post-close", pulse: false },
};

export const SupportLiveBar: React.FC<SupportLiveBarProps> = ({
  marketStatus,
  onSupportClick,
  className,
}) => {
  const session = marketStatus?.session ?? "closed";
  const cfg = sessionConfig[session];

  return (
    <div className={cn("flex items-center justify-between p-sp-2 px-sp-4 bg-surface border-t border-neutral-100 gap-sp-3", className)}>
      {/* Market status */}
      {marketStatus && (
        <div className="flex items-center gap-sp-2 text-xs text-neutral-600 flex-1 min-w-0 overflow-hidden">
          <span
            className={dotVariants({ color: cfg.color, pulse: cfg.pulse })}
            aria-hidden="true"
          />
          <span className="font-semibold text-neutral-900 shrink-0 whitespace-nowrap overflow-hidden text-ellipsis">
            {marketStatus.label ?? cfg.label}
          </span>
          {marketStatus.nextEvent && (
            <span className="text-neutral-400 whitespace-nowrap overflow-hidden text-ellipsis">
              · {marketStatus.nextEvent}
              {marketStatus.nextEventTime && (
                <span className="font-mono ml-0.5">
                  {marketStatus.nextEventTime}
                </span>
              )}
            </span>
          )}
        </div>
      )}

      {/* Support CTA */}
      <button
        className="inline-flex items-center gap-sp-1 font-body text-xs font-semibold text-mint-600 bg-mint-50 border border-mint-400/20 rounded-full py-1 px-2.5 cursor-pointer shrink-0 transition-all duration-120 whitespace-nowrap hover:bg-mint-400/20 hover:border-mint-400 focus-visible:outline-2 focus-visible:outline-mint-400 focus-visible:outline-offset-2"
        onClick={onSupportClick}
        aria-label="Contact support"
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
        <span>Support</span>
      </button>
    </div>
  );
};

SupportLiveBar.displayName = "SupportLiveBar";
