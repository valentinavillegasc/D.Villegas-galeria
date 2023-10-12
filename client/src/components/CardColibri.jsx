import React from "react";
import style from "./Estilos/CardColibri.module.css";
export default function CardColibri(props) {
  return (
    <div className={style.card}>
      <img src={props.image} alt="colibri" className={style.image} />
      <h2 className={style.name}>{props.name}</h2>
    </div>
  );
}
