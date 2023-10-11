import React from "react";
import style from "./Estilos/CardsColecciones.module.css";
import CardColeccion from "./CardColeccion";
export default function CardsColecciones({ colecciones }) {
  return (
    <div className={style.CardsColecciones}>
      {colecciones.map((coleccion) => {
        return (
          <CardColeccion
            key={coleccion.id}
            id={coleccion.id}
            name={coleccion.name}
            image={coleccion.image}
            description={coleccion.description}
          />
        );
      })}
    </div>
  );
}
