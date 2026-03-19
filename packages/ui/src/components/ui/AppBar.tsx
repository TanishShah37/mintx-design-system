import React from "react";
import { cn } from "../../tokens/cn";
import { Box } from "../ui/Box";
import { Stack } from "../ui/Stack";

export interface AppBarProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  leftAction?: React.ReactNode;
  rightActions?: React.ReactNode;
  sticky?: boolean;
}

export const AppBar: React.FC<AppBarProps> = ({
  title,
  leftAction,
  rightActions,
  sticky = true,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "h-14 flex items-center px-4 bg-background border-b border-border",
        sticky && "sticky top-0 z-30",
        className
      )}
      {...props}
    >
      <Stack direction="row" align="center" justify="between" className="w-full">
        <Stack direction="row" align="center" gap={3}>
          {leftAction && <div className="flex items-center">{leftAction}</div>}
          {title && <h1 className="text-lg font-bold truncate">{title}</h1>}
        </Stack>
        {rightActions && <Stack direction="row" align="center" gap={2}>{rightActions}</Stack>}
      </Stack>
    </div>
  );
};

AppBar.displayName = "AppBar";
