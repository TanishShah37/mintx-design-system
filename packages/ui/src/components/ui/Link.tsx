import React from "react";
import { cn } from "../../tokens/cn";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "default" | "muted" | "brand";
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
    default: "text-primary hover:opacity-80",
    muted: "text-neutral-400 hover:text-primary",
    brand: "text-mint-500 hover:text-mint-400",
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
