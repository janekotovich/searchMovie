import { useDispatch, useSelector } from "react-redux";
import { errorActions } from "../store/error";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const isError = useSelector((state) => state.error.isError);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cleanErrorHandler = () => {
    dispatch(errorActions.cleanError());
    navigate("../");
  };
  console.log(isError);
  return (
    <>
      <div>
        <h1>BIG errror</h1>
        {isError && <h2>{isError}</h2>}
        <button onClick={cleanErrorHandler}>CLEAN ERROR</button>
      </div>
    </>
  );
};
export default ErrorPage;
