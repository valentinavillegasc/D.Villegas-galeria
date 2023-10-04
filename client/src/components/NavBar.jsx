import React from "react";
import style from "./Estilos/NavBar.module.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className={style.navBar}>
      <h2 className={style.logo}>D. Villegas</h2>
      {/* <img src="url()" alt="logo" className={style} /> */}
      <div className={style.buttons}>
        <Link to="/home">
          <button className={style.button}>Home</button>
        </Link>
        <Link to="/biografia">
          <button className={style.button}>Biografía</button>
        </Link>
      </div>
    </div>
  );
}
