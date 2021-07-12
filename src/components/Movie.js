import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Movie = ({ movie }) => {
  const { user, userFavoriteMovies } = useContext(UserContext);

  return (
    <div className="card mb-4">
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className="card-img-top"
        style={{
          height: "260px",
          objectFit: "cover",
        }}
      />
      <div className="card-body">
        <h4>{movie.title}</h4>
        {user?.id && (
          <button
            className={`btn ${
              user?.favoriteMovies?.includes(movie.id)
                ? "btn-success"
                : "btn-outline-primary"
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
