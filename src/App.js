import { useState, useEffect } from "react";
import WebsiteRoutes from "./components/WebsiteRoutes";

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
      <Header onSearchReq={searchReqHandler} />
      <WebsiteRoutes />
      <Footer />
    </>
  );
};
export default App;
