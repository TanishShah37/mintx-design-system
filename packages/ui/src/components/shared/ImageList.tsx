import React from "react";
import { cn } from "../../tokens/cn";

export interface ImageListProps {
  children: React.ReactNode;
  cols?: number;
  gap?: number;
  className?: string;
}

export const ImageList: React.FC<ImageListProps> = ({
  children,
  cols = 3,
  gap = 4,
  className,
}) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
  }[cols] || "grid-cols-3";

  return (
    <div
      className={cn(
        "grid",
        gridCols,
        className
      )}
      style={{ gap: `${gap * 0.25}rem` }}
    >
      {children}
    </div>
  );
};

ImageList.displayName = "ImageList";
