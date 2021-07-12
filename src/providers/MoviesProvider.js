import MoviesContext from "../contexts/MoviesContext";
import initialMovies from "../fake_data/initialMovies";

const MoviesProvider = ({ children }) => {
  return (
    <MoviesContext.Provider value={{ movies: initialMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};
export default MoviesProvider;
