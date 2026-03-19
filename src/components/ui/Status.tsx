import React from "react";
import type { StatusProps } from "../../types";
import { cn } from "../../tokens/cn";
import "./Status.css";

const statusLabels: Record<NonNullable<StatusProps["status"]>, string> = {
  live: "Live",
  paused: "Paused",
  offline: "Offline",
  error: "Error",
  pro: "Pro",
};

export const Status: React.FC<StatusProps> = ({
  status,
  label,
  pulse = true,
  className,
  style,
}) => (
  <span
    className={cn("status", `status--${status}`, className)}
    style={style}
    aria-label={`${label ?? statusLabels[status]} status`}
  >
    <span
      className={cn(
        "status__dot",
        pulse && status === "live" && "status__dot--pulse",
      )}
      aria-hidden="true"
    />
    <span className="status__label">{label ?? statusLabels[status]}</span>
  </span>
);

Status.displayName = "Status";
