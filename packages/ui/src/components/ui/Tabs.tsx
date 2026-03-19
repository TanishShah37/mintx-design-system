import React, { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import type { TabsProps } from "../../types";
import { cn } from "../../tokens/cn";

const containerVariants = cva(
  "flex relative",
  {
    variants: {
      variant: {
        default: "gap-[2px] bg-neutral-100 border border-neutral-200 rounded-lg p-[3px] w-fit",
        brand: "gap-[2px] bg-neutral-100 border border-neutral-200 rounded-lg p-[3px] w-fit",
        pills: "gap-sp-1 w-fit",
        underline: "gap-0 border-b border-neutral-100 w-full",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const itemVariants = cva(
  "inline-flex items-center gap-sp-2 font-body font-medium whitespace-nowrap transition-all duration-120 ease-out focus-visible:outline-2 focus-visible:outline-mint-400 focus-visible:outline-offset-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-transparent text-neutral-400 rounded-md hover:not-active:text-neutral-900",
        brand: "bg-transparent text-neutral-400 rounded-md hover:not-active:text-neutral-900",
        pills: "bg-transparent text-neutral-600 rounded-full border border-transparent hover:not-active:bg-neutral-100 hover:not-active:text-neutral-900",
        underline: "bg-transparent text-neutral-400 rounded-none border-b-2 border-transparent -mb-[1px] hover:not-active:text-neutral-900",
      },
      size: {
        sm: "text-xs px-3 py-1.5",
        md: "text-sm px-4 py-[7px]",
      },
      isActive: {
        true: "",
        false: "",
      },
      disabled: {
        true: "opacity-40 cursor-not-allowed pointer-events-none",
      },
    },
    compoundVariants: [
      { variant: "default", isActive: true, className: "bg-surface text-neutral-900 shadow-sm font-semibold" },
      { variant: "brand", isActive: true, className: "bg-mint-400 text-[#001A13] font-bold shadow-[0_4px_16px_rgba(0,179,138,0.25)]" },
      { variant: "pills", isActive: true, className: "bg-mint-50 text-mint-600 border-mint-400/25" },
      { variant: "underline", isActive: true, className: "text-mint-600 border-b-mint-400 font-semibold" },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

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
      className={cn(containerVariants({ variant }), className)}
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
            className={itemVariants({ variant, size, isActive, disabled: item.disabled })}
            onClick={() => !item.disabled && handleSelect(item.id)}
            tabIndex={isActive ? 0 : -1}
          >
            {item.icon && (
              <span className="inline-flex items-center" aria-hidden="true">
                {item.icon}
              </span>
            )}
            <span>{item.label}</span>
            {item.badge !== undefined && (
              <span className={cn(
                "text-[10px] font-bold rounded-full px-1.5 py-0.5",
                isActive ? "bg-mint-400/15 text-mint-600" : "bg-neutral-100 text-neutral-400"
              )}>
                {item.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

Tabs.displayName = "Tabs";
