import { useState, useEffect } from "react";
import { getSingleMovieInfo } from "../api/movieFinder/MovieFinder";
import { useParams } from "react-router-dom";
import styles from "./MoviePage.module.css";
const MoviePage = () => {
  const [singleMovie, setSingleMovie] = useState("");
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchSingleMovie() {
      const singleMovieInfo = await getSingleMovieInfo(movieId);

      setSingleMovie(singleMovieInfo);
    }
    fetchSingleMovie();
  }, []);

  return (
    <>
      <div className={styles.singleMoviePage}>
        <div>
          <h1>{singleMovie.title}</h1>
          {/* <h2>imDb Rating - {singleMovie.imDbRating}</h2> */}
          <h4>{singleMovie.genres}</h4>
        </div>

        <img
          src={singleMovie.image}
          className={styles.singleMoviePageImg}
        ></img>

        <div className={styles.singleMovieDescription}>
          <h4>Stars: {singleMovie.stars}</h4>
          <h5>Release year: {singleMovie.year}</h5>
          <p>{singleMovie.plot}</p>
        </div>
      </div>
    </>
  );
};
export default MoviePage;
