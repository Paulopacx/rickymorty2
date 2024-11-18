import React, { useState, useEffect } from "react";
import CharacterList from "./components/CharacterList";
import Filters from "./components/Filters";
import "./app.css"

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState({ status: "", species: "", gender: "" });

  useEffect(() => {
    const fetchCharacters = async () => {
      const query = Object.entries(filters)
        .filter(([, value]) => value)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");

      const url = `https://rickandmortyapi.com/api/character?${query}`;
      const response = await fetch(url);
      const data = await response.json();
      setCharacters(data.results || []);
    };

    fetchCharacters();
  }, [filters]);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <Filters setFilters={setFilters} />
      <CharacterList characters={characters} />
    </div>
  );
};

export default App;
