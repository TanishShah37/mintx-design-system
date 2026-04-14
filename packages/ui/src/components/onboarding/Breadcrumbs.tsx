import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "../shared/Link";
import { cn } from "../../tokens/cn";

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
  separator = <ChevronRight size={13} className="text-neutral-600" />,
  className,
  ...props
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center", className)}
      {...props}
    >
      <ol className="flex flex-wrap items-center gap-1.5 list-none p-0 m-0">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={item.label}>
              <li className="flex items-center gap-sp-1.5">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    variant="ghost"
                    className="flex items-center gap-sp-1 text-sm font-body hover:text-mint-600 transition-colors"
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={cn(
                      "flex items-center gap-sp-1 text-sm font-body",
                      isLast ? "font-semibold text-mint-600" : "text-neutral-400"
                    )}
                  >
                    {item.icon}
                    {item.label}
                  </span>
                )}
              </li>
              {!isLast && (
                <li aria-hidden="true" className="flex items-center text-neutral-300 px-sp-1">
                  {separator}
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
