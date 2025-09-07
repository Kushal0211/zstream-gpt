import { useRef, useState } from "react";
import { Search } from "lucide-react";
import { API_OPTIONS, apiKey } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMoviesToTheStore } from "../utils/gptSlice";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const searchText = useRef(null);
  let prompt = "";
  const dispatch = useDispatch();


  const searchMovieInTmdb = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1',
      API_OPTIONS);

    const json = await data.json();
    console.log(json);

    return json.results;
  }


  const handleSearchBarText = async () => {
    try {
      console.log(searchText.current.value);

      const prompt =
        "User wants movie recommendations based on: " + searchText.current.value +
        " Give exactly 6 Indian movies that match the context. " +
        "Follow this format only: Movie1, Movie2, Movie3, Movie4, Movie5, Movie6. " +
        "Do not add any explanation, numbering, or extra text." +
        "If a user asks movie of a particular actor then give movies of that actor only. For example if a user asks for Shahrukh Khan movies or Shahrukh Khan Old Movies then give only Shahrukh Khan Indian Bollywood movies. Similarly if a user asks for any Hollywood actor movies then give Hollywood movies of that actor only." + 
        "If a user asks for a particular genre movie then give movies of that genre only. For example if a user asks for comedy movies or horror movies or action movies then give only comedy or horror or action movies only. " +"Never ever give web series or TV shows or animated movies in the response. " +
        "If you can't find 6 movies then give as many as you can but not less than 4. " +
        "Make sure that the movies you suggest are available on ZStream app for streaming. " +
        "Make sure that the movies you suggest are Indian Bollywood or Hollywood movies only. " +
        "Understand what user is asking for and then suggest movies accordingly."
        ;

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [{ role: "user", content: prompt }],
        }),
      });

      const data = await response.json();
      console.log("Raw API Response:", data);

      // Extract the AI's message
      console.log("AI Suggestions:", data.choices?.[0]?.message?.content);
      const reccMovies = data.choices?.[0]?.message?.content.split(", ");

      const promiseArray = reccMovies.map((movie) => searchMovieInTmdb(movie));

      const movieData = await Promise.all(promiseArray);
      console.log("Movie Data:", movieData);

      dispatch(addGptMoviesToTheStore({movieNames : reccMovies, movieResults : movieData}));

    } catch (error) {
      console.error("Error fetching from Groq:", error);
    }
  };


  return (
    <div className="flex justify-center items-center w-full p-6 mt-[120px]">
      <div className="relative w-full max-w-xl">
        {/* Search Input */}
        <input
          ref={searchText}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search something Interesting..."
          className="w-full px-6 py-4 pr-14 rounded-2xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg transition-all duration-200"
        />

        {/* Search Icon */}
        <button
          onClick={handleSearchBarText}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600"
        >
          <Search size={28} />
        </button>
      </div>
    </div>
  );
}
