import styles from "./LoginForm.module.css";
import { authActions } from "../store/auth";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useInput from "../hooks/use-input";

const LoginForm = () => {
  const emailRegexx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const {} = useInput();

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredSecondName, setEnteredSecondName] = useState("");
  const [enteredSecondNameTouched, setEnteredSecondNameTouched] =
    useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredSecondNameIsVali = enteredSecondName.trim() !== "";
  const secondNameInputIsInvalid =
    !enteredSecondNameIsVali && enteredSecondNameTouched;

  const enteredEmailIsValid =
    emailRegexx.test(enteredEmail) && enteredEmail.trim() !== "";
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let formIsValid = false;

  if (enteredNameIsValid && enteredSecondNameIsVali && enteredEmailIsValid)
    formIsValid = true;

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };

  const secondNameInputChangeHandler = (e) => {
    setEnteredSecondName(e.target.value);
  };
  const secondNameInputBlurHandler = (e) => {
    setEnteredSecondNameTouched(true);
  };

  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const emailInputBlurHandler = (e) => {
    setEnteredEmailTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);
    setEnteredSecondNameTouched(true);
    setEnteredEmailTouched(true);

    if (
      !enteredNameIsValid ||
      !enteredEmailIsValid ||
      !enteredSecondNameIsVali
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
              !nameInputIsInvalid
                ? styles.formControl
                : `${styles.formControl} ${styles.invalid} `
            }
          >
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              onChange={nameInputChangeHandler}
              onBlur={nameInputBlurHandler}
              placeholder="Your First Name"
            />
            {nameInputIsInvalid && (
              <p className={styles.errorText}>First Name must not be empty</p>
            )}
          </div>
          <div
            className={
              !secondNameInputIsInvalid
                ? styles.formControl
                : `${styles.formControl} ${styles.invalid} `
            }
          >
            <label htmlFor="secondName">Second Name</label>
            <input
              type="text"
              id="secondName"
              onChange={secondNameInputChangeHandler}
              onBlur={secondNameInputBlurHandler}
              placeholder="Your Second Name"
            />
            {secondNameInputIsInvalid && (
              <p className={styles.errorText}>Second Name must not be empty</p>
            )}
          </div>
          <div
            className={
              !emailInputIsInvalid
                ? styles.formControl
                : `${styles.formControl} ${styles.invalid} `
            }
          >
            <label htmlFor="email">E-Mail Address</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              onChange={emailInputChangeHandler}
              onBlur={emailInputBlurHandler}
            />
            {emailInputIsInvalid && (
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
