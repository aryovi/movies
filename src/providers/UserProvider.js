import { useState } from "react";
import UserContext from "../contexts/UserContext";
import initialUser from "../fake_data/initialUser";

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

  return (
    <UserContext.Provider value={{ user, login, logout, userFavoriteMovies }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
