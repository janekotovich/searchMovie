import { useLocation } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import { getSearchMovieList } from "../api/movieFinder/MovieFinder";
import MovieList from "../Movies/MovieList";
const SearchPage = () => {
  const { search } = useLocation();
  const queryParams = useMemo(() => {
    return new URLSearchParams(search);
  }, [search]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    async function fetchMovieList() {
      const query = queryParams.get("query");
      const movieData = await getSearchMovieList(query);

      setMovieList(movieData);
      console.log(movieData);
    }
    fetchMovieList();
  }, [queryParams]);

  return (
    <>
      <MovieList movies={movieList} />
    </>
  );
};
export default SearchPage;
