import React from "react";
import { cn } from "../../tokens/cn";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Divider({
  orientation = "horizontal",
  className,
  ...props
}: DividerProps): React.JSX.Element {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  );
}

Divider.displayName = "Divider";
