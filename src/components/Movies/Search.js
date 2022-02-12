import styles from "./Search.module.css";
const Search = (props) => {
  return (
    <>
      <form className={styles.search} onSubmit={props.onSearchReq}>
        <input
          //   value={props.value}
          //   onChange={(e) => props.onSearchReq(e.target.value)}
          placeholder="Type to search the movie"
        ></input>
        <button type="submit">Search me</button>
      </form>
    </>
  );
};
export default Search;
