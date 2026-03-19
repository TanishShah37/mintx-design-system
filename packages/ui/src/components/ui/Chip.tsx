import React from "react";
import { cn } from "../../tokens/cn";
import { X } from "lucide-react";

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  onDelete?: () => void;
  icon?: React.ReactNode;
  variant?: "filled" | "outline" | "ghost";
  color?: "primary" | "secondary" | "success" | "warning" | "error" | "default";
}

export const Chip: React.FC<ChipProps> = ({
  label,
  onDelete,
  icon,
  variant = "filled",
  color = "default",
  className,
  ...props
}) => {
  const colorClasses = {
    default: variant === "filled" ? "bg-muted text-muted-foreground" : "border-border text-foreground",
    primary: variant === "filled" ? "bg-primary text-primary-foreground" : "border-primary text-primary",
    secondary: variant === "filled" ? "bg-secondary text-secondary-foreground" : "border-secondary text-secondary",
    success: variant === "filled" ? "bg-green-500 text-white" : "border-green-500 text-green-500",
    warning: variant === "filled" ? "bg-yellow-500 text-white" : "border-yellow-500 text-yellow-500",
    error: variant === "filled" ? "bg-red-500 text-white" : "border-red-500 text-red-500",
  };

  const variantClasses = variant === "outline" ? "border" : "";

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm font-bold transition-all select-none",
        colorClasses[color],
        variantClasses,
        className
      )}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="truncate max-w-[150px]">{label}</span>
      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="hover:bg-black/10 dark:hover:bg-white/10 rounded-full p-0.5 transition-colors"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
};

Chip.displayName = "Chip";
