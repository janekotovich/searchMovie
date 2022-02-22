import styles from "./Header.module.css";
import Search from "../Movies/Search";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { authActions } from "../store/auth";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("./login");
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());
    navigate("./");
  };
  const profileHandler = () => {
    if (isAuth) {
      navigate("./profile");
    }
  };
  return (
    <>
      <header>
        <ul className={styles.header}>
          <li>
            <Link to="/" className={styles.hover}>
              <img src={logo} alt="Movie wesite logo" className={styles.logo} />
            </Link>
          </li>
          <li>
            <Search />
          </li>
          {isAuth && (
            <li>
              <button onClick={profileHandler}>Profile</button>
            </li>
          )}
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
