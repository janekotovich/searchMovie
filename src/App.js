import { useState, useEffect } from "react";
import WebsiteRoutes from "./components/WebsiteRoutes";

import styles from "./App.module.css";

import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";

const App = () => {
  const [searchValue, setSearchValue] = useState("");

  const searchReqHandler = (searchReq) => {
    setSearchValue(searchReq);
  };

  const fetchMovieList = async () => {};

  useEffect(() => {
    fetchMovieList(searchValue);
  }, [searchValue]);

  return (
    <>
      <div className={styles.main}>
        <Header onSearchReq={searchReqHandler} />
        <WebsiteRoutes />
        <Footer />
      </div>
    </>
  );
};
export default App;
