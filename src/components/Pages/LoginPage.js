

import styles from "./LoginPage.module.css";
import LoginForm from "../UI/LoginForm";
const LoginPage = () => {
  return (
    <>
      <div className={styles.mainLoginPage}>
        <h2>Please log in to use wesite</h2>
        <LoginForm />
      </div>
    </>
  );
};
export default LoginPage;
