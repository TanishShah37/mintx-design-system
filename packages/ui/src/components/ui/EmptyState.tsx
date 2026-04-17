import React from "react";
import { Search } from "lucide-react";
import { cn } from "../../tokens/cn";
import { BaseProps } from "../../types";
import { getCommonClasses } from "../../tokens/common-props";
import { Button } from "../ui/Button";

interface EmptyStateProps extends BaseProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
  ...props
}: EmptyStateProps): React.JSX.Element {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-8 text-center bg-surface/50 rounded-2xl border border-dashed border-border-default",
        getCommonClasses(props),
        className
      )}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted/40 mb-4">
        {icon || <Search className="h-8 w-8 text-text-tertiary" />}
      </div>
      <h3 className="text-lg font-bold text-text-primary tracking-tight">{title}</h3>
      {description && (
        <p className="mt-2 text-sm text-text-secondary max-w-sm mx-auto">
          {description}
        </p>
      )}
      {action && (
        <Button
          variant="secondary"
          className="mt-6"
          onClick={action.onClick}
        >
          {action.label}
        </Button>
      )}
    </div>
  );
}
