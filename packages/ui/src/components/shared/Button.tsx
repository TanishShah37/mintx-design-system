import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../tokens/cn";
import { BaseProps } from "../../types";
import { getCommonClasses } from "../../tokens/common-props";
import { PolymorphicComponentProps, PolymorphicForwardRef } from "../../types/polymorphic";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-sp-2 font-body font-medium tracking-tight cursor-pointer border border-transparent relative overflow-hidden select-none whitespace-nowrap transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-mint-400 focus-visible:outline-offset-2 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none before:absolute before:inset-[-8px] before:content-['']",
  {
    variants: {
      variant: {
        primary: "bg-mint-400 text-neutral-900 border-mint-400 shadow-[0_4px_16px_rgba(0,179,138,0.25)] hover:bg-mint-300 hover:border-mint-300 hover:-translate-y-[1px] hover:shadow-[0_6px_24px_rgba(0,179,138,0.38)]",
        secondary: "bg-surface text-neutral-900 border-neutral-200 shadow-sm hover:border-mint-400 hover:text-mint-600 hover:bg-mint-50",
        ghost: "bg-transparent text-neutral-600 border-transparent hover:bg-neutral-100 hover:text-neutral-900",
        outline: "bg-transparent border border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400",
        "brand-outline": "bg-transparent text-mint-600 border-mint-400 hover:bg-mint-50",
      },
      size: {
        sm: "text-sm py-1.5 px-3.5 rounded-md min-h-[36px]",
        md: "text-base py-[11px] px-6 rounded-md min-h-[44px]",
        lg: "text-lg py-3.5 px-8 rounded-lg min-h-[52px]",
        icon: "p-2 rounded-md aspect-square min-h-[44px] min-w-[44px]",
      },
      fullWidth: {
        true: "w-full",
      },
      loading: {
        true: "cursor-wait active:scale-100",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonOwnProps extends VariantProps<typeof buttonVariants>, BaseProps {
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconOnly?: boolean;
}

export type ButtonProps<T extends React.ElementType = "button"> = PolymorphicComponentProps<
  T,
  ButtonOwnProps
>;

const ButtonInner = (
  {
    as,
    variant,
    size,
    loading = false,
    leftIcon,
    rightIcon,
    iconOnly = false,
    fullWidth,
    disabled,
    className,
    style,
    children,
    ...props
  }: any,
  ref: React.ForwardedRef<any>
) => {
  const Component = as || "button";

  return (
    <Component
      ref={ref}
      className={cn(
        buttonVariants({ 
          variant, 
          size: iconOnly ? "icon" : size, 
          fullWidth, 
          loading 
        }),
        getCommonClasses(props),
        className
      )}
      style={style}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <span 
          className="absolute w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" 
          aria-hidden="true" 
        />
      )}
      <span className={cn("flex items-center gap-sp-2 justify-center", loading && "opacity-0")}>
        {!loading && leftIcon && (
          <span className="inline-flex items-center shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!loading && rightIcon && (
          <span className="inline-flex items-center shrink-0">{rightIcon}</span>
        )}
      </span>
    </Component>
  );
};

export const Button = forwardRef(ButtonInner) as PolymorphicForwardRef<ButtonOwnProps, "button">;

Button.displayName = "Button";
