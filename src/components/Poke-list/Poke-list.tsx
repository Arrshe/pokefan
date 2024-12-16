import './Poke-list.css';
import Card from "../Card/Card";
import type { IntPokemon } from "../../core/schemas/IntPokemon.interface";

interface IntPokeListProps {
  pokedex: IntPokemon[];
}

export default function PokeList(props: IntPokeListProps) {
  const createPokeList = () => {
    return props.pokedex.map((pokemon: IntPokemon) => {
      return <Card pokemon={pokemon} />;
    });
  };

  return <div className="pokelist">{createPokeList()}</div>;
}
