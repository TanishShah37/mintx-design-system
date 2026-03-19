import React, { useState } from "react";
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

const sizePx: Record<string, number> = { sm: 14, md: 20, lg: 28 };

export const Rating: React.FC<RatingProps> = ({
  value = 0,
  max = 5,
  onChange,
  readonly = false,
  size = "md",
  label,
}) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const px = sizePx[size];
  const displayValue = hoverValue !== null ? hoverValue : value;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {label && (
        <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary, #748A83)", fontFamily: "var(--font-body)" }}>
          {label}
        </span>
      )}
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        {Array.from({ length: max }).map((_, i) => {
          const starValue = i + 1;
          // Support half stars: treat value like 3.5 → stars 1,2,3 are full, star 4 is empty
          const isFull = displayValue >= starValue;
          const isHalf = !isFull && displayValue >= starValue - 0.5;

          return (
            <button
              key={i}
              type="button"
              disabled={readonly}
              onMouseEnter={() => !readonly && setHoverValue(starValue)}
              onMouseLeave={() => !readonly && setHoverValue(null)}
              onClick={() => !readonly && onChange?.(starValue)}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: readonly ? "default" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.15s",
                outline: "none",
              }}
            >
              <Star
                size={px}
                color={isFull || isHalf ? "#F59E0B" : "var(--border-default, #2A3836)"}
                fill={isFull ? "#F59E0B" : "transparent"}
                style={{ transition: "color 0.15s" }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

Rating.displayName = "Rating";
