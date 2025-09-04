import Header from "./Header";
import useGetMoviesNowPlaying from "../hooks/useGetMoviesNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import Gptsearch from "./Gptsearch";
import { useSelector } from "react-redux";


const Browse = () => {
    const gptStoreValue = useSelector(store => store.gpt.currentState);
    useGetMoviesNowPlaying();
    usePopularMovies();
    useTopRatedMovies();
    console.log(gptStoreValue);
    return (
        <div>
            <Header />
            {
               
                gptStoreValue ? <Gptsearch /> :
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                    </>
            }


        </div>
    );
}

export default Browse;