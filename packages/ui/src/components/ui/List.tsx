import React from "react";
import { cn } from "../../tokens/cn";

export interface ListProps {
  children: React.ReactNode;
  className?: string;
}

export const List: React.FC<ListProps> = ({ children, className }) => {
  return (
    <ul className={cn("flex flex-col gap-1 w-full", className)}>
      {children}
    </ul>
  );
};

export interface ListItemProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  secondaryAction?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  icon,
  secondaryAction,
  onClick,
  className,
}) => {
  return (
    <li
      onClick={onClick}
      className={cn(
        "flex items-center justify-between p-3 rounded-xl transition-all",
        onClick ? "cursor-pointer hover:bg-muted/50 active:scale-[0.98]" : "",
        className
      )}
    >
      <div className="flex items-center gap-4 flex-1">
        {icon && <div className="text-primary shrink-0">{icon}</div>}
        <div className="flex-1 text-sm font-medium tracking-tight">
          {children}
        </div>
      </div>
      {secondaryAction && (
        <div className="ml-4 shrink-0">
          {secondaryAction}
        </div>
      )}
    </li>
  );
};

List.displayName = "List";
ListItem.displayName = "ListItem";
