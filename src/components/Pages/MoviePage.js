import { useState, useEffect, useMemo } from "react";
import { getSingleMovieInfo } from "../api/movieFinder/MovieFinder";
import { useParams } from "react-router-dom";

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
      <div>
        <h1>{singleMovie.title}</h1>
        <h2>imDb Rating - {singleMovie.imDbRating}</h2>
        <h3>( {singleMovie.imDbRatingVotes} Votes)</h3>
        <h4>{singleMovie.genres}</h4>
        <img src={singleMovie.image}></img>
        <h4>Stars: {singleMovie.stars}</h4>
        <h4>Directors: {singleMovie.directors}</h4>
        <h5>Release year: {singleMovie.year}</h5>
        <p>{singleMovie.plot}</p>
      </div>
    </>
  );
};
export default MoviePage;
