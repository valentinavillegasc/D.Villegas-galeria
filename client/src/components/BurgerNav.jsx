import React from "react";
import style from "./Estilos/BurguerNav.module.css";
import { Link } from "react-router-dom";
export default function BurgerNav() {
  return (
    <div className={style.burguerNav}>
      <ul className={style.linkList}>
        <li>
          <Link to="/home" className={style.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/biografia" className={style.link}>
            Biografía
          </Link>
        </li>
        <li>
          <Link to="/contacto" className={style.link}>
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  );
}
