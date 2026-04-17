"use client";

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
>(({ label, error, className, ...props }, ref): React.JSX.Element => (
  <div className="flex w-full flex-col gap-2.5">
    {label && (
      <span className="text-sm font-semibold font-body text-neutral-400">
        {label}
      </span>
    )}
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        props.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-neutral-800">
        <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-mint-500 to-mint-400" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-[2.5px] border-surface bg-mint-500 shadow-brand transition-all duration-150 focus-visible:outline-none focus-visible:scale-110 active:scale-95 disabled:pointer-events-none" />
    </SliderPrimitive.Root>
    {error && (
      <p className="text-xs text-red-500 font-medium">{error}</p>
    )}
  </div>
));

Slider.displayName = "Slider";
