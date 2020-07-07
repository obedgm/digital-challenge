import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

const GenresContext = createContext([]);
const baseUrl = "https://api.themoviedb.org";

const GenresProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/3/genre/movie/list`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then(({ data }) => {
        const genresObject = data.genres.reduce((acc, { id, name }) => {
          if (id && name) {
            acc[id] = name;
          }
          return acc;
        }, {});

        setGenres(genresObject);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <GenresContext.Provider value={genres}>{children}</GenresContext.Provider>
  );
};

export { GenresContext, GenresProvider };
