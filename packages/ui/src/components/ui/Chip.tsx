import React from "react";
import { X } from "lucide-react";

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  onDelete?: () => void;
  icon?: React.ReactNode;
  variant?: "filled" | "outline" | "ghost";
  color?: "primary" | "secondary" | "success" | "warning" | "error" | "default";
}

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  default: { bg: "rgba(255,255,255,0.06)", text: "var(--text-secondary, #748A83)", border: "transparent" },
  primary: { bg: "rgba(0,179,138,0.12)", text: "#00B38A", border: "rgba(0,179,138,0.3)" },
  secondary: { bg: "rgba(255,255,255,0.08)", text: "var(--text-primary, #E8EDE8)", border: "rgba(255,255,255,0.1)" },
  success: { bg: "rgba(34,197,94,0.12)", text: "#22C55E", border: "rgba(34,197,94,0.25)" },
  warning: { bg: "rgba(234,179,8,0.12)", text: "#EAB308", border: "rgba(234,179,8,0.25)" },
  error: { bg: "rgba(239,68,68,0.12)", text: "#EF4444", border: "rgba(239,68,68,0.25)" },
};

export const Chip: React.FC<ChipProps> = ({
  label,
  onDelete,
  icon,
  variant = "filled",
  color = "default",
  style,
  ...props
}) => {
  const c = colorMap[color] || colorMap.default;

  const bgStyle: React.CSSProperties =
    variant === "filled"
      ? { background: c.bg, border: `1px solid ${c.border}` }
      : variant === "outline"
      ? { background: "transparent", border: `1px solid ${c.border || "var(--border-default, #2A3836)"}` }
      : { background: "transparent", border: "1px solid transparent" };

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "5px 12px",
        borderRadius: 99,
        fontSize: 12,
        fontWeight: 700,
        fontFamily: "var(--font-body)",
        color: c.text,
        userSelect: "none",
        transition: "all 0.15s",
        ...bgStyle,
        ...style,
      }}
      {...props}
    >
      {icon && <span style={{ flexShrink: 0, display: "flex" }}>{icon}</span>}
      <span style={{ maxWidth: 160, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{label}</span>
      {onDelete && (
        <button
          onClick={(e) => { e.stopPropagation(); onDelete(); }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 16,
            height: 16,
            borderRadius: "50%",
            border: "none",
            background: "rgba(255,255,255,0.1)",
            cursor: "pointer",
            padding: 0,
            color: c.text,
          }}
        >
          <X size={10} />
        </button>
      )}
    </div>
  );
};

Chip.displayName = "Chip";
