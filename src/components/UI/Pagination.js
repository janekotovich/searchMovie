import styles from "./Pagination.module.css";
import { usePagination, DOTS } from "../hooks/use-pagination";
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange < 2) {
    return null;
  }
  const onNext = () => onPageChange(currentPage + 1);
  const onPrevious = () => onPageChange(currentPage - 1);
  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <>
      <ul className={styles.paginationContainer}>
        <li onClick={onPrevious} className={styles.paginationItem}>
          <div className={styles.arrowLeft} className={styles.arrow}></div>
        </li>
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <li
                className={styles.paginationDots}
                className={styles.paginationItem}
              >
                &#8230;
              </li>
            );
          }
          return (
            <li
              className={styles.paginationItem}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        <li onClick={onNext} className={styles.paginationItem}>
          <div className={styles.arrowRight} className={styles.arrow} />
        </li>
      </ul>
    </>
  );
};
export default Pagination;
