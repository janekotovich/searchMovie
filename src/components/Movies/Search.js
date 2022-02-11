const Search = (props) => {
  return (
    <>
      <input
        value={props.value}
        onChange={(e) => props.setSearchValue(e.target.value)}
        placeholder="Type to search the movie"
      ></input>
    </>
  );
};
export default Search;
