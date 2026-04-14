import React from "react";
import { cn } from "../../tokens/cn";
import { Button, type ButtonProps } from "../shared/Button";

export interface FabProps extends Omit<ButtonProps, "variant"> {
  icon: React.ReactNode;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left" | "none";
}

export const Fab = React.forwardRef<HTMLButtonElement, FabProps>(
  ({ icon, children, position = "none", className, ...props }, ref) => {
    const positionClasses: Record<NonNullable<FabProps["position"]>, string> = {
      "bottom-right": "fixed bottom-8 right-8 z-50",
      "bottom-left": "fixed bottom-8 left-8 z-50",
      "top-right": "fixed top-24 right-8 z-50",
      "top-left": "fixed top-24 left-8 z-50",
      none: "relative",
    };

    return (
      <Button
        ref={ref}
        variant="primary"
        size="lg"
        className={cn(
          "rounded-full shadow-[0_8px_32px_rgba(0,179,138,0.4)] hover:shadow-[0_12px_48px_rgba(0,179,138,0.6)] flex items-center justify-center p-0 transition-all duration-300",
          !children && "aspect-square w-sp-14 h-sp-14",
          children && "px-sp-6 py-sp-4 aspect-auto h-sp-14",
          positionClasses[position],
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2">
          {icon}
          {children && <span className="font-bold tracking-tight">{children}</span>}
        </div>
      </Button>
    );
  }
);

Fab.displayName = "Fab";
