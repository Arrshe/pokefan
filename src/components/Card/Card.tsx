import "./Card.css";
import type { IntPokemon } from "../../core/schemas/IntPokemon.interface";

interface IntCardProps {
  pokemon: IntPokemon;
}

export default function Card(props: IntCardProps) {
  const createTypePills = () => {
    return props?.pokemon?.types?.map((type, index) => {
      return (
        <span key={index} className={`card__type ${type}`}>
          {type}
        </span>
      );
    });
  };

  return (
    <div className="card">
      <div className="card__content">
        <div className="card__header">
          <span className="card__id">ID: {props?.pokemon?.id}</span>
        </div>
        <img
          className="card__sprite"
          src={props?.pokemon?.sprite}
          alt={`${props?.pokemon?.name} image`}
        />
        <div className="card__info">
          <span className="card__name">NAME: {props?.pokemon?.name}</span>
          <span>TYPE: </span>
          <div className="card__types-container">{createTypePills()}</div>
        </div>
      </div>
    </div>
  );
}
