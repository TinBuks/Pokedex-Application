import React, {useState, useEffect} from "react"; 
import { useLocation } from "react-router-dom";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null)
  const query = new URLSearchParams(useLocation().search);
  const pokemonName = query.get("name");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect (() => {
    const fetchPokemon = async () => {
      if (!pokemonName) return;
    try{
      const response = await fetch(
        `https://pokedex.mimo.dev/api/pokemon/${pokemonName}`
      );
      if (!response.ok) throw new Error("Pokemon not found");
      const data = await response.json();
      setPokemon(data);
    } catch (err) {
      setError(err.message);
    } finally {
    setLoading(false);
    }
  };
    fetchPokemon();
  }, [pokemonName]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {pokemon && (
  <div>
    <h1>{pokemon.name}</h1>
    <p>Height: {pokemon.height} feet</p>
    <p>Weight: {pokemon.weight} pounds</p>
    <p><span>Abilities: </span>{pokemon.abilities.map((ability) => ability.ability.name).join(", ")}</p>
    <p><span>Types: </span>{pokemon.types.map((type) => type.type.name).join(", ")}</p>
    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
  </div>
)}
</>
)};
export default Pokemon;
