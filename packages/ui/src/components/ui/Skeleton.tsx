import React from "react";
import { cn } from "../../tokens/cn";
import { Skeleton as BoneyardBase } from "boneyard-js/react";

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element {
  return (
    <div
      className={cn(
        "bg-mint-500/10 rounded-md animate-gentle-pulse",
        className
      )}
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


