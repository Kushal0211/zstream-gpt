import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoContainer = ({ movieId }) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    useTrailerVideo(movieId);

    return (
        <div className="w-screen">
            <iframe
                className="w-screen aspect-video h-screen"
                width="560"
                height="315"
                src={
                    "https://www.youtube.com/embed/" +
                    trailerVideo?.key +
                    "?autoplay=1&mute=1&rel=0&loop=1&playlist=" +
                    trailerVideo?.key
                }
                title="YouTube video player"
                allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
        </div>
    );
};

export default VideoContainer;
