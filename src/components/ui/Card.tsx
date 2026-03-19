import React from "react";
import type { CardProps } from "../../types";
import { cn } from "../../tokens/cn";
import "./Card.css";

const variantClasses: Record<NonNullable<CardProps["variant"]>, string> = {
  flat: "card--flat",
  raised: "card--raised",
  glass: "card--glass",
  outlined: "card--outlined",
};

const paddingClasses: Record<NonNullable<CardProps["padding"]>, string> = {
  none: "card--p-none",
  xs: "card--p-xs",
  sm: "card--p-sm",
  md: "card--p-md",
  lg: "card--p-lg",
  xl: "card--p-xl",
};

export const Card: React.FC<CardProps> = ({
  variant = "flat",
  hover = false,
  interactive = false,
  padding = "md",
  onClick,
  className,
  style,
  children,
}) => {
  const isClickable = !!onClick || interactive;

  return (
    <div
      className={cn(
        "card",
        variantClasses[variant],
        padding !== "none" && paddingClasses[padding],
        hover && "card--hover",
        isClickable && "card--interactive",
        className,
      )}
      style={style}
      onClick={onClick}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={
        isClickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") onClick?.();
            }
          : undefined
      }
    >
      {children}
    </div>
  );
};

Card.displayName = "Card";
