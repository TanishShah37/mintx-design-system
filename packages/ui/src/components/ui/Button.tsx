import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../tokens/cn";
import { BaseProps } from "../../types";
import { getCommonClasses } from "../../tokens/common-props";
import { Tooltip, TooltipTrigger, TooltipContent } from "./Tooltip";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-sp-2 font-body font-medium tracking-tight cursor-pointer border border-transparent relative overflow-hidden select-none whitespace-nowrap transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-mint-400 focus-visible:outline-offset-2 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none before:absolute before:inset-[-8px] before:content-['']",
  {
    variants: {
      variant: {
        primary: "bg-mint-400 text-[var(--n-950, #001A13)] border-mint-400 shadow-[0_4px_16px_rgba(0,179,138,0.25)] hover:bg-mint-300 hover:border-mint-300 hover:-translate-y-[1px] hover:shadow-[0_6px_24px_rgba(0,179,138,0.38)]",
        secondary: "bg-surface text-neutral-900 border-neutral-200 shadow-sm hover:border-mint-400 hover:text-mint-600 hover:bg-mint-50",
        ghost: "bg-transparent text-neutral-600 border-transparent hover:bg-neutral-100 hover:text-neutral-900",
        danger: "bg-red-500/10 text-red-600 border-red-500/20 hover:bg-red-600 hover:text-white hover:border-red-600",
        "outline-brand": "bg-transparent text-mint-600 border-mint-400 hover:bg-mint-50",
        dark: "bg-neutral-800 text-mint-300 border-mint-300/20 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:bg-neutral-700 hover:border-mint-400",
        success: "bg-emerald-500 text-white border-emerald-500 hover:bg-emerald-600 hover:border-emerald-600",
        warning: "bg-amber-500 text-white border-amber-500 hover:bg-amber-600 hover:border-amber-600",
        info: "bg-blue-500 text-white border-blue-500 hover:bg-blue-600 hover:border-blue-600",
        outline: "bg-transparent border border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400",
        subtle: "bg-neutral-100 text-neutral-700 border-neutral-100 hover:bg-neutral-200",
        link: "bg-transparent text-mint-600 border-transparent hover:underline hover:text-mint-700 p-0 h-auto before:hidden",
      },
      size: {
        xs: "text-xs py-1 px-2.5 rounded-sm min-h-[32px] min-w-[32px]", // Hit area expanded via 'before' inset
        sm: "text-sm py-1.5 px-3.5 rounded-md min-h-[36px] min-w-[36px]",
        md: "text-base py-[11px] px-6 rounded-md min-h-[44px]", // Rule §2: Pro Max Touch Target
        lg: "text-lg py-3.5 px-8 rounded-lg min-h-[52px]",
        xl: "text-xl py-4 px-10 rounded-lg font-semibold min-h-[60px]",
        "2xs": "text-[10px] py-0.5 px-2 rounded-sm min-h-[28px]",
        icon: "p-2 rounded-md aspect-square min-h-[44px] min-w-[44px]",
      },
      fullWidth: {
        true: "w-full",
      },
      loading: {
        true: "cursor-wait active:scale-100",
      },
      iconOnly: {
        true: "p-0 aspect-square",
      }
    },
    compoundVariants: [
      { size: "xs", iconOnly: true, className: "w-8 h-8" },
      { size: "sm", iconOnly: true, className: "w-9 h-9" },
      { size: "md", iconOnly: true, className: "w-11 h-11" },
      { size: "lg", iconOnly: true, className: "w-13 h-13" },
      { size: "xl", iconOnly: true, className: "w-15 h-15" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants>,
    BaseProps {
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconOnly?: boolean;
  active?: boolean;
  pressed?: boolean;
  width?: "auto" | "full" | "fit";
  badge?: number | string;
  tooltip?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      loading = false,
      iconOnly = false,
      leftIcon,
      rightIcon,
      fullWidth,
      active = false,
      pressed = false,
      width = "auto",
      badge,
      tooltip,
      disabled,
      className,
      style,
      children,
      ...props
    },
    ref,
  ): React.JSX.Element => {
    const buttonElement = (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ 
            variant, 
            size, 
            fullWidth: fullWidth || width === "full", 
            loading, 
            iconOnly 
          }),
          active && "ring-2 ring-mint-400 ring-offset-2",
          pressed && "bg-neutral-200 shadow-inner",
          width === "fit" && "w-fit",
          getCommonClasses(props),
          className
        )}
        style={style}
        disabled={disabled || loading}
        aria-busy={loading}
        aria-pressed={pressed}
        {...props}
      >
        {loading && (
          <span 
            className="absolute w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" 
            aria-hidden="true" 
          />
        )}
        <span className={cn("flex items-center gap-sp-2", loading && "opacity-0")}>
          {!loading && leftIcon && (
            <span className="inline-flex items-center shrink-0">{leftIcon}</span>
          )}
          {!iconOnly && <span>{children}</span>}
          {iconOnly && !loading && children}
          {!loading && rightIcon && (
            <span className="inline-flex items-center shrink-0">{rightIcon}</span>
          )}
          {badge !== undefined && (
            <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold bg-white/20 rounded-full min-w-[18px] text-center">
              {badge}
            </span>
          )}
        </span>
      </button>
    );

    if (tooltip) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            {buttonElement}
          </TooltipTrigger>
          <TooltipContent>
            {tooltip}
          </TooltipContent>
        </Tooltip>
      );
    }

    return buttonElement;
  },
);

Button.displayName = "Button";
