import React, { useState, ChangeEvent } from "react";
import MovieCard from "./MovieCard";

const Watchlist = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<any>([]);

  const onChangeSearchBar = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setQuery(event.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&include_adult=false&language=fr-FR&query==${event.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        if (!data.error) setResults(data.results);
      });
  };
  return (
    <div className="container">
      <div>
        <input
          className="mx-20 my-10 px-3 block w-full h-10 rounded border-solid border-gray-300 bg-[#363636] text-white transition ease-in-out focus:focus:outline-none"
          type="text"
          placeholder="Chercher votre film ici"
          value={query}
          onChange={onChangeSearchBar}
        />
      </div>
      <div className="container mx-20">
        <div className="grid grid-cols-6">
          {results.map((movie, index) => (
            <MovieCard
              key={index}
              title={movie.title}
              image={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
