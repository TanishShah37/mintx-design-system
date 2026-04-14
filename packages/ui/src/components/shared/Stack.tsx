import React from "react";
import { cn } from "../../tokens/cn";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  gap?: number | string;
  wrap?: boolean;
}

export const Stack: React.FC<StackProps> = ({
  direction = "column",
  align = "stretch",
  justify = "start",
  gap = 4,
  wrap = false,
  className,
  children,
  ...props
}) => {
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
    <div
      className={cn(
        "flex",
        directionMap[direction],
        alignMap[align],
        justifyMap[justify],
        wrap && "flex-wrap",
        // Using Tailwind dynamic gap is risky if not safelisted, but gap-1, 2, 4 etc are common.
        // We'll use a safer approach with a style object if it's a number
        className
      )}
      style={{
        gap: typeof gap === "number" ? `${gap * 0.25}rem` : gap,
        ...props.style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

Stack.displayName = "Stack";
