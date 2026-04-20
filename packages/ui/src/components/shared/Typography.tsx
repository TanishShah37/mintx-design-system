import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { BaseProps } from "../../types";
import { cn } from "../../tokens/cn";
import { getCommonClasses } from "../../tokens/common-props";
import { PolymorphicComponentProps, PolymorphicRef, PolymorphicForwardRef } from "../../types/polymorphic";

const typographyVariants = cva("transition-colors", {
  variants: {
    variant: {
      h1: "text-4xl font-black uppercase tracking-tight md:text-5xl",
      h2: "text-3xl font-black uppercase tracking-tight md:text-4xl",
      h3: "text-2xl font-black uppercase tracking-tight md:text-3xl",
      h4: "text-xl font-bold uppercase tracking-tight",
      h5: "text-lg font-bold uppercase tracking-tight",
      h6: "text-base font-bold uppercase tracking-tight",
      body: "text-base font-medium leading-relaxed",
      body2: "text-sm font-medium leading-relaxed",
      label: "text-[10px] font-black uppercase tracking-[0.2em]",
      mono: "font-mono text-sm tracking-tight",
      display: "font-black uppercase tracking-[-0.02em] leading-[0.9]",
      sharedcard: "text-sm font-bold leading-snug",
      tablehead: "text-[10px] font-black uppercase tracking-widest opacity-40",
      tablecell: "text-sm font-medium",
      ghost: "opacity-[var(--ghost-opacity,0.6)]",
      button: "text-[10px] font-black uppercase tracking-widest",
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
    color: {
      default: "text-neutral-900 dark:text-neutral-50",
      primary: "text-neutral-600 dark:text-neutral-300",
      secondary: "text-neutral-500 dark:text-neutral-400",
      tertiary: "text-neutral-400 dark:text-neutral-500",
      brand: "text-mint-500",
      white: "text-white",
      danger: "text-red-500",
      success: "text-emerald-500",
      warning: "text-amber-500",
      info: "text-blue-500",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "body",
    color: "default",
    align: "left",
  },
});

export interface TypographyOwnProps extends VariantProps<typeof typographyVariants>, BaseProps {}

export type TypographyProps<T extends React.ElementType = "span"> = PolymorphicComponentProps<
  T,
  TypographyOwnProps
>;

const TypographyInner = (
  { as, variant, size, color, align, className, style, children, ...props }: any,
  ref: React.ForwardedRef<any>
) => {
  // Determine final HTML tag/component
  // Use 'as' if provided, otherwise check if variant is a header, else default to 'span'
  const Component = as || (variant && ["h1", "h2", "h3", "h4", "h5", "h6"].includes(variant) ? variant : "span");

  return (
    <Component
      ref={ref}
      className={cn(
        typographyVariants({ variant, size, color, align }),
        getCommonClasses(props),
        className
      )}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
};

export const Typography = forwardRef(TypographyInner) as PolymorphicForwardRef<TypographyOwnProps, "span">;

Typography.displayName = "Typography";
