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
>(({ label, className, ...props }, ref): React.JSX.Element => {
  return (
    <div className={cn(
      "flex items-center gap-2.5",
      props.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
    )}>
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          "h-5 w-5 shrink-0 rounded-full border border-border bg-surface transition-all duration-150 focus-visible:outline-none",
          "hover:border-mint-400 group-hover:border-mint-400",
          "data-[state=checked]:border-mint-500",
          className
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <div className="h-2.5 w-2.5 rounded-full bg-mint-500" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      {label && (
        <span className="text-sm font-body text-primary select-none">
          {label}
        </span>
      )}
    </div>
  );
});

RadioGroupItem.displayName = "RadioGroupItem";
