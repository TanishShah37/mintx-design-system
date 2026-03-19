import React, { forwardRef, useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import type { InputProps } from "../../types";
import { cn } from "../../tokens/cn";

const inputVariants = cva(
  "w-full font-body text-neutral-900 bg-surface border border-neutral-200 rounded-md outline-none transition-all duration-120 placeholder:text-neutral-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-neutral-50 hover:not-disabled:not-error:border-neutral-400 focus:not-error:border-mint-400 focus:not-error:ring-4 focus:not-error:ring-mint-400/15",
  {
    variants: {
      size: {
        sm: "text-sm py-1.5 px-3 rounded-sm",
        md: "text-base py-[9px] px-3.5 rounded-md",
        lg: "text-lg py-3 px-4 rounded-lg",
      },
      error: {
        true: "border-red-500! focus:ring-4 focus:ring-red-500/15",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hint,
      error,
      size = "md",
      leftIcon,
      rightIcon,
      fullWidth = true,
      className,
      id,
      ...rest
    },
    ref,
  ) => {
    const uid = useId();
    const inputId = id ?? uid;
    const hasError = !!error;

    return (
      <div className={cn("flex flex-col gap-sp-1", fullWidth && "w-full")}>
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-neutral-600">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <span 
              className="absolute top-1/2 -translate-y-1/2 left-3 text-neutral-400 flex items-center justify-center w-4 h-4 pointer-events-none" 
              aria-hidden="true"
            >
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              inputVariants({ size, error: hasError }),
              leftIcon && "pl-[38px]",
              rightIcon && "pr-[38px]",
              className,
            )}
            aria-describedby={
              hint ? `${inputId}-hint` : error ? `${inputId}-error` : undefined
            }
            aria-invalid={hasError}
            {...rest}
          />
          {rightIcon && (
            <span 
              className="absolute top-1/2 -translate-y-1/2 right-3 text-neutral-400 flex items-center justify-center w-4 h-4 pointer-events-none" 
              aria-hidden="true"
            >
              {rightIcon}
            </span>
          )}
        </div>
        {hint && !error && (
          <span id={`${inputId}-hint`} className="text-[11px] text-neutral-400">
            {hint}
          </span>
        )}
        {error && (
          <span id={`${inputId}-error`} className="text-[11px] text-red-500" role="alert">
            {error}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
