import React from "react";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "default" | "muted" | "brand";
  underline?: "none" | "hover" | "always";
}

export const Link: React.FC<LinkProps> = ({
  variant = "default",
  underline = "hover",
  style,
  children,
  ...props
}) => {
  const colorMap = {
    default: "var(--text-primary, #E8EDE8)",
    muted: "var(--text-secondary, #748A83)",
    brand: "#00B38A",
  };

  return (
    <a
      style={{
        color: colorMap[variant],
        textDecoration: underline === "always" ? "underline" : "none",
        cursor: "pointer",
        transition: "opacity 0.15s",
        fontFamily: "var(--font-body)",
        ...style,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.opacity = "0.75";
        if (underline === "hover") (e.currentTarget as HTMLElement).style.textDecoration = "underline";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.opacity = "1";
        if (underline === "hover") (e.currentTarget as HTMLElement).style.textDecoration = "none";
      }}
      {...props}
    >
      {children}
    </a>
  );
};

Link.displayName = "Link";
