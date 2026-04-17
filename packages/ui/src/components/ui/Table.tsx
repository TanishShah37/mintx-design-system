import React from "react";
import { cn } from "../../tokens/cn";
import { BaseProps } from "../../types";
import { getCommonClasses } from "../../tokens/common-props";

export interface TableProps extends React.HTMLAttributes<HTMLTableElement>, BaseProps {
  stickyHeader?: boolean;
  striped?: boolean;
  compact?: boolean;
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, stickyHeader, striped, compact, ...props }, ref): React.JSX.Element => (
    <div className={cn("relative w-full overflow-auto rounded-2xl border border-border", getCommonClasses(props))}>
      <table
        ref={ref}
        className={cn(
          "w-full caption-bottom text-sm",
          stickyHeader && "border-separate border-spacing-0",
          striped && "[&_tbody_tr:nth-child(even)]:bg-muted/30",
          compact && "[&_td]:p-2 [&_th]:p-2 [&_th]:h-8",
          className
        )}
        {...props}
      />
    </div>
  )
);
Table.displayName = "Table";

export const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { sticky?: boolean }
>(({ className, sticky, ...props }, ref): React.JSX.Element => (
  <thead
    ref={ref}
    className={cn(
      "[&_tr]:border-b bg-muted/30",
      sticky && "sticky top-0 z-10 bg-surface shadow-sm",
      className
    )}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref): React.JSX.Element => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

export const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref): React.JSX.Element => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&_tr:last-child]:border-0",
      className
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref): React.JSX.Element => (
  <tr
    ref={ref}
    className={cn(
      "border-b border-border/50 transition-colors hover:bg-muted/30 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

export const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref): React.JSX.Element => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-bold text-muted-foreground uppercase tracking-wider text-[10px] [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref): React.JSX.Element => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium", className)}
    {...props}
  />
));
TableCell.displayName = "TableCell";

export const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref): React.JSX.Element => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";
