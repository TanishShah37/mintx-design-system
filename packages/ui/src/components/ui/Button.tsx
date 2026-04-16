import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../tokens/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-sp-2 font-body font-medium tracking-tight cursor-pointer border border-transparent relative overflow-hidden select-none whitespace-nowrap transition-all duration-120 ease-out focus-visible:outline-2 focus-visible:outline-mint-400 focus-visible:outline-offset-2 active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-mint-400 text-[#001A13] border-mint-400 shadow-[0_4px_16px_rgba(0,179,138,0.25)] hover:bg-mint-300 hover:border-mint-300 hover:-translate-y-[1px] hover:shadow-[0_6px_24px_rgba(0,179,138,0.38)]",
        secondary: "bg-surface text-neutral-900 border-neutral-200 shadow-sm hover:border-mint-400 hover:text-mint-600 hover:bg-mint-50",
        ghost: "bg-transparent text-neutral-600 border-transparent hover:bg-neutral-100 hover:text-neutral-900",
        danger: "bg-red-500/10 text-red-600 border-red-500/20 hover:bg-red-600 hover:text-white hover:border-red-600",
        "outline-brand": "bg-transparent text-mint-600 border-mint-400 hover:bg-mint-50",
        dark: "bg-neutral-800 text-mint-300 border-mint-300/20 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:bg-neutral-700 hover:border-mint-400",
      },
      size: {
        xs: "text-xs py-1 px-2.5 rounded-sm",
        sm: "text-sm py-1.5 px-3.5 rounded-md",
        md: "text-base py-[9px] px-5 rounded-md",
        lg: "text-lg py-3 px-[26px] rounded-lg",
        xl: "text-xl py-3.5 px-8 rounded-lg font-semibold",
      },
      fullWidth: {
        true: "w-full",
      },
      loading: {
        true: "cursor-wait",
      },
      iconOnly: {
        true: "p-0 aspect-square",
      }
    },
    compoundVariants: [
      { size: "xs", iconOnly: true, className: "w-7 h-7" },
      { size: "sm", iconOnly: true, className: "w-8 h-8" },
      { size: "md", iconOnly: true, className: "w-[38px] h-[38px]" },
      { size: "lg", iconOnly: true, className: "w-[46px] h-[46px]" },
      { size: "xl", iconOnly: true, className: "w-[52px] h-[52px]" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconOnly?: boolean;
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
      disabled,
      className,
      children,
      ...rest
    },
    ref,
  ): React.JSX.Element => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth, loading, iconOnly }), className)}
        disabled={disabled || loading}
        aria-busy={loading}
        {...rest}
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
        </span>
      </button>
    );
  },
);

Button.displayName = "Button";
