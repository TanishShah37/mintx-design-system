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
  return (
    <a
      className={cn(
        "transition-colors duration-200 cursor-pointer",
        variant === "default" && "text-foreground hover:text-foreground/80",
        variant === "muted" && "text-muted-foreground hover:text-foreground",
        variant === "brand" && "text-primary hover:text-primary/80",
        underline === "none" && "no-underline",
        underline === "hover" && "no-underline hover:underline",
        underline === "always" && "underline",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

Link.displayName = "Link";
