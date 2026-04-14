import React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "../../tokens/cn";

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
  const getPages = (): (number | "ellipsis")[] => {
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

  const btnBaseClass = "flex items-center justify-center w-9 h-9 rounded-lg border-none cursor-pointer font-body text-sm font-semibold transition-all duration-150 focus-visible:outline-none";

  return (
    <nav 
      role="navigation" 
      aria-label="pagination" 
      className={cn("flex items-center justify-center gap-1", className)}
    >
      <button
        className={cn(
          btnBaseClass,
          "bg-neutral-800 text-neutral-400 hover:text-mint-600 hover:bg-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed"
        )}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous"
      >
        <ChevronLeft size={16} />
      </button>

      {getPages().map((page, index) => (
        <React.Fragment key={index}>
          {page === "ellipsis" ? (
            <div className={cn(btnBaseClass, "bg-transparent cursor-default text-neutral-600")}>
              <MoreHorizontal size={16} />
            </div>
          ) : (
            <button
              className={cn(
                btnBaseClass,
                currentPage === page 
                  ? "bg-mint-500 text-neutral-0 shadow-[0_4px_16px_rgba(0,179,138,0.25)] hover:bg-mint-600" 
                  : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-mint-600"
              )}
              onClick={() => onPageChange(page as number)}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      <button
        className={cn(
          btnBaseClass,
          "bg-neutral-800 text-neutral-400 hover:text-mint-600 hover:bg-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed"
        )}
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next"
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  );
};

Pagination.displayName = "Pagination";
