import React from "react";
import type { BottomNavItem } from "../../types";
import { cn } from "../../tokens/cn";
import "./BottomNav.css";

interface BottomNavProps {
  items: BottomNavItem[];
  activeId?: string;
  onNavigate?: (item: BottomNavItem) => void;
  className?: string;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  items,
  activeId,
  onNavigate,
  className,
}) => (
  <nav
    className={cn("bottom-nav", className)}
    aria-label="Mobile navigation"
    role="navigation"
  >
    <ul className="bottom-nav__list">
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <li key={item.id} className="bottom-nav__item">
            <button
              className={cn(
                "bottom-nav__btn",
                isActive && "bottom-nav__btn--active",
              )}
              onClick={() => onNavigate?.(item)}
              aria-current={isActive ? "page" : undefined}
              aria-label={item.label}
            >
              <span className="bottom-nav__icon" aria-hidden="true">
                {isActive && item.activeIcon ? item.activeIcon : item.icon}
              </span>
              <span className="bottom-nav__label">{item.label}</span>
              {isActive && (
                <span className="bottom-nav__pip" aria-hidden="true" />
              )}
            </button>
          </li>
        );
      })}
    </ul>
  </nav>
);

BottomNav.displayName = "BottomNav";
