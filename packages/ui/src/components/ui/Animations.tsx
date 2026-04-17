"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../tokens/cn";

export const FadeIn = ({ children, className, ...props }: HTMLMotionProps<"div">) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const SlideIn = ({ children, className, direction = "up", ...props }: HTMLMotionProps<"div"> & { direction?: "up" | "down" | "left" | "right" }) => {
  const variants = {
    up: { y: 20, opacity: 0 },
    down: { y: -20, opacity: 0 },
    left: { x: 20, opacity: 0 },
    right: { x: -20, opacity: 0 },
  };

  return (
    <motion.div
      initial={variants[direction]}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn = ({ children, className, ...props }: HTMLMotionProps<"div">) => (
  <motion.div
    initial={{ scale: 0.95, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);
