import styles from "./LoginPage.module.css";
import LoginForm from "../UI/LoginForm";
const LoginPage = () => {
  return (
    <>
      <div className={styles.mainLoginPage}>
        <h1>Please log in to use wesite</h1>
        <LoginForm />
      </div>
    </>
  );
};
export default LoginPage;
