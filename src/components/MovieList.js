import MovieCard from "./MovieCard";

const MovieList = ({title,movies}) => {
    console.log(movies);
    return (
        <div className="p-3 pt-2  text-white ">
            <h1 className="py-4 text-3xl">{title}</h1>   
            
            <div className="flex overflow-x-scroll hide-scrollbar ">
            <div className="flex scrollbar-hide">
                {movies?.map(movie => <MovieCard 
                key={movie.id} posterPath={movie?.poster_path}/>)}
            </div>
            </div>    
        </div>
    );
}

export default MovieList;