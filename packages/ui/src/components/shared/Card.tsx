import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
export interface CardProps {
  variant?: "flat" | "raised" | "glass" | "outlined";
  padding?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  hover?: boolean;
  interactive?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
import { cn } from "../../tokens/cn";

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
        true: "cursor-pointer active:scale-[0.98] active:shadow-sm",
      },
    },
    defaultVariants: {
      variant: "flat",
      padding: "md",
    },
  }
);

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
      className={cn(cardVariants({ variant, padding, hover, interactive: isClickable }), className)}
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
