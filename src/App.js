import styles from "./App.module.css";

import WebsiteRoutes from "./components/WebsiteRoutes";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";

const App = () => {
  return (
    <>
      <div className={styles.main}>
        <Header />
        <WebsiteRoutes />
        <Footer />
      </div>
    </>
  );
};
export default App;
