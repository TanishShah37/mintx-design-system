"use client";

import React, { useState } from "react";
import { AlertCircle, CheckCircle2, Info, XCircle, X } from "lucide-react";
import { cn } from "../../tokens/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { BaseProps } from "../../types";
import { getCommonClasses } from "../../tokens/common-props";
import { AnimatePresence, motion } from "framer-motion";

const alertVariants = cva(
  "flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 relative",
  {
    variants: {
      status: {
        info: "text-blue-700 border-blue-200",
        success: "text-emerald-700 border-emerald-200",
        warning: "text-amber-700 border-amber-200",
        error: "text-red-700 border-red-200",
      },
      variant: {
        subtle: "",
        solid: "text-white border-transparent",
        outline: "bg-transparent",
        ghost: "bg-transparent border-transparent px-0 shadow-none",
      },
    },
    compoundVariants: [
      // Subtle
      { status: "info", variant: "subtle", className: "bg-blue-50" },
      { status: "success", variant: "subtle", className: "bg-emerald-50" },
      { status: "warning", variant: "subtle", className: "bg-amber-50" },
      { status: "error", variant: "subtle", className: "bg-red-50" },
      // Solid
      { status: "info", variant: "solid", className: "bg-blue-500" },
      { status: "success", variant: "solid", className: "bg-emerald-500" },
      { status: "warning", variant: "solid", className: "bg-amber-500" },
      { status: "error", variant: "solid", className: "bg-red-500" },
    ],
    defaultVariants: {
      status: "info",
      variant: "subtle",
    },
  }
);

const icons = {
  info: <Info size={18} />,
  success: <CheckCircle2 size={18} />,
  warning: <AlertCircle size={18} />,
  error: <XCircle size={18} />,
};

export interface AlertProps 
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart">, 
    VariantProps<typeof alertVariants>,
    BaseProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  action?: React.ReactNode;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      status = "info",
      variant = "subtle",
      title,
      description,
      icon,
      dismissible = false,
      onDismiss,
      action,
      children,
      ...props
    },
    ref
  ): React.JSX.Element => {
    const [isVisible, setIsVisible] = useState(true);

    const handleDismiss = () => {
      setIsVisible(false);
      onDismiss?.();
    };

    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={ref}
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={cn(
              alertVariants({ status, variant }),
              variant !== "ghost" && "shadow-sm",
              getCommonClasses(props),
              className
            )}
            {...props}
          >
            <span className="flex-shrink-0 mt-0.5 text-current flex items-center justify-center">
              {icon || icons[status ?? "info"]}
            </span>
            <div className="flex-1 min-w-0">
              {title && (
                <p className="text-sm font-bold mb-1 tracking-tight leading-none text-current">
                  {title}
                </p>
              )}
              {description && (
                <p className="text-xs opacity-90 leading-relaxed font-body text-current">
                  {description}
                </p>
              )}
              {children && <div className="mt-2 text-xs">{children}</div>}
              {action && <div className="mt-3 flex gap-2">{action}</div>}
            </div>
            {dismissible && (
              <button
                type="button"
                onClick={handleDismiss}
                className="flex-shrink-0 p-1 rounded-full hover:bg-black/5 text-current opacity-60 hover:opacity-100 transition-all"
                aria-label="Dismiss alert"
              >
                <X size={16} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

Alert.displayName = "Alert";
