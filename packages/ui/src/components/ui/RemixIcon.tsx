import React from "react";
import { cn } from "../../tokens/cn";
import "remixicon/fonts/remixicon.css";

export interface RemixIconProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | number;
  color?: string;
}

export const RemixIcon = React.forwardRef<HTMLElement, RemixIconProps>(
  ({ name, size = "md", color, className, style, ...props }, ref) => {
    const sizeMap = {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    };

    const fontSize = typeof size === "number" ? `${size}px` : sizeMap[size as keyof typeof sizeMap] || size;

    return (
      <i
        ref={ref}
        className={cn(`ri-${name}`, className)}
        style={{
          fontSize,
          color,
          lineHeight: 1,
          ...style,
        }}
        {...props}
      />
    );
  }
);

RemixIcon.displayName = "RemixIcon";
