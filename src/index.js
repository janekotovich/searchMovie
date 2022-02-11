import ReactDom from "react-dom";
import App from "./App";
import styles from "./index.module.css";

ReactDom.render(
  <App className={styles.main} />,
  document.getElementById("root")
);
