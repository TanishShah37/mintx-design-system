import React, { useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import type { ToggleProps } from "../../types";
import { cn } from "../../tokens/cn";

const toggleVariants = cva(
  "inline-flex items-center gap-sp-2 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const trackVariants = cva(
  "relative rounded-full shrink-0 transition-colors duration-200 peer-checked:bg-mint-400 bg-neutral-200",
  {
    variants: {
      size: {
        sm: "w-8 h-[18px]",
        md: "w-10 h-[22px]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const thumbVariants = cva(
  "absolute bg-white rounded-full shadow-sm transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] top-[3px] left-[3px]",
  {
    variants: {
      size: {
        sm: "w-3 h-3 peer-checked:translate-x-[14px]",
        md: "w-4 h-4 peer-checked:translate-x-[18px]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const Toggle: React.FC<ToggleProps> = ({
  checked,
  defaultChecked,
  disabled = false,
  size = "md",
  label,
  onChange,
  className,
  style,
}) => {
  const uid = useId();

  return (
    <label
      htmlFor={uid}
      className={cn(toggleVariants({ size }), className)}
      style={style}
    >
      <input
        id={uid}
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        role="switch"
        aria-checked={checked}
      />
      <div className={trackVariants({ size })} aria-hidden="true">
        <div className={cn(thumbVariants({ size }), "peer-checked:translate-x-[18px]!")} />
      </div>
      {label && <span className="text-sm font-medium text-neutral-600">{label}</span>}
    </label>
  );
};

Toggle.displayName = "Toggle";
