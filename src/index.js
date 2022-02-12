import ReactDom from "react-dom";
import App from "./App";
import styles from "./index.module.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";

ReactDom.render(
  <BrowserRouter>
    <App className={styles.main} />
  </BrowserRouter>,
  document.getElementById("root")
);
