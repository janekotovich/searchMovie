import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

import MoviePage from "./Pages/MoviePage";
import SearchPage from "./Pages/SearchPage";
import ErrorPage from "./Pages/ErrorPage";
import ProfilePage from "./Pages/ProfilePage";
import LoginPage from "./Pages/LoginPage";

const WebsiteRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/error" exact={true} element={<ErrorPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/:movieId" element={<MoviePage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
export default WebsiteRoutes;
