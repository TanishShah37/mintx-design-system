import React from "react";
import { cn } from "../../tokens/cn";
import { ChevronRight, Home } from "lucide-react";
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
  separator = <ChevronRight size={14} className="opacity-40" />,
  className,
  ...props
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center text-sm", className)}
      {...props}
    >
      <ol className="flex items-center gap-2 list-none p-0 m-0">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <React.Fragment key={item.label}>
              <li className="flex items-center gap-2">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    variant="muted"
                    className="flex items-center gap-1.5 transition-opacity hover:opacity-100"
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ) : (
                  <span className={cn("flex items-center gap-1.5 font-medium", isLast ? "text-foreground" : "text-muted-foreground")}>
                    {item.icon}
                    {item.label}
                  </span>
                )}
              </li>
              {!isLast && <li aria-hidden="true">{separator}</li>}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

Breadcrumbs.displayName = "Breadcrumbs";
