import React from "react";
import { cn } from "../../tokens/cn";
import { X } from "lucide-react";

export interface TagProps {
  label: string;
  onRemove?: () => void;
  onClick?: () => void;
  variant?: "default" | "primary" | "secondary" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  label,
  onRemove,
  onClick,
  variant = "default",
  size = "md",
  className,
}) => {
  const variantClasses = {
    default: "bg-muted text-muted-foreground",
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary/10 text-secondary border-secondary/20",
    outline: "bg-transparent border border-border text-foreground",
  };

  const sizeClasses = {
    sm: "h-6 px-2 text-[10px]",
    md: "h-8 px-3 text-xs",
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-bold uppercase tracking-wider transition-all",
        variantClasses[variant],
        sizeClasses[size],
        onClick && "cursor-pointer hover:opacity-80 active:scale-95",
        className
      )}
    >
      <span>{label}</span>
      {onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="hover:bg-foreground/10 rounded-full p-0.5 transition-colors"
        >
          <X size={size === "sm" ? 10 : 12} />
        </button>
      )}
    </div>
  );
};

Tag.displayName = "Tag";
