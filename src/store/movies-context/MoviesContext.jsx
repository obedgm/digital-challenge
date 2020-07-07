import React, { useState, createContext, useEffect, useContext } from "react";
import { FiltersContext } from "../filters-context/FilterContext";
import axios from "axios";
require("dotenv").config();

const MoviesContext = createContext([]);
const baseUrl = "https://api.themoviedb.org";

const MoviesProvider = ({ children }) => {
  const initialMovies = [];
  const [movies, setMovies] = useState(initialMovies);
  const { date, search } = useContext(FiltersContext);

  useEffect(() => {
    axios
      .get(`${baseUrl}/3/search/movie`, {
        params: {
          query: search ? search : "a",
          primary_release_year: date,
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then(({ data }) => setMovies(data.results))
      .catch((error) => console.log(error));
  }, [date, search]);

  return (
    <MoviesContext.Provider value={movies}>{children}</MoviesContext.Provider>
  );
};

export { MoviesContext, MoviesProvider };
