import React from "react";
import { cn } from "../../tokens/cn";
import { cva, type VariantProps } from "class-variance-authority";

const loaderVariants = cva(
  "flex flex-col items-center justify-center gap-2",
  {
    variants: {
      size: {
        xs: "h-3 w-3",
        sm: "h-4 w-4",
        md: "h-8 w-8",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
      },
      color: {
        brand: "text-mint-500",
        primary: "text-primary",
        neutral: "text-neutral-400",
      },
    },
    defaultVariants: {
      size: "md",
      color: "brand",
    },
  }
);

export interface LoaderProps 
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof loaderVariants> {
  label?: string;
  color?: "brand" | "primary" | "neutral";
}

export const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(({ className, size, color = "brand", label, ...props }, ref): React.JSX.Element => {
    return (
      <div
        ref={ref}
        className={cn(loaderVariants({ size, color }), className)}
        {...props}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-full w-full animate-spin"
        >
          <circle 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeOpacity="0.15" 
            strokeWidth="3" 
          />
          <path
            d="M12 2a10 10 0 0 1 10 10"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        {label && (
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 font-body">
            {label}
          </span>
        )}
      </div>
    );
  }
);

Loader.displayName = "Loader";
