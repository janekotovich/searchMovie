import { useState, useEffect } from "react";
import TopMovies from "../Movies/TopMovies";
import { getTopMovies } from "../api/movieFinder/MovieFinder";
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
      <div>
        <h1>Test for the movie website</h1>
        <TopMovies movies={topMovieList} />
      </div>
    </>
  );
};
export default Home;
