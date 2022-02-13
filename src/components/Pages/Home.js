import { useState, useEffect } from "react";
import TopMovies from "../Movies/TopMovies";
import { getTopMovies } from "../api/movieFinder/MovieFinder";
import styles from "./Home.module.css";
const Home = () => {
  const [topMovieList, setTopMovieList] = useState([]);

  useEffect(() => {
    async function fetchTopMovieList() {
      const topMovieData = await getTopMovies();

      setTopMovieList(topMovieData);
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
