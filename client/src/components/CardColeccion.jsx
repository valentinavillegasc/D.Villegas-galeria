import React from "react";
import style from "./Estilos/CardColeccion.module.css";
export default function CardColeccion(props) {
  return (
    <div className={style.CardColeccion}>
      <img src={props.image} alt="portada" className={style.image} />
      <div className={style.info}>
        <h2 className={style.name}>{props.name}</h2>
        <p className={style.description}>{props.description}</p>
      </div>
    </div>
  );
}
