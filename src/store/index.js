import React, { useContext } from "react";

import { MoviesProvider, MoviesContext } from "./movies-context/MoviesContext";
import {
  FiltersContext,
  FiltersProvider,
} from "./filters-context/FilterContext";
import { GenresContext, GenresProvider } from "./genres-context/GenresContext";

const useStore = () => {
  const {
    date,
    setDate,
    search,
    setSearch,
    genresFilter,
    setGenresFilter,
  } = useContext(FiltersContext);
  const movies = useContext(MoviesContext);
  const genres = useContext(GenresContext);
  return {
    movies,
    search,
    setSearch,
    date,
    setDate,
    genres,
    genresFilter,
    setGenresFilter,
  };
};

const AppProvider = ({ children }) => (
  <FiltersProvider>
    <GenresProvider>
      <MoviesProvider>{children}</MoviesProvider>
    </GenresProvider>
  </FiltersProvider>
);

export { AppProvider, useStore };
