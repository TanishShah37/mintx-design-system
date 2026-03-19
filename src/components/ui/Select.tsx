import React, { useId } from "react";
import type { SelectProps } from "../../types";
import { cn } from "../../tokens/cn";
import "./Select.css";

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
    <div className={cn("select-group", className)} style={style}>
      {label && (
        <label htmlFor={uid} className="select-label">
          {label}
        </label>
      )}
      <div className="select-wrap">
        <select
          id={uid}
          className={cn(
            "select",
            `select--${size}`,
            hasError && "select--error",
          )}
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
        <span className="select-chevron" aria-hidden="true">
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
        <span id={`${uid}-hint`} className="select-hint">
          {hint}
        </span>
      )}
      {error && (
        <span id={`${uid}-error`} className="select-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
};

Select.displayName = "Select";
