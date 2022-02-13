import ReactDom from "react-dom";
import App from "./App";
import styles from "./index.module.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/store/index";

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App className={styles.main} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
