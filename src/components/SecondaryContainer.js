import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

    const movies = useSelector((store) => store.movies);

    return (
    <div className="bg-black">
      <div className="-mt-44 relative z-20 pl-14">
      <MovieList title={"Now Playing"} movies = {movies?.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies = {movies?.popularMovies}/>
      <MovieList title={"Top Rated"} movies = {movies?.topRatedMovies}/>
      <MovieList title={"Now Playing"} movies = {movies?.nowPlayingMovies}/>
      <MovieList title={"Now Playing"} movies = {movies?.nowPlayingMovies}/>
      </div>
    </div>
  );
}   

export default SecondaryContainer;