import React from "react";
import "./bottom-menu.scss";
import { useStore } from "../../../store";

const BottomMenu = () => {
  const { genres, genresFilter, setGenresFilter } = useStore();

  const handleGenresFilter = (id) => {
    if (genresFilter.includes(id)) {
      var aux = [...genresFilter];
      const index = genresFilter.indexOf(id);
      aux.splice(index, 1);
      setGenresFilter(aux);
    } else {
      setGenresFilter([...genresFilter, id]);
    }
  };

  return (
    <div className="bottomMenu">
      <h1>Categories</h1>

      <div className="bottomMenu-buttons">
        {Object.entries(genres).map(([id, name]) => (
          <button
            className="bottomMenu-button"
            key={id}
            onClick={(e) => handleGenresFilter(parseInt(id))}
            style={{
              backgroundColor: genresFilter.includes(parseInt(id)) && "grey",
            }}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomMenu;
