import { Link } from "react-router-dom";
import styles from "./MovieList.module.css";

const MovieList = (props) => {
  console.log(props.movies);
  return (
    <>
      <ul className={styles.movie__list}>
        {(props.movies || props.movies > 0) &&
          props.movies.map((m, i) => (
            <li key={m.id}>
              <h2>{m.title}</h2>
              <p>{m.description}</p>
              <Link to={`../${m.id}`}>
                <img
                  src={m.image}
                  alt="Movie poster"
                  className={styles.moviePoster}
                />
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default MovieList;
