import React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "../../tokens/cn";

export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  label?: string;
}

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, label, ...props }, ref) => (
  <div className="flex items-center gap-3 group cursor-pointer">
    <SwitchPrimitive.Root
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-muted hover:data-[state=unchecked]:bg-muted/80",
        className
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
    {label && (
      <label className="text-sm font-medium leading-none cursor-pointer select-none group-data-[disabled]:cursor-not-allowed group-data-[disabled]:opacity-70">
        {label}
      </label>
    )}
  </div>
));
Switch.displayName = SwitchPrimitive.Root.displayName;
