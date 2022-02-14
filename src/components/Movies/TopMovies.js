import styles from "./TopMovies.module.css";
import { Link } from "react-router-dom";
import AddToFav from "../UI/AddToFav";
const TopMovies = (props) => {
  let topTen = props.movies.slice(0, 10);

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

              <div className={styles.topMovieImgOverlay}>
                <AddToFav />
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
