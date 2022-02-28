import { useMemo } from "react";

const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const totalPageNumbers = siblingCount + 5;
    const range = (start, end) => {
      let length = end - start + 1;
      return Array.from({ length }, (_, i) => i + start);
    };

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalCount);
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
    const fisrtPageIndex = 1;
    const lastPageIndex = totalPageCount;
  }, [totalCount, pageSize, siblingCount, currentPage]);
  return <></>;
};
export default usePagination;
