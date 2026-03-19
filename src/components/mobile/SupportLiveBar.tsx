import React from "react";
import type { MarketStatusData } from "../../types";
import { cn } from "../../tokens/cn";
import "./SupportLiveBar.css";

interface SupportLiveBarProps {
  marketStatus?: MarketStatusData;
  onSupportClick?: () => void;
  className?: string;
}

const sessionConfig: Record<
  MarketStatusData["session"],
  {
    color: string;
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
    <div className={cn("support-bar", className)}>
      {/* Market status */}
      {marketStatus && (
        <div className="support-bar__market">
          <span
            className={cn(
              "support-bar__dot",
              `support-bar__dot--${cfg.color}`,
              cfg.pulse && "support-bar__dot--pulse",
            )}
            aria-hidden="true"
          />
          <span className="support-bar__session">
            {marketStatus.label ?? cfg.label}
          </span>
          {marketStatus.nextEvent && (
            <span className="support-bar__next">
              · {marketStatus.nextEvent}
              {marketStatus.nextEventTime && (
                <span className="support-bar__time">
                  {" "}
                  {marketStatus.nextEventTime}
                </span>
              )}
            </span>
          )}
        </div>
      )}

      {/* Support CTA */}
      <button
        className="support-bar__cta"
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
