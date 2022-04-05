import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <span className="rate">
        <ion-icon name="star"></ion-icon>
        {movie.rate}
      </span>
      <img src={movie.posterUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieCard;
