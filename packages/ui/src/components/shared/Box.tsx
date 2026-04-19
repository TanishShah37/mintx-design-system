import React, { forwardRef } from "react";
import { cn } from "../../tokens/cn";
import { BaseProps } from "../../types";
import { getCommonClasses } from "../../tokens/common-props";

export interface BoxProps extends React.HTMLAttributes<HTMLElement>, BaseProps {
  as?: React.ElementType;
}

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ as: Component = "div", className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(getCommonClasses(props), className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Box.displayName = "Box";
