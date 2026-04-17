"use client";

import React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "../../tokens/cn";

export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  label?: string;
}

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ label, className, ...props }, ref): React.JSX.Element => {
  return (
    <div className={cn(
      "flex items-center gap-3",
      props.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
    )}>
      <SwitchPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 focus-visible:ring-offset-2",
          "bg-neutral-800",
          "data-[state=checked]:bg-mint-500",
          className
        )}
        {...props}
      >
        <SwitchPrimitive.Thumb
          className={cn(
            "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-200",
            "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
          )}
        />
      </SwitchPrimitive.Root>
      {label && (
        <span className="text-sm font-body text-primary select-none font-medium">
          {label}
        </span>
      )}
    </div>
  );
});

Switch.displayName = "Switch";
