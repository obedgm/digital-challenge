import React, { useState, createContext } from "react";

const FiltersContext = createContext([]);

const FiltersProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const [genresFilter, setGenresFilter] = useState([]);
  
  return (
    <FiltersContext.Provider
      value={{
        genresFilter,
        setGenresFilter,
        date,
        setDate,
        search,
        setSearch,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export { FiltersContext, FiltersProvider };
