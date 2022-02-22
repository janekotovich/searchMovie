import { Link } from "react-router-dom";
import styles from "./MovieList.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";
import AddToFav from "../UI/AddToFav";
import RemoveFromFav from "../UI/RemoveFromFav";
import { useDispatch, useSelector } from "react-redux";
import { favActions } from "../store/fav";
import { useNavigate } from "react-router-dom";

const MovieList = (props) => {
  const liked = useSelector((state) => state.favs.favourites);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  return (
    <>
      {props.isDataLoading && (
        <div className={styles.spinner}>
          <LoadingSpinner />
        </div>
      )}
      <ul className={styles.movie__list}>
        {(props.movies || props.movies > 0) &&
          props.movies.map((m, i) => (
            <li key={m.id}>
              <Link to={`../${m.id}`} className={styles.link}>
                <div className={styles.topMovieInfo}>
                  <h4>{m.title}</h4>
                </div>
              </Link>
              <div className={styles.topMovieImageContainer}>
                <img
                  src={m.image}
                  alt="Movie poster"
                  className={styles.moviePoster}
                />
                <div
                  className={styles.topMovieImgOverlay}
                  onClick={() => {
                    if (isAuth) {
                      if (liked && liked.some((mov) => mov.id === m.id)) {
                        dispatch(favActions.removeFromFav(m));
                      } else {
                        dispatch(favActions.addToFav(m));
                      }
                    } else {
                      navigate("../login");
                    }
                  }}
                >
                  {liked.some((mov) => mov.id === m.id) ? (
                    <RemoveFromFav />
                  ) : (
                    <AddToFav />
                  )}
                </div>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};
export default MovieList;
