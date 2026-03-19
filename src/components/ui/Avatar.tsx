import React from "react";
import type { AvatarProps } from "../../types";
import { cn } from "../../tokens/cn";
import "./Avatar.css";

const sizeClasses: Record<NonNullable<AvatarProps["size"]>, string> = {
  xs: "avatar--xs",
  sm: "avatar--sm",
  md: "avatar--md",
  lg: "avatar--lg",
  xl: "avatar--xl",
};

const statusClasses: Record<string, string> = {
  live: "avatar__status--live",
  paused: "avatar__status--paused",
  offline: "avatar__status--offline",
  error: "avatar__status--error",
  pro: "avatar__status--pro",
};

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
    className={cn("avatar", sizeClasses[size], className)}
    style={style}
    aria-label={alt || initials}
  >
    {src ? (
      <img src={src} alt={alt} className="avatar__img" />
    ) : (
      <span className="avatar__initials" aria-hidden="true">
        {initials}
      </span>
    )}
    {status && (
      <span
        className={cn("avatar__status", statusClasses[status])}
        aria-label={`Status: ${status}`}
      />
    )}
  </span>
);

Avatar.displayName = "Avatar";
