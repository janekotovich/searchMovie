import { useState, useEffect, useMemo } from "react";
import { getSingleMovieInfo } from "../api/movieFinder/MovieFinder";
import { useParams } from "react-router-dom";

const MoviePage = () => {
  const [singleMovie, setSingleMovie] = useState("");
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchSingleMovie() {
      console.log(movieId);
      const singleMovieInfo = await getSingleMovieInfo(movieId);

      setSingleMovie(singleMovieInfo);
    }
    fetchSingleMovie();
  }, []);
  console.log(singleMovie);
  return (
    <>
      <h2>{singleMovie.title}</h2>
    </>
  );
};
export default MoviePage;
