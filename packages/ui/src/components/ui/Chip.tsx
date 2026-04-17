import React from "react";
import { X } from "lucide-react";
import { cn } from "../../tokens/cn";

export interface ChipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  label: string;
  onDelete?: () => void;
  icon?: React.ReactNode;
  variant?: "filled" | "outline" | "ghost";
  color?: "primary" | "secondary" | "success" | "warning" | "error" | "default";
}

const colorVariants = {
  default: "bg-surface text-neutral-400 border-border",
  primary: "bg-mint-500/10 text-mint-500 border-mint-500/30",
  secondary: "bg-white/5 text-primary border-white/10",
  success: "bg-green-500/10 text-green-500 border-green-500/25",
  warning: "bg-yellow-500/10 text-yellow-500 border-yellow-500/25",
  error: "bg-red-500/10 text-red-500 border-red-500/25",
};

export function Chip({
  label,
  onDelete,
  icon,
  variant = "filled",
  color = "default",
  className,
  ...props
}: ChipProps): React.JSX.Element {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold font-body transition-all duration-150 border",
        variant === "filled" && colorVariants[color],
        variant === "outline" && "bg-transparent",
        variant === "outline" && color === "default" && "border-border text-neutral-400",
        variant === "outline" && color !== "default" && colorVariants[color].replace(/bg-[^\s]*/, "bg-transparent"),
        variant === "ghost" && "bg-transparent border-transparent",
        className
      )}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="truncate max-w-[160px] uppercase tracking-wider">{label}</span>
      {onDelete && (
        <button
          onClick={(e) => { e.stopPropagation(); onDelete(); }}
          className="flex items-center justify-center h-4 w-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-current border-none p-0 cursor-pointer"
        >
          <X size={10} />
        </button>
      )}
    </div>
  );
}

Chip.displayName = "Chip";
