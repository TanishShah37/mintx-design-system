import React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "../../tokens/cn";

export interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  label?: string;
  error?: string;
}

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, label, error, ...props }, ref) => (
  <div className="flex flex-col gap-3 w-full">
    {label && <label className="text-sm font-medium leading-none">{label}</label>}
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center group",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-muted">
        <SliderPrimitive.Range className="absolute h-full bg-primary" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background shadow-lg transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 hover:scale-110 active:scale-95" />
    </SliderPrimitive.Root>
    {error && <p className="text-xs font-medium text-red-500">{error}</p>}
  </div>
));
Slider.displayName = SliderPrimitive.Root.displayName;
