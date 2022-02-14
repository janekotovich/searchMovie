import { useDispatch, useSelector } from "react-redux";
import { errorActions } from "../store/error";
import { useNavigate } from "react-router-dom";
import errorImg from "../../assets/error.png";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  const isError = useSelector((state) => state.error.isError);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cleanErrorHandler = () => {
    dispatch(errorActions.cleanError());
    console.log(isError);
    navigate("../");
  };

  return (
    <>
      <div className={styles.mainError}>
        <img src={errorImg}></img>
        <h1>{isError}</h1>
        <button onClick={cleanErrorHandler}>
          Click me for trying one more time!
        </button>
      </div>
    </>
  );
};
export default ErrorPage;
