import React from "react";
import { cn } from "../../tokens/cn";
import { Stack } from "./Stack";

export interface BottomNavigationItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
}

export interface BottomNavigationProps {
  items: BottomNavigationItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
  className?: string;
}

export function BottomNavigation({
  items,
  activeId,
  onSelect,
  className,
}: BottomNavigationProps): React.JSX.Element {
  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 h-16 bg-background/80 backdrop-blur-lg border-t border-border flex items-center justify-around px-4 pb-safe",
        className
      )}
    >
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <button
            key={item.id}
            onClick={() => onSelect?.(item.id)}
            className={cn(
              "flex flex-col items-center justify-center gap-1 transition-colors",
              isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <div className={cn("transition-transform duration-200", isActive && "scale-110")}>
              {isActive && item.activeIcon ? item.activeIcon : item.icon}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

BottomNavigation.displayName = "BottomNavigation";
