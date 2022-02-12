import axios from "axios";
import { useState, useEffect } from "react";
import { Routes } from "react-router-dom";

import MovieList from "./components/Movies/MovieList";
import TopMovies from "./components/Movies/TopMovies";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const searchReqHandler = (searchReq) => {
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
      <Routes />
      {/*
        <Route path="/" component={Home} />

        {movieList && movieList.length > 0 && <MovieList movies={movieList} />} */}
      <Footer />
    </>
  );
};
export default App;
