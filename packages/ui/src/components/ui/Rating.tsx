import React, { useState } from "react";
import { cn } from "../../tokens/cn";
import { Star } from "lucide-react";

export interface RatingProps {
  value?: number;
  max?: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

export const Rating: React.FC<RatingProps> = ({
  value = 0,
  max = 5,
  onChange,
  readonly = false,
  size = "md",
  className,
  label,
}) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && <label className="text-sm font-semibold text-foreground/80 leading-none">{label}</label>}
      <div className="flex items-center gap-1">
        {Array.from({ length: max }).map((_, i) => {
          const starValue = i + 1;
          const isActive = (hoverValue !== null ? hoverValue : value) >= starValue;

          return (
            <button
              key={i}
              type="button"
              disabled={readonly}
              onMouseEnter={() => !readonly && setHoverValue(starValue)}
              onMouseLeave={() => !readonly && setHoverValue(null)}
              onClick={() => !readonly && onChange?.(starValue)}
              className={cn(
                "transition-all duration-200 outline-none",
                readonly ? "cursor-default" : "cursor-pointer hover:scale-110 active:scale-90",
                isActive ? "text-yellow-400" : "text-muted opacity-30"
              )}
            >
              <Star
                className={cn(sizeClasses[size], isActive && "fill-current")}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

Rating.displayName = "Rating";
