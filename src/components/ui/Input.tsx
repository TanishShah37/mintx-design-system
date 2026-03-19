import React, { forwardRef, useId } from "react";
import type { InputProps } from "../../types";
import { cn } from "../../tokens/cn";
import "./Input.css";

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
      <div className={cn("input-group", fullWidth && "input-group--full")}>
        {label && (
          <label htmlFor={inputId} className="input-label">
            {label}
          </label>
        )}
        <div
          className={cn(
            "input-wrap",
            leftIcon && "input-wrap--left",
            rightIcon && "input-wrap--right",
          )}
        >
          {leftIcon && (
            <span className="input-icon input-icon--left" aria-hidden="true">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "input",
              `input--${size}`,
              hasError && "input--error",
              className,
            )}
            aria-describedby={
              hint ? `${inputId}-hint` : error ? `${inputId}-error` : undefined
            }
            aria-invalid={hasError}
            {...rest}
          />
          {rightIcon && (
            <span className="input-icon input-icon--right" aria-hidden="true">
              {rightIcon}
            </span>
          )}
        </div>
        {hint && !error && (
          <span id={`${inputId}-hint`} className="input-hint">
            {hint}
          </span>
        )}
        {error && (
          <span id={`${inputId}-error`} className="input-error" role="alert">
            {error}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
