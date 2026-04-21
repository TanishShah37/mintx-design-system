import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../tokens/cn";
import { BaseProps } from "../../types";
import { getCommonClasses } from "../../tokens/common-props";
import { X } from "lucide-react";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 uppercase tracking-wider",
  {
    variants: {
      color: {
        neutral: "bg-neutral-100 text-neutral-700 border-neutral-200",
        primary: "bg-mint-100 text-mint-700 border-mint-200",
        success: "bg-emerald-100 text-emerald-700 border-emerald-200",
        warning: "bg-amber-100 text-amber-700 border-amber-200",
        danger: "bg-red-100 text-red-700 border-red-200",
        info: "bg-blue-100 text-blue-700 border-blue-200",
      },
      variant: {
        solid: "border-transparent",
        subtle: "border-transparent",
        secondary: "border-transparent",
        outline: "bg-transparent",
        soft: "border-transparent bg-mint-500/10 text-mint-700 hover:bg-mint-500/20",
        ghost: "bg-transparent border-transparent",
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    compoundVariants: [
      // Solid variants
      { color: "neutral", variant: "solid", className: "bg-neutral-500 text-white" },
      { color: "primary", variant: "solid", className: "bg-mint-500 text-white" },
      { color: "success", variant: "solid", className: "bg-emerald-500 text-white" },
      { color: "warning", variant: "solid", className: "bg-amber-500 text-white" },
      { color: "danger", variant: "solid", className: "bg-red-500 text-white" },
      { color: "info", variant: "solid", className: "bg-blue-500 text-white" },
      // Outline variants
      { color: "neutral", variant: "outline", className: "border-neutral-500 text-neutral-500" },
      { color: "primary", variant: "outline", className: "border-mint-500 text-mint-500" },
      { color: "success", variant: "outline", className: "border-emerald-500 text-emerald-500" },
      { color: "warning", variant: "outline", className: "border-amber-500 text-amber-500" },
      { color: "danger", variant: "outline", className: "border-red-500 text-red-500" },
      { color: "info", variant: "outline", className: "border-blue-500 text-blue-500" },
      // Ghost variants
      { color: "neutral", variant: "ghost", className: "text-neutral-500" },
      { color: "primary", variant: "ghost", className: "text-mint-500" },
      { color: "success", variant: "ghost", className: "text-emerald-500" },
      { color: "warning", variant: "ghost", className: "text-amber-500" },
      { color: "danger", variant: "ghost", className: "text-red-500" },
      { color: "info", variant: "ghost", className: "text-blue-500" },
    ],
    defaultVariants: {
      color: "neutral",
      variant: "subtle",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof badgeVariants>,
    BaseProps {
  dot?: boolean;
  pulse?: boolean;
  removable?: boolean;
  onRemove?: () => void;
  count?: number;
  maxCount?: number;
}

export function Badge({
  className,
  color,
  variant,
  size,
  dot,
  pulse,
  removable,
  onRemove,
  count,
  maxCount = 99,
  children,
  ...props
}: BadgeProps): React.JSX.Element {
  const displayCount = count !== undefined ? (count > maxCount ? `${maxCount}+` : count) : null;

  return (
    <div
      className={cn(badgeVariants({ color, variant, size }), getCommonClasses(props), className)}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "mr-1.5 h-2 w-2 rounded-full bg-current opacity-70",
            pulse && "animate-pulse"
          )}
        />
      )}
      {count !== undefined ? displayCount : children}
      {removable && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          className="ml-1.5 rounded-full outline-none transition-colors hover:bg-black/10 p-0.5"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </div>
  );
}

export { badgeVariants }
