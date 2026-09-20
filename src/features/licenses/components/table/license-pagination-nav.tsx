import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui";
import { paginationItems } from "../../model";
import type { LicensePaginationNavProps } from "./types";

export function LicensePaginationNav({
  page,
  pageCount,
  onPageChange,
}: LicensePaginationNavProps) {
  const items = paginationItems(page, pageCount);

  return (
    <nav aria-label="Pagination" className="flex flex-wrap items-center gap-1.5">
      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled={page <= 1}
        onClick={() => {
          onPageChange(page - 1);
        }}
      >
        <ChevronLeft />
        Prev
      </Button>
      {items.map((item, index) =>
        item === "gap" ? (
          <span
            key={`gap-${index}`}
            aria-hidden="true"
            className="px-1 text-sm text-muted-foreground"
          >
            …
          </span>
        ) : (
          <Button
            key={item}
            type="button"
            size="sm"
            variant={item === page ? "default" : "outline"}
            aria-current={item === page ? "page" : undefined}
            aria-label={`Page ${item}`}
            className="min-w-8 px-2 tabular-nums"
            onClick={() => {
              onPageChange(item);
            }}
          >
            {item}
          </Button>
        ),
      )}
      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled={page >= pageCount}
        onClick={() => {
          onPageChange(page + 1);
        }}
      >
        Next
        <ChevronRight />
      </Button>
    </nav>
  );
}
