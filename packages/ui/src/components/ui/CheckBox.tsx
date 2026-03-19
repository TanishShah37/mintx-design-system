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
>(({ className, label, error, ...props }, ref) => (
  <div className="flex flex-col gap-1.5">
    <div className="flex items-center gap-2.5 group cursor-pointer">
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
          "peer h-5 w-5 shrink-0 rounded-md border border-border shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:text-primary-foreground hover:border-primary/50",
          error && "border-red-500",
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current animate-in zoom-in-75 duration-200">
          <Check className="h-3.5 w-3.5 stroke-[3]" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label && (
        <label
          onClick={() => !props.disabled && props.onCheckedChange?.(!props.checked)}
          className="text-sm font-medium leading-none cursor-pointer select-none group-data-[disabled]:cursor-not-allowed group-data-[disabled]:opacity-70"
        >
          {label}
        </label>
      )}
    </div>
    {error && <p className="text-xs font-medium text-red-500">{error}</p>}
  </div>
));
CheckBox.displayName = CheckboxPrimitive.Root.displayName;
