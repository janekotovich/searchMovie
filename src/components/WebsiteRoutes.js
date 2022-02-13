import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

import MoviePage from "./Pages/MoviePage";
import SearchPage from "./Pages/SearchPage";
import ErrorPage from "./Pages/ErrorPage";

const WebsiteRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/:movieId" element={<MoviePage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
export default WebsiteRoutes;
