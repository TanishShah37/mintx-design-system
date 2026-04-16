import React from "react";
import { cn } from "../../tokens/cn";

export interface BottomNavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
  href?: string;
}

interface BottomNavProps {
  items: BottomNavItem[];
  activeId?: string;
  onNavigate?: (item: BottomNavItem) => void;
  className?: string;
}

export function BottomNav({
  items,
  activeId,
  onNavigate,
  className,
}: BottomNavProps): React.JSX.Element { return (
  <nav
    className={cn(
      "fixed bottom-0 left-0 right-0 z-100 bg-surface/90 border-t border-neutral-100 pb-[env(safe-area-inset-bottom,0px)] backdrop-blur-xl dark:bg-[#0D1614]/90",
      className
    )}
    aria-label="Mobile navigation"
    role="navigation"
  >
    <ul className="flex list-none m-0 p-0">
      {items.map((item) => {
        const isActive = item.id === activeId;
        const onClick = () => onNavigate?.(item);
        return (
          <li key={item.id} className="flex-1">
            <button
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 w-full p-sp-2 pb-2.5 bg-none border-none cursor-pointer relative text-neutral-400 transition-all duration-120 min-h-[56px] active:scale-92",
                isActive && "text-mint-600 dark:text-mint-400 font-bold",
              )}
              onClick={onClick}
              onKeyDown={
                onNavigate
                  ? (e) => {
                      if (e.key === "Enter" || e.key === " ") onClick();
                    }
                  : undefined
              }
              aria-current={isActive ? "page" : undefined}
              aria-label={item.label}
            >
              <span className={cn(
                "flex items-center justify-center w-6 h-6 transition-transform duration-200",
                isActive && "-translate-y-[1px]"
              )} aria-hidden="true">
                {isActive && item.activeIcon ? item.activeIcon : item.icon}
              </span>
              <span className="font-body text-[10px] leading-none transition-[font-weight] duration-200">
                {item.label}
              </span>
              {isActive && (
                <span className="absolute top-[6px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-mint-400" aria-hidden="true" />
              )}
            </button>
          </li>
        );
      })}
    </ul>
  </nav>
); }

BottomNav.displayName = "BottomNav";
