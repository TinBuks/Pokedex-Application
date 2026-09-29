import React from "react";
import "./PokemonCard.css";
import { Link } from "react-router-dom";

const SPRITE_BASE_URL =
  "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon";

const PokemonCard = ({ pokemon }) => {
  return (
  <Link to={`/pokemon?name=${pokemon.name}`}>
    <div className="pokemon-card">
      <h2>{pokemon.name}</h2>
      <img src={`${SPRITE_BASE_URL}/${pokemon.id}.png`} alt={pokemon.name}/>
    </div>
  </Link>
);
};

export default PokemonCard;
