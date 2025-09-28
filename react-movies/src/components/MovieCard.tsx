import type { FC } from "react";
import type { Movie } from "../entities";

const MovieCard: FC<Movie> = ({ title, year, poster, rating }) => {
  return (
    <div className="col s12 m6 l3">
      <div className="card">
        <div className="card-image">
          {poster !== "N/A" ? (
            <img src={poster} alt={title} />
          ) : (
            <img src={"https://placehold.co/200x400"} alt={title} />
          )}
        </div>
        <div className="card-content">
          <span className="card-title">{title}</span>
          <p>{year}</p>
          <p>{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
