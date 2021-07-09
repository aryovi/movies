import React, { createContext, useState } from "react";
import initialUser from "../fake_data/initialUser";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  const login = () => {
    setUser(initialUser);
  };

  const logout = () => {
    setUser(null);
  };

  const userFavoriteMovies = (movieId) => {
    const containsMovieId = user.favoriteMovies.includes(movieId);

    const favoriteMoviesIds = containsMovieId
      ? user.favoriteMovies.filter((favMovieId) => favMovieId !== movieId)
      : [...user.favoriteMovies, movieId]; //if contains movieId then delete it else add it

    setUser({
      ...user,
      favoriteMovies: favoriteMoviesIds,
    });
  };

  const data = { user, login, logout, userFavoriteMovies };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
