import { useLocation } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { errorActions } from "../store/error";
import { getSearchMovieList } from "../api/movieFinder/MovieFinder";
import MovieList from "../Movies/MovieList";
const SearchPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { search } = useLocation();
  const queryParams = useMemo(() => {
    return new URLSearchParams(search);
  }, [search]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    let mounted = true;
    async function fetchMovieList() {
      const query = queryParams.get("query");
      const data = await getSearchMovieList(query);
      const movieData = data.data.results;
      if (mounted) {
        setMovieList(movieData);
      }
      if (
        data.data.expression &&
        !data.data.errorMessage &&
        movieData.length === 0
      ) {
        dispatch(
          errorActions.setError(
            "Unfortunately there is no data for your search. Try again!"
          )
        );

        navigate("/error");
      } else if (data.data.expression && data.data.errorMessage) {
        dispatch(errorActions.setError(data.data.errorMessage));

        navigate("/error");
      }
    }
    fetchMovieList();
    return () => (mounted = false);
  }, [queryParams]);

  return (
    <>
      <MovieList movies={movieList} />
    </>
  );
};
export default SearchPage;
