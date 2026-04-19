import React from "react";
import { cn } from "../../tokens/cn";
import { Skeleton as BoneyardBase } from "boneyard-js/react";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  circle?: boolean;
  rounded?: boolean;
  lines?: number;
}

export function Skeleton({
  className,
  width,
  height,
  circle,
  rounded,
  lines = 1,
  style,
  ...props
}: SkeletonProps): React.JSX.Element {
  const baseStyle = {
    width: width,
    height: height,
    borderRadius: circle ? "50%" : undefined,
    ...style,
  };

  if (lines > 1) {
    return (
      <div className="flex flex-col gap-2 w-full">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "bg-mint-500/10 animate-gentle-pulse h-4 w-full",
              rounded ? "rounded-full" : "rounded-md",
              i === lines - 1 && lines > 1 && "w-3/4",
              className
            )}
            style={i === 0 ? baseStyle : undefined}
            {...props}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "bg-mint-500/10 animate-gentle-pulse",
        rounded ? "rounded-full" : "rounded-md",
        className
      )}
      style={baseStyle}
      {...props}
    />
  );
}

/**
 * BoneyardSkeleton
 * Automated skeleton generation using boneyard-js.
 * Requires a unique 'name' and a 'loading' state.
 */
export function BoneyardSkeleton({ 
  name, 
  loading, 
  children, 
  fixture 
}: { 
  name: string; 
  loading: boolean; 
  children: React.ReactNode;
  fixture?: React.ReactNode;
}): React.JSX.Element {
  return (
    <BoneyardBase name={name} loading={loading} fixture={fixture}>
      {children}
    </BoneyardBase>
  );
}


