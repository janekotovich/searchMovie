import axios from "axios";
const API_KEY = "k_prjrkjmb";
export const getSearchMovieList = async (searchValue) => {
  try {
    let res = await axios.get(
      `https://imdb-api.com/en/API/SearchMovie/${API_KEY}/${searchValue}`
    );
    return res;
  } catch (err) {
    console.error(err.message);
  }
};

export const getTopMovies = async () => {
  try {
    let res = await axios.get(
      `https://imdb-api.com/en/API/MostPopularMovies/${API_KEY}`
    );
    return res;
  } catch (err) {
    console.error(err.message);
  }
};

export const getSingleMovieInfo = async (id) => {
  try {
    let res = await axios.get(
      `https://imdb-api.com/en/API/Title/${API_KEY}/${id}`
    );
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};
