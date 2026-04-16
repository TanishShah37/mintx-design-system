import React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "../../tokens/cn";

export interface ProgressIndicatorProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  indicatorClassName?: string;
}

export const ProgressIndicator = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressIndicatorProps
>(({ className, value, indicatorClassName, ...props }, ref): React.JSX.Element => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-muted",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        "h-full w-full flex-1 bg-primary transition-all duration-500 ease-in-out",
        indicatorClassName
      )}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
ProgressIndicator.displayName = ProgressPrimitive.Root.displayName;
