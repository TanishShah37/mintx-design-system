import React, { forwardRef } from "react";
import type { ButtonProps } from "../../types";
import { cn } from "../../tokens/cn";
import "./Button.css";

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  xs: "btn--xs",
  sm: "btn--sm",
  md: "btn--md",
  lg: "btn--lg",
  xl: "btn--xl",
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  ghost: "btn--ghost",
  danger: "btn--danger",
  "outline-brand": "btn--outline-brand",
  dark: "btn--dark",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      iconOnly = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "btn",
          variantClasses[variant],
          sizeClasses[size],
          iconOnly && "btn--icon",
          fullWidth && "btn--full",
          loading && "btn--loading",
          className,
        )}
        disabled={disabled || loading}
        aria-busy={loading}
        {...rest}
      >
        {loading && <span className="btn__spinner" aria-hidden="true" />}
        {!loading && leftIcon && (
          <span className="btn__icon btn__icon--left">{leftIcon}</span>
        )}
        {!iconOnly && <span className="btn__text">{children}</span>}
        {iconOnly && !loading && children}
        {!loading && rightIcon && (
          <span className="btn__icon btn__icon--right">{rightIcon}</span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
