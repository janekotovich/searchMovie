import styles from "./LoginForm.module.css";
import { authActions } from "../store/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/use-input";

const LoginForm = () => {
  const emailRegexx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const {
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((val) => val.trim() !== "");

  const {
    isValid: enteredSecondNameIsValid,
    hasError: secondNameInputHasError,
    valueChangeHandler: secondNameChangedHandler,
    inputBlurHandler: secondNameBlurHandler,
  } = useInput((val) => val.trim() !== "");

  const {
    // value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((val) => val.trim() !== "");

  // && emailRegexx.test(enteredEmail)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let formIsValid = false;

  if (enteredNameIsValid && enteredSecondNameIsValid && enteredEmailIsValid)
    formIsValid = true;

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (
      !enteredNameIsValid ||
      !enteredSecondNameIsValid ||
      !enteredEmailIsValid
    ) {
      return;
    }
    dispatch(authActions.login());
    navigate("../profile");
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div className={styles.loginForm}>
          <div
            className={
              !nameInputHasError
                ? styles.formControl
                : `${styles.formControl} ${styles.invalid} `
            }
          >
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              onChange={nameChangedHandler}
              onBlur={nameBlurHandler}
              placeholder="Your First Name"
            />
            {nameInputHasError && (
              <p className={styles.errorText}>First Name must not be empty</p>
            )}
          </div>
          <div
            className={
              !secondNameInputHasError
                ? styles.formControl
                : `${styles.formControl} ${styles.invalid} `
            }
          >
            <label htmlFor="secondName">Second Name</label>
            <input
              type="text"
              id="secondName"
              onChange={secondNameChangedHandler}
              onBlur={secondNameBlurHandler}
              placeholder="Your Second Name"
            />
            {secondNameInputHasError && (
              <p className={styles.errorText}>Second Name must not be empty</p>
            )}
          </div>
          <div
            className={
              !emailInputHasError
                ? styles.formControl
                : `${styles.formControl} ${styles.invalid} `
            }
          >
            <label htmlFor="email">E-Mail Address</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              onChange={emailChangedHandler}
              onBlur={emailBlurHandler}
            />
            {emailInputHasError && (
              <p className={styles.errorText}>Email must not be empty</p>
            )}
          </div>
        </div>
        <div>
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    </>
  );
};
export default LoginForm;
