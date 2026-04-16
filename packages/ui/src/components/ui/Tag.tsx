import React from "react";
import { X } from "lucide-react";
import { cn } from "../../tokens/cn";

export interface TagProps {
  label: string;
  onRemove?: () => void;
  onClick?: () => void;
  variant?: "default" | "primary" | "secondary" | "outline";
  size?: "sm" | "md";
  className?: string;
}

const variantClasses = {
  default: "bg-surface text-neutral-400 border-border shadow-sm",
  primary: "bg-mint-500/10 text-mint-500 border-mint-500/25",
  secondary: "bg-white/10 text-primary border-white/5",
  outline: "bg-transparent border border-border text-primary",
};

const sizeClasses = {
  sm: "h-6 px-2 text-[10px]",
  md: "h-7 px-3 text-[11px]",
};

export function Tag({
  label,
  onRemove,
  onClick,
  variant = "default",
  size = "md",
  className,
}: TagProps): React.JSX.Element {
  return (
    <div
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-bold uppercase tracking-widest transition-all duration-150 border",
        variantClasses[variant],
        sizeClasses[size],
        onClick ? "cursor-pointer hover:scale-105 active:scale-95" : "cursor-default",
        className
      )}
    >
      <span>{label}</span>
      {onRemove && (
        <button
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          className="flex items-center justify-center p-0.5 rounded-full hover:bg-white/15 transition-colors cursor-pointer border-none bg-transparent"
        >
          <X size={size === "sm" ? 8 : 10} />
        </button>
      )}
    </div>
  );
}

Tag.displayName = "Tag";
