import styles from "./Header.module.css";
import Search from "../Movies/Search";

const Header = (props) => {
  const searchReqHandler = (e) => {
    e.preventDefault();
    props.onSearchReq(e.target[0].value);
  };
  return (
    <>
      <header>
        <ul className={styles.header}>
          <li>LOGO</li>
          <li>
            <Search onSearchReq={searchReqHandler} />
          </li>
          <li>LOG IN</li>
        </ul>
      </header>
    </>
  );
};

export default Header;
