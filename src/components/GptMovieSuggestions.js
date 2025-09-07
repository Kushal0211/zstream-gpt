import { useSelector } from "react-redux"
import MovieList from "./MovieList";
import Shimmer from "./Shimmer";

const GptMovieSuggestions = () => {

    const {movieNames, movieResults} = useSelector((store) => store.gpt) ; 

    if (!movieNames || !movieResults) {
        // either return nothing, or show a loader/message
        // return <div className="text-white">No movie suggestions available</div>;
        return <Shimmer/>
    }

    if( movieNames.length === 0 || movieResults.length === 0) {
        return <div className="text-white text-center mt-10">No movie suggestions available. Please try searching for something else.</div>;
    }

    return (

        <div className="bg-black full-h-screen">
         {
            movieNames.map((movieName,index) => (
            <div key={movieName}>
                <MovieList 
                title={movieName}
                movies={movieResults[index]}
                />
                </div>
                ))
         }
        </div>
    )
}

export default GptMovieSuggestions;