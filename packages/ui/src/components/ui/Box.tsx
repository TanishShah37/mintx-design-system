import React from "react";
import { cn } from "../../tokens/cn";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}

export const Box: React.FC<BoxProps> = ({
  as: Component = "div",
  className,
  children,
  ...props
}) => {
  return (
    <Component className={cn(className)} {...props}>
      {children}
    </Component>
  );
};

Box.displayName = "Box";
