"use client";

import React, { useRef } from "react";
import { Plus, Minus } from "lucide-react";
import { TextField, type TextFieldProps } from "./TextField";
import { Button } from "./Button";
import { cn } from "../../tokens/cn";
import { getCommonClasses } from "../../tokens/common-props";
import { BaseProps } from "../../types";

export interface NumberInputProps extends Omit<TextFieldProps, "onChange" | "value">, BaseProps {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  showStepper?: boolean;
}

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      value,
      defaultValue,
      min = -Infinity,
      max = Infinity,
      step = 1,
      onChange,
      showStepper = true,
      className,
      ...props
    },
    ref
  ): React.JSX.Element => {
    const inputRef = useRef<HTMLInputElement>(null);
    const combinedRef = (ref as React.MutableRefObject<HTMLInputElement>) || inputRef;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseFloat(e.target.value);
      if (!isNaN(newValue)) {
        onChange?.(newValue);
      }
    };

    const handleStep = (direction: number) => {
      const currentValue = parseFloat(combinedRef.current?.value || "0");
      const newValue = currentValue + direction * step;
      if (newValue >= min && newValue <= max) {
        if (combinedRef.current) {
          combinedRef.current.value = newValue.toString();
          onChange?.(newValue);
        }
      }
    };

    return (
      <div className={cn("relative w-full group", getCommonClasses(props))}>
        <TextField
          {...props}
          ref={combinedRef}
          type="number"
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          className={cn(showStepper && "pr-20", className)}
          min={min}
          max={max}
          step={step}
        />
        {showStepper && (
          <div className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-1 h-8 px-1 border-l border-border-subtle bg-background rounded-r-lg">
            <Button
              type="button"
              variant="ghost"
              size="xs"
              className="h-7 w-7 p-0"
              onClick={() => handleStep(-1)}
              disabled={value !== undefined ? value <= min : false}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="xs"
              className="h-7 w-7 p-0"
              onClick={() => handleStep(1)}
              disabled={value !== undefined ? value >= max : false}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        )}
      </div>
    );
  }
);

NumberInput.displayName = "NumberInput";
