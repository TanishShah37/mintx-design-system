import React from "react";
import { cn } from "../../tokens/cn";
import { Button } from "./Button";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}) => {
  const getPages = () => {
    const pages: (number | "ellipsis")[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "ellipsis", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, "ellipsis", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "ellipsis", currentPage - 1, currentPage, currentPage + 1, "ellipsis", totalPages);
      }
    }
    return pages;
  };

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn("flex items-center justify-center gap-1", className)}
    >
      <Button
        variant="ghost"
        size="sm"
        iconOnly
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg"
      >
        <ChevronLeft size={16} />
      </Button>

      {getPages().map((page, index) => (
        <React.Fragment key={index}>
          {page === "ellipsis" ? (
            <div className="flex h-9 w-9 items-center justify-center">
              <MoreHorizontal size={16} className="opacity-40" />
            </div>
          ) : (
            <Button
              variant={currentPage === page ? "primary" : "ghost"}
              size="sm"
              onClick={() => onPageChange(page as number)}
              className={cn(
                "h-9 w-9 p-0 rounded-lg font-bold transition-all",
                currentPage === page ? "shadow-md" : "hover:bg-muted"
              )}
            >
              {page}
            </Button>
          )}
        </React.Fragment>
      ))}

      <Button
        variant="ghost"
        size="sm"
        iconOnly
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-lg"
      >
        <ChevronRight size={16} />
      </Button>
    </nav>
  );
};

Pagination.displayName = "Pagination";
