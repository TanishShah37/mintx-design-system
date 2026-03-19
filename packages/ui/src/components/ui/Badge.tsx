import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../tokens/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 uppercase tracking-wider",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground border-border",
        success: "border-transparent bg-green-500/10 text-green-500",
        warning: "border-transparent bg-yellow-500/10 text-yellow-500",
        error: "border-transparent bg-red-500/10 text-red-500",
        mint: "border-transparent bg-[#10C9A0]/10 text-[#10C9A0]",
        blue: "border-transparent bg-blue-500/10 text-blue-500",
        purple: "border-transparent bg-purple-500/10 text-purple-500",
        neutral: "border-transparent bg-neutral-500/10 text-neutral-500",
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
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
