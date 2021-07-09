import React from "react";

const Movie = ({ movie }) => {
  const style = {
    height: "260px",
    objectFit: "cover",
  };
  const isFavorite = true;
  return (
    <div className="card">
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className="card-img-top"
        style={style}
      />
      <div className="card-body">
        <h1>Movie</h1>
        <button
          className={`btn ${
            isFavorite ? "btn-success" : "btn-outline-primary"
          }`}
        >
          Favorite
        </button>
      </div>
    </div>
  );
};

export default Movie;
