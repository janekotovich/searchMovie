import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

import MoviePage from "./Pages/MoviePage";
import MovieList from "./Movies/MovieList";

const WebsiteRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/:movieId" element={<MoviePage />} />
        <Route path="/search" element={<MovieList />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
export default WebsiteRoutes;
