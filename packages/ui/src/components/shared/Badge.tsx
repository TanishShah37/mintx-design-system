import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../tokens/cn";
import { BaseProps } from "../../types";
import { getCommonClasses } from "../../tokens/common-props";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 uppercase tracking-wider",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-mint-500 text-neutral-0 shadow-[0_4px_16px_rgba(0,179,138,0.25)] hover:bg-mint-600",
        secondary:
          "border-transparent bg-neutral-100 text-neutral-600 hover:bg-neutral-200",
        destructive:
          "border-transparent bg-red-500 text-neutral-0 shadow hover:bg-red-600",
        outline: "text-neutral-900 border-neutral-150 bg-transparent",
        success: "border-transparent bg-mint-500/10 text-mint-600",
        warning: "border-transparent bg-amber-500/10 text-amber-600",
        error: "border-transparent bg-red-500/10 text-red-600",
        mint: "border-transparent bg-mint-400/10 text-mint-500",
        blue: "border-transparent bg-blue-500/10 text-blue-600",
        purple: "border-transparent bg-purple-500/10 text-purple-600",
        neutral: "border-transparent bg-neutral-100 text-neutral-500",
        primary: "border-transparent bg-mint-500/10 text-mint-600",
        subtle: "border-transparent bg-neutral-100 text-neutral-600 hover:bg-neutral-200",
        soft: "border-transparent bg-mint-500/10 text-mint-700 hover:bg-mint-500/20",
        ghost: "bg-transparent border-transparent text-neutral-500 opacity-[var(--ghost-opacity,0.6)]",
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants>,
    BaseProps {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div 
      className={cn(badgeVariants({ variant, size }), getCommonClasses(props), className)} 
      {...props} 
    />
  );
}

export { Badge, badgeVariants };
