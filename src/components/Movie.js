import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Movie = ({ movie }) => {
  const { user, userFavoriteMovies } = useContext(UserContext);

  const style = {
    height: "260px",
    objectFit: "cover",
  };
  const isFavoriteMovie = user?.favoriteMovies?.includes(movie.id);

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
        {user?.id && (
          <button
            className={`btn ${
              isFavoriteMovie ? "btn-success" : "btn-outline-primary"
            }`}
            onClick={() => userFavoriteMovies(movie.id)}
          >
            Favorite
          </button>
        )}
      </div>
    </div>
  );
};

export default Movie;
