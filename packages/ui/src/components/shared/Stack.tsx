import React, { forwardRef } from "react";
import { cn } from "../../tokens/cn";
import { BaseProps } from "../../types";
import { getCommonClasses } from "../../tokens/common-props";

export interface StackProps extends React.HTMLAttributes<HTMLElement>, BaseProps {
  as?: React.ElementType;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  gap?: number | string;
  wrap?: boolean;
}

export const Stack = forwardRef<HTMLElement, StackProps>(
  (
    {
      as: Component = "div",
      direction = "column",
      align = "stretch",
      justify = "start",
      gap = 4,
      wrap = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const justifyMap = {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    };

    const alignMap = {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    };

    const directionMap = {
      row: "flex-row",
      column: "flex-col",
      "row-reverse": "flex-row-reverse",
      "column-reverse": "flex-col-reverse",
    };

    return (
      <Component
        ref={ref}
        className={cn(
          "flex",
          directionMap[direction],
          alignMap[align],
          justifyMap[justify],
          wrap && "flex-wrap",
          getCommonClasses(props),
          className
        )}
        style={{
          gap: typeof gap === "number" ? `${gap * 0.25}rem` : gap,
          ...props.style,
        }}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Stack.displayName = "Stack";
