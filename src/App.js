import axios from "axios";
import { useState, useEffect } from "react";

import MovieList from "./components/Movies/MovieList";
import Header from "./components/UI/Header";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const searchReqHandler = (searchReq) => {
    console.log(searchReq);
    setSearchValue(searchReq);
  };

  const fetchMovieList = async () => {
    try {
      let res = await axios.get(
        `https://imdb-api.com/en/API/SearchMovie/k_149x61ug/${searchValue}`
      );
      setMovieList(res.data.results);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchMovieList(searchValue);
  }, [searchValue]);

  return (
    <>
      <Header onSearchReq={searchReqHandler} />
      <h1>Test for the movie website</h1>
      <div className="row">
        <MovieList movies={movieList} />
      </div>
    </>
  );
};
export default App;
