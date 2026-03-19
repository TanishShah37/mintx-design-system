import React from "react";
import { cn } from "../../tokens/cn";

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, label, error, leftIcon, rightIcon, containerClassName, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-1.5 w-full", containerClassName)}>
        {label && (
          <label className="text-sm font-semibold text-foreground/80 leading-none">
            {label}
          </label>
        )}
        <div className="relative group">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              "flex h-11 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm shadow-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              error && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20",
              className
            )}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
              {rightIcon}
            </div>
          )}
        </div>
        {error && <p className="text-xs font-medium text-red-500">{error}</p>}
      </div>
    );
  }
);

TextField.displayName = "TextField";
