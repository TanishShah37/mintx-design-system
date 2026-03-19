import React from "react";
import { cn } from "../../tokens/cn";

export interface BackdropProps {
  show: boolean;
  onClick?: () => void;
  className?: string;
  blur?: boolean;
}

export const Backdrop: React.FC<BackdropProps> = ({
  show,
  onClick,
  className,
  blur = true,
}) => {
  if (!show) return null;

  return (
    <div
      onClick={onClick}
      className={cn(
        "fixed inset-0 z-40 bg-black/60 transition-all duration-300",
        blur ? "backdrop-blur-sm" : "",
        show ? "opacity-100" : "opacity-0",
        className
      )}
    />
  );
};

Backdrop.displayName = "Backdrop";
