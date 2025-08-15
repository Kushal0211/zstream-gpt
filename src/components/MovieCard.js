import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
return (
    <div className="w-36 mx-2 border border-white border-opacity-40 rounded-lg overflow-hidden">
        <img 
        src = {IMG_CDN_URL + posterPath}
        alt="Movie Poster" />
    </div>
);
}
export default MovieCard;