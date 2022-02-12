import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Search.module.css";
const Search = (props) => {
  const navigate = useNavigate();
  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();
    const searchQuery = new URLSearchParams({
      query: searchInputRef.current.value,
    }).toString();
    navigate("/search/?" + searchQuery);
    e.target.reset();
  };

  return (
    <>
      <form className={styles.search} onSubmit={onSearchHandler}>
        <input
          type="text"
          ref={searchInputRef}
          placeholder="Type to search the movie"
        ></input>
        <button type="submit">Search me</button>
      </form>
    </>
  );
};
export default Search;
