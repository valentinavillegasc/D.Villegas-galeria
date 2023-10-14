import React from "react";
import style from "./Estilos/CardsColibries.module.css";
import CardColibri from "./CardColibri";
import Loading from "./loading";
export default function CardsColibries({ colibries }) {
  return (
    <div className={style.cardsColibries}>
      {colibries && colibries.length > 0 ? (
        colibries.map((colibri) => (
          <CardColibri
            key={colibri.id}
            id={colibri.id}
            image={colibri.image}
            name={colibri.name}
          />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}
