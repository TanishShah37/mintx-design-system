import React, { useState } from "react";
import type { TabsProps } from "../../types";
import { cn } from "../../tokens/cn";
import "./Tabs.css";

export const Tabs: React.FC<TabsProps> = ({
  items,
  activeId: controlledActiveId,
  defaultActiveId,
  variant = "default",
  size = "md",
  onChange,
  className,
  style,
}) => {
  const [internalActiveId, setInternalActiveId] = useState(
    defaultActiveId ?? items[0]?.id,
  );

  const activeId = controlledActiveId ?? internalActiveId;

  const handleSelect = (id: string) => {
    setInternalActiveId(id);
    onChange?.(id);
  };

  return (
    <div
      className={cn("tabs", `tabs--${variant}`, `tabs--${size}`, className)}
      role="tablist"
      style={style}
    >
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <button
            key={item.id}
            role="tab"
            aria-selected={isActive}
            aria-disabled={item.disabled}
            className={cn(
              "tabs__item",
              isActive && "tabs__item--active",
              item.disabled && "tabs__item--disabled",
            )}
            onClick={() => !item.disabled && handleSelect(item.id)}
            tabIndex={isActive ? 0 : -1}
          >
            {item.icon && (
              <span className="tabs__icon" aria-hidden="true">
                {item.icon}
              </span>
            )}
            <span className="tabs__label">{item.label}</span>
            {item.badge !== undefined && (
              <span className="tabs__badge">{item.badge}</span>
            )}
          </button>
        );
      })}
    </div>
  );
};

Tabs.displayName = "Tabs";
