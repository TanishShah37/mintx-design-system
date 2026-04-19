import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { BaseProps, Elevation } from "../../types";
import { cn } from "../../tokens/cn";
import { getCommonClasses } from "../../tokens/common-props";

const cardVariants = cva(
  "rounded-2xl overflow-hidden transition-all duration-200 ease-out",
  {
    variants: {
      variant: {
        default: "bg-surface border border-neutral-150 shadow-sm",
        elevated: "bg-surface shadow-md border border-neutral-100",
        outline: "bg-transparent border border-neutral-200",
      },
      padding: {
        none: "p-0",
        xs: "p-2", // spacing[2]
        sm: "p-4", // spacing[4]
        md: "p-6", // spacing[6] (24px) - As confirmed by user
        lg: "p-10", // spacing[10]
        xl: "p-16", // spacing[16]
      },
      hover: {
        true: "hover:shadow-lg hover:-translate-y-1 hover:border-mint-400/30",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  }
);

export interface CardProps 
  extends React.HTMLAttributes<HTMLDivElement>, 
    VariantProps<typeof cardVariants>,
    BaseProps {
  elevation?: Elevation;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant, padding, hover, elevation, className, style, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({ variant, padding, hover }),
          elevation && `shadow-${elevation}`,
          getCommonClasses(props),
          className
        )}
        style={style}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
