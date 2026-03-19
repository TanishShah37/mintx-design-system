import React, { useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import type { SelectProps } from "../../types";
import { cn } from "../../tokens/cn";

const selectVariants = cva(
  "w-full font-body text-neutral-900 bg-surface border border-neutral-200 rounded-md outline-none appearance-none pr-[36px] cursor-pointer transition-all duration-120 hover:not-disabled:border-neutral-400 focus:not-error:border-mint-400 focus:not-error:ring-4 focus:not-error:ring-mint-400/15 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        sm: "text-sm py-1.5 px-3",
        md: "text-base py-[9px] px-3.5",
        lg: "text-lg py-3 px-4",
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

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  placeholder,
  label,
  hint,
  error,
  disabled = false,
  onChange,
  size = "md",
  className,
  style,
}) => {
  const uid = useId();
  const hasError = !!error;

  return (
    <div className={cn("flex flex-col gap-sp-1", className)} style={style}>
      {label && (
        <label htmlFor={uid} className="text-sm font-medium text-neutral-600">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={uid}
          className={cn(selectVariants({ size, error: hasError }))}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.value)}
          aria-invalid={hasError}
          aria-describedby={
            error ? `${uid}-error` : hint ? `${uid}-hint` : undefined
          }
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none flex items-center" aria-hidden="true">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </div>
      {hint && !error && (
        <span id={`${uid}-hint`} className="text-[11px] text-neutral-400">
          {hint}
        </span>
      )}
      {error && (
        <span id={`${uid}-error`} className="text-[11px] text-red-500" role="alert">
          {error}
        </span>
      )}
    </div>
  );
};

Select.displayName = "Select";
