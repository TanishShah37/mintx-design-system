import React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ sideOffset = 6, style, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    style={{
      zIndex: 9999,
      overflow: "hidden",
      borderRadius: 8,
      background: "rgba(20,30,28,0.95)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255,255,255,0.08)",
      padding: "6px 12px",
      fontSize: 12,
      fontWeight: 700,
      color: "var(--text-primary, #E8EDE8)",
      fontFamily: "var(--font-body)",
      letterSpacing: "0.03em",
      textTransform: "uppercase",
      boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
      maxWidth: 260,
      ...style,
    }}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export type { TooltipProps } from "@radix-ui/react-tooltip";
