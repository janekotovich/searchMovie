import ReactDom from "react-dom";
import App from "./App";
import styles from "./index.module.css";
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
  <BrowserRouter>
    <App className={styles.main} />
  </BrowserRouter>,
  document.getElementById("root")
);
