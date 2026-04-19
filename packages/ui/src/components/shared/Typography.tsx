import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../tokens/cn";

const typographyVariants = cva("", {
  variants: {
    variant: {
      display: "font-display font-bold tracking-tight",
      h1: "font-display font-bold tracking-tight",
      h2: "font-display font-bold tracking-tight",
      h3: "font-display font-bold tracking-tight",
      h4: "font-display font-semibold tracking-tight",
      h5: "font-display font-semibold tracking-tight",
      h6: "font-display font-semibold tracking-tight",
      body: "font-body",
      label: "font-body font-medium uppercase tracking-wider",
      mono: "font-mono",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
  },
  defaultVariants: {
    variant: "body",
    size: "base",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ as: Component = "span", variant, size, weight, align, className, children, ...props }, ref) => {
    // Default components for header variants
    const DefaultComponent = 
      variant === "h1" ? "h1" :
      variant === "h2" ? "h2" :
      variant === "h3" ? "h3" :
      variant === "h4" ? "h4" :
      variant === "h5" ? "h5" :
      variant === "h6" ? "h6" :
      Component;

    return (
      <DefaultComponent
        ref={ref}
        className={cn(typographyVariants({ variant, size, weight, align }), className)}
        {...props}
      >
        {children}
      </DefaultComponent>
    );
  }
);

Typography.displayName = "Typography";
