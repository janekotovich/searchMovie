import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

import MoviePage from "./Pages/MoviePage";
import MovieList from "./Movies/MovieList";
import SearchPage from "./Pages/SearchPage";

const WebsiteRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/:movieId" element={<MoviePage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
export default WebsiteRoutes;
