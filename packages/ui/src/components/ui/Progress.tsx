import React from "react";
import { cn } from "../../tokens/cn";
import { cva, type VariantProps } from "class-variance-authority";

const progressVariants = cva(
  "w-full overflow-hidden rounded-full bg-overlay",
  {
    variants: {
      size: {
        xs: "h-1",
        sm: "h-2",
        md: "h-3",
        lg: "h-4",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

const barVariants = cva(
  "h-full w-full flex-1 transition-all duration-500 ease-smooth",
  {
    variants: {
      color: {
        brand: "bg-mint-500 shadow-brand",
        success: "bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.3)]",
        danger: "bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.3)]",
        warning: "bg-yellow-500 shadow-[0_0_12px_rgba(234,179,8,0.3)]",
        info: "bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.3)]",
      },
    },
    defaultVariants: {
      color: "brand",
    },
  }
);

type ProgressColor = "brand" | "success" | "danger" | "warning" | "info";

export interface ProgressProps 
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof progressVariants> {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  color?: ProgressColor;
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(({ className, value, max = 100, size, color = "brand", label, showValue, ...props }, ref): React.JSX.Element => {
    const pct = Math.min(100, Math.max(0, (value / max) * 100));

    return (
      <div
        ref={ref}
        className={cn("flex w-full flex-col gap-2", className)}
        {...props}
      >
        {(label || showValue) && (
          <div className="flex justify-between items-center px-0.5">
            {label && (
              <span className="text-xs font-semibold text-neutral-400 font-body">
                {label}
              </span>
            )}
            {showValue && (
              <span className="text-xs font-mono text-neutral-500">
                {Math.round(pct)}%
              </span>
            )}
          </div>
        )}
        <div className={cn(progressVariants({ size }))}>
          <div
            className={cn(barVariants({ color }))}
            style={{ transform: `translateX(-${100 - pct}%)` }}
          />
        </div>
      </div>
    );
  }
);

Progress.displayName = "Progress";
