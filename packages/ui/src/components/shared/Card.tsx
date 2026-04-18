import React from "react";
import { cva } from "class-variance-authority";
import { BaseProps } from "../../types";
import { cn } from "../../tokens/cn";
import { getCommonClasses } from "../../tokens/common-props";

export interface CardProps extends BaseProps {
  variant?: "flat" | "raised" | "glass" | "outlined";
  padding?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  hover?: boolean;
  interactive?: boolean;
  shadow?: "none" | "sm" | "md" | "lg" | "xl";
  border?: boolean;
  borderColor?: string;
  borderLeft?: boolean;
  borderLeftColor?: string;
  borderWidth?: "thin" | "medium" | "thick";
  onClick?: () => void;
  children?: React.ReactNode;
}

const cardVariants = cva(
  "rounded-lg overflow-hidden transition-all duration-200 ease-smooth",
  {
    variants: {
      variant: {
        flat: "bg-surface border border-neutral-100",
        raised: "bg-surface shadow-md",
        glass: "bg-white/40 backdrop-blur-md border border-white/20 shadow-lg",
        outlined: "bg-transparent border border-neutral-200",
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
        true: "cursor-pointer active:scale-95 active:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 focus-visible:ring-offset-2",
      },
    },
    defaultVariants: {
      variant: "flat",
      padding: "md",
    },
  }
);

export function Card({
  variant = "flat",
  hover = false,
  interactive = false,
  padding = "md",
  shadow,
  border,
  borderColor,
  borderLeft,
  borderLeftColor,
  borderWidth,
  onClick,
  className,
  style,
  children,
  ...props
}: CardProps): React.JSX.Element {
  const isClickable = !!onClick || interactive;

  const shadowClass = shadow ? `shadow-${shadow}` : "";
  const borderClass = border === true ? "border" : border === false ? "border-0" : "";
  const borderLeftClass = borderLeft ? `border-l-${borderWidth === 'thick' ? '4' : borderWidth === 'medium' ? '2' : '1'}` : "";

  return (
    <div
      className={cn(
        cardVariants({ variant, padding, hover, interactive: isClickable }),
        shadowClass,
        borderClass,
        borderLeftClass,
        borderColor,
        borderLeftColor,
        getCommonClasses(props),
        className
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
}

Card.displayName = "Card";
