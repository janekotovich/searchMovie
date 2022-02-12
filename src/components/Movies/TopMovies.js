import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./TopMovies.module.css";
import { Link } from "react-router-dom";
const TopMovies = () => {
  //   const [topMovies, setTopMovies] = useState([]);
  const topMovies = [
    {
      id: "tt1375666",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6800_AL_.jpg",
      title: "Inception",
      description: "(2010)",
    },
    {
      id: "tt1790736",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_Ratio0.6800_AL_.jpg",
      title: "Inception: Motion Comics",
      description: "(2010 Video)",
    },
    {
      id: "tt5295990",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_Ratio0.6800_AL_.jpg",
      title: "Inception: Jump Right Into the Action",
      description: "(2010 Video)",
    },
    {
      id: "tt1686778",
      resultType: "Title",
      image: "https://imdb-api.com/images/original/nopicture.jpg",
      title: "Inception: 4Movie Premiere Special",
      description: "(2010 TV Movie)",
    },
    {
      id: "tt12960252",
      resultType: "Title",
      image: "https://imdb-api.com/images/original/nopicture.jpg",
      title: "Inception Premiere",
      description: "(2010)",
    },
  ];

  //   const fetchTopMovies = async () => {
  //     try {
  //       let res = await axios.get(
  //         `https://imdb-api.com/en/API/MostPopularMovies/k_149x61ug`
  //       );
  //       setTopMovies(res.data.results);
  //       //   console.log(res.data.items);
  //     } catch (err) {
  //       console.error(err.message);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchTopMovies();
  //   }, []);

  return (
    <>
      <ul className={styles.topmovieList}>
        {topMovies.map((m) => (
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
