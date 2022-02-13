import styles from "./TopMovies.module.css";
import { Link } from "react-router-dom";
const TopMovies = (props) => {
  let topTen = props.movies.slice(0, 10);
  return (
    <>
      <ul className={styles.topmovieList}>
        {topTen.map((m) => (
          <li key={m.id}>
            <Link to={`./${m.id}`}>
              <img
                src={m.image}
                alt="Movie poster"
                className={styles.topMovieImg}
              />
            </Link>
            <Link to={`./${m.id}`} className={styles.link}>
              <div>
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
