import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { BaseProps, Elevation } from "../../types";
import { cn } from "../../tokens/cn";
import { getCommonClasses } from "../../tokens/common-props";
import { PolymorphicComponentProps, PolymorphicForwardRef } from "../../types/polymorphic";

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
        xs: "p-2",
        sm: "p-4",
        md: "p-6",
        lg: "p-10",
        xl: "p-16",
      },
      hover: {
        true: "hover:shadow-lg hover:-translate-y-1 hover:border-mint-400/30 cursor-pointer",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  }
);

export interface CardOwnProps extends VariantProps<typeof cardVariants>, BaseProps {
  elevation?: Elevation;
  /** Alias for hover variant to match web-app usage */
  interactive?: boolean;
}

export type CardProps<T extends React.ElementType = "div"> = PolymorphicComponentProps<T, CardOwnProps>;

const CardInner = (
  { 
    as,
    variant, 
    padding, 
    hover, 
    interactive,
    elevation, 
    className, 
    style, 
    children, 
    ...props 
  }: any, 
  ref: React.ForwardedRef<any>
) => {
  const Component = as || "div";
  const isInteractive = interactive || hover;

  return (
    <Component
      ref={ref}
      className={cn(
        cardVariants({ 
          variant, 
          padding, 
          hover: isInteractive 
        }),
        elevation && `shadow-${elevation}`,
        getCommonClasses(props),
        className
      )}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
};

export const Card = forwardRef(CardInner) as PolymorphicForwardRef<CardOwnProps, "div">;

Card.displayName = "Card";
