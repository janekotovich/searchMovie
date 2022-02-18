import styles from "./LoginForm.module.css";
import { authActions } from "../store/auth";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

const LoginForm = () => {
  const emailRegexx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    dispatch(authActions.login());
    navigate("../profile");
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            ref={nameInputRef}
            onChange={nameInputChangeHandler}
            value={enteredName}
          />
          {!enteredNameIsValid && (
            <p className={styles.errorText}>Name must not be empty</p>
          )}
        </div>
        {/* <div>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name"></input>
        </div> */}
        <div>
          <label htmlFor="name">E-Mail Address</label>
          <input type="text" id="name" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};
export default LoginForm;
