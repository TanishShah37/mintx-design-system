"use client";

import React, { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
export type GlobalBadgeVariant =
  | "mint"
  | "green"
  | "red"
  | "amber"
  | "blue"
  | "purple"
  | "neutral"
  | "outline";

export interface NavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  badge?: string;
  badgeVariant?: GlobalBadgeVariant;
  children?: NavItem[];
}
import { cn } from "../../tokens/cn";
import { MintxLogo } from "./MintxLogo";
import { ThemeToggle } from "./ThemeToggle";

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

const sidebarItemVariants = cva(
  "flex items-center gap-sp-2 w-full px-sp-2 border-none border-l-2 border-transparent bg-none cursor-pointer font-body text-sm font-medium text-neutral-600 text-left transition-all duration-120 min-h-[36px] relative hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-mint-400 focus-visible:outline-offset-[-2px]",
  {
    variants: {
      isActive: {
        true: "bg-mint-50 text-mint-600 border-l-mint-400 font-semibold dark:bg-mint-400/10",
      },
      collapsed: {
        true: "justify-center px-sp-2 rounded-sm border-l-0",
      },
      depth: {
        0: "",
        1: "text-xs min-h-[30px] pl-sp-3",
      },
    },
    compoundVariants: [
      { collapsed: true, isActive: true, className: "bg-mint-50 dark:bg-mint-400/10" },
    ],
    defaultVariants: {
      isActive: false,
      collapsed: false,
      depth: 0,
    },
  }
);

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
          className={cn(sidebarItemVariants({ isActive, collapsed, depth: depth as any }))}
          onClick={() => {
            if (hasChildren) toggleExpanded(item.id);
            else onNavigate?.(item);
          }}
          aria-current={isActive ? "page" : undefined}
          title={collapsed ? item.label : undefined}
        >
          {item.icon && (
            <span className="inline-flex items-center shrink-0 color-inherit w-[18px] h-[18px]" aria-hidden="true">
              {item.icon}
            </span>
          )}
          {!collapsed && (
            <>
              <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">{item.label}</span>
              {item.badge && (
                <span
                  className={cn(
                    "text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-mint-50 text-mint-600 shrink-0",
                    item.badgeVariant === "amber" && "bg-amber-100/50 text-amber-600 dark:text-amber-400",
                  )}
                >
                  {item.badge}
                </span>
              )}
              {hasChildren && (
                <span
                  className={cn(
                    "inline-flex items-center text-neutral-400 shrink-0 transition-transform duration-200",
                    isExpanded && "rotate-90",
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
          <ul className="list-none p-0 m-0 pl-sp-4">
            {item.children!.map((child) => renderItem(child, depth + 1))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <aside
      className={cn(
        "flex flex-col h-full bg-surface border-r border-neutral-100 overflow-hidden transition-[width] duration-300 ease-out",
        collapsed ? "w-[60px]" : "w-[240px]",
        className
      )}
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div className={cn(
        "flex items-center shrink-0 min-h-[56px] border-b border-neutral-100",
        collapsed ? "justify-center px-sp-3 py-sp-4" : "justify-between px-sp-4 py-sp-4"
      )}>
        {collapsed ? (
          <MintxLogo variant="mark" size="sm" />
        ) : (
          <MintxLogo variant="full" size="sm" />
        )}
        {!collapsed && (
          <button
            className="flex items-center justify-center w-7 h-7 border-none bg-none cursor-pointer text-neutral-400 rounded-sm transition-colors duration-120 hover:bg-neutral-100 hover:text-neutral-900"
            onClick={() => onCollapsedChange?.(!collapsed)}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <CollapseIcon />
          </button>
        )}
      </div>

      {/* Nav sections */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden py-sp-3 scrollbar-thin scrollbar-thumb-neutral-200">
        {sections.map((section, si) => (
          <div key={si} className="px-sp-2 pb-sp-3">
            {section.label && !collapsed && (
              <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 px-sp-2 py-sp-1 mt-sp-3">
                {section.label}
              </span>
            )}
            {section.label && !collapsed && (
              <div className="h-[1px] bg-neutral-100 mx-sp-2 mb-sp-2" />
            )}
            <ul className="list-none p-0 m-0">
              {section.items.map((item) => renderItem(item))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className={cn(
        "shrink-0 p-sp-4 border-t border-neutral-100 flex items-center",
        collapsed && "justify-center p-sp-3"
      )}>
        {footer ?? <ThemeToggle showLabel={!collapsed} />}
      </div>
    </aside>
  );
};

Sidebar.displayName = "Sidebar";
