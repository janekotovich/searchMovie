import styles from "./Header.module.css";
import Search from "../Movies/Search";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  const searchReqHandler = (e) => {
    e.preventDefault();
    props.onSearchReq(e.target[0].value);
  };
  return (
    <>
      <header>
        <ul className={styles.header}>
          <li>
            <Link to="/">
              <img src={logo} alt="Movie wesite logo" className={styles.logo} />
            </Link>
          </li>
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
