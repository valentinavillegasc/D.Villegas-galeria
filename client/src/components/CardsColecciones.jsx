import React from "react";
import style from "./Estilos/CardsColecciones.module.css";
import CardColeccion from "./CardColeccion";
import Loading from "./loading";
export default function CardsColecciones({ colecciones }) {
  return (
    <div className={style.CardsColecciones}>
      {colecciones && colecciones.length > 0 ? (
        colecciones.map((coleccion) => (
          <CardColeccion
            key={coleccion.id}
            id={coleccion.id}
            name={coleccion.name}
            image={coleccion.image}
            description={coleccion.description}
          />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}
