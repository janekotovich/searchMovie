import axios from "axios";
export const getSearchMovieList = async (searchValue) => {
  try {
    let res = await axios.get(
      `https://imdb-api.com/en/API/SearchMovie/k_prjrkjmb/${searchValue}`
    );
    return res.data.results;
  } catch (err) {
    console.error(err.message);
  }
};

export const getTopMovies = async () => {
  try {
    let res = await axios.get(
      `https://imdb-api.com/en/API/MostPopularMovies/k_prjrkjmb`
    );
    return res.data.items;
  } catch (err) {
    console.error(err.message);
  }
};

export const getSingleMovieInfo = async (id) => {
  try {
    let res = await axios.get(
      `https://imdb-api.com/en/API/Title/k_prjrkjmb/${id}`
    );
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};
