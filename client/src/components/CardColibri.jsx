import React from "react";
import style from "./Estilos/CardColibri.module.css";
import { Link } from "react-router-dom";
export default function CardColibri(props) {
  return (
    <Link className={style.link} to={`/detailColibri/${props.id}`}>
      <div className={style.card}>
        <img src={props.image} alt="colibri" className={style.image} />
        <h2 className={style.name}>{props.name}</h2>
      </div>
    </Link>
  );
}
