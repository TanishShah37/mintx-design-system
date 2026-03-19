import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "./Link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator = <ChevronRight size={13} color="var(--text-tertiary, #4A6260)" />,
  style,
  ...props
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{ display: "flex", alignItems: "center", ...style }}
      {...props}
    >
      <ol style={{ display: "flex", alignItems: "center", gap: 6, listStyle: "none", padding: 0, margin: 0, flexWrap: "wrap" }}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={item.label}>
              <li style={{ display: "flex", alignItems: "center", gap: 4 }}>
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    variant="muted"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      fontSize: 13,
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ) : (
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      fontSize: 13,
                      fontWeight: isLast ? 600 : 400,
                      color: isLast ? "var(--text-primary, #E8EDE8)" : "var(--text-secondary, #748A83)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {item.icon}
                    {item.label}
                  </span>
                )}
              </li>
              {!isLast && (
                <li aria-hidden="true" style={{ display: "flex", alignItems: "center", lineHeight: 1, fontSize: 12, color: "var(--text-tertiary, #4A6260)" }}>
                  {typeof separator === "string" ? separator : separator}
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

Breadcrumbs.displayName = "Breadcrumbs";
