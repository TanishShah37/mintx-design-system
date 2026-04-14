import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
export interface StatusProps {
  status?: "live" | "paused" | "offline" | "error" | "pro";
  label?: string;
  pulse?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
import { cn } from "../../tokens/cn";

const statusVariants = cva(
  "inline-flex items-center gap-sp-2 text-sm font-medium",
  {
    variants: {
      status: {
        live: "text-mint-500",
        paused: "text-amber-500",
        offline: "text-neutral-500",
        error: "text-red-500",
        pro: "text-brand",
      },
    },
    defaultVariants: {
      status: "offline",
    },
  }
);

const dotVariants = cva(
  "w-2 h-2 rounded-full shrink-0",
  {
    variants: {
      status: {
        live: "bg-mint-500 shadow-[0_0_0_0_rgba(0,179,138,0.5)] animate-pulse-live",
        paused: "bg-amber-500",
        offline: "bg-neutral-300",
        error: "bg-red-500",
        pro: "bg-brand animate-pulse-live",
      },
    },
    defaultVariants: {
      status: "offline",
    },
  }
);

const statusLabels: Record<NonNullable<StatusProps["status"]>, string> = {
  live: "Live",
  paused: "Paused",
  offline: "Offline",
  error: "Error",
  pro: "Pro",
};

export const Status: React.FC<StatusProps> = ({
  status = "offline",
  label,
  pulse = true,
  className,
  style,
}) => (
  <span
    className={cn(statusVariants({ status }), className)}
    style={style}
    aria-label={`${label ?? statusLabels[status]} status`}
  >
    <span
      className={cn(
        dotVariants({ status: pulse ? status : "offline" }),
        !pulse && "animate-none"
      )}
      aria-hidden="true"
    />
    <span>{label ?? statusLabels[status]}</span>
  </span>
);

Status.displayName = "Status";
