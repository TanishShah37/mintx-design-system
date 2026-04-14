import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../tokens/cn";
import { X, Info, AlertTriangle, CheckCircle2 } from "lucide-react";

export interface NudgeProps {
  id: string;
  title: string;
  description: string;
  variant?: "info" | "warning" | "success" | "neutral";
  onClose?: (id: string) => void;
  onAction?: (id: string) => void;
  actionLabel?: string;
  className?: string;
}

export const Nudge: React.FC<NudgeProps> = ({
  id,
  title,
  description,
  variant = "info",
  onClose,
  onAction,
  actionLabel,
  className,
}) => {
  const icons = {
    info: <Info className="text-blue-500" size={18} />,
    warning: <AlertTriangle className="text-amber-500" size={18} />,
    success: <CheckCircle2 className="text-mint-500" size={18} />,
    neutral: <Info className="text-neutral-400" size={18} />,
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, x: 20 }}
      className={cn(
        "group relative p-sp-4 rounded-xl border border-neutral-150 bg-surface/80 backdrop-blur-md shadow-lg flex gap-sp-4 min-w-[320px] max-w-[400px]",
        variant === "info" && "border-blue-500/20",
        variant === "warning" && "border-amber-500/20",
        variant === "success" && "border-mint-500/20",
        variant === "neutral" && "border-neutral-150",
        className
      )}
    >
      <div className="mt-1">{icons[variant]}</div>
      <div className="flex-1">
        <h4 className="font-bold text-sm leading-tight mb-1">{title}</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {description}
        </p>
        {onAction && actionLabel && (
          <button
            onClick={() => onAction(id)}
            className="mt-sp-3 text-xs font-bold text-mint-600 hover:underline"
          >
            {actionLabel}
          </button>
        )}
      </div>
      {onClose && (
        <button
          onClick={() => onClose(id)}
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-muted rounded-md"
        >
          <X size={14} />
        </button>
      )}
    </motion.div>
  );
};
