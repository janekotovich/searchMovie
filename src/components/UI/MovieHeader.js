import styles from "./MovieHeader.module.css";
const MovieHeader = () => {
  return (
    <>
      <header>
        <ul className={styles.header}>
          <li>LOGO</li>
          <li>search</li>
          <li>LOG IN</li>
        </ul>
      </header>
    </>
  );
};

export default MovieHeader;
