import React, { useState, ChangeEvent } from "react";

const Watchlist = () => {
  const [query, setQuery] = useState<string>("");

  const onChangeSearchBar = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setQuery(event.target.value);

    fetch(
      `https://api.themoviedb.org/3/movie?api_key=${process.env.API_KEY}&language=fr-FR&page=1&inclyde_adult=false&query=${e.target.value}`
    );
  };
  return (
    <div className="container">
      <div>
        <input
          type="text"
          placeholder="Chercher votre film ici"
          value={query}
          onChange={onChangeSearchBar}
        />
      </div>
    </div>
  );
};

export default Watchlist;
