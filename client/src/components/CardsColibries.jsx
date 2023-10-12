import React from "react";
import style from "./Estilos/CardsColibries.module.css";
import CardColibri from "./CardColibri";
export default function CardsColibries({ colibries }) {
  return (
    <div className={style.cardsColibries}>
      {colibries.map((colibri) => {
        return (
          <CardColibri
            key={colibri.id}
            id={colibri.id}
            image={colibri.image}
            name={colibri.name}
          />
        );
      })}
    </div>
  );
}
