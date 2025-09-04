import { useRef, useState } from "react";
import { Search } from "lucide-react";
import { apiKey} from "../utils/constants";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const searchText = useRef(null);
  let prompt = "";

const handleSearchBarText = async () => {
  try {
    console.log(searchText.current.value);

    const prompt =
      "User wants movie recommendations based on: " + searchText.current.value +
      " Give exactly 6 Indian movies that match the context. " +
      "Follow this format only: Movie1, Movie2, Movie3, Movie4, Movie5, Movie6. " +
      "Do not add any explanation, numbering, or extra text.";

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}` ,
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
    const reccMovies = data.choices?.[0]?.message?.content.split(",");

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
