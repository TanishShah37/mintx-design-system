import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../tokens/cn";
import { BaseProps, Elevation } from "../../types";
import { getCommonClasses } from "../../tokens/common-props";
export interface CardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants>,
    BaseProps {
  hover?: boolean;
  interactive?: boolean;
  elevation?: Elevation;
}

const cardVariants = cva(
  "rounded-xl overflow-hidden transition-all duration-200 ease-smooth border",
  {
    variants: {
      variant: {
        flat: "bg-surface border-border shadow-none",
        raised: "bg-surface border-border/50 shadow-md",
        glass: "bg-white/40 backdrop-blur-md border border-white/20 shadow-lg",
        outlined: "bg-transparent border-border shadow-none",
      },
      padding: {
        none: "p-0",
        xs: "p-2",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
      hover: {
        true: "hover:shadow-lg hover:-translate-y-0.5",
      },
      interactive: {
        true: "cursor-pointer active:scale-[0.98] active:shadow-sm",
      },
    },
    defaultVariants: {
      variant: "flat",
      padding: "md",
    },
  },
);

export function Card({
  variant,
  hover = false,
  interactive = false,
  elevation,
  padding,
  onClick,
  className,
  children,
  ...props
}: CardProps): React.JSX.Element {
  const isClickable = !!onClick || interactive;

  return (
    <div
      className={cn(
        cardVariants({ variant, padding, hover, interactive: isClickable }),
        elevation && `shadow-${elevation}`,
        getCommonClasses(props),
        className,
      )}
      onClick={onClick}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={
        isClickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                const mouseEvent = new MouseEvent("click", {
                  bubbles: true,
                  cancelable: true,
                  view: window,
                }) as unknown as React.MouseEvent<HTMLDivElement>;
                onClick?.(mouseEvent);
              }
            }
          : undefined
      }
      {...props}
    >
      {children}
    </div>
  );
}

Card.displayName = "Card";
