import React from "react";
import { cn } from "../../tokens/cn";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}

export function Box({
  as: Component = "div",
  className,
  children,
  ...props
}: BoxProps): React.JSX.Element {
  return (
    <Component className={cn(className)} {...props}>
      {children}
    </Component>
  );
}

Box.displayName = "Box";
