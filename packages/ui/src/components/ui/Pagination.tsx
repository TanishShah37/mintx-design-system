import React from "react";
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

  const btnBase: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 36,
    height: 36,
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
    fontFamily: "var(--font-body)",
    fontSize: 13,
    fontWeight: 600,
    transition: "all 0.15s",
    outline: "none",
  };

  return (
    <nav role="navigation" aria-label="pagination" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
      <button
        style={{
          ...btnBase,
          background: "var(--bg-overlay, #1A2624)",
          color: currentPage === 1 ? "var(--text-tertiary, #4A6260)" : "var(--text-secondary, #748A83)",
          cursor: currentPage === 1 ? "not-allowed" : "pointer",
          opacity: currentPage === 1 ? 0.4 : 1,
        }}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous"
      >
        <ChevronLeft size={16} />
      </button>

      {getPages().map((page, index) => (
        <React.Fragment key={index}>
          {page === "ellipsis" ? (
            <div style={{ ...btnBase, background: "transparent", cursor: "default" }}>
              <MoreHorizontal size={16} color="var(--text-tertiary, #4A6260)" />
            </div>
          ) : (
            <button
              style={{
                ...btnBase,
                background: currentPage === page ? "#00B38A" : "var(--bg-overlay, #1A2624)",
                color: currentPage === page ? "#fff" : "var(--text-secondary, #748A83)",
                boxShadow: currentPage === page ? "0 2px 8px rgba(0,179,138,0.3)" : "none",
              }}
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
        style={{
          ...btnBase,
          background: "var(--bg-overlay, #1A2624)",
          color: currentPage === totalPages ? "var(--text-tertiary, #4A6260)" : "var(--text-secondary, #748A83)",
          cursor: currentPage === totalPages ? "not-allowed" : "pointer",
          opacity: currentPage === totalPages ? 0.4 : 1,
        }}
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
