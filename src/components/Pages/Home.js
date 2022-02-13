import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { errorActions } from "../store/error";

import TopMovies from "../Movies/TopMovies";

import { getTopMovies } from "../api/movieFinder/MovieFinder";
import styles from "./Home.module.css";
const Home = () => {
  const [topMovieList, setTopMovieList] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchTopMovieList() {
      const apiReq = await getTopMovies();
      const topMovieData = apiReq.data.items;
      const error = apiReq.data.errorMessage;

      if (topMovieData.length === 0 && error) {
        dispatch(errorActions.setError(error));
        navigate("/error");
      } else {
        setTopMovieList(topMovieData);
      }
    }
    fetchTopMovieList();
  }, []);

  return (
    <>
      <div className={styles.home}>
        <h1>Test for the movie website</h1>
        <TopMovies movies={topMovieList} />
      </div>
    </>
  );
};
export default Home;
