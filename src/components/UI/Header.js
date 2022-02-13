import styles from "./Header.module.css";
import Search from "../Movies/Search";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { authActions } from "../store/auth";
import { useSelector, useDispatch } from "react-redux";

const Header = (props) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const searchReqHandler = (e) => {
    e.preventDefault();
    props.onSearchReq(e.target[0].value);
  };

  const loginHandler = () => {
    dispatch(authActions.login());
  };
  const logoutHandler = () => {
    dispatch(authActions.logout());
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
          <li>
            {isAuth ? (
              <button onClick={logoutHandler}>Log out</button>
            ) : (
              <button onClick={loginHandler}>Log in</button>
            )}
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
