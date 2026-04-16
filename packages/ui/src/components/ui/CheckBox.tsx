import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "../../tokens/cn";

export interface CheckBoxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: string;
  error?: string;
}

export const CheckBox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckBoxProps
>(({ label, error, className, ...props }, ref): React.JSX.Element => {
  return (
    <div className="flex flex-col gap-sp-1">
      <div className={cn(
        "flex items-center gap-2.5",
        props.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      )}>
        <CheckboxPrimitive.Root
          ref={ref}
          className={cn(
            "flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border transition-all duration-200 focus-visible:outline-none",
            "border-border bg-surface hover:border-mint-400",
            "data-[state=checked]:bg-mint-500 data-[state=checked]:border-mint-500",
            error && "border-red-500 text-red-500",
            className
          )}
          {...props}
        >
          <CheckboxPrimitive.Indicator className="flex items-center justify-center text-white">
            <Check size={13} strokeWidth={3} />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {label && (
          <span className="text-sm font-body text-primary select-none leading-none">
            {label}
          </span>
        )}
      </div>
      {error && (
        <p className="text-xs text-red-500 pl-[30px] font-medium">{error}</p>
      )}
    </div>
  );
});

CheckBox.displayName = "CheckBox";
