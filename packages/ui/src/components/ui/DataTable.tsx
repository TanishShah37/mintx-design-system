"use client";

import * as React from "react";
import {
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  Search,
  Filter,
} from "lucide-react";
import { cn } from "../../tokens/cn";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "./Table";
import { TextField } from "./TextField";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./Select";
import { Skeleton } from "./Skeleton";
import { BaseProps } from "../../types";
import { getCommonClasses } from "../../tokens/common-props";

export interface ColumnDef<TData> {
  id: string;
  header: string;
  accessorKey?: keyof TData;
  cell?: (item: TData) => React.ReactNode;
  sortable?: boolean;
}

interface DataTableProps<TData> extends BaseProps {
  columns: ColumnDef<TData>[];
  data: TData[];
  searchKey?: keyof TData;
  searchPlaceholder?: string;
  highlightKey?: keyof TData;
  pageSize?: number;
  loading?: boolean;
  skeletonRows?: number;
  emptyState?: React.ReactNode;
  stickyHeader?: boolean;
  striped?: boolean;
  compact?: boolean;
}

export function DataTable<TData>({
  columns,
  data,
  searchKey,
  searchPlaceholder = "Search...",
  highlightKey,
  pageSize = 10,
  loading = false,
  skeletonRows = 5,
  emptyState,
  stickyHeader = false,
  striped = false,
  compact = false,
  className,
  ...props
}: DataTableProps<TData>): React.JSX.Element {
  const [searchValue, setSearchValue] = React.useState("");
  const [sortConfig, setSortConfig] = React.useState<{
    key: string;
    direction: "asc" | "desc" | null;
  }>({ key: "", direction: null });

  // ── FILTERING ─────────────────────────────────────────────────────────────
  const filteredData = React.useMemo(() => {
    if (!searchKey || !searchValue) return data;
    return data.filter((item) => {
      const value = item[searchKey];
      return String(value).toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [data, searchKey, searchValue]);

  // ── SORTING ───────────────────────────────────────────────────────────────
  const sortedData = React.useMemo(() => {
    if (!sortConfig.key || !sortConfig.direction) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof TData];
      const bValue = b[sortConfig.key as keyof TData];

      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortConfig]);

  const handleSort = (key: string) => {
    let direction: "asc" | "desc" | null = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";
    else if (sortConfig.key === key && sortConfig.direction === "desc") direction = null;
    
    setSortConfig({ key, direction });
  };

  return (
    <div className={cn("space-y-4 w-full", getCommonClasses(props), className)}>
      {/* ── CONTROLS ── */}
      {searchKey && (
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
            <TextField
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="pl-9"
              size="sm"
              clearable
              onClear={() => setSearchValue("")}
            />
          </div>
        </div>
      )}

      {/* ── TABLE ── */}
      <div className="rounded-xl border border-border-subtle bg-bg-surface overflow-hidden">
        <Table stickyHeader={stickyHeader} striped={striped} compact={compact}>
          <TableHeader sticky={stickyHeader}>
            <TableRow className="hover:bg-transparent border-b border-border-subtle">
              {columns.map((column) => (
                <TableHead
                  key={column.id}
                  className={cn(
                    "font-semibold text-text-secondary uppercase text-[11px] tracking-wider py-3",
                    column.sortable && "cursor-pointer select-none hover:text-text-primary"
                  )}
                  onClick={() => column.sortable && handleSort(String(column.accessorKey || column.id))}
                >
                  <div className="flex items-center gap-2">
                    {column.header}
                    {column.sortable && (
                      <span className="text-text-tertiary">
                        {sortConfig.key === (column.accessorKey || column.id) ? (
                          sortConfig.direction === "asc" ? <ChevronUp className="h-3 w-3" /> :
                          sortConfig.direction === "desc" ? <ChevronDown className="h-3 w-3" /> :
                          <ChevronsUpDown className="h-3 w-3 opacity-30" />
                        ) : (
                          <ChevronsUpDown className="h-3 w-3 opacity-30" />
                        )}
                      </span>
                    )}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              Array.from({ length: skeletonRows }).map((_, i) => (
                <TableRow key={i}>
                  {columns.map((column) => (
                    <TableCell key={column.id}>
                      <Skeleton className="h-4 w-full" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : sortedData.length > 0 ? (
              sortedData.map((row, i) => (
                <TableRow
                  key={i}
                  className={cn(
                    "border-b border-border-subtle last:border-0",
                    highlightKey && row[highlightKey] && "bg-brand-soft/30 hover:bg-brand-soft/40"
                  )}
                >
                  {columns.map((column) => (
                    <TableCell key={column.id} className="text-[13px] py-3.5">
                      {column.cell
                        ? column.cell(row)
                        : column.accessorKey
                        ? String(row[column.accessorKey])
                        : null}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-32 text-center"
                >
                  {emptyState ? (
                    emptyState
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-1">
                      <p className="text-sm font-medium text-text-primary">No results found</p>
                      <p className="text-xs text-text-tertiary">Try adjusting your search or filters</p>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      {/* ── FOOTER (PAGINATION MOCK) ── */}
      <div className="flex items-center justify-between text-[12px] text-text-tertiary px-2">
        <div>
          Showing <b>{sortedData.length}</b> of <b>{data.length}</b> records
        </div>
        <div className="flex items-center gap-2">
           <button className="px-3 py-1 border border-border-subtle rounded-md hover:bg-bg-overlay transition-colors">Previous</button>
           <button className="px-3 py-1 border border-border-subtle rounded-md hover:bg-bg-overlay transition-colors">Next</button>
        </div>
      </div>
    </div>
  );
}
