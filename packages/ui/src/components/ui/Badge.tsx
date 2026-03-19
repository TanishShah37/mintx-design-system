import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import type { BadgeProps } from "../../types";
import { cn } from "../../tokens/cn";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-medium leading-none whitespace-nowrap overflow-hidden transition-colors border",
  {
    variants: {
      variant: {
        mint: "bg-mint-50 text-mint-600 border-mint-200/50",
        green: "bg-green-50 text-green-600 border-green-200/50",
        red: "bg-red-50 text-red-600 border-red-200/50",
        amber: "bg-amber-50 text-amber-600 border-amber-200/50",
        blue: "bg-blue-50 text-blue-600 border-blue-200/50",
        purple: "bg-purple-50 text-purple-600 border-purple-200/50",
        neutral: "bg-neutral-100 text-neutral-600 border-neutral-200/50",
        outline: "bg-transparent text-neutral-500 border-neutral-200",
      },
      size: {
        sm: "text-[10px] px-1.5 py-0.5 rounded-sm",
        md: "text-xs px-2 py-1 rounded-md",
        lg: "text-sm px-2.5 py-1.5 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "mint",
      size: "md",
    },
  }
);

export const Badge: React.FC<BadgeProps> = ({
  variant = "mint",
  size = "md",
  dot = false,
  className,
  style,
  children,
}) => (
  <span
    className={cn(badgeVariants({ variant, size }), className)}
    style={style}
  >
    {dot && (
      <span 
        className={cn(
          "w-1.5 h-1.5 rounded-full",
          {
            "bg-mint-400": variant === "mint",
            "bg-green-400": variant === "green",
            "bg-red-400": variant === "red",
            "bg-amber-400": variant === "amber",
            "bg-blue-400": variant === "blue",
            "bg-purple-400": variant === "purple",
            "bg-neutral-400": variant === "neutral" || variant === "outline",
          }
        )} 
        aria-hidden="true" 
      />
    )}
    {children}
  </span>
);

Badge.displayName = "Badge";
