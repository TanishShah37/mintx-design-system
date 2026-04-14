import React from "react";
import { cn } from "../../tokens/cn";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-white/5 rounded-md animate-gentle-pulse",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
