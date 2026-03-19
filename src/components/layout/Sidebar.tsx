import React, { useState } from "react";
import type { NavItem } from "../../types";
import { cn } from "../../tokens/cn";
import { MintxLogo } from "./MintxLogo";
import { ThemeToggle } from "./ThemeToggle";
import "./Sidebar.css";

interface SidebarSection {
  label?: string;
  items: NavItem[];
}

interface SidebarProps {
  sections: SidebarSection[];
  activeId?: string;
  onNavigate?: (item: NavItem) => void;
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  footer?: React.ReactNode;
  className?: string;
}

const ChevronRight = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const CollapseIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const Sidebar: React.FC<SidebarProps> = ({
  sections,
  activeId,
  onNavigate,
  collapsed = false,
  onCollapsedChange,
  footer,
  className,
}) => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const renderItem = (item: NavItem, depth = 0) => {
    const isActive = item.id === activeId;
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedIds.has(item.id);

    return (
      <li key={item.id}>
        <button
          className={cn(
            "sidebar__item",
            `sidebar__item--depth-${depth}`,
            isActive && "sidebar__item--active",
            collapsed && "sidebar__item--collapsed",
          )}
          onClick={() => {
            if (hasChildren) toggleExpanded(item.id);
            else onNavigate?.(item);
          }}
          aria-current={isActive ? "page" : undefined}
          title={collapsed ? item.label : undefined}
        >
          {item.icon && (
            <span className="sidebar__item-icon" aria-hidden="true">
              {item.icon}
            </span>
          )}
          {!collapsed && (
            <>
              <span className="sidebar__item-label">{item.label}</span>
              {item.badge && (
                <span
                  className={cn(
                    "sidebar__item-badge",
                    item.badgeVariant === "amber" &&
                      "sidebar__item-badge--amber",
                  )}
                >
                  {item.badge}
                </span>
              )}
              {hasChildren && (
                <span
                  className={cn(
                    "sidebar__item-chevron",
                    isExpanded && "sidebar__item-chevron--open",
                  )}
                >
                  <ChevronRight />
                </span>
              )}
            </>
          )}
        </button>

        {/* Children */}
        {hasChildren && isExpanded && !collapsed && (
          <ul className="sidebar__children">
            {item.children!.map((child) => renderItem(child, depth + 1))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <aside
      className={cn("sidebar", collapsed && "sidebar--collapsed", className)}
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div className="sidebar__logo">
        {collapsed ? (
          <MintxLogo variant="mark" size="sm" />
        ) : (
          <MintxLogo variant="full" size="sm" />
        )}
        <button
          className="sidebar__collapse-btn"
          onClick={() => onCollapsedChange?.(!collapsed)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <CollapseIcon />
        </button>
      </div>

      {/* Nav sections */}
      <nav className="sidebar__nav">
        {sections.map((section, si) => (
          <div key={si} className="sidebar__section">
            {section.label && !collapsed && (
              <span className="sidebar__section-label">{section.label}</span>
            )}
            {section.label && !collapsed && (
              <div className="sidebar__divider" />
            )}
            <ul className="sidebar__list">
              {section.items.map((item) => renderItem(item))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="sidebar__footer">
        {footer ?? <ThemeToggle showLabel={!collapsed} />}
      </div>
    </aside>
  );
};

Sidebar.displayName = "Sidebar";
