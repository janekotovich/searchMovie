import styles from "./LoginForm.module.css";
import { authActions } from "../store/auth";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
    navigate("../profile");
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name"></input>
        </div>
        <div>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name"></input>
        </div>
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
