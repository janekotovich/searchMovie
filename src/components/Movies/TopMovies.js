import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { favActions } from "../store/fav";
import { useNavigate } from "react-router-dom";

import styles from "./TopMovies.module.css";
import AddToFav from "../UI/AddToFav";
import RemoveFromFav from "../UI/RemoveFromFav";

const TopMovies = (props) => {
  let topTen = props.movies.slice(0, 10);
  const dispatch = useDispatch();
  const liked = useSelector((state) => state.favs.favourites);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  return (
    <>
      <ul className={styles.topmovieList}>
        {topTen.map((m) => (
          <li key={m.id}>
            <div className={styles.topMovieImageContainer}>
              <img
                src={m.image}
                alt="Movie poster"
                className={styles.topMovieImg}
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
            <Link to={`./${m.id}`} className={styles.link}>
              <div className={styles.topMovieInfo}>
                <h4>{m.title}</h4>
                <h5>{m.year}</h5>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default TopMovies;
