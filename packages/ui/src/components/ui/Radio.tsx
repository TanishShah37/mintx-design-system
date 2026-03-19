import React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "../../tokens/cn";

export const RadioGroup = RadioGroupPrimitive.Root;

export interface RadioItemProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label?: string;
}

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioItemProps
>(({ className, label, ...props }, ref) => (
  <div className="flex items-center gap-2.5 group cursor-pointer">
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "peer h-5 w-5 rounded-full border border-border shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary hover:border-primary/50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div className="h-2.5 w-2.5 rounded-full bg-primary animate-in zoom-in-75 duration-200" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
    {label && (
      <label className="text-sm font-medium leading-none cursor-pointer select-none group-data-[disabled]:cursor-not-allowed group-data-[disabled]:opacity-70">
        {label}
      </label>
    )}
  </div>
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
