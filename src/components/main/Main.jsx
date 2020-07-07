import React from "react";
import Card from "../card/Card.jsx";
import { useStore } from "../../store";
import "./main.scss";

const Main = () => {
  const { genresFilter, movies } = useStore();

  const filteredMovies = movies.filter(({ genre_ids }) => {
    return (
      genresFilter.length === 0 ||
      genre_ids.some((element) => genresFilter.includes(element))
    );
  });

  return (
    <section>
      {filteredMovies.map(
        ({ id, title, overview, vote_average, release_date, poster_path }) => (
          <Card
            key={id}
            title={title}
            subTitle={vote_average}
            text={overview}
            bottomText={release_date}
            img={poster_path}
          />
        )
      )}
    </section>
  );
};

export default Main;
