import axios from "axios";
import { useState, useEffect } from "react";

import MovieList from "./components/Movies/MovieList";
import MovieHeader from "./components/UI/MovieHeader";

const App = () => {
  const [movieList, setMovieList] = useState([]);

  const fetchMovieList = () => {
    return axios
      .get("https://imdb-api.com/en/API/SearchMovie/k_149x61ug/inception 2010")
      .then((res) => console.log(res.data.results));
  };

  useEffect(() => {
    fetchMovieList();
  }, []);

  return (
    <>
      <MovieHeader />
      <h1>Test for the movie website</h1>
      <div className="row">
        <MovieList movies={movieList} />
      </div>
    </>
  );
};
export default App;
