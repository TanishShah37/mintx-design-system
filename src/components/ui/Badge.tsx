import React from "react";
import type { BadgeProps } from "../../types";
import { cn } from "../../tokens/cn";
import "./Badge.css";

const variantClasses: Record<NonNullable<BadgeProps["variant"]>, string> = {
  mint: "badge--mint",
  green: "badge--green",
  red: "badge--red",
  amber: "badge--amber",
  blue: "badge--blue",
  purple: "badge--purple",
  neutral: "badge--neutral",
  outline: "badge--outline",
};

const sizeClasses: Record<NonNullable<BadgeProps["size"]>, string> = {
  sm: "badge--sm",
  md: "badge--md",
  lg: "badge--lg",
};

export const Badge: React.FC<BadgeProps> = ({
  variant = "mint",
  size = "md",
  dot = false,
  className,
  style,
  children,
}) => (
  <span
    className={cn(
      "badge",
      variantClasses[variant],
      sizeClasses[size],
      className,
    )}
    style={style}
  >
    {dot && <span className="badge__dot" aria-hidden="true" />}
    {children}
  </span>
);

Badge.displayName = "Badge";
