import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import type { AlertProps } from "../../types";
import { cn } from "../../tokens/cn";

const alertVariants = cva(
  "flex gap-sp-3 items-start p-sp-4 rounded-md border text-sm",
  {
    variants: {
      variant: {
        info: "bg-blue-400/10 border-blue-400/25 text-blue-500 dark:text-blue-400",
        success: "bg-green-500/10 border-green-500/25 text-green-500 dark:text-green-400",
        warning: "bg-amber-500/10 border-amber-500/25 text-amber-500 dark:text-amber-400",
        danger: "bg-red-500/10 border-red-500/25 text-red-500 dark:text-red-400",
        brand: "bg-mint-50 border-mint-400/25 text-mint-600 dark:bg-mint-400/10 dark:text-mint-300",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

const icons: Record<NonNullable<AlertProps["variant"]>, React.ReactNode> = {
  info: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  success: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  warning: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  danger: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
  brand: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
};

export const Alert: React.FC<AlertProps> = ({
  variant = "info",
  title,
  icon,
  onDismiss,
  className,
  style,
  children,
}) => (
  <div
    className={cn(alertVariants({ variant }), className)}
    style={style}
    role="alert"
  >
    <span className="shrink-0 mt-[1px]" aria-hidden="true">
      {icon ?? icons[variant]}
    </span>
    <div className="flex-1 min-w-0">
      {title && <div className="font-semibold mb-[3px]">{title}</div>}
      {children && <div className="opacity-85 leading-tight">{children}</div>}
    </div>
    {onDismiss && (
      <button
        className="shrink-0 bg-none border-none cursor-pointer color-current opacity-60 p-[2px] rounded-xs flex items-center transition-opacity duration-120 hover:opacity-100"
        onClick={onDismiss}
        aria-label="Dismiss"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    )}
  </div>
);

Alert.displayName = "Alert";
