"use client";

import React, { forwardRef, useId } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../tokens/cn";
import { BaseProps } from "../../types";
import { getCommonClasses } from "../../tokens/common-props";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, BaseProps {
  label?: string;
  hint?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const inputVariants = cva(
  "w-full font-body text-text-primary bg-surface border border-border rounded-xl outline-none transition-all duration-120 placeholder:text-text-tertiary disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-muted/40 hover:not-disabled:not-error:border-border-strong focus:not-error:border-mint-500 focus:not-error:ring-4 focus:not-error:ring-mint-500/10",
  {
    variants: {
      size: {
        sm: "text-sm py-1.5 px-3 rounded-lg",
        md: "text-sm h-11 px-4 rounded-xl",
        lg: "text-base h-13 px-5 rounded-2xl",
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
  ): React.JSX.Element => {
    const uid = useId();
    const inputId = id ?? uid;
    const hasError = !!error;

    return (
      <div className={cn("flex flex-col gap-1.5", fullWidth && "w-full")}>
        {label && (
          <label htmlFor={inputId} className="text-sm font-semibold text-text-secondary leading-none">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <span 
              className="absolute top-1/2 -translate-y-1/2 left-3.5 text-text-tertiary flex items-center justify-center w-4 h-4 pointer-events-none" 
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
              leftIcon && "pl-11",
              rightIcon && "pr-11",
              getCommonClasses(rest),
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
              className="absolute top-1/2 -translate-y-1/2 right-3.5 text-text-tertiary flex items-center justify-center w-4 h-4 pointer-events-none" 
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
