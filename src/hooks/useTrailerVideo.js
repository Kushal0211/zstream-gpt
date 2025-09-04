import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useTrailerVideo = (movieId) => {
    
    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/755898/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        console.log(json);

        const filterVideos = json?.results.filter(video => video.type === 'Trailer');
        const trailer = filterVideos.length ? filterVideos[0] : json?.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieVideo();
    }, []);
}

export default useTrailerVideo;
