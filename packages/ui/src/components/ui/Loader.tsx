import React from "react";
import { cn } from "../../tokens/cn";
import { Loader2 } from "lucide-react";

export interface LoaderProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  label?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  size = "md",
  className,
  label,
}) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Loader2
        className={cn(
          "animate-spin text-primary",
          sizeClasses[size],
          className
        )}
      />
      {label && (
        <p className="text-sm font-bold text-muted-foreground animate-pulse tracking-widest uppercase">
          {label}
        </p>
      )}
    </div>
  );
};

Loader.displayName = "Loader";
