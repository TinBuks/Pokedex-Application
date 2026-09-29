import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import "./Search.css";

const Search = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [input, setInput] = useState (""); 

  const fetchPokemons = async () => {
   fetch ("https://pokedex.mimo.dev/api/pokemon")
   .then((response) => response.json())
   .then((data) => setPokemons(data));
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    if (input === "") {
      setFilteredPokemon([]);
    } else {
      const filtered = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().startsWith(input.toLowerCase()),
      );
      setFilteredPokemon(filtered);
    }
}, [input, pokemons]);

  return (
    <>
      <h1>Search for a Pokemon!</h1>
        <input placeholder="Search for a Pokemon!" onChange={(e) => setInput(e.target.value)} />
        <ul>
         {filteredPokemon.map((pokemon) => (
         <PokemonCard key={pokemon.name} pokemon={pokemon} />
         ))}
        </ul>
    </>
  );
}

export default Search;
