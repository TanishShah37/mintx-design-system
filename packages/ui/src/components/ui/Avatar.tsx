import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import type { AvatarProps } from "../../types";
import { cn } from "../../tokens/cn";

const avatarVariants = cva(
  "relative inline-flex items-center justify-center rounded-full shrink-0 overflow-visible bg-gradient-to-br from-mint-400 to-mint-600",
  {
    variants: {
      size: {
        xs: "w-6 h-6",
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-12 h-12",
        xl: "w-16 h-16",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const initialsVariants = cva(
  "font-display font-bold text-neutral-900 leading-none select-none",
  {
    variants: {
      size: {
        xs: "text-[9px]",
        sm: "text-[11px]",
        md: "text-[14px]",
        lg: "text-[17px]",
        xl: "text-[22px]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const statusVariants = cva(
  "absolute bottom-[1px] right-[1px] rounded-full border-2 border-surface",
  {
    variants: {
      status: {
        live: "bg-green-500 animate-pulse-live",
        paused: "bg-amber-500",
        offline: "bg-neutral-300",
        error: "bg-red-500",
        pro: "bg-mint-400",
      },
      size: {
        xs: "w-2 h-2",
        sm: "w-2 h-2",
        md: "w-2.5 h-2.5",
        lg: "w-3 h-3",
        xl: "w-3 h-3",
      },
    },
    defaultVariants: {
      status: "offline",
      size: "md",
    },
  }
);

export const Avatar: React.FC<AvatarProps> = ({
  initials,
  src,
  alt = "",
  size = "md",
  status,
  className,
  style,
}) => (
  <span
    className={cn(avatarVariants({ size }), className)}
    style={style}
    aria-label={alt || initials}
  >
    {src ? (
      <img src={src} alt={alt} className="w-full h-full rounded-full object-cover" />
    ) : (
      <span className={initialsVariants({ size })} aria-hidden="true">
        {initials}
      </span>
    )}
    {status && (
      <span
        className={statusVariants({ status, size })}
        aria-label={`Status: ${status}`}
      />
    )}
  </span>
);

Avatar.displayName = "Avatar";
