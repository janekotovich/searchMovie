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
      <ul>
        <li>
          <div className={styles.arrowLeft}></div>
        </li>
      </ul>
    </>
  );
};
export default Pagination;
