import styles from "./TopMovies.module.css";
import { Link } from "react-router-dom";
const TopMovies = (props) => {
  let topTen = props.movies.slice(0, 7);
  return (
    <>
      <ul className={styles.topmovieList}>
        {topTen.map((m) => (
          <li key={m.id}>
            <img src={m.image} alt="Movie poster" />
            <Link to={`./${m.id}`}>More info</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default TopMovies;
