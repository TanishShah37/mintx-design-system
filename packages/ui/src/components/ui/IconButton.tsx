import React from "react";
import { Button, type ButtonExtendedProps } from "./Button";
import { cn } from "../../tokens/cn";

export interface IconButtonProps extends Omit<ButtonExtendedProps, "iconOnly" | "leftIcon" | "rightIcon"> {
  icon: React.ReactNode;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        iconOnly
        className={cn("rounded-xl", className)}
        {...props}
      >
        {icon}
      </Button>
    );
  }
);

IconButton.displayName = "IconButton";
