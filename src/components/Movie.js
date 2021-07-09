import React from "react";

const Movie = ({ movie }) => {
  console.log("Movie");

  const style = {
    height: "260px",
    objectFit: "cover",
  };
  const isFavorite = true;
  return (
    <div className="card mb-4">
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className="card-img-top"
        style={style}
      />
      <div className="card-body">
        <h4>{movie.title}</h4>
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
