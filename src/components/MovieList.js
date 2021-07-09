import React from "react";
import initialMovies from "../FakeData/initialMovies";
import Movie from "./Movie";

const MovieList = () => {
  return (
    <div className="container">
      <div className="row">
        {initialMovies.map((movie, index) => (
          <div className="col-md-4" key={index}>
            <Movie movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
