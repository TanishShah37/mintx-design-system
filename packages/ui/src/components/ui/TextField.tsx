"use client";

import React, { useState } from "react";
import { cn } from "../../tokens/cn";
import { BaseProps } from "../../types";
import { getCommonClasses } from "../../tokens/common-props";
import { Loader } from "./Loader";
import { X } from "lucide-react";

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, BaseProps {
  label?: string;
  error?: string;
  helper?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "filled" | "flushed" | "unstyled";
  borderRadius?: "sm" | "md" | "lg" | "full";
  clearable?: boolean;
  loading?: boolean;
  success?: boolean;
  mask?: string;
  maxLength?: number;
  autoSelect?: boolean;
  onClear?: () => void;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      label,
      error,
      helper,
      hint,
      leftIcon,
      rightIcon,
      containerClassName,
      size = "md",
      variant = "default",
      borderRadius = "xl",
      clearable = false,
      loading = false,
      success = false,
      maxLength,
      autoSelect = false,
      onClear,
      onFocus,
      onChange,
      value,
      ...props
    },
    ref
  ): React.JSX.Element => {
    const [inputValue, setInputValue] = useState(value || "");

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (autoSelect) e.currentTarget.select();
      onFocus?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      onChange?.(e);
    };

    const handleClear = () => {
      setInputValue("");
      onClear?.();
      // Logic to trigger onChange for external control if needed
    };

    const sizeClasses = {
      sm: "h-9 text-xs",
      md: "h-11 text-sm",
      lg: "h-14 text-base",
    };

    const variantClasses = {
      default: "border-border bg-background focus:ring-primary/20 focus:border-primary",
      filled: "border-transparent bg-neutral-100 focus:bg-background focus:border-primary",
      flushed: "border-0 border-b border-border rounded-none bg-transparent px-0 focus:border-primary",
      unstyled: "border-0 bg-transparent p-0 focus:ring-0",
    };

    const radiusClasses = {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    };
    return (
      <div className={cn("flex flex-col gap-1.5 w-full", containerClassName, getCommonClasses(props))}>
        <div className="flex justify-between items-end">
          {label && (
            <label className="text-sm font-semibold text-foreground/80 leading-none">
              {label}
            </label>
          )}
          {maxLength && (
            <span className="text-[10px] text-muted-foreground uppercase font-medium">
              {(inputValue as string).length} / {maxLength}
            </span>
          )}
        </div>

        <div className="relative group">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            maxLength={maxLength}
            className={cn(
              "flex w-full border bg-background px-3 py-2 shadow-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
              sizeClasses[size],
              variantClasses[variant],
              variant !== "flushed" && radiusClasses[borderRadius as keyof typeof radiusClasses],
              leftIcon && "pl-10",
              (rightIcon || clearable || loading) && "pr-10",
              error && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20",
              success && "border-emerald-500 focus-visible:border-emerald-500 focus-visible:ring-emerald-500/20",
              className
            )}
            {...props}
          />

          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 h-full">
            {loading && <Loader size="xs" />}
            {!loading && clearable && inputValue && (
              <button
                type="button"
                onClick={handleClear}
                className="p-0.5 rounded-full hover:bg-neutral-100 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Clear input"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
            {!loading && rightIcon && (
              <div className="text-muted-foreground group-focus-within:text-primary transition-colors">
                {rightIcon}
              </div>
            )}
            {!loading && success && !rightIcon && (
              <div className="text-emerald-500">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>
        </div>

        {error && <p className="text-xs font-medium text-red-500">{error}</p>}
        {!error && helper && <p className="text-xs text-muted-foreground">{helper}</p>}
        {hint && <p className="text-[10px] text-muted-foreground italic">{hint}</p>}
      </div>
    );
  }
);

TextField.displayName = "TextField";
