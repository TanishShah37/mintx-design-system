import React from "react";
import { cn } from "../../tokens/cn";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "default" | "muted" | "brand" | "ghost" | "neutral";
  underline?: "none" | "hover" | "always";
}

export const Link: React.FC<LinkProps> = ({
  variant = "default",
  underline = "hover",
  className,
  children,
  ...props
}) => {
  const variantClasses = {
    default: "text-mint-600 hover:text-mint-500",
    muted: "text-neutral-400 hover:text-mint-600",
    brand: "text-mint-500 hover:text-mint-400",
    ghost: "text-inherit hover:opacity-80",
    neutral: "text-neutral-600 hover:text-neutral-900",
  };

  const underlineClasses = {
    none: "no-underline",
    hover: "no-underline hover:underline",
    always: "underline",
  };

  return (
    <a
      className={cn(
        "transition-all duration-150 cursor-pointer font-body inline-flex items-center gap-1.5",
        variantClasses[variant],
        underlineClasses[underline],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

Link.displayName = "Link";
