"use client";

import React from "react";
import { cn } from "../../tokens/cn";
export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(({ className, label, error, hint, leftIcon, rightIcon, fullWidth, ...props }, ref): React.JSX.Element => {
    return (
      <div className={cn("flex flex-col gap-sp-1.5 w-full", fullWidth && "w-full")}>
        {label && (
          <label className="text-sm font-semibold text-text-primary leading-none font-display">
            {label}
          </label>
        )}
        <div className="relative group">
          {leftIcon && (
            <div className="absolute left-sp-3 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-text-brand transition-colors">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              "flex h-sp-11 w-full rounded-xl border border-border-default bg-surface px-sp-3 py-sp-2 text-sm shadow-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500/20 focus-visible:border-mint-500 disabled:cursor-not-allowed disabled:opacity-50 font-body text-text-primary",
              leftIcon && "pl-sp-10",
              rightIcon && "pr-sp-10",
              error && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20",
              className
            )}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-sp-3 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-text-brand transition-colors">
              {rightIcon}
            </div>
          )}
        </div>
        {hint && !error && <p className="text-[11px] text-text-tertiary font-medium">{hint}</p>}
        {error && <p className="text-xs font-medium text-red-500">{error}</p>}
      </div>
    );
  }
);

TextField.displayName = "TextField";
