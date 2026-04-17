"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader } from "./Loader";
import { cn } from "../../tokens/cn";
import { BaseProps } from "../../types";
import { getCommonClasses } from "../../tokens/common-props";

interface LoadingOverlayProps extends BaseProps {
  isLoading: boolean;
  blur?: "none" | "sm" | "md" | "lg";
  text?: string;
}

export function LoadingOverlay({
  isLoading,
  blur = "sm",
  text,
  className,
  ...props
}: LoadingOverlayProps): React.JSX.Element {
  const blurClasses = {
    none: "",
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-0 z-50 flex flex-col items-center justify-center bg-surface/60",
            blurClasses[blur],
            getCommonClasses(props),
            className
          )}
        >
          <Loader size="lg" color="brand" />
          {text && (
            <p className="mt-4 text-sm font-semibold text-text-primary tracking-tight">
              {text}
            </p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
