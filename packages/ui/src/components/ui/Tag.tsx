import React from "react";
import { X } from "lucide-react";

export interface TagProps {
  label: string;
  onRemove?: () => void;
  onClick?: () => void;
  variant?: "default" | "primary" | "secondary" | "outline";
  size?: "sm" | "md";
  className?: string;
  style?: React.CSSProperties;
}

const variantStyles: Record<string, React.CSSProperties> = {
  default: {
    background: "rgba(255,255,255,0.06)",
    color: "var(--text-secondary, #748A83)",
    border: "1px solid transparent",
  },
  primary: {
    background: "rgba(0,179,138,0.12)",
    color: "#00B38A",
    border: "1px solid rgba(0,179,138,0.25)",
  },
  secondary: {
    background: "rgba(255,255,255,0.08)",
    color: "var(--text-primary, #E8EDE8)",
    border: "1px solid rgba(255,255,255,0.1)",
  },
  outline: {
    background: "transparent",
    color: "var(--text-primary, #E8EDE8)",
    border: "1px solid var(--border-default, #2A3836)",
  },
};

const sizeStyles: Record<string, React.CSSProperties> = {
  sm: { height: 24, padding: "0 8px", fontSize: 10 },
  md: { height: 28, padding: "0 12px", fontSize: 11 },
};

export const Tag: React.FC<TagProps> = ({
  label,
  onRemove,
  onClick,
  variant = "default",
  size = "md",
  style,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        borderRadius: 99,
        fontWeight: 700,
        fontFamily: "var(--font-body)",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        cursor: onClick ? "pointer" : "default",
        userSelect: "none",
        transition: "opacity 0.15s",
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...style,
      }}
    >
      <span>{label}</span>
      {onRemove && (
        <button
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 14,
            height: 14,
            borderRadius: "50%",
            border: "none",
            background: "rgba(255,255,255,0.1)",
            cursor: "pointer",
            padding: 0,
            color: "currentColor",
          }}
        >
          <X size={size === "sm" ? 8 : 10} />
        </button>
      )}
    </div>
  );
};

Tag.displayName = "Tag";
