"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "../../tokens/cn";
import { BaseProps } from "../../types";
import { getCommonClasses } from "../../tokens/common-props";

interface CollapsibleProps extends BaseProps {
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  variant?: "ghost" | "card" | "bordered";
}

export function Collapsible({
  title,
  children,
  defaultOpen = false,
  onToggle,
  variant = "ghost",
  className,
  ...props
}: CollapsibleProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle?.(newState);
  };

  const variants = {
    ghost: "",
    card: "bg-surface rounded-xl shadow-sm p-4",
    bordered: "border border-border-default rounded-xl p-4",
  };

  return (
    <div className={cn("overflow-hidden", variants[variant], getCommonClasses(props), className)}>
      <button
        onClick={toggle}
        className="flex w-full items-center justify-between text-left focus:outline-none group"
      >
        <div className="flex-1 font-semibold text-text-primary">{title}</div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-text-tertiary group-hover:text-text-primary transition-colors" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="pt-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
