import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import { UserProvider } from "./contexts/UserContext.js";
import { MoviesProvider } from "./contexts/MoviesContext.js";

function App() {
  return (
    <div className="container">
      <UserProvider>
        <MoviesProvider>
          <Navbar />
          <MovieList />
        </MoviesProvider>
      </UserProvider>
    </div>
  );
}

export default App;
