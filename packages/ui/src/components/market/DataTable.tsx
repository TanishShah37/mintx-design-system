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
import { Input } from "../shared/Input";
import { Select } from "../shared/Select";

export interface ColumnDef<TData> {
  id: string;
  header: string;
  accessorKey?: keyof TData;
  cell?: (item: TData) => React.ReactNode;
  sortable?: boolean;
}

interface DataTableProps<TData> {
  columns: ColumnDef<TData>[];
  data: TData[];
  searchKey?: keyof TData;
  searchPlaceholder?: string;
  highlightKey?: keyof TData; // Highlight rows based on this key (e.g., boolean or truthy)
  pageSize?: number;
}

export function DataTable<TData>({
  columns,
  data,
  searchKey,
  searchPlaceholder = "Search...",
  highlightKey,
  pageSize = 10,
}: DataTableProps<TData>) {
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
    <div className="space-y-4 w-full">
      {/* ── CONTROLS ── */}
      {(searchKey) && (
        <div className="flex items-center gap-4">
          {searchKey && (
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-sp-2.5 top-sp-2.5 h-4 w-4 text-neutral-400" />
              <Input
                placeholder={searchPlaceholder}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="pl-sp-9"
              />
            </div>
          )}
        </div>
      )}

      {/* ── TABLE ── */}
      <div className="rounded-xl border border-neutral-150 bg-surface overflow-hidden shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-b border-neutral-150">
              {columns.map((column) => (
                <TableHead
                  key={column.id}
                  className={cn(
                    "font-semibold text-text-secondary uppercase text-[11px] tracking-wider py-sp-3",
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
            {sortedData.length > 0 ? (
              sortedData.map((row, i) => (
                <TableRow
                  key={i}
                  className={cn(
                    "border-b border-neutral-150 last:border-0",
                    highlightKey && row[highlightKey] && "bg-mint-500/10 hover:bg-mint-500/20"
                  )}
                >
                  {columns.map((column) => (
                    <TableCell key={column.id} className="text-[13px] py-sp-3.5">
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
                  className="h-sp-24 text-center text-text-tertiary font-body"
                >
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      {/* ── FOOTER (PAGINATION MOCK) ── */}
      <div className="flex items-center justify-between text-[12px] text-text-tertiary px-sp-2 font-body">
        <div>
          Showing <b>{sortedData.length}</b> of <b>{data.length}</b> records
        </div>
        <div className="flex items-center gap-sp-2">
           <button className="px-sp-3 py-sp-1 border border-neutral-150 rounded-md hover:bg-neutral-100 transition-colors">Previous</button>
           <button className="px-sp-3 py-sp-1 border border-neutral-150 rounded-md hover:bg-neutral-100 transition-colors">Next</button>
        </div>
      </div>
    </div>
  );
}
