import Header from "./Header";
import useGetMoviesNowPlaying from "../hooks/useGetMoviesNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";


const Browse = () => { 
    useGetMoviesNowPlaying();
    usePopularMovies();
    useTopRatedMovies();
    
    return (
        <div>
            <Header />
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    );
}

export default Browse;