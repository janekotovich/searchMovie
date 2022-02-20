import styles from "./LoginForm.module.css";
import { authActions } from "../store/auth";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  const emailRegexx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
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
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="name"
              onChange={nameInputChangeHandler}
              onBlur={nameInputBlurHandler}
              value={enteredName}
              placeholder="Your first Name"
            />
            {nameInputIsInvalid && (
              <p className={styles.errorText}>Name must not be empty</p>
            )}
          </div>
          {/* <div>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name"></input>
          </div> */}
          <div
            className={
              !nameInputIsInvalid
                ? styles.formControl
                : `${styles.formControl} ${styles.invalid} `
            }
          >
            <label htmlFor="email">E-Mail Address</label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              // ref={nameInputRef}
              // onChange={nameInputChangeHandler}
              // value={enteredName}
            />
            {nameInputIsInvalid && (
              <p className={styles.errorText}>Name must not be empty</p>
            )}
          </div>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};
export default LoginForm;
