import styles from "./MovieList.module.css";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((m, i) => (
        <div className={styles.movie__list}>
          <h2>{m.title}</h2>
          <p>{m.description}</p>
          <img src={m.image} alt="Movie poster" />
        </div>
      ))}
    </>
  );
};
export default MovieList;
