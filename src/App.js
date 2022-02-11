import { useState, useEffect } from "react";
import axios from "axios";

import MovieList from "./components/MovieList";

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
      <h1>Test for the movie website</h1>
      <div className="row">
        <MovieList movies={movieList} />
      </div>
    </>
  );
};
export default App;
