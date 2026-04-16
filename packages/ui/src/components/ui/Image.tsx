"use client";

import React from "react";
import { cn } from "../../tokens/cn";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: "square" | "video" | "portrait" | "none";
  fallback?: string;
  containerClassName?: string;
}

export function Image({
  className,
  aspectRatio = "none",
  fallback,
  containerClassName,
  src,
  alt,
  ...props
}: ImageProps): React.JSX.Element {
  const [error, setError] = React.useState(false);

  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    none: "",
  }

  return (
    <div className={cn("overflow-hidden rounded-2xl bg-muted/30", aspectRatioClasses[aspectRatio], containerClassName)}>
      <img
        src={error && fallback ? fallback : src}
        alt={alt}
        onError={() => setError(true)}
        className={cn(
          "h-full w-full object-cover transition-all hover:scale-105 duration-500",
          className
        )}
        loading="lazy"
        {...props}
      />
    </div>
  );
}

Image.displayName = "Image";
