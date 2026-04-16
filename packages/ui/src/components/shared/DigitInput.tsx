"use client";

import React, { useRef, useState } from "react";
import { cn } from "../../tokens/cn";

export interface DigitInputProps {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
  className?: string;
  containerClassName?: string;
}

export function DigitInput({
  length = 6,
  value = "",
  onChange,
  disabled = false,
  error = false,
  className,
  containerClassName,
}: DigitInputProps): React.JSX.Element {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const val = e.target.value;
    if (!/^\d*$/.test(val)) return;

    const newValue = value.split("");
    newValue[index] = val.slice(-1);
    const updatedValue = newValue.join("");
    onChange?.(updatedValue);

    if (val && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, length);
    if (!/^\d+$/.test(pasteData)) return;
    onChange?.(pasteData);
    inputsRef.current[Math.min(pasteData.length, length - 1)]?.focus();
  };

  return (
    <div className={cn("flex gap-2 justify-center", containerClassName)}>
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => {
            inputsRef.current[i] = el;
          }}
          type="text"
          inputMode="numeric"
          pattern="\d*"
          maxLength={1}
          value={value[i] || ""}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          onPaste={handlePaste}
          disabled={disabled}
          className={cn(
            "w-12 h-14 text-center text-xl font-bold bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all",
            error && "border-red-500 focus:ring-red-500/20 focus:border-red-500",
            className
          )}
        />
      ))}
    </div>
  );
}

DigitInput.displayName = "DigitInput";
