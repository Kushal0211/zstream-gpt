import GptMovieSuggestions from "./GptMovieSuggestions";
import SearchBar from "./SearchBar";

const Gptsearch = () => {
return (
<div className="bg-black full-h-screen"> 
    <SearchBar />
    <GptMovieSuggestions/>
</div>
);
}

export default Gptsearch;