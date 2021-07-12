import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import UserProvider from "./providers/UserProvider";
import MoviesProvider from "./providers/MoviesProvider";

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
